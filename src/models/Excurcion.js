import {Voucher} from "./Voucher";

export class Excursion extends Voucher {

    constructor(build) {
        super(build);
    }

    static get Builder () {
        class Builder extends Voucher.Builder{
            constructor(country) {
               super(country);
               return this;
            }
            build() {
                return new Excursion(this);
            }
        }
        return Builder;
    }

}