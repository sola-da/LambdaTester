





var callbackArguments = [];
var argument1 = function (a) {
 callbackArguments.push(arguments) 

    i++;
    arr.push(a + 3);
    return i <= 3;
};
var argument2 = false;
var argument3 = {"157":"Pb"};
var argument4 = function (v, i) {
 callbackArguments.push(arguments) 

    return v === a2[i];
};
var argument5 = false;
var argument6 = function (haystack) {
 callbackArguments.push(arguments) 

    return contains(haystack, needle);
};
var argument7 = "d";
var argument8 = function (type) {
 callbackArguments.push(arguments) 

    return tokenTypes.indexOf(type) !== -1;
};
var argument9 = null;
var base_0 = ["7jA","aQ9=","r2DO1","8r","%:J","q","5",";!C","Sl"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["7jA","aQ9=","r2DO1","8r","%:J","q","5",";!C","Sl"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["7jA","aQ9=","r2DO1","8r","%:J","q","5",";!C","Sl"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["7jA","aQ9=","r2DO1","8r","%:J","q","5",";!C","Sl"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyMined/test445.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)