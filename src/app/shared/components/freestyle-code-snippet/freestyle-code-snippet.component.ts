import { CONSTANTS } from '@constants';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-freestyle-code-snippet',
  templateUrl: './freestyle-code-snippet.component.html',
  styleUrls: ['./freestyle-code-snippet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FreestyleCodeSnippetComponent implements OnInit {
  @Input()
  code!: string;
  @Input()
  filePath!: string;
  readonly EXTENSION_FROM_FILENAME = CONSTANTS.REGEX.EXTENSION_FROM_FILENAME;

  fileIcon: string | undefined;
  config = [
    {
      extensions: ['js', 'jsx'],
      fileIconPath: 'javascript',
    },
    {
      extensions: ['ts', 'tsx'],
      fileIconPath: 'typescript',
    },
    {
      extensions: ['json'],
      fileIconPath: 'json',
    },
    {
      extensions: ['html', 'htm'],
      fileIconPath: 'html',
    },
    {
      extensions: ['css'],
      fileIconPath: 'css',
    },
    {
      extensions: ['dockerignore'],
      fileIconPath: 'docker',
    },
    {
      extensions: ['command'],
      fileIconPath: 'terminal',
    },
  ];

  constructor() {}

  ngOnInit() {
    const extension = this.filePath.match(this.EXTENSION_FROM_FILENAME);
    if (extension) {
      const found = this.config.find((e) => e.extensions.includes(extension[0]));
      if (found) {
        this.fileIcon = found.fileIconPath;
      }
    }
  }
}
