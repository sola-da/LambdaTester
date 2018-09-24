





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument2 = r_0;
var argument3 = 1.7689204536674795e+307;
var argument4 = function (completion) {
 callbackArguments.push(arguments) 

    return {
        text: completion.name,
        type: completion.message,
        guess: !!res.guess
    };
};
var argument5 = false;
var argument6 = true;
var argument7 = function (user) {
 callbackArguments.push(arguments) 

    return '' + user.id;
};
var argument8 = null;
var argument9 = true;
var argument10 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument11 = false;
var argument12 = {"460":5e-324,"1.2962413057235883e+307":157,"":"","@":823,"1.118827279977006e+308":"","UWm(":"6_","3.805391123024174e+307":823};
var base_0 = [783,783,783,655,213,25,242]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,783,783,655,213,25,242]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,783,783,655,213,25,242]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,783,783,655,213,25,242]
var r_3= undefined
try {
r_3 = base_3.map(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/map/mapMined/test664.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)