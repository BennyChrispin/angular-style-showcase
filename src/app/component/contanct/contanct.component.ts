import { Component } from '@angular/core';

@Component({
  selector: 'app-contanct',
  templateUrl: './contanct.component.html',
  styleUrl: './contanct.component.scss',
})
export class ContanctComponent {
  onSubmit() {
    console.log('Form submitted');
  }
}
