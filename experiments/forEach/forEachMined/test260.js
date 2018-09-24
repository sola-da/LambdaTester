





var callbackArguments = [];
var argument1 = function (step) {
 callbackArguments.push(arguments) 

    if (step.ncyBreadcrumb && step.ncyBreadcrumb.label) {
        var parseLabel = $interpolate(step.ncyBreadcrumb.label);
        step.ncyBreadcrumbLabel = parseLabel(viewScope);
        registerWatchers(labelWatchers, parseLabel, viewScope, step);
    } else {
        step.ncyBreadcrumbLabel = step.name;
    }
};
var argument2 = null;
var argument3 = r_0;
var argument4 = function (name) {
 callbackArguments.push(arguments) 

    map[name] = getOwnPropertyDescriptor(obj, name);
};
var argument5 = function (m) {
 callbackArguments.push(arguments) 

    theme = this.addMixin(theme, elementType, m);
};
var argument6 = false;
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    d.units = +d.units;
};
var base_0 = ["LV","32","R","n)M"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["LV","32","R","n)M"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["LV","32","R","n)M"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["LV","32","R","n)M"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test260.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)