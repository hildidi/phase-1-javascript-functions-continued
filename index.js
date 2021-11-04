
function saturdayFun(activity = "roller-skate"){
    console.log(`This Saturday, I want to ${activity}!`);
    return `This Saturday, I want to ${activity}!`
}   
function mondayWork(task="go to the office"){
    console.log(`This Monday, I will ${task}.`)
    return `This Monday, I will ${task}.`
}
    function wrapAdjective(flair="*"){
        const innerFunction = function (adj = 'special'){
            return `You are ${flair}${adj}${flair}!`;
        }
        return innerFunction 
    }
   