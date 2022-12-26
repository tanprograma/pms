import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-input-gen',
  templateUrl: './input-gen.component.html',
  styleUrls: ['./input-gen.component.css'],
})
export class InputGenComponent implements OnInit {
  inputNumber?: any;
  @Output() sendInput = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  onSubmit(x: NgForm) {
    this.inputNumber = x.value.input;
    this.sendInput.emit(x.value.input);
    x.reset();
  }
}
