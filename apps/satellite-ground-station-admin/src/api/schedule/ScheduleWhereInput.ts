import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { CommunicationRequestListRelationFilter } from "../communicationRequest/CommunicationRequestListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ScheduleWhereInput = {
  availability?: BooleanNullableFilter;
  communicationRequests?: CommunicationRequestListRelationFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
};
