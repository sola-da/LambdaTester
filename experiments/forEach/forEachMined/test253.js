





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    for (var key in d) {
        var value = d[key].toString().toLowerCase();
        if (value.match(keyword.toLowerCase()))
            group.push(d);
    }
};
var argument2 = null;
var argument3 = function (p) {
 callbackArguments.push(arguments) 

    this[p] = value;
};
var argument4 = 7.897401937546955e+306;
var argument5 = r_1;
var argument6 = function (promise, key) {
 callbackArguments.push(arguments) 

    counter++;
    ref(promise).then(function (value) {
        if (results.hasOwnProperty(key))
            return;
        results[key] = value;
        if (!--counter)
            deferred.resolve(results);
    }, function (reason) {
        if (results.hasOwnProperty(key))
            return;
        deferred.reject(reason);
    });
};
var argument7 = null;
var argument8 = function (name) {
 callbackArguments.push(arguments) 

    var getter, value;
    if (isLive === liveModuleSentinel) {
        var descr = Object.getOwnPropertyDescriptor(uncoatedModule, name);
        if (descr.get)
            getter = descr.get;
    }
    if (!getter) {
        value = uncoatedModule[name];
        getter = function () {
            return value;
        };
    }
    Object.defineProperty(coatedModule, name, {
        get: getter,
        enumerable: true
    });
};
var argument9 = 823;
var base_0 = [403,618,49,893,403,100,705,157,213,25]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,618,49,893,403,100,705,157,213,25]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,618,49,893,403,100,705,157,213,25]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,618,49,893,403,100,705,157,213,25]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test253.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)