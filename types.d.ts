export interface RSVP {
  id?: string;
  fName: string;
  lName: string;
  number: number;
  attending: "yes" | "no";
}

export interface APIResponse {
  success: boolean;
  result?: any;
  error?: Error;
  message?: string;
}
