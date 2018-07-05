import {Voucher} from "./Voucher";

export class Shopping extends Voucher {

    constructor(build) {
        super(build);
    }

    static get Builder() {
        class Builder extends Voucher.Builder {
            constructor(name) {
                super(name);
                return this;
            }

            build() {
                return new Shopping(this);
            }
        }

        return Builder;
    }
}