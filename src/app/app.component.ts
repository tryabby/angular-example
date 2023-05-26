import { Component } from '@angular/core';
import { AbbyService } from '@tryabby/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(abby: AbbyService) {}
  title = 'A/BBY Angular Example';
}
