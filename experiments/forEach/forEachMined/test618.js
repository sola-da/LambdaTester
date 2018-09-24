





var callbackArguments = [];
var argument1 = function (kv) {
 callbackArguments.push(arguments) 

    var offset = kv.indexOf('=');
    if (offset === -1) {
        return;
    }
    params[decodeURIComponent(kv.substring(0, offset))] = decodeURIComponent(kv.substring(offset + 1));
};
var argument2 = false;
var argument3 = null;
var argument4 = function (p) {
 callbackArguments.push(arguments) 

    secondaries = secondaries.concat(vars.edges.connections(p[vars.id.value], vars.id.value, true));
};
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    countryById[d.id] = d.name;
};
var argument6 = function (e) {
 callbackArguments.push(arguments) 

    e.value = fun.reduce(e.key, e.value);
    e.value = typeof e.value === 'undefined' ? null : e.value;
    e.key = e.key[0][0];
};
var argument7 = r_0;
var argument8 = null;
var base_0 = ["E",5e-324,"_^^YLf"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["E",5e-324,"_^^YLf"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["E",5e-324,"_^^YLf"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["E",5e-324,"_^^YLf"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test618.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)