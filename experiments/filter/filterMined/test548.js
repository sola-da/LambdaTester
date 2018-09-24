





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    return projectModel.hasPermission(cycle('stages')(c.nth(0))('visible'), project('role'), project('events'));
};
var argument2 = r_0;
var argument3 = function (patch) {
 callbackArguments.push(arguments) 

    return !/[\/]length/gi.test(patch.path);
};
var argument4 = function (elt) {
 callbackArguments.push(arguments) 

    if (elt.value === v && !elt.undef) {
        if (elt.unused === true) {
            elt.unused = false;
        }
        return v;
    }
};
var argument5 = null;
var argument6 = false;
var argument7 = function (file) {
 callbackArguments.push(arguments) 

    return /\.json$/.test(file);
};
var argument8 = null;
var base_0 = [49,714,213,213,213,823]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,714,213,213,213,823]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/filter/filterMined/test548.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)