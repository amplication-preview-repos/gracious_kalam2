import { CommunicationRequest as TCommunicationRequest } from "../api/communicationRequest/CommunicationRequest";

export const COMMUNICATIONREQUEST_TITLE_FIELD = "id";

export const CommunicationRequestTitle = (
  record: TCommunicationRequest
): string => {
  return record.id?.toString() || String(record.id);
};
