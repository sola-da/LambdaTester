





var callbackArguments = [];
var argument1 = function (v) {
 callbackArguments.push(arguments) 

    v = (v || 0).toString(16);
    return v.length === 1 ? '0' + v : v;
};
var argument2 = {"618":8.945013729830286e+307,"1.3571928124337112e+308":"p","":126};
var argument3 = true;
var argument4 = function (v, ix) {
 callbackArguments.push(arguments) 

    meta = jra.visitNode(v, mc, nodeContext) || {};
    v = meta.node || v;
    return processMeta(mc, v, meta, function (refValue) {
        result[key][ix] = refValue();
    });
};
var argument5 = function (v, i) {
 callbackArguments.push(arguments) 

    return {
        tileSource: v.starter.tileSource,
        clip: v.starter.clip
    };
};
var argument6 = function (part) {
 callbackArguments.push(arguments) 

    part = part.replace(/:/g, '_');
    return _ = path.join(_, part);
};
var base_0 = [25,49,843,893,783,82,-100,100,705]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,49,843,893,783,82,-100,100,705]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,49,843,893,783,82,-100,100,705]
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
require("fs").writeFileSync("./experiments/map/mapMined/test492.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)