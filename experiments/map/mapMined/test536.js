





var callbackArguments = [];
var argument1 = function (dir) {
 callbackArguments.push(arguments) 

    return async.glob(head + dir + '/' + tail.slice(1).join('/'));
};
var argument2 = true;
var argument3 = 7.724446502900637e+307;
var argument4 = function (x) {
 callbackArguments.push(arguments) 

    return x.value || x;
};
var argument5 = function (p) {
 callbackArguments.push(arguments) 

    return p.value;
};
var argument6 = function (c) {
 callbackArguments.push(arguments) 

    return '.' + c;
};
var base_0 = [969,655,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,655,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test536.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)