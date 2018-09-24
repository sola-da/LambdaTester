





var callbackArguments = [];
var argument1 = function (ns) {
 callbackArguments.push(arguments) 

    tlns[ns] = normalizePath(require.toUrl(ns, null, '_').replace(/(\.js)?(\?.*)?$/, ''));
};
var argument2 = null;
var argument3 = function (x) {
 callbackArguments.push(arguments) 

    acc.push(this.path);
};
var argument4 = null;
var argument5 = function (v, i) {
 callbackArguments.push(arguments) 

    if (getAxisId(id) === getAxisId(baseId) && ys[baseId] && !(hasPositiveValue && +v < 0)) {
        ys[baseId][i] += +v;
    }
};
var argument6 = function (fold) {
 callbackArguments.push(arguments) 

    this.expandFold(fold);
};
var argument7 = ["u|m"];
var argument8 = 122;
var base_0 = [59,100,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,100,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,100,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,100,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test39.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)