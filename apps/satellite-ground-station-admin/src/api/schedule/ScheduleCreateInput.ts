import { CommunicationRequestCreateNestedManyWithoutSchedulesInput } from "./CommunicationRequestCreateNestedManyWithoutSchedulesInput";

export type ScheduleCreateInput = {
  availability?: boolean | null;
  communicationRequests?: CommunicationRequestCreateNestedManyWithoutSchedulesInput;
  endTime?: Date | null;
  startTime?: Date | null;
};
