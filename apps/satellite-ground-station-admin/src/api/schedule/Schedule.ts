import { CommunicationRequest } from "../communicationRequest/CommunicationRequest";

export type Schedule = {
  availability: boolean | null;
  communicationRequests?: Array<CommunicationRequest>;
  createdAt: Date;
  endTime: Date | null;
  id: string;
  startTime: Date | null;
  updatedAt: Date;
};
