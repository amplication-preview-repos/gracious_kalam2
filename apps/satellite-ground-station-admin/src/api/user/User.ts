import { CommunicationRequest } from "../communicationRequest/CommunicationRequest";
import { JsonValue } from "type-fest";

export type User = {
  communicationRequests?: Array<CommunicationRequest>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  name: string | null;
  role?: "Option1" | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
