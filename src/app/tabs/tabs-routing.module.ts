import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'prayers',
        loadChildren: () => import('../prayers/prayers.module').then(m => m.PrayersPageModule)
      },
      {
        path: 'media',
        loadChildren: () => import('../media/media.module').then(m => m.MediaPageModule)
      },
      {
        path: 'betweenus',
        loadChildren: () => import('../betweenus/betweenus.module').then(m => m.BetweenusPageModule)
      },
      {
        path: 'shop',
        loadChildren: () => import('../shop/shop.module').then(m => m.ShopPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
