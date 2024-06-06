import { Module } from "@nestjs/common";
import { SatelliteModuleBase } from "./base/satellite.module.base";
import { SatelliteService } from "./satellite.service";
import { SatelliteController } from "./satellite.controller";
import { SatelliteResolver } from "./satellite.resolver";

@Module({
  imports: [SatelliteModuleBase],
  controllers: [SatelliteController],
  providers: [SatelliteService, SatelliteResolver],
  exports: [SatelliteService],
})
export class SatelliteModule {}
