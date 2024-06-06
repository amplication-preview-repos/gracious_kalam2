import { SortOrder } from "../../util/SortOrder";

export type CommunicationRequestOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  satelliteId?: SortOrder;
  scheduleId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
