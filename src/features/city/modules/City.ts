export interface SubCityItem {
  cityId: number;
  name: string;
  pinyin: string;
  isHot: number;
}

export interface CityItem {
  index:string
  subCitys: SubCityItem[]
}

export interface CityData {
  value: string
  citys: CityItem[]
  cityIndexs: string[]
  hotCitys:SubCityItem[]
  origiCitys:SubCityItem[]
}
