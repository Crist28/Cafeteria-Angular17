import { Component } from '@angular/core';
import { HeadersComponent } from '../../../components/headers/headers.component';
import { FooterComponent } from '../../../components/footer/footer.component';
@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [HeadersComponent, FooterComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

}
