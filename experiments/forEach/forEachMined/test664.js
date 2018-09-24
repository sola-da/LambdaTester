





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    item.draw(viewport.lighting);
};
var argument2 = false;
var argument3 = function (scopeCharts) {
 callbackArguments.push(arguments) 

    me._coordinateScopeAxes(axis.id, scopeCharts);
};
var argument4 = r_0;
var argument5 = null;
var argument6 = function (c) {
 callbackArguments.push(arguments) 

    var source = c[vars.edges.source], target = c[vars.edges.target];
    var claim = target[vars.id.value] == primaryId ? source : target;
    claimed.push(claim[vars.id.value]);
};
var argument7 = function (locale) {
 callbackArguments.push(arguments) 

    var target = bundlePathAndName + '/' + locale;
    if (has('dojo-preload-i18n-Api')) {
        checkForLegacyModules(target);
    }
    if (!cache[target]) {
        doLoad(require, bundlePathAndName, bundlePath, bundleName, locale, finish);
    } else {
        finish();
    }
};
var base_0 = ["I","s(S:C",-100,"j;","P",655,"^",893,595]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["I","s(S:C",-100,"j;","P",655,"^",893,595]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["I","s(S:C",-100,"j;","P",655,"^",893,595]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["I","s(S:C",-100,"j;","P",655,"^",893,595]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test664.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)