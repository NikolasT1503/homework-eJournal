import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Comp404Component } from './comp404.component';
import { LessonsComponent } from './lessons/lessons.component';
import { MarksComponent } from './marks/marks.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    loadChildren: './app.module',
    pathMatch: 'full',
  },
  {
    path: 'lessons',
    component: LessonsComponent,
    loadChildren: () =>
      import('./lessons/lessons.module').then((file) => file.LessonsModule),
  },
  {
    path: 'students',
    component: StudentsComponent,
    loadChildren: () =>
      import('./students/students.module').then((file) => file.StudentsModule),
  },
  {
    path: 'marks',
    component: MarksComponent,
    loadChildren: () =>
      import('./marks/marks.module').then((file) => file.MarksModule),
  },
  {
    path: '404',
    component: Comp404Component,
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'top',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
