





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return typeof item == 'number' || item && !item.hasOwnProperty('x');
};
var argument2 = null;
var argument3 = function (el) {
 callbackArguments.push(arguments) 

    return el.num === 3 && el.char === 'C';
};
var argument4 = function (prop) {
 callbackArguments.push(arguments) 

    nextValue = nextValue.getProperty(prop);
    return nextValue == null;
};
var argument5 = null;
var argument6 = true;
var argument7 = function (co) {
 callbackArguments.push(arguments) 

    return coHasOriginalValues(co);
};
var base_0 = ["F","NX6B[Q82hU","#x","<","80)Q|","K","Q"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["F","NX6B[Q82hU","#x","<","80)Q|","K","Q"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["F","NX6B[Q82hU","#x","<","80)Q|","K","Q"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["F","NX6B[Q82hU","#x","<","80)Q|","K","Q"]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someMined/test341.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)