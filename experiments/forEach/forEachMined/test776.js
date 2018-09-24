





var callbackArguments = [];
var argument1 = function (arg) {
 callbackArguments.push(arguments) 

    extend(target, arg, deep);
};
var argument2 = [607,607,-100,893,823,-100,49,893];
var argument3 = true;
var argument4 = function (e) {
 callbackArguments.push(arguments) 

    em.attachEntity(e, entityState, mergeStrategy);
};
var argument5 = function (result) {
 callbackArguments.push(arguments) 

    delete result._bulk_seq;
    if (result.error) {
        aresults.push(result);
        return;
    }
    var metadata = result.metadata;
    var rev = merge.winningRev(metadata);
    aresults.push({
        ok: true,
        id: metadata.id,
        rev: rev
    });
    if (utils.isLocalId(metadata.id)) {
        return;
    }
    docsWritten++;
    webSqlPouch.Changes.notify(name);
    webSqlPouch.Changes.notifyLocalWindows(name);
};
var argument6 = function (key) {
 callbackArguments.push(arguments) 

    delete self.remote[key];
};
var argument7 = null;
var base_0 = ["R8","h"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["R8","h"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["R8","h"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["R8","h"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test776.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)