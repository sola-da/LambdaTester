





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    return e.constructor === Object && '@id' in e && e['@id'] === flattened['@id'];
};
var argument2 = function (d) {
 callbackArguments.push(arguments) 

    return typeof deps[d] === 'string';
};
var argument3 = true;
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return ids.indexOf(d[vars.id.value]) >= 0;
};
var argument5 = true;
var argument6 = 157;
var argument7 = function (a, b, c) {
 callbackArguments.push(arguments) 

    return b == c.indexOf(a);
};
var argument8 = null;
var base_0 = [618,"Rv]"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,"Rv]"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test303.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)