





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    return targetIds.indexOf(id) < 0;
};
var argument2 = r_0;
var argument3 = function (line) {
 callbackArguments.push(arguments) 

    return _.str.include(lin"Error".toLowerCase(), term.toLowerCase());
};
var argument4 = null;
var argument5 = -100;
var argument6 = function (v) {
 callbackArguments.push(arguments) 

    return fns.isin(v.property, data.related_properties);
};
var argument7 = function (option) {
 callbackArguments.push(arguments) 

    return option.selected;
};
var argument8 = true;
var base_0 = ["D","P|j4","it","G","(","meq","l","#"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["D","P|j4","it","G","(","meq","l","#"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["D","P|j4","it","G","(","meq","l","#"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["D","P|j4","it","G","(","meq","l","#"]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test531.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)