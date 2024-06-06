import { CommunicationRequestListRelationFilter } from "../communicationRequest/CommunicationRequestListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  communicationRequests?: CommunicationRequestListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  name?: StringNullableFilter;
  role?: "Option1";
  username?: StringFilter;
};
