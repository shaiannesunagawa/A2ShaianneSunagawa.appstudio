// declare the variable that will store the name the user enters
let firstName = prompt('Enter your first name')

// declare the variable that will store the state the user enters
let state = prompt('Enter your state (2 letter abbreviation ie NE or FL)')

// declare the variable that will store the temperature as a number that the user enters 
let temperature = Number(prompt('Enter the temperature (number only) in Fahrenheit'))

// declaring variables to store the messages that will be put to the console
let output1 = "wear a warm coat, hat, scarf and gloves"

let output2 = "wear a warm coat but you won't need a hat, scarf or gloves"

let output3 = "wear your warmest coat, a warm hat, a scarf, and warm gloves"

let output4 = "wear a warm coat, hat and gloves. Maybe a scarf too"

let messages = [output1, output2, output3, output4]

// the ifelse code that will select and display the correct message based on the inputs from the user
if (temperature < 32 && state == 'NE') {
    console.log(`${firstName}, ${messages[0]}`)
    // for when the temperature is less than 32 in NE
        
} else if ((temperature > 32 && temperature < 50) && state == 'NE') {
    console.log(`${firstName}, ${messages[1]}`)
    // for when the temp is between 32 and 50 in NE
        
} else if ((temperature > 32 && temperature < 50) && state == 'FL') {
    console.log(`${firstName}, ${messages[2]}`)
    // for when the temp is between 32 and 50 in FL
    
} else if ((temperature > 50 && temperature < 70) && state == 'FL') {
     console.log(`${firstName}, ${messages[3]}`)
     // for when the temp is between 50 and 70 in FL
}    


