import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-dispense-form',
  templateUrl: './dispense-form.component.html',
  styleUrls: ['./dispense-form.component.css'],
})
export class DispenseFormComponent implements OnInit {
  @Input() medicines?: any;
  @Input() nofcontrols?: any;
  @Output() sendFormValues = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    const isValid = this.ValidateInput(f);
    if (!isValid) return;
    const output = this.mapInput(f);
    this.sendFormValues.emit(output);
    f.reset();
  }
  ValidateInput(f: NgForm) {
    let isValid = true;
    const keys = Object.keys(f.value);
    for (let i = 0; i < keys.length; i++) {
      if (f.value[keys[i]] == null || f.value[keys[i]] == '') {
        isValid = !isValid;
        break;
      }
      // return;
    }
    return isValid;
  }
  mapInput(f: NgForm) {
    return {
      client: f.value.client,
      commodities: this.nofcontrols.map((item: any) => {
        return {
          commodity: f.value[item.med].toLowerCase(),
          quantity: f.value[item.quant],
        };
      }),
    };
  }
}
