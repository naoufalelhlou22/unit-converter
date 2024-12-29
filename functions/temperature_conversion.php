<?php

global $convertedValue;
function degreeCelsius($value, $unitTo): void
{
    $units = [
        'fahrenheit' => ($value * 9/5) + 32,
        'kelvin' => $value + 273.15,
        'celsius' => $value
    ];
    echo $units[$unitTo];
}

function fahrenheit($value, $unitTo): void
{
    $units = [
        'celsius' => ($value - 32) * 5/9,
        'kelvin' => ($value - 32) * 5/9 + 273.15,
        'fahrenheit' => $value
    ];
    echo $units[$unitTo];
}

function kelvin($value, $unitTo): void
{
    $units = [
        'celsius' => $value - 273.15,
        'fahrenheit' => ($value - 273.15) * 9/5 + 32,
        'kelvin' => $value
    ];
    echo $units[$unitTo];
}