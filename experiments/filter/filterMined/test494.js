





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return isTargetToShow(d.id);
};
var argument2 = function (d, i) {
 callbackArguments.push(arguments) 

    return d & 1;
};
var argument3 = 5.244340184034955e+307;
var argument4 = {"2":705,"618":"UT","627":"z","":"&","+M":1.5827800558100664e+308,"9.746021791196116e+307":""};
var argument5 = function (prop) {
 callbackArguments.push(arguments) 

    return !/^\$/.test(prop);
};
var argument6 = function (keyword) {
 callbackArguments.push(arguments) 

    return /^\w+$/.test(keyword);
};
var base_0 = [893,100,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,100,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test494.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)