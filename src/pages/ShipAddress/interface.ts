export interface AddressInfo {
    tel: number;
    name: string;
    addressDetail: string;
    province: string;
    city: string;
    county: string;
    aa:string
}
export type AddressList = {
    id:string;
    name:string;
    tel:string;
    address:string;
    isDefault?:boolean,
}