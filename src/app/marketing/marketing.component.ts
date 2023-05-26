import { Component, OnInit } from '@angular/core';
import { AbbyService } from '@tryabby/angular';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {
  marketingVariant: string;
  constructor(private readonly abby: AbbyService) {}

  ngOnInit() {
    this.abby.getVariant("Marketing").subscribe((variant: string) => {
      this.marketingVariant = variant;
    })
  }

}
