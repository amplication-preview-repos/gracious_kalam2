import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SatelliteService } from "./satellite.service";
import { SatelliteControllerBase } from "./base/satellite.controller.base";

@swagger.ApiTags("satellites")
@common.Controller("satellites")
export class SatelliteController extends SatelliteControllerBase {
  constructor(protected readonly service: SatelliteService) {
    super(service);
  }
}
