import * as graphql from "@nestjs/graphql";
import { SatelliteResolverBase } from "./base/satellite.resolver.base";
import { Satellite } from "./base/Satellite";
import { SatelliteService } from "./satellite.service";

@graphql.Resolver(() => Satellite)
export class SatelliteResolver extends SatelliteResolverBase {
  constructor(protected readonly service: SatelliteService) {
    super(service);
  }
}
