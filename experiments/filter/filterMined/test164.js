





var callbackArguments = [];
var argument1 = function (event) {
 callbackArguments.push(arguments) 

    return event.pid === processId && event.name === event_name && typeof event.args !== 'undefined' && typeof event.args.data !== 'undefined';
};
var argument2 = true;
var argument3 = 8.537629183817913e+307;
var argument4 = function (t) {
 callbackArguments.push(arguments) 

    return years.indexOf(t.getTime()) < 0;
};
var argument5 = r_1;
var argument6 = function (atom) {
 callbackArguments.push(arguments) 

    return def.hasOwnProp.call(atomsByKey, atom.key);
};
var argument7 = false;
var argument8 = function (item) {
 callbackArguments.push(arguments) 

    return resp.items.indexOf(item.data) !== -1;
};
var base_0 = [714,100,823,969,403,242,122,714,-100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,100,823,969,403,242,122,714,-100]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,100,823,969,403,242,122,714,-100]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,100,823,969,403,242,122,714,-100]
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test164.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)