





var callbackArguments = [];
var argument1 = function (p) {
 callbackArguments.push(arguments) 

    if (p in deps) {
        return true;
    }
    done({
        code: 'UPDATE_PKG_NOT_FOUND',
        message: '"' + p + '" is not a dependency of the current package.',
        data: { name: p }
    });
};
var argument2 = function (el) {
 callbackArguments.push(arguments) 

    return !fn(el);
};
var argument3 = {"627":157,"705":1.5353607029470389e+307,"893":460,"7.376860728058408e+307":"|2H","":"8","1.2550724163441896e+308":1.7976931348623157e+308,"-1":1.4849901113530571e+308,"4.395867260275494e+307":8.746279461342109e+307};
var argument4 = function (def) {
 callbackArguments.push(arguments) 

    return def.message === 'ImplicitGlobalVariable';
};
var argument5 = null;
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    return x.length > 0;
};
var argument7 = null;
var argument8 = "5";
var base_0 = [595,100,25,627,122,783,403,25,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,100,25,627,122,783,403,25,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,100,25,627,122,783,403,25,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,100,25,627,122,783,403,25,1.7976931348623157e+308]
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
require("fs").writeFileSync("./experiments/every/everyMined/test940.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)