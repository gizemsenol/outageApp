export interface SiteOutage {
  id: string;
  name: string;
  begin: string;
  end: string;
}

export interface RequestBody {
  outageId: string;
  date: string;
}
