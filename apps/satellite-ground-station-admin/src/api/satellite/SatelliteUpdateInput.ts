import { CommunicationRequestUpdateManyWithoutSatellitesInput } from "./CommunicationRequestUpdateManyWithoutSatellitesInput";

export type SatelliteUpdateInput = {
  communicationRequests?: CommunicationRequestUpdateManyWithoutSatellitesInput;
  description?: string | null;
  name?: string | null;
  typeField?: "Option1" | null;
};
