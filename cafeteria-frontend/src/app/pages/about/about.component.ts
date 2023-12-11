import { Component } from '@angular/core';
import { HeadersComponent } from "../../components/headers/headers.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [HeadersComponent, FooterComponent]
})
export class AboutComponent {

}
