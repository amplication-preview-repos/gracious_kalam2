import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SatelliteServiceBase } from "./base/satellite.service.base";

@Injectable()
export class SatelliteService extends SatelliteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
