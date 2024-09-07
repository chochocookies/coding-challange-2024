// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// function bmi(weight, height) {
//     const bmiValue = weight / (height * height); // Calculate BMI

//     // Determine the BMI category
//     if (bmiValue <= 18.5) {
//         return "Underweight";
//     } else if (bmiValue <= 25.0) {
//         return "Normal";
//     } else if (bmiValue <= 30.0) {
//         return "Overweight";
//     } else {
//         return "Obese";
//     }
// }

// arrow
const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";
                                    
console.log(bmi(80, 1.80), "Normal");
