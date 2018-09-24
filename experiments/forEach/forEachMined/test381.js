





var callbackArguments = [];
var argument1 = function (y, i) {
 callbackArguments.push(arguments) 

    if (i != 0) {
        var prev = vars.data.time.values[0];
        vars.data.time.dataSteps.push(getDiff(prev, y, periods.indexOf(vars.data.time.stepType)));
    } else {
        vars.data.time.dataSteps = [0];
    }
};
var argument2 = null;
var argument3 = function (d) {
 callbackArguments.push(arguments) 

    d[vars.text.value || vars.id.value] = d[key];
};
var argument4 = "|";
var argument5 = function (defaultValue, key) {
 callbackArguments.push(arguments) 

    if (angular.isUndefined(scope[key]) || scope[key] === null) {
        return opts[key] = defaultValue;
    } else {
        return opts[key] = scope[key];
    }
};
var argument6 = function (l) {
 callbackArguments.push(arguments) 

    log4jsLevels.push(log4js.levels.toLevel(l));
};
var argument7 = false;
var argument8 = r_3;
var base_0 = [403,25,82,25,213,783,843,49,59,403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,25,82,25,213,783,843,49,59,403]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,25,82,25,213,783,843,49,59,403]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,25,82,25,213,783,843,49,59,403]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test381.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)