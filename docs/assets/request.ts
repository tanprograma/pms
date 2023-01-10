import Request from './requestinterface';
export default class {
  private processed: boolean;

  constructor(req: Request) {
    this.processed = req.processed;
  }
}
