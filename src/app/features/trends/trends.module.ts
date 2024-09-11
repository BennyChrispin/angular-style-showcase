import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendsComponent } from '../../component/trends/trends.component';
import { TrendsRoutingModule } from './trends-routing.module';

@NgModule({
  declarations: [TrendsComponent],
  imports: [CommonModule, TrendsRoutingModule],
})
export class TrendsModule {}
