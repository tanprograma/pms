import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-inputmod',
  templateUrl: './inputmod.component.html',
  styleUrls: ['./inputmod.component.css'],
})
export class InputmodComponent implements OnInit {
  @Input() nofcontrol: any;

  @Output() nofcontrolChange = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
  inputMod(delta: any) {
    this.nofcontrol.nofmedicine += delta;
    if (delta > 0) {
      this.createInputs(this.nofcontrol);
      this.nofcontrolChange.emit(this.nofcontrol);
      console.log(this.nofcontrol.nofmedicine);
      console.log(this.nofcontrol);
    } else {
      this.nofcontrol.control.pop();
      this.nofcontrolChange.emit(this.nofcontrol);
      console.log(this.nofcontrol.nofmedicine);
      console.log(this.nofcontrol);
    }
  }

  createInputs(x: any) {
    for (
      let i = this.nofcontrol.control.length;
      i < this.nofcontrol.nofmedicine;
      i++
    ) {
      this.nofcontrol.control.push({
        med: `med${1 + i}`,
        quant: `quant${1 + i}`,
      });
    }
  }
}
