





var callbackArguments = [];
var argument1 = function (type) {
 callbackArguments.push(arguments) 

    return tokenTypes.indexOf(type) !== -1;
};
var argument2 = "yZ*D";
var argument3 = function (haystack) {
 callbackArguments.push(arguments) 

    return contains(haystack, needle);
};
var argument4 = r_0;
var argument5 = null;
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument7 = {"":4.958917053864991e+307,"1.533127614102055e+308":1.4150916045295601e+308};
var argument8 = 618;
var argument9 = function (type) {
 callbackArguments.push(arguments) 

    return tokenTypes.indexOf(type) !== -1;
};
var argument10 = [714,122,49,655];
var base_0 = [-1,823,403,49]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,823,403,49]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,823,403,49]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,823,403,49]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyMined/test107.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)