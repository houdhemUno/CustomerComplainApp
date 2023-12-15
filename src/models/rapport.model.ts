export interface Rapport {
  _id?: string;
  userId?: string;
  referencePrefix?: string;
  reference?: string;
  status?: string[]; // Assuming status is an array of strings for simplicity
  createdDate?: Date;
  lastUpdatedDate?: Date;
  transactions?: Transaction[];
  changements?: Changement[];
  statusHistory?: StatusChange[];
  summary?: string;
  analysis?: string;
  resolutionDetails?: string;
}

export interface Transaction {
  transactionId: string;
  amount: number;
  description: string;
}

export interface Changement {
  changeId: string;
  changeDescription: string;
  changeDate: Date;
}

export interface StatusChange {
  previousStatus: string;
  currentStatus: string;
  changeDate: Date;
}