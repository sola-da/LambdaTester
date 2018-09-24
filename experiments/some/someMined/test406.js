





var callbackArguments = [];
var argument1 = function (element) {
 callbackArguments.push(arguments) 

    return element;
};
var argument2 = null;
var argument3 = function (hint) {
 callbackArguments.push(arguments) 

    return splitUrl[0].indexOf(hint) > -1;
};
var argument4 = r_0;
var argument5 = "";
var argument6 = function (prop) {
 callbackArguments.push(arguments) 

    nextValue = nextValue.getProperty(prop);
    return nextValue == null;
};
var argument7 = {"25":"","595":0,"1.7211339535535968e+308":"W0","S":823,"":823,"1.5509973124588074e+308":460,"8.960078865738815e+307":"","Lg@Zz":";j","}C":""};
var argument8 = false;
var argument9 = function cb_some(pair) {
 callbackArguments.push(arguments) 

    return pair[0] === 'Dispatcher' && pair[1] === 'express';
};
var argument10 = {"59":6.566779673271987e+307,"893":"BA","paG":"",">":"","1.138485125049531e+308":"V","t0G":893,"":"","5.049917236330547e+307":655};
var argument11 = null;
var base_0 = [783,705,893,403,100,1.7976931348623157e+308,122,969,122]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,705,893,403,100,1.7976931348623157e+308,122,969,122]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,705,893,403,100,1.7976931348623157e+308,122,969,122]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,705,893,403,100,1.7976931348623157e+308,122,969,122]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someMined/test406.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)