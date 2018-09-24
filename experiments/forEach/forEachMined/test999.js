





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    maxValue = Math.max(parseFloat(value) || 0, maxValue);
};
var argument2 = false;
var argument3 = null;
var argument4 = function (step) {
 callbackArguments.push(arguments) 

    if (step.ncyBreadcrumb && step.ncyBreadcrumb.label) {
        var parseLabel = $interpolate(step.ncyBreadcrumb.label);
        step.ncyBreadcrumbLabel = parseLabel(viewScope);
        registerWatchers(labelWatchers, parseLabel, viewScope, step);
    } else {
        step.ncyBreadcrumbLabel = step.name;
    }
};
var argument5 = null;
var argument6 = function (key) {
 callbackArguments.push(arguments) 

    if (Array.isArray(fun[key])) {
        body[key] = fun[key];
    } else {
        body[key] = fun[key].toString();
    }
};
var argument7 = null;
var argument8 = function (child) {
 callbackArguments.push(arguments) 

    obj[child.getField()] = child.getValue();
};
var base_0 = [714,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,-1]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test999.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)