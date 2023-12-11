import { Component } from '@angular/core';
import { HeadersComponent } from '../../components/headers/headers.component';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeadersComponent, FooterComponent]
})
export class HomeComponent {}
