import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommunicationRequestService } from "./communicationRequest.service";
import { CommunicationRequestControllerBase } from "./base/communicationRequest.controller.base";

@swagger.ApiTags("communicationRequests")
@common.Controller("communicationRequests")
export class CommunicationRequestController extends CommunicationRequestControllerBase {
  constructor(protected readonly service: CommunicationRequestService) {
    super(service);
  }
}
