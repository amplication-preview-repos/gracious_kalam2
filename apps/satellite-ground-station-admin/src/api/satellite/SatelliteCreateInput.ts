import { CommunicationRequestCreateNestedManyWithoutSatellitesInput } from "./CommunicationRequestCreateNestedManyWithoutSatellitesInput";

export type SatelliteCreateInput = {
  communicationRequests?: CommunicationRequestCreateNestedManyWithoutSatellitesInput;
  description?: string | null;
  name?: string | null;
  typeField?: "Option1" | null;
};
