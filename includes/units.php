<?php

// Define the unit conversion rates
$units = [
    'length' => [
        'meter' => 1,
        'kilometer' => 0.001,
        'centimeter' => 100,
        'millimeter' => 1000,
        'miles' => 0.000621371,
        'yard' => 1.09361,
        'feet' => 3.28084,
        'inch' => 39.3701,
        'nautical_mile' => 0.000539957
    ],
    'area' => [
        'square_meter' => 1,
        'square_kilometer' => 0.000001,
        'square_centimeter' => 10000,
        'square_millimeter' => 1000000,
        'hectare' => 0.0001,
        'acre' => 0.000247105,
        'square_mile' => 3.861e-7,
        'square_yard' => 1.19599,
        'square_foot' => 10.7639,
        'square_inch' => 1550,
    ],
    'volume' => [
        'cubic_meter' => 1,
        'cubic_kilometer' => 1e-9,
        'cubic_centimeter' => 1000000,
        'cubic_millimeter' => 1000000000,
        'liter' => 1000,
        'milliliter' => 1000000,
        'gallon' => 264.172,
        'quart' => 1056.69,
        'pint' => 2113.38,
        'cup' => 4226.75,
        'fluid_ounce' => 33814,
        'tablespoon' => 67628,
        'teaspoon' => 202884
    ],
    'weight' => [
        'kilogram' => 1,
        'gram' => 1000,
        'milligram' => 1000000,
        'microgram' => 1000000000,
        'ton' => 0.001,
        'pound' => 2.20462,
        'ounce' => 35.274
    ],
    /*'temperature' => [
        'celsius' => 'C',
        'fahrenheit' => 'F',
        'kelvin' => 'K'
    ],*/
    'time' => [
        'second' => 1,
        'minute' => 1 / 60,
        'hour' => 1 / 3600,
        'day' => 1 / 86400,
        'week' => 1 / 604800,
        'month' => 1 / 2628000,
        'year' => 1 / 31536000
    ],
    'speed' => [
        'meter_per_second' => 1,
        'kilometer_per_hour' => 3.6,
        'mile_per_hour' => 2.23694,
        'knot' => 1.94384,
        'foot_per_second' => 3.28084
    ],
    'pressure' => [
        'pascal' => 1,
        'bar' => 0.00001,
        'psi' => 0.000145038,
        'atmosphere' => 0.00000986923,
        'torr' => 0.00750062
    ],
    'energy' => [
        'joule' => 1,
        'kilojoule' => 0.001,
        'calorie' => 0.239006,
        'kilocalorie' => 0.000239006,
        'watt_hour' => 0.000277778,
        'kilowatt_hour' => 2.77778e-7,
        'electronvolt' => 6.242e+18
    ],
    'data Transfer Rate' => [
        'bit_per_second' => 1,
        'kilobit_per_second' => 0.001,
        'megabit_per_second' => 0.000001,
        'gigabit_per_second' => 1e-9,
        'terabit_per_second' => 1e-12,
        'byte_per_second' => 0.125,
        'kilobyte_per_second' => 0.000125,
        'megabyte_per_second' => 1.25e-7,
        'gigabyte_per_second' => 1.25e-10,
        'terabyte_per_second' => 1.25e-13
    ],
    'digital Storage' => [
        'bit' => 1,
        'kilobit' => 0.001,
        'megabit' => 0.000001,
        'gigabit' => 1e-9,
        'terabit' => 1e-12,
        'byte' => 0.125,
        'kilobyte' => 0.000125,
        'megabyte' => 1.25e-7,
        'gigabyte' => 1.25e-10,
        'terabyte' => 1.25e-13
    ],
    'fuel Economy' => [
        'kilometers_per_liter' => 1,
        'miles_per_gallon' => 2.35215
    ],
    'frequency' => [
        'hertz' => 1,
        'kilohertz' => 0.001,
        'megahertz' => 0.000001,
        'gigahertz' => 1e-9
    ],
    'mass' => [
        'kilogram' => 1,
        'gram' => 1000,
        'milligram' => 1000000,
        'ton' => 0.001,
        'pound' => 2.20462,
        'ounce' => 35.274
    ],
    'plane Angle' => [
        'degree' => 1,
        'radian' => 0.0174533,
        'gradian' => 1.11111
    ]
];