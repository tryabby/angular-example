import { Component, OnInit } from '@angular/core';
import { AbbyService } from '@tryabby/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  clientFlag: boolean;
  serverSideFlag: boolean;
  homeVariant: string;
  constructor(public readonly abby: AbbyService) {}

  ngOnInit() {
    this.abby.getFeatureFlagValue('clientFlag').subscribe((value: boolean) => {
      this.clientFlag = value;
    });

    this.abby.getFeatureFlagValue('serverFlag').subscribe((value: boolean) => {
      this.serverSideFlag = value;
    });

    this.abby.getVariant("Home").subscribe((variant:string) => {
      this.homeVariant = variant;
      console.log(variant);
    })
  }

}
