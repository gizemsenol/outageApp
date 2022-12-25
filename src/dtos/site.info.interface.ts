export interface SiteInfo {
  id: string;
  name: string;
  devices: Array<Device>;
}

interface Device {
  id: string;
  name: string;
}
