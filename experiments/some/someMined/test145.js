





var callbackArguments = [];
var argument1 = function (filter) {
 callbackArguments.push(arguments) 

    return filter(json);
};
var argument2 = function (key) {
 callbackArguments.push(arguments) 

    var m = /(traceur@[^\/]*\/)/.exec(key);
    if (m) {
        $__0.testingPrefix_ = m[1];
        return true;
    }
};
var argument3 = null;
var argument4 = function (el) {
 callbackArguments.push(arguments) 

    return el.num === 2 && el.char === 'B';
};
var argument5 = 5.846115625543157e+307;
var argument6 = function (alarm) {
 callbackArguments.push(arguments) 

    return alarm.name === alarmName;
};
var argument7 = {"714":1.5397575731158556e+308,"843":"","893":1.7976931348623157e+308,"":595,"t":7.074809975712086e+307,"^]^":1.1610261190529179e+308,"Q{":8.993646788714374e+307};
var argument8 = {"9":1.5273455346198765e+308,"1.5734174244186152e+308":242,"y":"","":"","-":"cc","8Fx":59};
var base_0 = [126,893,618,843,705,100]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,893,618,843,705,100]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,893,618,843,705,100]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,893,618,843,705,100]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someMined/test145.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)