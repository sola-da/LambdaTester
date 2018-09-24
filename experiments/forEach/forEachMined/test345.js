





var callbackArguments = [];
var argument1 = function (type) {
 callbackArguments.push(arguments) 

    var typeAxes = axesByType[type];
    typeAxes && typeAxes.forEach(processAxis);
};
var argument2 = "cV";
var argument3 = false;
var argument4 = function (axis) {
 callbackArguments.push(arguments) 

    var scale = axis.scale;
    if (scale) {
        var d = scale.domain && scale.domain(), r = scale.range && scale.range();
        out.push(axis.id);
        out.push('    domain: ' + (d ? pvc.stringify(d) : '?'));
        out.push('    range : ' + (r ? pvc.stringify(r) : '?'));
    }
};
var argument5 = false;
var argument6 = "";
var argument7 = function (cancelFn) {
 callbackArguments.push(arguments) 

    (cancelFn || noop)(true);
};
var argument8 = function (child) {
 callbackArguments.push(arguments) 

    child.collapse(recurse);
};
var argument9 = 460;
var argument10 = false;
var base_0 = ["U","<=L"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["U","<=L"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["U","<=L"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["U","<=L"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test345.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)