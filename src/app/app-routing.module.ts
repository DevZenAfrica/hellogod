import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'media',
    loadChildren: () => import('./media/media.module').then( m => m.MediaPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./betweenus/events/events.module').then(m => m.EventsPageModule)
  },
  {
    path: 'article/:id',
    loadChildren: () => import('./preview-article/preview-article.module').then( m => m.PreviewArticlePageModule)
  },
  {
    path: 'canticle/:id',
    loadChildren: () => import('./preview-canticle/preview-canticle.module').then( m => m.PreviewCanticlePageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'quizz',
    loadChildren: () => import('./quizz/quizz.module').then( m => m.QuizzPageModule)
  },
  {
    path: 'prayers',
    loadChildren: () => import('./prayers/prayers.module').then( m => m.PrayersPageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then( m => m.ShopPageModule)
  },
  {
    path: 'betweenus',
    loadChildren: () => import('./betweenus/betweenus.module').then( m => m.BetweenusPageModule)
  },
  {
    path: 'preview-canticle',
    loadChildren: () => import('./preview-canticle/preview-canticle.module').then( m => m.PreviewCanticlePageModule)
  },
  {
    path: 'holybible',
    loadChildren: () => import('./home/holy-bible/holy-bible.module').then(m => m.HolyBiblePageModule)
  },
  {
    path: 'holyBibleReading',
    loadChildren: () => import('./preview-holy-bible/preview-holy-bible.module').then( m => m.PreviewHolyBiblePageModule)
  },
  {
    path: 'articles/:id',
    loadChildren: () => import('./articles/articles.module').then( m => m.ArticlesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
