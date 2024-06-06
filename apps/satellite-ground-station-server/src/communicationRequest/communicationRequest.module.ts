import { Module } from "@nestjs/common";
import { CommunicationRequestModuleBase } from "./base/communicationRequest.module.base";
import { CommunicationRequestService } from "./communicationRequest.service";
import { CommunicationRequestController } from "./communicationRequest.controller";
import { CommunicationRequestResolver } from "./communicationRequest.resolver";

@Module({
  imports: [CommunicationRequestModuleBase],
  controllers: [CommunicationRequestController],
  providers: [CommunicationRequestService, CommunicationRequestResolver],
  exports: [CommunicationRequestService],
})
export class CommunicationRequestModule {}
