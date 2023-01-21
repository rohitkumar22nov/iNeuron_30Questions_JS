//Body mass index(BMI) is calculated as follows:
// bmi = weight in Kg / (height x height) in m2


const bmiValue = function (weight, height){

    let value = weight/(height*height);
    let result;

    if(value < 18.5){
        result = 'Underweight'
    }
    else if(value >= 18.5 && value <= 24.9){
        result = 'Normal weight'
    }
    else if(value >=25 && value <=29.9){
        result = 'Overweight'
    }
    else if(value >=30){
        result = 'Obese'
    }

    return result;
}

const outcome = bmiValue(76, 1.75);

console.log("BMI of Rohit is: ", outcome);