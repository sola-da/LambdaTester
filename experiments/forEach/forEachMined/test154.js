





var callbackArguments = [];
var argument1 = function (arg) {
 callbackArguments.push(arguments) 

    arg._walk(visitor);
};
var argument2 = false;
var argument3 = function (p) {
 callbackArguments.push(arguments) 

    this[p] = value;
};
var argument4 = {"714":"","":"","5%":714,"1.1355955927777491e+308":"d"};
var argument5 = function (step) {
 callbackArguments.push(arguments) 

    f.addColorStop(step.offset, g.normalizeColor(step.color).toString());
};
var argument6 = 403;
var argument7 = function (d, i) {
 callbackArguments.push(arguments) 

    if (vars.depth.value == i) {
        var prev = m[vars.id.nesting[i - 1]];
        if (typeof prev === 'string') {
            m[d] = 'd3plus_other_' + prev;
        } else {
            m[d] = 'd3plus_other';
        }
    } else if (i > vars.depth.value) {
        delete m[d];
    }
};
var argument8 = r_2;
var argument9 = [5e-324];
var base_0 = [213,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,-1]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test154.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)