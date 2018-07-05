import {Voucher} from "./Voucher";

export class Hiking extends Voucher {

    constructor(build) {
        super(build);
    }

    static get Builder () {
        class Builder extends Voucher.Builder{
            constructor(name) {
               super(name);
               return this;
            }
            build() {
                return new Hiking(this);
            }
        }
        return Builder;
    }
}