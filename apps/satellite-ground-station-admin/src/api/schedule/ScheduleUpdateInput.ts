import { CommunicationRequestUpdateManyWithoutSchedulesInput } from "./CommunicationRequestUpdateManyWithoutSchedulesInput";

export type ScheduleUpdateInput = {
  availability?: boolean | null;
  communicationRequests?: CommunicationRequestUpdateManyWithoutSchedulesInput;
  endTime?: Date | null;
  startTime?: Date | null;
};
