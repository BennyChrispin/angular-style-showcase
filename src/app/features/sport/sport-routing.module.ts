import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportComponent } from '../../component/sport/sport.component';

const routes: Routes = [
  {
    path: 'sport',
    component: SportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportRoutingModule {}
