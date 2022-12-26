export default interface Request {
  processed: boolean;
  destination: string;
  date?: Date;
  host: string;
  medications: [any];
}
