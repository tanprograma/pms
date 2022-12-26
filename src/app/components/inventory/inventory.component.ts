import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  @Input() center?: any;
  constructor(public data: DataService, private http: HttpService) {}

  ngOnInit(): void {}
  onSubmit(f: NgForm) {
    const toAdd = this.mapFormValue(f);
    this.addToInventory(toAdd);
    f.reset();
  }
  mapFormValue(f: NgForm) {
    return {
      commodity: f.value.commodity,
      beggining: f.value.quantity,
      store: this.center,
      issue: [],
      receive: [],
      dispense: [],
    };
  }
  addToInventory(toAdd: any) {
    this.http.post(this.data.inventory.url, toAdd).subscribe((inventory) => {
      this.data.inventory.collection.push(inventory);
      console.log(inventory);
      console.log('item added');
    });
  }
}
