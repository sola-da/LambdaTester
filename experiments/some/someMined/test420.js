





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return start >= item.start && end <= item.end;
};
var argument2 = function (alarm) {
 callbackArguments.push(arguments) 

    return alarm.name === alarmName;
};
var argument3 = 1.0302428570304664e+308;
var argument4 = r_1;
var argument5 = function () {
 callbackArguments.push(arguments) 

    return true;
};
var argument6 = true;
var argument7 = r_2;
var argument8 = function (variable) {
 callbackArguments.push(arguments) 

    if (variable.name === ref.identifier.name) {
        if (!isImplicitGlobal(variable) || Object.hasOwnProperty.call(variable, 'writeable')) {
            declaredGlobal = variable;
            return true;
        }
    }
    return false;
};
var argument9 = "";
var base_0 = [893,-100,-100,618,627,714,460]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,-100,-100,618,627,714,460]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,-100,-100,618,627,714,460]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,-100,-100,618,627,714,460]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someMined/test420.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)