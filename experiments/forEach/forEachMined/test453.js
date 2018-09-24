





var callbackArguments = [];
var argument1 = function (fn) {
 callbackArguments.push(arguments) 

    nodeNameCache[name].each(fn);
};
var argument2 = false;
var argument3 = {"893":1.483726612728617e+307,"":1.4007890732929021e+308,"j":"%|"};
var argument4 = function (t) {
 callbackArguments.push(arguments) 

    format_key(t, '');
};
var argument5 = function (fn) {
 callbackArguments.push(arguments) 

    instanceInjector.invoke(fn || noop);
};
var argument6 = 705;
var argument7 = null;
var argument8 = function (logLevel) {
 callbackArguments.push(arguments) 

    angular.forEach($log[logLevel].logs, function (log) {
        angular.forEach(log, function (logItem) {
            errors.push('MOCK $log (' + logLevel + '): ' + String(logItem) + '\n' + (logItem.stack || ''));
        });
    });
};
var base_0 = [242,"U:"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,"U:"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,"U:"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,"U:"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test453.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)