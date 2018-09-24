





var callbackArguments = [];
var argument1 = function (v, ix) {
 callbackArguments.push(arguments) 

    meta = jra.visitNode(v, mc, nodeContext) || {};
    v = meta.node || v;
    return processMeta(mc, v, meta, function (refValue) {
        result[key][ix] = refValue();
    });
};
var argument2 = null;
var argument3 = function (s) {
 callbackArguments.push(arguments) 

    return s ? s.replace('.', '').toLowerCase() : s;
};
var argument4 = r_1;
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    return context.propertyPathFn(item.propertyPath) + (item.isDesc ? ' desc' : '');
};
var argument6 = function (path) {
 callbackArguments.push(arguments) 

    return '.tmp/public/' + path;
};
var base_0 = [655,403,969,0,627,59,893,714,595,213]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,403,969,0,627,59,893,714,595,213]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,403,969,0,627,59,893,714,595,213]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,403,969,0,627,59,893,714,595,213]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test401.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)