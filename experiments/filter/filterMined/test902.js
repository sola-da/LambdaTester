





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return getAxisId(d.id) === axisId;
};
var argument2 = function (d) {
 callbackArguments.push(arguments) 

    return isTargetToShow(d.id);
};
var argument3 = function (value) {
 callbackArguments.push(arguments) 

    return !_.contains(rest, value);
};
var argument4 = null;
var argument5 = function (r) {
 callbackArguments.push(arguments) 

    if (r instanceof Rule && r.variable) {
        return !ruleset.variable(r.name);
    }
    return true;
};
var base_0 = [122,"e#","1B(gl"," 97",705,"vl",-100,"|"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,"e#","1B(gl"," 97",705,"vl",-100,"|"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,"e#","1B(gl"," 97",705,"vl",-100,"|"]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,"e#","1B(gl"," 97",705,"vl",-100,"|"]
var r_3= undefined
try {
r_3 = base_3.filter(argument5)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test902.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)