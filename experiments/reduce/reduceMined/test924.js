





var callbackArguments = [];
var argument1 = function (prev, cur) {
 callbackArguments.push(arguments) 

    return prev || cur(entity);
};
var argument2 = function (x, child) {
 callbackArguments.push(arguments) 

    return x + child.x;
};
var argument3 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument4 = function (obj, pair) {
 callbackArguments.push(arguments) 

    var i = pair.indexOf('='), key = pair.slice(0, i), val = pair.slice(++i);
    obj[key] = decodeURIComponent(val);
    return obj;
};
var argument5 = r_2;
var argument6 = null;
var base_0 = ["f",893,893,122,714,"(","$#","[@"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["f",893,893,122,714,"(","$#","[@"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["f",893,893,122,714,"(","$#","[@"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["f",893,893,122,714,"(","$#","[@"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test924.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)