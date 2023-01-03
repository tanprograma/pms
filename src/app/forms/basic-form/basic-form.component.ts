import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css'],
})
export class BasicFormComponent implements OnInit {
  @Output() sendValue = new EventEmitter<any>();
  @Input() placeholder?: any;
  @Input() data?: any;
  options?: any = this.data || [];
  constructor() {}

  ngOnInit(): void {
    this.options = this.data || [];
  }
  onSubmit(f: NgForm) {
    // console.log(f.value.value);
    this.sendValue.emit(f.value.value);
    this.options.push(f.value.value);
    f.reset();
    console.log('sent value up');
  }
}
