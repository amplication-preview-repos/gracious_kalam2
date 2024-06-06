import { Satellite as TSatellite } from "../api/satellite/Satellite";

export const SATELLITE_TITLE_FIELD = "name";

export const SatelliteTitle = (record: TSatellite): string => {
  return record.name?.toString() || String(record.id);
};
