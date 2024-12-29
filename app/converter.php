<?php

// Require the temperature conversion functions
require('../functions/temperature_conversion.php');

// Require the units mapping file
require('../includes/units.php');

// Retrieve input values from the POST request
$inputValue     = $_POST['inputValue'];
$conversionType = $_POST['conversionType'];
$unitFrom       = $_POST['unitFrom'];
$unitTo         = $_POST['unitTo'];

// Switch statement to handle different conversion types
switch ($conversionType) {
    case 'temperature':
        // Handle temperature conversions
        if ($unitFrom === 'celsius') {
            degreeCelsius($inputValue, $unitTo);
        } else if ($unitFrom === 'fahrenheit') {
            fahrenheit($inputValue, $unitTo);
        } else if ($unitFrom === 'kelvin') {
            kelvin($inputValue, $unitTo);
        }
        break;

    default:
        // Handle conversions for other types
        if (isset($units[$conversionType][$unitFrom]) && isset($units[$conversionType][$unitTo])) {
            // Perform the unit conversion using the ratio of the target unit to the source unit
            $convertedValue = $inputValue * ($units[$conversionType][$unitTo] / $units[$conversionType][$unitFrom]);
            echo "Converted Value: " . $convertedValue; // Return the result to the frontend
        } else {
            // Handle errors if units or conversion type are invalid
            echo "Invalid unit or conversion type.";
        }
}
