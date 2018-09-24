





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    return c;
};
var argument2 = ["5",")","[","&nb","M","7ko","$","Q:"];
var argument3 = function (t) {
 callbackArguments.push(arguments) 

    return t <= range[1] && t >= range[0];
};
var argument4 = true;
var argument5 = 3.3794996760718543e+307;
var argument6 = function (ext) {
 callbackArguments.push(arguments) 

    return ext.name === 'EnumType';
};
var argument7 = false;
var argument8 = null;
var argument9 = function () {
 callbackArguments.push(arguments) 

    return /(auto|scroll)/.test($.css(this, 'overflow') + $.css(this, 'overflow-y') + $.css(this, 'overflow-x'));
};
var argument10 = r_3;
var base_0 = [213,403,1.7976931348623157e+308,59,618]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,403,1.7976931348623157e+308,59,618]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test688.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)