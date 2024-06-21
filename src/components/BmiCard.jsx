import React, { useState } from "react";
import BmiImage from '../assets/BMIimage.png';

//formula of BMI: BMI = (Weight in KG / (Height in Meter x Height in Meter))

function BmiCard() {
  const [bmi, setBmi] = useState(null);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiDisplay, setBmiDisplay] = useState(false);
  const [bmiCatagory, setBmiCatagory] = useState("");

  const handleCalculateBmi = () => {
    if (!weight || !height) return null;
    const calculatedBmi = ((weight / (height * height)).toFixed(2));
    setBmi(calculatedBmi);
    setHeight("");
    setWeight("");
    setBmiDisplay(!(false));
    const bmiValue = parseFloat(calculatedBmi);
    if ( bmiValue < 18.5) {
      setBmiCatagory("Underweight");
    } else if ( bmiValue >= 18.5 && bmiValue < 24.9) {
      setBmiCatagory("Normal weighted");
    } else if ( bmiValue >= 25 && bmiValue < 29.9) {
      setBmiCatagory("Overweight");
    } else {
      setBmiCatagory("Obese");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col justify-center items-center text-center border border-gray-500 rounded-lg w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12 mx-auto shadow-lg p-6">
        <h1 className="text-3xl sm:text-5xl p-6 m-2">BMI Calculator</h1>
        <h3 className="p-3 text-md sm:text-xl m-2">
          Enter Weight (in KG):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
            className="px-3 md:mx-2 rounded-md border border-gray-400 mt-2 sm:mt-0"
            placeholder="Weight (Kilograms)"
          />
        </h3>
        <h3 className="p-3 text-md sm:text-xl my-2">
          Enter Height (in Meters):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
            className="px-3 md:mx-2 rounded-md border border-gray-400 mt-2 sm:mt-0"
            placeholder="Height (Meters)"
          />
        </h3>
        <button
          className="text-lg sm:text-lg border border-gray-500 bg-white text-black hover:bg-green-600 hover:text-white p-2 rounded-lg mb-3 m-2"
          onClick={handleCalculateBmi}
        >
          Calculate BMI
        </button>
        <div>
          {bmiDisplay ? (
            <div>
              <h2 className="text-2xl sm:text-4xl p-6 m-2"> BMI : {bmi}</h2>
              <h3 className="text-md sm:text-xl p-6 m-2">You are {bmiCatagory}</h3>
              <p className="text-sm p-6 m-2"> Read More about BMI <a className="underline hover:cursor-pointer text-blue-500" href="https://en.wikipedia.org/wiki/Body_mass_index"> here </a></p>
              {/* <img src={BmiImage} alt="BMI Classification" className="w-full sm:w-11/12 p-6 m-2 justify-center text-center" /> */}
            </div>
          ) : (
            <h2 className="text-xl sm:text-xl p-6 m-2">
              Check your BMI now !!!
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default BmiCard;