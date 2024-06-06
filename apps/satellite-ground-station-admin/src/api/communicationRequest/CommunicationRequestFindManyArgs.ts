import { CommunicationRequestWhereInput } from "./CommunicationRequestWhereInput";
import { CommunicationRequestOrderByInput } from "./CommunicationRequestOrderByInput";

export type CommunicationRequestFindManyArgs = {
  where?: CommunicationRequestWhereInput;
  orderBy?: Array<CommunicationRequestOrderByInput>;
  skip?: number;
  take?: number;
};
