import { Component } from '@angular/core';
import { PageHombreComponent } from '../../../components/page-hombre/page-hombre.component';
import { NavBarComponent } from "../../../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-hombre',
  standalone: true,
  imports: [PageHombreComponent, NavBarComponent, FooterComponent],
  templateUrl: './hombre.component.html',
  styleUrl: './hombre.component.css'
})
export class HombreComponent {

}
