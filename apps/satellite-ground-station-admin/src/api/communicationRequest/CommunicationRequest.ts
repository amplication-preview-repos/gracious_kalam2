import { Satellite } from "../satellite/Satellite";
import { Schedule } from "../schedule/Schedule";
import { User } from "../user/User";

export type CommunicationRequest = {
  createdAt: Date;
  id: string;
  satellite?: Satellite | null;
  schedule?: Schedule | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
