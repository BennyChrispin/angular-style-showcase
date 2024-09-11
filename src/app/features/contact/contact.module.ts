import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContanctComponent } from '../../component/contanct/contanct.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [ContanctComponent],
  imports: [CommonModule, ContactRoutingModule],
})
export class ContactModule {}
