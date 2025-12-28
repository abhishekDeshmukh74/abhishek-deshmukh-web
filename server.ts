import 'zone.js/node';

import { APP_BASE_HREF } from '@angular/common';
import { AngularAppEngine } from '@angular/ssr';
import * as compression from 'compression';
import * as express from 'express';
import { existsSync } from 'fs';
import * as helmet from 'helmet';
import { join } from 'path';

import { StorageService } from '@shared/services';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/abhishek-deshmukh-frontend/browser');
  const angularAppEngine = new AngularAppEngine();

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // server.use(helmet());

  server.use(compression());

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Angular app engine
  server.use('*', (req, res, next) => {
    angularAppEngine
      .handle(req as any)
      .then((response) => {
        if (response) {
          res.status(response.status);
          response.headers.forEach((value: string, key: string) => {
            res.setHeader(key, value);
          });

          // Convert Web Streams API to Node.js Stream
          const reader = response.body?.getReader();
          if (reader) {
            const readChunk = () => {
              reader.read().then(({ done, value }: { done: boolean; value?: Uint8Array }) => {
                if (done) {
                  res.end();
                  return;
                }
                res.write(Buffer.from(value as Uint8Array));
                readChunk();
              }).catch((err: Error) => next(err));
            };
            readChunk();
          } else {
            res.end();
          }
        } else {
          res.status(404).send('Not found');
        }
      })
      .catch((err: Error) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
