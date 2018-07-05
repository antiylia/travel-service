const readlineSync = require('readline-sync');
import {data} from "../data/data";
import {createVoucher} from "../models/VoucherCreator";

export function travelService () {

    console.log(`What kind of the rest do you prefer: `);
    const voucherTypes = Object.keys(data);
    const selectedVoucherType = voucherTypes[readlineSync.keyInSelect(voucherTypes, 'Select from the suggested list: ')];
    console.log(`You chose ${selectedVoucherType}`);

    console.log(`It's available following directions: `);
    const countries = data[selectedVoucherType].map((value) => value.country);
    const selectedCountry = readlineSync.keyInSelect(countries, 'Select from the suggested list: ');
    console.log(`It's available following tour: \n ${data[selectedVoucherType][selectedCountry].description}`);

    if (readlineSync.keyInYN('Would you like to buy this voucher?')) {

        const voucher = createVoucher(selectedVoucherType, data[selectedVoucherType][selectedCountry].country)
            .withDuration(data[selectedVoucherType][selectedCountry].startDuration)
            .withCost(data[selectedVoucherType][selectedCountry].startCost)
            .build();

        console.log(`What transport do you prefer?: `);
        const transportTypes = Object.keys(data[selectedVoucherType][selectedCountry].transportType);
        const selectedTransportType = transportTypes[readlineSync.keyInSelect(transportTypes, 'Select from the suggested list: ')];
        const transportTypeObj = data[selectedVoucherType][selectedCountry].transportType[selectedTransportType];
        voucher.addTransportType(selectedTransportType, transportTypeObj);
        console.log(`Transport ${selectedTransportType} added to your voucher.`);


        console.log(`What meal do you prefer?: `);
        const mealsTypes = Object.keys(data[selectedVoucherType][selectedCountry].meals);
        const selectedMealType = mealsTypes[readlineSync.keyInSelect(mealsTypes, 'Select from the suggested list: ')];
        const mealTypeObj = data[selectedVoucherType][selectedCountry].meals[selectedMealType];
        voucher.addMealType(selectedMealType, mealTypeObj);
        console.log(`Meal type ${selectedMealType} added to your voucher.`);

        console.log(voucher.getFullDescription());
    } else {
        console.log('Travel service is finishing');
    }
}