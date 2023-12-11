import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css',
  providers:[],
})
export class HeadersComponent implements OnInit {
  public nombre: string = '';
  constructor(private router: Router){}
  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      this.nombre = localStorage.getItem('cliente') || '';
      console.log(localStorage.getItem('cliente'));
    }
  }
  logout(){
    window.location.reload();
    localStorage.removeItem('token');
    localStorage.removeItem('cliente');
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });;
  }
}
