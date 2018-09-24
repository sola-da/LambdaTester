





var callbackArguments = [];
var argument1 = function (s) {
 callbackArguments.push(arguments) 

    return s[vars.id.value] == c[vars.id.value];
};
var argument2 = function (str) {
 callbackArguments.push(arguments) 

    return !goog.string.isEmptySafe(str);
};
var argument3 = null;
var argument4 = null;
var argument5 = function (id) {
 callbackArguments.push(arguments) 

    return ids.indexOf(id) >= 0;
};
var argument6 = true;
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    return getAxisId(d.id) === axisId;
};
var argument8 = true;
var base_0 = [242,"H",627,843,"z",82,-100,-1]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,"H",627,843,"z",82,-100,-1]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,"H",627,843,"z",82,-100,-1]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,"H",627,843,"z",82,-100,-1]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test101.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)