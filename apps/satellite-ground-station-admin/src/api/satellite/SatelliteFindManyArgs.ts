import { SatelliteWhereInput } from "./SatelliteWhereInput";
import { SatelliteOrderByInput } from "./SatelliteOrderByInput";

export type SatelliteFindManyArgs = {
  where?: SatelliteWhereInput;
  orderBy?: Array<SatelliteOrderByInput>;
  skip?: number;
  take?: number;
};
