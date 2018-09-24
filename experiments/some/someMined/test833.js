





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return typeof item == 'number' || item && !item.hasOwnProperty('x');
};
var argument2 = false;
var argument3 = [25,100,0,0,403,714];
var argument4 = function (isCustomAttributeFn) {
 callbackArguments.push(arguments) 

    return isCustomAttributeFn.call(null, attributeName);
};
var argument5 = function (variable) {
 callbackArguments.push(arguments) 

    return variable.name === 'parseInt' && variable.defs.length;
};
var argument6 = {"893":1.7053142137069174e+308,"1.105819147433422e+308":1.5420456327115867e+308,"`":"","3.833605058530322e+306":"","":"&","(":"G","3.1708111789531714e+306":7.238389487403282e+307};
var argument7 = function (context) {
 callbackArguments.push(arguments) 

    return context.fn(context, self.v);
};
var base_0 = [618,705,5e-324,607,460,0,25,-100,25]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,705,5e-324,607,460,0,25,-100,25]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,705,5e-324,607,460,0,25,-100,25]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,705,5e-324,607,460,0,25,-100,25]
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
require("fs").writeFileSync("./experiments/some/someMined/test833.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)