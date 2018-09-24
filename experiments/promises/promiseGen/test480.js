/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument2 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return true
};
var argument3 = [607,"C","M",25,"7EOd;7G",";","T-"];
var argument4 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_2
};
var argument5 = [783,"#J",59,403,"Cj0G=`","H4%","Xe"];
var argument6 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_0
};
var argument7 = {"":"T","3.446900767455022e+307":7.244374868796811e+307,"vy":"&","1.0990729448442453e+308":"","ui":"","2.167449779662881e+307":1.77230282253867e+308,"cNX6B[Q82hU":3.796987420931665e+307,"x":"}80)Q|","}":""};
var argument8 = {"1.7406774573501522e+308":403,"3.312781626398577e+307":403,"1.5911113257915319e+308":1.7976931348623157e+308,"P":"-E","1.2870422650913905e+308":""};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.catch(argument2,argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument4,argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.catch(argument6,argument7,argument8)
}
catch(e) {
r_3= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test480.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)