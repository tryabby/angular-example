import { Component, OnInit } from '@angular/core';
import { AbbyService } from '@tryabby/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeVariant: string
  constructor(private readonly abby: AbbyService) {}

  ngOnInit() {
    this.abby.getVariant("Home").subscribe((variant) => {
      this.homeVariant = variant
    })
  }
}
