import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommunicationRequestServiceBase } from "./base/communicationRequest.service.base";

@Injectable()
export class CommunicationRequestService extends CommunicationRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
