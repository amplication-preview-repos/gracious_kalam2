import { CommunicationRequestListRelationFilter } from "../communicationRequest/CommunicationRequestListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SatelliteWhereInput = {
  communicationRequests?: CommunicationRequestListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: "Option1";
};
