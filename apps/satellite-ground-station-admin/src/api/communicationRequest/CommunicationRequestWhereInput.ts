import { StringFilter } from "../../util/StringFilter";
import { SatelliteWhereUniqueInput } from "../satellite/SatelliteWhereUniqueInput";
import { ScheduleWhereUniqueInput } from "../schedule/ScheduleWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommunicationRequestWhereInput = {
  id?: StringFilter;
  satellite?: SatelliteWhereUniqueInput;
  schedule?: ScheduleWhereUniqueInput;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
