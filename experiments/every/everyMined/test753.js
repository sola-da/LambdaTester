





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return false;
};
var argument2 = null;
var argument3 = function (haystack) {
 callbackArguments.push(arguments) 

    return contains(haystack, needle);
};
var argument4 = null;
var argument5 = r_0;
var argument6 = function (item) {
 callbackArguments.push(arguments) 

    return Math.floor(epsilon + v.dotProduct(n, v.substract(item, a))) <= 0;
};
var argument7 = r_2;
var argument8 = r_0;
var argument9 = function (type) {
 callbackArguments.push(arguments) 

    return tokenTypes.indexOf(type) !== -1;
};
var argument10 = true;
var argument11 = null;
var base_0 = ["<","r8","x2zw>IWn","jL","JSr}","X","f",">",":","%"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<","r8","x2zw>IWn","jL","JSr}","X","f",">",":","%"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<","r8","x2zw>IWn","jL","JSr}","X","f",">",":","%"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["<","r8","x2zw>IWn","jL","JSr}","X","f",">",":","%"]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyMined/test753.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)