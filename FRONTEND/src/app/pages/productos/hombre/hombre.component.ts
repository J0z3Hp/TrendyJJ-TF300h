import { Component } from '@angular/core';
import { PageHombreComponent } from '../../../components/page-hombre/page-hombre.component';

@Component({
  selector: 'app-hombre',
  standalone: true,
  imports: [PageHombreComponent],
  templateUrl: './hombre.component.html',
  styleUrl: './hombre.component.css'
})
export class HombreComponent {

}
