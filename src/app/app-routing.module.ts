import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'projects-component', component: ProjectsComponent },
  { path: 'contact-component', component: ContactComponent },
  { path: 'blog-component', component: BlogComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
