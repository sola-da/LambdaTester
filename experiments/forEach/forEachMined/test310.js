





var callbackArguments = [];
var argument1 = function (observer) {
 callbackArguments.push(arguments) 

    var queue = observer.takeRecords();
    removeTransientObserversFor(observer);
    if (queue.length) {
        observer.callback_(queue, observer);
        anyNonEmpty = true;
    }
};
var argument2 = true;
var argument3 = r_0;
var argument4 = function (globalVarName) {
 callbackArguments.push(arguments) 

    globalVarRegExps[globalVarName] = globalVarRegExps[globalVarName] || new RegExp(options.prefix + globalVarName + options.suffix, 'g');
    contents = contents.replace(globalVarRegExps[globalVarName], globalVars[globalVarName]);
};
var argument5 = null;
var argument6 = function (el) {
 callbackArguments.push(arguments) 

    jqConfig[el] = pkg[el];
};
var argument7 = true;
var argument8 = true;
var argument9 = function (step) {
 callbackArguments.push(arguments) 

    if (step.ncyBreadcrumb && step.ncyBreadcrumb.label) {
        var parseLabel = $interpolate(step.ncyBreadcrumb.label);
        step.ncyBreadcrumbLabel = parseLabel(viewScope);
        registerWatchers(labelWatchers, parseLabel, viewScope, step);
    } else {
        step.ncyBreadcrumbLabel = step.name;
    }
};
var base_0 = ["E",",","}"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["E",",","}"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["E",",","}"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["E",",","}"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test310.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)