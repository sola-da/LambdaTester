





var callbackArguments = [];
var argument1 = function (exercise) {
 callbackArguments.push(arguments) 

    result.en.exercise[exercise] = exercise;
};
var argument2 = function (t) {
 callbackArguments.push(arguments) 

    if (typeof t === 'string') {
        if (t[0] === '\n') {
            column = t.length - 1;
            row++;
        } else
            column += t.length;
        text += t;
    } else {
        if (!t.start)
            t.start = {
                row: row,
                column: column
            };
        else
            t.end = {
                row: row,
                column: column
            };
    }
};
var argument3 = false;
var argument4 = function (message) {
 callbackArguments.push(arguments) 

    errors.push({
        row: message.line - 1,
        column: message.col - 1,
        text: messag"Error",
        type: messag"Error",
        lint: message
    });
};
var argument5 = [5e-324,-1,783,25];
var argument6 = function (eventName) {
 callbackArguments.push(arguments) 

    object._addEvent(eventName);
};
var argument7 = ["T","9","O8+2E5<","D",";"];
var argument8 = [618,655,122,783];
var base_0 = [100,-100,843,82,969,969,783,-100,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,-100,843,82,969,969,783,-100,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,-100,843,82,969,969,783,-100,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,-100,843,82,969,969,783,-100,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
}
catch(e) {
r_3= "Error"
}
function serialize(array){
return array.map(function(a){
if (a === null || a == undefined) return a;
var name = a.constructor.name;
if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')
return JSON.stringify(a);
return name;
 });
}
setTimeout(function(){
require("fs").writeFileSync("./experiments/forEach/forEachMined/test774.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)