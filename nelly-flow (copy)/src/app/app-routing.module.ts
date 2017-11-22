import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocumentsComponent } from './documents/documents.component';
import { GetstartedComponent } from './getstarted/getstarted.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },


  {
    path: 'docs',
    component: DocumentsComponent
  },
  {
    path: 'getstarted',
    component: GetstartedComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
