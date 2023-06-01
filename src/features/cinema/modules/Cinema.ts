export interface District {
  districtId: number;
  name: string;
}

export interface CinemaItem {
  cinemaId: number;
  name: string;
  address: string;
  longitude: number;
  latitude: number;
  gpsAddress: string;
  cityId: number;
  cityName: string;
  districtId: number;
  districtName: string;
  district: District;
  phone?: string;
  telephones: string[];
  logoUrl: string;
  businessTime: string;
  notice: string;
  isVisited: number;
  lowPrice: number;
  Distance: number;
  eTicketFlag: number;
  seatFlag: number;
  ticketTypes: null;
}

export interface CinemaList {
  cinemas: CinemaItem[]
}
