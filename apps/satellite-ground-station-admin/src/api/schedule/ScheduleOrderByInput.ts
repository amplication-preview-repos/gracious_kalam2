import { SortOrder } from "../../util/SortOrder";

export type ScheduleOrderByInput = {
  availability?: SortOrder;
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
};
