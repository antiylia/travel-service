const readlineSync = require('readline-sync');
import {data} from "../data/data";
import {createVoucher} from "../models/VoucherCreator";

export function travelService () {

    const selectedVoucherType = defineVoucherType ();
    let availableTours = data[selectedVoucherType];
    const selectedCountry = defineCountry(availableTours);
    availableTours = availableTours[selectedCountry];
    console.log(`It's available following tour: \n ${availableTours.description}`);

    if (readlineSync.keyInYN('Would you like to buy this voucher?')) {
        const voucher = createVoucher(selectedVoucherType, selectedCountry)
            .withDuration(availableTours.startDuration)
            .withCost(availableTours.startCost)
            .build();
        addTransport (availableTours, voucher);
        addMeal (availableTours, voucher);
        console.log(voucher.getFullDescription());
    } else {
        console.log('Travel service is finishing');
    }
}

function defineVoucherType () {
    console.log(`What kind of the rest do you prefer: `);
    const voucherTypes = Object.keys(data);
    const selectedVoucherType = voucherTypes[readlineSync.keyInSelect(voucherTypes, 'Select from the suggested list: ')];
    console.log(`You chose ${selectedVoucherType}`);

    return selectedVoucherType;
}

function defineCountry (availableTours) {
    console.log(`It's available following directions: `);
    const countries = availableTours.map((value) => value.country);
    const selectedCountry = readlineSync.keyInSelect(countries, 'Select from the suggested list: ');

    return selectedCountry;
}

function addTransport (availableTours, voucher) {
    console.log(`What transport do you prefer?: `);
    const transportTypes = Object.keys(availableTours.transportType);
    const selectedTransportType = transportTypes[readlineSync.keyInSelect(transportTypes, 'Select from the suggested list: ')];
    const transportTypeObj = availableTours.transportType[selectedTransportType];
    voucher.addTransportType(selectedTransportType, transportTypeObj);
    console.log(`Transport ${selectedTransportType} added to your voucher.`);
}

function addMeal (availableTours, voucher) {
    console.log(`What meal do you prefer?: `);
    const mealsTypes = Object.keys(availableTours.meals);
    const selectedMealType = mealsTypes[readlineSync.keyInSelect(mealsTypes, 'Select from the suggested list: ')];
    const mealTypeObj = availableTours.meals[selectedMealType];
    voucher.addMealType(selectedMealType, mealTypeObj);
    console.log(`Meal type ${selectedMealType} added to your voucher.`);
}