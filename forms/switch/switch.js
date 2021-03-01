// declare the variable that will store the name the user enters
let switchName = prompt('Enter your first name')

// declare the variable that will store the state the user enters
let switchState = prompt('Enter your state (2 letter abbreviation ie NE or FL)')

// declare the variable that will store the temperature as a number that the user enters 
let switchTemperature = Number(prompt('Enter the temperature (number only) in Fahrenheit'))

// declaring variables to store the messages that will be put to the console
let switchOutput1 = "wear a warm coat, hat, scarf and gloves."

let switchOutput2 = "wear a warm coat but you won't need a hat, scarf or gloves."

let switchOutput3 = "wear your warmest coat, a warm hat, a scarf, and warm gloves."

let switchOutput4 = "wear a warm coat, hat and gloves. Maybe a scarf too."

let switchMessages = [switchOutput1, switchOutput2, switchOutput3, switchOutput4]

// the switch code that runs the scenarios and picks/displays the correct message
// based on user inputs
switch(true) {
    case switchTemperature < 32 && switchState == 'NE' :
        console.log(`${switchName}, ${switchMessages[0]}`);
        break;
        // for when the temperature is less than 32 in NE
            
    case (switchTemperature > 32 && switchTemperature < 50) && switchState == 'NE' :
        console.log(`${switchName}, ${switchMessages[1]}`);
        break;
        // for when the temp is between 32 and 50 in NE

    case (switchTemperature > 32 && switchTemperature < 50) && switchState == 'FL' :
        console.log(`${switchName}, ${switchMessages[2]}`);
        break;
        // for when the temp is between 32 and 50 in FL
        
    case (switchTemperature > 50 && switchTemperature < 70) && switchState == 'FL' :
        console.log(`${switchName}, ${switchMessages[3]}`);
        break;
        // for when the temp is between 50 and 70 in FL
        
    default:
        console.log(`${switchName}, we have no advice for you.`)
        // default statement for when the temp/state fall outside the set cases
}
