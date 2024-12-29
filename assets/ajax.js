// Function to handle the form submission using AJAX
function convertUnits(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from the form
    const inputValue = document.getElementById('inputValue').value;
    const conversionType = document.getElementById('conversionType').value;
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;

    // Create a FormData object to send form data
    const formData = new FormData();
    formData.append('inputValue', inputValue);
    formData.append('conversionType', conversionType);
    formData.append('unitFrom', unitFrom);
    formData.append('unitTo', unitTo);

    // Create a new XMLHttpRequest (AJAX) to send data to the server
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'converter.php', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // If the request is successful, update the page with the result
            document.getElementById('convertedValue').innerHTML = xhr.responseText;
        }
    };
    xhr.send(formData); // Send the form data to the backend
}
        