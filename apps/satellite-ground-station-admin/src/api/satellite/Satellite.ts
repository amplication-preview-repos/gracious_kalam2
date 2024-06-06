import { CommunicationRequest } from "../communicationRequest/CommunicationRequest";

export type Satellite = {
  communicationRequests?: Array<CommunicationRequest>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
