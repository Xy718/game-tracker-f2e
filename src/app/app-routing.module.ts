import { AboutUsComponent } from './about-us/about-us.component';
import { R6TrackerComponent } from './r6-tracker/r6-tracker.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: R6TrackerComponent },
  { path: 'r6', component: R6TrackerComponent },
  { path: 'about', component: AboutUsComponent },
  { path: '**', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
