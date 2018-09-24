





var callbackArguments = [];
var argument1 = function (path) {
 callbackArguments.push(arguments) 

    var module = require('./' + path);
    for (var i in module) {
        classes[i] = module[i];
    }
};
var argument2 = function (gPoint) {
 callbackArguments.push(arguments) 

    gPoint.setAttribute('cx', Number(gPoint.getAttribute('cx')) + that.pt.x);
    gPoint.setAttribute('cy', Number(gPoint.getAttribute('cy')) + that.pt.y);
};
var argument3 = function (onLoad) {
 callbackArguments.push(arguments) 

    onLoad && onLoad(module);
};
var argument4 = function (leaf) {
 callbackArguments.push(arguments) 

    if (leaf.rev !== win && !leaf.opts.deleted) {
        conflicts.push(leaf.rev);
    }
};
var argument5 = null;
var argument6 = true;
var base_0 = [460,213]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,213]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,213]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,213]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test918.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)