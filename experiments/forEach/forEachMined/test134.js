





var callbackArguments = [];
var argument1 = function (range, row, offset) {
 callbackArguments.push(arguments) 

    if (!range.start) {
        var column = range.offset + (offset || 0);
        firstRange = new Range(row, column, row, column + range.length);
        if (!range.length && options.start && options.start.start && options.skipCurrent != false && firstRange.isEqual(options.start)) {
            firstRange = null;
            return false;
        }
    } else
        firstRange = range;
    return true;
};
var argument2 = true;
var argument3 = function (file) {
 callbackArguments.push(arguments) 

    if (file.id === id) {
        tmp = file;
        return false;
    }
};
var argument4 = function (alias) {
 callbackArguments.push(arguments) 

    map[alias.toLowerCase()] = s;
};
var argument5 = {"607":705,"YN":"Ck","1.1858882449484907e+308":"2","":"+","p":6.04633110614551e+307};
var argument6 = r_2;
var argument7 = function (entity) {
 callbackArguments.push(arguments) 

    var ea = entity.entityAspect;
    if (!ea)
        return;
    ea._markAsLoaded(propName);
    if (propNames.length === 1)
        return;
    var next = entity.getProperty(propName);
    if (!next)
        return;
    if (!next.arrayChanged)
        next = [next];
    markLoadedNavPath(next, propNames.slice(1));
};
var argument8 = true;
var base_0 = ["}Xm","}",460,"ll",25]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["}Xm","}",460,"ll",25]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["}Xm","}",460,"ll",25]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["}Xm","}",460,"ll",25]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test134.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)