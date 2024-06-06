import * as graphql from "@nestjs/graphql";
import { CommunicationRequestResolverBase } from "./base/communicationRequest.resolver.base";
import { CommunicationRequest } from "./base/CommunicationRequest";
import { CommunicationRequestService } from "./communicationRequest.service";

@graphql.Resolver(() => CommunicationRequest)
export class CommunicationRequestResolver extends CommunicationRequestResolverBase {
  constructor(protected readonly service: CommunicationRequestService) {
    super(service);
  }
}
