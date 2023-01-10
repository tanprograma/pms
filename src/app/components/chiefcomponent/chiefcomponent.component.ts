import { Component, OnInit } from '@angular/core';
import { DispenseddataService } from 'src/app/statistics/services/dispenseddata.service';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-chiefcomponent',
  templateUrl: './chiefcomponent.component.html',
  styleUrls: ['./chiefcomponent.component.css'],
})
export class ChiefcomponentComponent implements OnInit {
  constructor(private data: DispenseddataService, private http: HttpService) {}

  ngOnInit(): void {
    this.http.get(this.data.commodities.url).subscribe((res: any) => {
      console.log(res);
      this.data.commodities.collection = this.mapMedicines(res);
    });
    this.http.get(this.data.dispensed.url).subscribe((res: any) => {
      console.log(res);
      this.data.dispensed.collection = this.mapDispensed(res);
    });
  }
  mapMedicines(res: any) {
    return res.map((item: any) => {
      return {
        id: item._id,
        commodity: item.medicine,
      };
    });
  }
  mapDispensed(res: any) {
    return res.map((item: any) => {
      return {
        date: this.convertDate(new Date(item.date).toLocaleDateString()),
        id: item._id,
        commodities: this.mapDispensedCommodities(item.medications),
      };
    });
  }
  convertDate(date: any) {
    return new Date(date).valueOf();
  }
  mapDispensedCommodities(commodities: any) {
    return commodities.map((item: any) => {
      return {
        commodity: item.medicine,
        quantity: item.quantity,
      };
    });
  }
}
