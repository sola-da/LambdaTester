





var callbackArguments = [];
var argument1 = function (k) {
 callbackArguments.push(arguments) 

    to[k] = from[k];
};
var argument2 = 403;
var argument3 = null;
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
var argument5 = function (key) {
 callbackArguments.push(arguments) 

    global[key] = globals[key];
};
var argument6 = function (def) {
 callbackArguments.push(arguments) 

    def._walk(visitor);
};
var argument7 = [122,618,627,969,843];
var base_0 = [823]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test19.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)