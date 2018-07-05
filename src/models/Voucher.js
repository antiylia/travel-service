
export class Voucher {

    constructor(build) {
        this.country = build.country;
        this.cost = build.cost;
        this.duration = build.duration;
    }

    static get Builder() {
        class Builder {
            constructor(country) {
                this.country = country;
                return this;
            }
            withCost(cost) {
                this.cost = cost;
                return this;
            }
            withDuration(duration) {
                this.duration = duration;
                return this;
            }
            build() {
                return new Voucher(this);
            }
        }
        return Builder;
    }

    addTransportType (transportType, {cost, days}) {
        this.transportType = transportType;
        this.cost += cost;
        this.duration += days;
    }

    addMealType (mealType, {cost}) {
        this.mealType = mealType;
        this.cost += cost;
    }

    getFullDescription() {
        return `Total duration of the voucher is ${this.duration} days, total cost is ${this.cost} euro`;
    }
}