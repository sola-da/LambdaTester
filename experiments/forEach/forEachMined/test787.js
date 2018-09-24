





var callbackArguments = [];
var argument1 = function (parameter) {
 callbackArguments.push(arguments) 

    if (parameter.charAt(0) === '+' || parameter.charAt(0) === '-') {
        parameter = parameter.substring(1);
    }
    if (!(parameter in store.indexedProperties))
        updateStatistics(parameter);
};
var argument2 = null;
var argument3 = function (dep) {
 callbackArguments.push(arguments) 

    if (isDependecyUsedInAnyDeclaration(dep, deps)) {
        return;
    }
    if (dep === ANGULAR_MODULE) {
        return;
    }
    toSort.push([
        file,
        dep
    ]);
};
var argument4 = false;
var argument5 = function (key) {
 callbackArguments.push(arguments) 

    angular.isDefined(attr[key]) && attr.$observe(key, function (newValue) {
        timepicker.$options[key] = dateParser.getTimeForAttribute(key, newValue);
        !isNaN(timepicker.$options[key]) && timepicker.$build();
        validateAgainstMinMaxTime(controller.$dateValue);
    });
};
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    for (var key in d) {
        var value = d[key].toString().toLowerCase();
        if (value.match(keyword.toLowerCase()))
            group.push(d);
    }
};
var base_0 = [705,627,823,157,969,82,157,403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,627,823,157,969,82,157,403]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,627,823,157,969,82,157,403]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,627,823,157,969,82,157,403]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test787.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)