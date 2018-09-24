/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = null;
var argument2 = function (upStatus) {
 callbackArguments.push(arguments) 

    if (!upStatus.updated && upStatus.wasClean) {
        reporter.warn('no migrations executed. status is clean.');
    } else if (!upStatus.updated && upStatus.dirtyMigrations) {
        printMigrationList('no migrations executed. there are dirty migrations. fix it.', 'err', upStatus.dirtyMigrations, 'err');
    } else if (upStatus.updated) {
        reporter.success('complete');
    }
};
var argument3 = "$`";
var argument4 = function (result) {
 callbackArguments.push(arguments) 

    if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
        var injectLocals = angular.extend({}, injectables, locals);
        result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
    } else {
        result.$$controller = view.controller;
    }
    result.$$state = state;
    result.$$controllerAs = view.controllerAs;
    dst[name] = result;
};
var argument5 = p2;
var argument6 = "(l";
var argument7 = function (e) {
 callbackArguments.push(arguments) 

    deferred.reject(e);
};
var argument8 = r_1;
var argument9 = 1.4528399926621488e+308;
var argument10 = function () {
 callbackArguments.push(arguments) 

    return cm.getConnection();
};
var argument11 = r_3;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.then(argument10,argument11)
}
catch(e) {
r_3= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test701.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)