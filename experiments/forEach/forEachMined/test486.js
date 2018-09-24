





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    e.regex = new RegExp(e.source, 'gi');
    CHANNEL.emotes.push(e);
};
var argument2 = null;
var argument3 = function (asserterName) {
 callbackArguments.push(arguments) 

    var pd = Object.getOwnPropertyDescriptor(ctx, asserterName), functionProtoPD = Object.getOwnPropertyDescriptor(Function.prototype, asserterName);
    if (functionProtoPD && !functionProtoPD.configurable)
        return;
    if (asserterName === 'arguments')
        return;
    Object.defineProperty(assert, asserterName, pd);
};
var argument4 = null;
var argument5 = function (k) {
 callbackArguments.push(arguments) 

    console.log('Style removed \'' + k + ': ' + old[k] + '\'', ev.target);
};
var argument6 = true;
var argument7 = {"59":7.763249420448093e+307,"157":"","":"]","1.16854316670778e+308":"","V2_":1.2182049427834077e+308};
var argument8 = function (desc) {
 callbackArguments.push(arguments) 

    var bundle = dojo.i18n.getLocalization(desc.pkg, desc.name, locale);
    gregorian = dojo.mixin(gregorian, bundle);
};
var argument9 = false;
var base_0 = [893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test486.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)