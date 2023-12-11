import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { HeadersComponent } from '../../components/headers/headers.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports: [HeadersComponent, FooterComponent, FormsModule, HttpClientModule],
  providers: [HttpClient, ClientesService],
})
export class RegisterComponent {
  nombre: string = '';
  apellidos: string = '';
  email: string = '';
  password: string = '';
  telefono: string = '';
  dni: string = '';

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) {}

  onSubmit(): void {
    const data = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      email: this.email,
      password: this.password,
      telefonos: this.telefono,
      dni: this.dni,
    };

    this.clientesService.registro_cliente(data).subscribe(
      (response) => {
        if (response.data === true) {
          console.log('Registro exitoso');
          this.router.navigate(['login']);
        } else {
          console.error('Error en el registro:', response.msg);
          // Manejar el error, por ejemplo, mostrar un mensaje al usuario
        }
      },
      (error) => {
        console.error('Error en el registro:', error);
        // Manejar el error, por ejemplo, mostrar un mensaje al usuario
      }
    );
  }
}
