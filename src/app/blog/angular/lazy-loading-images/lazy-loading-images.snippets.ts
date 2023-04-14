export const importDeferLoadModuleFileSnippet = `  ....
 import { DeferLoadModule } from '@trademe/ng-defer-load';

 @NgModule({
   declarations: [
     ....
   ],
   imports: [
     ....
     DeferLoadModule,
   ],
 })
 export class AppModule { };`;

export const appWithLazyLoadingImagesSnippet = {
  tsCode: `export class AppComponent {
    public images = [
    {
      bio: "Sheldon Lee Cooper is a fictional character in the CBS television series The Big Bang Theory and its spinoff series Young Sheldon, portrayed by actors Jim Parsons in The Big Bang Theory and Iain Armitage in
      Young Sheldon (with Parsons as the latter series' narrator). For his portrayal,Parsons has won four
      Primetime Emmy Awards, a Golden Globe Award, a TCA Award, and two Critic's Choice Television Awards.",
      url: 'assets/sheldon.png',
      name: 'Sheldon Cooper',
      shown: false
    },
    ....
    ];

    get totalImagesShown(): number {
      return (this.images.filter(image => image.shown) || []).length;
    }
}`,
  htmlCode: `<div class="static-header">
      <h2>Scroll to load more images of Big bang theory characters</h2>
      <p>
          Total images loaded:
          <strong>{{ totalImagesShown }}</strong>
      </p>
</div>
<div class="images">
      <div class="image-container" *ngFor="let image of images" (deferLoad)="image.shown = true">
          <h3>{{image.name}}</h3>
          <p>{{image.bio}}</p>
          <ng-container>
              <img name='beautiful-image' src={{image.url}}>
          </ng-container>
      </div>
</div>`,
  cssCode: `.static-header {
    position: fixed;
    z-index: 1000;
    background: white;
    text-align: center;
    width: 100%;
    margin-top: -8px;
    margin-left: -10px;
    padding: 10px;
}`
};
