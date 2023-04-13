import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// <script async src="https://www.googletagmanager.com/gtag/js?id=UA-136828014-1"></script>
// <script async>
//   window.dataLayer = window.dataLayer || [];
//   function gtag() { dataLayer.push(arguments); }
//   gtag('js', new Date());
// </script>
// <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
// <script async>
//   (adsbygoogle = window.adsbygoogle || []).push({
//     google_ad_client: "ca-pub-1396362896371338",
//     enable_page_level_ads: true
//   });
// </script>
export class ScriptsService {

  scriptStore: any[] = [
    { name: 'gtag', src: 'https://www.googletagmanager.com/gtag/js?id=UA-136828014-1' },
    { name: 'ads', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' }
  ];
  private scripts: any = {};

  constructor() {
    this.scriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  load(...scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      // resolve if already loaded
      if (this.scripts[name].loaded) {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      } else {
        // load script
        const script: any = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        if (script.readyState) {  // IE
          script.onreadystatechange = () => {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
              script.onreadystatechange = null;
              this.scripts[name].loaded = true;
              resolve({ script: name, loaded: true, status: 'Loaded' });
            }
          };
        } else {  // Others
          script.onload = () => {
            this.scripts[name].loaded = true;
            resolve({ script: name, loaded: true, status: 'Loaded' });
          };
        }
        script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }
}
