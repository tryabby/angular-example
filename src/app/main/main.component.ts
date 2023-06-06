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
  variantClasses: any;

  constructor(public readonly abby: AbbyService) {}

  getVariantClasses(homeVariant: string) {
    if (homeVariant == "A") return "bg-gray-900 text-white rounded-xl hover:bg-gray-600"
    else if (homeVariant == "B") return "bg-gray-100 text-gray-900 rounded-xl hover:bg-gray-200"
    else if (homeVariant == "C") return "bg-gray-900 text-white hover:bg-gray-600 hover:scale-x-150" 
    else return ""
  }

  ngOnInit() {
    this.abby.getFeatureFlagValue('clientFlag').subscribe((value: boolean) => {
      this.clientFlag = value;
    });

    this.abby.getFeatureFlagValue('serverFlag').subscribe((value: boolean) => {
      this.serverSideFlag = value;
    });

    this.abby.getVariant("Home").subscribe((variant:string) => {
      this.homeVariant = variant;
    })
  }

}
