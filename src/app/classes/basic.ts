import basic from '../interfaces/basic';
export class Basic implements basic {
  form: String;
  options: any;
  data: any;
  constructor(form: String, options: any) {
    this.form = form;
    this.options = [];
  }
  submit() {}
  static setOptions(data: any, f: any) {}
}
