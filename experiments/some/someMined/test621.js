





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return typeof item == 'number' || item && !item.hasOwnProperty('x');
};
var argument2 = false;
var argument3 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === 'docA';
};
var argument4 = null;
var argument5 = 6.197670619595775e+307;
var argument6 = function (v) {
 callbackArguments.push(arguments) 

    return v2(v);
};
var argument7 = r_0;
var argument8 = function (klass) {
 callbackArguments.push(arguments) 

    return $a.hasClass(klass);
};
var argument9 = r_1;
var argument10 = null;
var base_0 = [213,242,1.7976931348623157e+308,893,49,595,-100,595,714]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,242,1.7976931348623157e+308,893,49,595,-100,595,714]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,242,1.7976931348623157e+308,893,49,595,-100,595,714]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,242,1.7976931348623157e+308,893,49,595,-100,595,714]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someMined/test621.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)