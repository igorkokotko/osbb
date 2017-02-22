import { SelectItem } from './ng2-select-item.interface';

export class AddressDTO implements SelectItem {
  public id: number;
  public text: string;
}

export class Region {
  public id: number;
  public name: string;
}

export class City {
  public id: number;
  public name: string;
  public region: Region;
}

export class Street {
  public id: number;
  public name: string;
  public city: City;
}

export class District {
  public id: number;
  public name: string;
  public city: City;
}
