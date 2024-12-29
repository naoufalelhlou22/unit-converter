// Function to update the unit options based on the selected conversion type
function updateUnitOptions() {
    const conversionType = document.getElementById('conversionType').value;
    const unitFrom = document.getElementById('unitFrom');
    const unitTo = document.getElementById('unitTo');

    let options = '';

    switch (conversionType) {
        case 'length':
            options = `
                    <option value="meter">Meters</option>
                    <option value="kilometer">Kilometers</option>
                    <option value="centimeter">Centimeters</option>
                    <option value="millimeter">Millimeters</option>
                    <option value="miles">Miles</option>
                    <option value="yard">Yards</option>
                    <option value="feet">Feet</option>
                    <option value="inch">Inches</option>
                    <option value="nautical_mile">Nautical Miles</option>`;
            break;
        case 'area':
            options = `
                    <option value="square_meter">Square Meters</option>
                    <option value="square_kilometer">Square Kilometers</option>
                    <option value="square_centimeter">Square Centimeters</option>
                    <option value="square_millimeter">Square Millimeters</option>
                    <option value="hectare">Hectares</option>
                    <option value="acre">Acres</option>
                    <option value="square_mile">Square Miles</option>
                    <option value="square_yard">Square Yards</option>
                    <option value="square_foot">Square Feet</option>
                    <option value="square_inch">Square Inches</option>`;
            break;
        case 'volume':
            options = `
                    <option value="cubic_meter">Cubic Meters</option>
                    <option value="cubic_kilometer">Cubic Kilometers</option>
                    <option value="cubic_centimeter">Cubic Centimeters</option>
                    <option value="cubic_millimeter">Cubic Millimeters</option>
                    <option value="liter">Liters</option>
                    <option value="milliliter">Milliliters</option>
                    <option value="gallon">Gallons</option>
                    <option value="quart">Quarts</option>
                    <option value="pint">Pints</option>
                    <option value="cup">Cups</option>
                    <option value="fluid_ounce">Fluid Ounces</option>
                    <option value="tablespoon">Tablespoons</option>
                    <option value="teaspoon">Teaspoons</option>`;
            break;
        case 'weight':
            options = `
                    <option value="kilogram">Kilograms</option>
                    <option value="gram">Grams</option>
                    <option value="milligram">Milligrams</option>
                    <option value="microgram">Micrograms</option>
                    <option value="ton">Tons</option>
                    <option value="pound">Pounds</option>
                    <option value="ounce">Ounces</option>`;
            break;
        case 'temperature':
            options = `
                    <option value="celsius">Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="kelvin">Kelvin</option>`;
            break;
        case 'time':
            options = `
                    <option value="second">Seconds</option>
                    <option value="minute">Minutes</option>
                    <option value="hour">Hours</option>
                    <option value="day">Days</option>
                    <option value="week">Weeks</option>
                    <option value="month">Months</option>
                    <option value="year">Years</option>`;
            break;
        case 'speed':
            options = `
                    <option value="meter_per_second">Meters/Second</option>
                    <option value="kilometer_per_hour">Kilometers/Hour</option>
                    <option value="mile_per_hour">Miles/Hour</option>
                    <option value="knot">Knots</option>
                    <option value="foot_per_second">Feet/Second</option>`;
            break;
        case 'pressure':
            options = `
                    <option value="pascal">Pascals</option>
                    <option value="bar">Bars</option>
                    <option value="psi">PSI</option>
                    <option value="atmosphere">Atmospheres</option>
                    <option value="torr">Torr</option>`;
            break;
        case 'energy':
            options = `
                    <option value="joule">Joules</option>
                    <option value="kilojoule">Kilojoules</option>
                    <option value="calorie">Calories</option>
                    <option value="kilocalorie">Kilocalories</option>
                    <option value="watt_hour">Watt Hours</option>
                    <option value="kilowatt_hour">Kilowatt Hours</option>
                    <option value="electronvolt">Electronvolts</option>`;
            break;
        case 'data_transfer_rate':
            options = `
                    <option value="bit_per_second">Bit/Second</option>
                    <option value="kilobit_per_second">Kilobit/Second</option>
                    <option value="megabit_per_second">Megabit/Second</option>
                    <option value="gigabit_per_second">Gigabit/Second</option>
                    <option value="terabit_per_second">Terabit/Second</option>
                    <option value="byte_per_second">Byte/Second</option>
                    <option value="kilobyte_per_second">Kilobyte/Second</option>
                    <option value="megabyte_per_second">Megabyte/Second</option>
                    <option value="gigabyte_per_second">Gigabyte/Second</option>
                    <option value="terabyte_per_second">Terabyte/Second</option>`;
            break;
        case 'digital_storage':
            options = `
                    <option value="bit">Bits</option>
                    <option value="kilobit">Kilobits</option>
                    <option value="megabit">Megabits</option>
                    <option value="gigabit">Gigabits</option>
                    <option value="terabit">Terabits</option>
                    <option value="byte">Bytes</option>
                    <option value="kilobyte">Kilobytes</option>
                    <option value="megabyte">Megabytes</option>
                    <option value="gigabyte">Gigabytes</option>
                    <option value="terabyte">Terabytes</option>`;
            break;
        case 'fuel_economy':
            options = `
                    <option value="kilometers_per_liter">Kilometers/Liter</option>
                    <option value="miles_per_gallon">Miles/Gallon</option>`;
            break;
        case 'frequency':
            options = `
                    <option value="hertz">Hertz</option>
                    <option value="kilohertz">Kilohertz</option>
                    <option value="megahertz">Megahertz</option>
                    <option value="gigahertz">Gigahertz</option>`;
            break;
        case 'mass':
            options = `
                    <option value="kilogram">Kilograms</option>
                    <option value="gram">Grams</option>
                    <option value="milligram">Milligrams</option>
                    <option value="ton">Tons</option>
                    <option value="pound">Pounds</option>
                    <option value="ounce">Ounces</option>`;
            break;
        case 'plane_angle':
            options = `
                    <option value="degree">Degrees</option>
                    <option value="radian">Radians</option>
                    <option value="gradian">Gradians</option>`;
            break;
        default:
            options = '';
    }

    unitFrom.innerHTML = options;
    unitTo.innerHTML = options;
}

// Function to swap units if the user selects the same unit for both fields
function swapUnitsIfSame() {
    const unitFrom = document.getElementById('unitFrom');
    const unitTo = document.getElementById('unitTo');

    if (unitFrom.value === unitTo.value) {
        // Find the first non-matching option to swap automatically
        for (let option of unitTo.options) {
            if (option.value !== unitFrom.value) {
                unitTo.value = option.value;
                break;
            }
        }
    }
    else if (unitTo.value === unitFrom.value) {
        // Find the first non-matching option to swap automatically
        for (let option of unitFrom.options) {
            if (option.value !== unitTo.value) {
                unitFrom.value = option.value;
                break;
            }
        }
    }
}

// Initialize options for the default conversion type
window.onload = updateUnitOptions;