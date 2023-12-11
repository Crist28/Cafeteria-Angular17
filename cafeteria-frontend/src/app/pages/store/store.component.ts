import { Component } from '@angular/core';
import { HeadersComponent } from "../../components/headers/headers.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-store',
    standalone: true,
    templateUrl: './store.component.html',
    styleUrl: './store.component.css',
    imports: [HeadersComponent, FooterComponent]
})
export class StoreComponent {

}
