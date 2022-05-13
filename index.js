// code your solution here
function saturdayFun(str){
if(str !== undefined)
    return `This Saturday, I want to ${str}!`
else
    return "This Saturday, I want to roller-skate!"
}
function mondayWork(str){
    if(str !== undefined)
        return `This Monday, I will ${str}.`
    else
        return "This Monday, I will go to the office."
    }
function   wrapAdjective(a){

if( a==="*")
    return function(str){
        return `You are *${str}*!`
    }
if (a==="||")
    return function(str){
        return `You are ||${str}||!`
    }
}