import { Component } from '@angular/core';
import { HeadersComponent } from "../../components/headers/headers.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
    imports: [HeadersComponent, FooterComponent]
})
export class ProductsComponent {

}
