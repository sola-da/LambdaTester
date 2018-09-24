





var callbackArguments = [];
var argument1 = function (t) {
 callbackArguments.push(arguments) 

    return linkto(t, htmlsafe(t), cssClass);
};
var argument2 = {"595":1.7827021435410226e+308,"714":1.0830644608502116e+308,"3.0315953853980063e+307":"r","1.0279135680084984e+308":"M","4Zp":627,"":49};
var argument3 = function (li, num) {
 callbackArguments.push(arguments) 

    return num !== index ? num : null;
};
var argument4 = false;
var argument5 = false;
var argument6 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument7 = false;
var argument8 = null;
var argument9 = function (r) {
 callbackArguments.push(arguments) 

    return r.get(attribute);
};
var base_0 = ["p","(x","[","^","t5K"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["p","(x","[","^","t5K"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["p","(x","[","^","t5K"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["p","(x","[","^","t5K"]
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test88.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)