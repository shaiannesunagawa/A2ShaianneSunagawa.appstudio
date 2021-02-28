let switchName = prompt('Enter your first name')

let switchState = prompt('Enter your state (2 letter abbreviation ie NE or FL)')

let switchTemperature = Number(prompt('Enter the temperature (number only) in Fahrenheit'))

let switchOutput1 = "wear a warm coat, hat, scarf and gloves."

let switchOutput2 = "wear a warm coat but you won't need a hat, scarf or gloves."

let switchOutput3 = "wear your warmest coat, a warm hat, a scarf, and warm gloves."

let switchOutput4 = "wear a warm coat, hat and gloves. Maybe a scarf too."

let switchMessages = [switchOutput1, switchOutput2, switchOutput3, switchOutput4]

switch(switchTemperature + switchState) {
    case 1: (switchTemperature < 32 && switchState == 'NE')
        console.log(`${switchName}, ${switchMessages[0]}`)
        break;
    case 2: ((switchTemperature > 32 && switchTemperature < 50) && switchState == 'NE')
        console.log(`${switchName}, ${switchMessages[1]}`)
        break;
    case 3: ((switchTemperature > 32 && switchTemperature < 50) && switchState == 'FL')
        console.log(`${switchName}, ${switchMessages[2]}`)
        break;
    case 4: ((switchTemperature > 50 && switchTemperature < 70) && switchState == 'FL')
        console.log(`${switchName}, ${switchMessages[3]}`)
        break;
}
