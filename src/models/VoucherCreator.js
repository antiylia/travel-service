import {Excursion} from "./Excurcion";
import {Shopping} from "./Shopping";
import {Hiking} from "./Hiking";
import {BeachRest} from "./BeachRest";
import {Fest} from "./Fest";

export function createVoucher (voucherType, country) {
    switch (voucherType) {
        case 'excursion':
            return new Excursion.Builder(country);
            break;
        case 'shopping':
            return new Shopping.Builder(country);
            break;
        case 'hiking':
            return new Hiking.Builder(country);
            break;
        case 'beach rest':
            return new BeachRest.Builder(country);
            break;
        case 'festivals and fests':
            return new Fest.Builder(country);
            break;
        default:
           console.log('no existed voucher type');
    }
}
