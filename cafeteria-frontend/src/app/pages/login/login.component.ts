import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ClientesService } from '../../services/clientes.service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { HeadersComponent } from '../../components/headers/headers.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    HeadersComponent,
    FooterComponent,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HttpClient, ClientesService],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private clientesService: ClientesService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  ngOnInit() {}
  onSubmit(): void {
    if (this.loginForm.invalid) return;

    const data = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this.clientesService.login_cliente(data).subscribe(
      (response) => {
        if (response.data === undefined) {
        } else {
          this.clientesService.setToken(response.data.token);
          this.clientesService.setCliente(response.data.cliente.nombre);
          console.log(response.data);
          this.router.navigate(['/']);
        }
      },
      (error) => {
      }
    );
  }
}
