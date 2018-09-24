





var callbackArguments = [];
var argument1 = function (rawX, i) {
 callbackArguments.push(arguments) 

    return generateTargetX(rawX, id, i);
};
var argument2 = function (c) {
 callbackArguments.push(arguments) 

    return c.toString();
};
var argument3 = null;
var argument4 = r_1;
var argument5 = function (e) {
 callbackArguments.push(arguments) 

    return e.refKey || e.key;
};
var argument6 = true;
var argument7 = r_2;
var argument8 = function (x) {
 callbackArguments.push(arguments) 

    return x.id;
};
var argument9 = {"213":"","$XVT":"","1.3562076857143314e+308":1.6115959568470465e+308,"Ab":"j3K"};
var base_0 = [403,59,893,714]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,59,893,714]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test539.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)