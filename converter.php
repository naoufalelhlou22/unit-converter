<?php

require ('functions/temperature_conversion.php');
require ('includes/units.php');

$inputValue     = $_POST['inputValue'];
$conversionType = $_POST['conversionType'];
$unitFrom       = $_POST['unitFrom'];
$unitTo         = $_POST['unitTo'];


switch ($conversionType) {
    case 'temperature':
        if ($unitFrom === 'celsius') {
            degreeCelsius($inputValue, $unitTo);
        }
        else if ($unitFrom === 'fahrenheit') {
            fahrenheit($inputValue, $unitTo);
        }
        else if ($unitFrom === 'kelvin') {
            kelvin($inputValue, $unitTo);
        }
        break;
    default:
        // Perform the conversion
        if (isset($units[$conversionType][$unitFrom]) && isset($units[$conversionType][$unitTo])) {
            $convertedValue = $inputValue * ($units[$conversionType][$unitTo] / $units[$conversionType][$unitFrom]);
            echo "Converted Value: " . $convertedValue; // Return the result to the frontend
        } else {
            echo ($units[$conversionType][$unitTo] / $units[$conversionType][$unitFrom]);
            echo "Invalid unit or conversion type."; // Handle errors
        }

}