





var callbackArguments = [];
var argument1 = function (other) {
 callbackArguments.push(arguments) 

    return _.contains(other, item);
};
var argument2 = null;
var argument3 = function (v, i) {
 callbackArguments.push(arguments) 

    return v === a2[i];
};
var argument4 = r_0;
var argument5 = "";
var argument6 = function (pred) {
 callbackArguments.push(arguments) 

    pred._validate(entityType, usesNameOnServer);
};
var argument7 = {"25":"","595":0,"1.7211339535535968e+308":"W0","S":823,"":823,"1.5509973124588074e+308":460,"8.960078865738815e+307":"","Lg@Zz":";j","}C":""};
var argument8 = false;
var argument9 = function (haystack) {
 callbackArguments.push(arguments) 

    return contains(haystack, needle);
};
var argument10 = {"59":6.566779673271987e+307,"893":"BA","paG":"",">":"","1.138485125049531e+308":"V","t0G":893,"":"","5.049917236330547e+307":655};
var argument11 = null;
var base_0 = [783,705,893,403,100,1.7976931348623157e+308,122,969,122]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,705,893,403,100,1.7976931348623157e+308,122,969,122]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,705,893,403,100,1.7976931348623157e+308,122,969,122]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,705,893,403,100,1.7976931348623157e+308,122,969,122]
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
require("fs").writeFileSync("./experiments/every/everyMined/test406.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)