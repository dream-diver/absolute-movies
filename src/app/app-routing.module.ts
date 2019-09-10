import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'livetv', pathMatch: 'full' },

  { path: 'livetv', loadChildren: './pages/livetv/livetv.module#LivetvPageModule' },
  { path: 'example-modal', loadChildren: './pages/example-modal/example-modal.module#ExampleModalPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
