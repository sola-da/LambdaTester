





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return false;
};
var argument2 = [460,627,25,122,655,-100];
var argument3 = function (v, i) {
 callbackArguments.push(arguments) 

    return v === a2[i];
};
var argument4 = function (p) {
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
var argument5 = {"213":1.7976931348623157e+308,"460":1.142579146076573e+308,"1.2488183658680197e+308":"","=":1.611621919728253e+308};
var argument6 = null;
var argument7 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument8 = true;
var argument9 = r_0;
var base_0 = ["7","u","<#",">h","b",714]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["7","u","<#",">h","b",714]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["7","u","<#",">h","b",714]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["7","u","<#",">h","b",714]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyMined/test38.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)