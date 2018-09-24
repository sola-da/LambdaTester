





var callbackArguments = [];
var argument1 = function (v) {
 callbackArguments.push(arguments) 

    return v2(v);
};
var argument2 = null;
var argument3 = function (other) {
 callbackArguments.push(arguments) 

    return _.indexOf(other, item) >= 0;
};
var argument4 = null;
var argument5 = function () {
 callbackArguments.push(arguments) 

    return true;
};
var argument6 = function (op) {
 callbackArguments.push(arguments) 

    return Op.isInsert(op);
};
var argument7 = true;
var argument8 = {"4":705,"":"GY","$+P":705};
var base_0 = [823,25,100,595,783,1.7976931348623157e+308,783,25,403]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,25,100,595,783,1.7976931348623157e+308,783,25,403]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,25,100,595,783,1.7976931348623157e+308,783,25,403]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,25,100,595,783,1.7976931348623157e+308,783,25,403]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyMined/test840.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)