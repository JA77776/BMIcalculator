function calulateBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;  

    if (weight > 0 && height > 0) {
        let bmi = weight / ((height / 100) * (height / 100));
        displayResult(bmi);
    }else {
        alert('Please enter valid values for weight and height.');
    } 
}

function displayResult(bmi) {
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Your BMI is:' + bmi.toFixed(2)
}
