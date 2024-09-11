import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContanctComponent } from '../../component/contanct/contanct.component';
const routes: Routes = [
  {
    path: '',
    component: ContanctComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
