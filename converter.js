const prompt = require('prompt-sync')();
const initial_unit = prompt('Enter initial number ');
const final_unit = prompt('Enter initial number TYPE (ex: kg) ');

var unitLookupNumber1 = []
var unitLookupType1 = []

var unitLookupNumber2 = []
var unitLookupType2 = []

var exit = 0
while (exit == 0) {
    unitLookupNumber1.push(prompt('Enter first number '))
    unitLookupType1.push(prompt('Enter first number type '))

    unitLookupNumber2.push(prompt('Enter second number '))
    unitLookupType2.push(prompt('Enter second number type '))

    exit = prompt('Enter 1 to stop enter 0 to enter another data conversion ')
}

var done = false
var workingOnNumber = initial_unit
var workingOnUnit = final_unit
var notAllData = false
while (done == false) {


    var firstPos1 = unitLookupType1.indexOf(workingOnUnit)
    var firstPos2 = unitLookupType2.indexOf(workingOnUnit)

    if (firstPos1 > -1) {
        workingOnUnit = unitLookupType2[firstPos1]
        workingOnNumber = ((workingOnNumber * parseFloat(unitLookupNumber2[firstPos1])))
        workingOnNumber = workingOnNumber / (parseFloat(unitLookupNumber1[firstPos1]))
        unitLookupNumber1.splice(firstPos1, 1)
        unitLookupNumber2.splice(firstPos1, 1)
        unitLookupType1.splice(firstPos2, 1)
        unitLookupType2.splice(firstPos2, 1)
    } else if (firstPos2 > -1) {
        workingOnUnit = unitLookupType1[firstPos2]
        workingOnNumber = ((workingOnNumber * parseFloat(unitLookupNumber1[firstPos2])))
        workingOnNumber = workingOnNumber / (parseFloat(unitLookupNumber2[firstPos2]))
        unitLookupNumber1.splice(firstPos2, 1)
        unitLookupNumber2.splice(firstPos2, 1)
        unitLookupType1.splice(firstPos2, 1)
        unitLookupType2.splice(firstPos2, 1)
    }

    if (unitLookupNumber2.length == 0 || (firstPos1 ==-1 && firstPos2 ==-1)) {
        done = true

        if((firstPos1 ==-1 && firstPos2 ==-1)){
        notAllData = true
        }
        
    }


}
console.log("=========================\n\n")
console.log(`${initial_unit} ${final_unit} = ${workingOnNumber} ${workingOnUnit}`)
console.log(`final unit may not be correct`)

if(notAllData){
    console.log("WARNING: DID NOT USE ALL CONVERSION INFORMATION")
}
console.log("\n\n=========================")