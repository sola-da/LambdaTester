





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
var argument2 = function (scene) {
 callbackArguments.push(arguments) 

    var linkVar = scene.vars.link, halfLabelHeight = linkVar.labelHeight / 2;
    y += halfLabelHeight;
    linkVar.targetY = y;
    y += halfLabelHeight + labelSpacing;
};
var argument3 = "";
var argument4 = false;
var argument5 = function (branch) {
 callbackArguments.push(arguments) 

    toVisit.push({
        pos: pos + 1,
        ids: branch,
        ctx: newCtx
    });
};
var argument6 = "";
var argument7 = null;
var argument8 = function (node) {
 callbackArguments.push(arguments) 

    var registrations = registrationsTable.get(node);
    if (!registrations)
        return;
    registrations.forEach(function (registration) {
        if (registration.observer === observer)
            registration.removeTransientObservers();
    });
};
var base_0 = ["5",")","u",")","x","JnBlw"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["5",")","u",")","x","JnBlw"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["5",")","u",")","x","JnBlw"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["5",")","u",")","x","JnBlw"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test744.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)