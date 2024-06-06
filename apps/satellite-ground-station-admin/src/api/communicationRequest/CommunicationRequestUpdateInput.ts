import { SatelliteWhereUniqueInput } from "../satellite/SatelliteWhereUniqueInput";
import { ScheduleWhereUniqueInput } from "../schedule/ScheduleWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommunicationRequestUpdateInput = {
  satellite?: SatelliteWhereUniqueInput | null;
  schedule?: ScheduleWhereUniqueInput | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
