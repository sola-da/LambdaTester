





var callbackArguments = [];
var argument1 = function (commandObj, idx, arr) {
 callbackArguments.push(arguments) 

    return commandObj.dialog;
};
var argument2 = function (x) {
 callbackArguments.push(arguments) 

    return x.id;
};
var argument3 = null;
var argument4 = r_1;
var argument5 = function () {
 callbackArguments.push(arguments) 

    return $(this).text();
};
var argument6 = true;
var argument7 = function (li, num) {
 callbackArguments.push(arguments) 

    return num !== index ? num : null;
};
var base_0 = [627,-1,783,122,893,-100,25,403,627]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test651.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)