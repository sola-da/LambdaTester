





var callbackArguments = [];
var argument1 = function (klass) {
 callbackArguments.push(arguments) 

    return $a.hasClass(klass);
};
var argument2 = function (frame) {
 callbackArguments.push(arguments) 

    if (/UncoatedModuleInstantiator/.test(frame))
        return true;
    stack.push(frame);
};
var argument3 = function (el) {
 callbackArguments.push(arguments) 

    return el.num === 1 && el.char === 'A';
};
var argument4 = 1.5553113410464203e+308;
var argument5 = r_0;
var argument6 = function (co) {
 callbackArguments.push(arguments) 

    return coHasOriginalValues(co);
};
var argument7 = "";
var argument8 = "_";
var base_0 = [-1,403,157,49,714,783,893]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,403,157,49,714,783,893]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,403,157,49,714,783,893]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,403,157,49,714,783,893]
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
require("fs").writeFileSync("./experiments/some/someMined/test969.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)