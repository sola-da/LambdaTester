





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    var source = c[vars.edges.source], target = c[vars.edges.target];
    var claim = target[vars.id.value] == primaryId ? source : target;
    claimed.push(claim[vars.id.value]);
};
var argument2 = true;
var argument3 = true;
var argument4 = function (docInfo) {
 callbackArguments.push(arguments) 

    if (docInfo._id && utils.isLocalId(docInfo._id)) {
        return checkDone();
    }
    var id = docInfo.metadata.id;
    var req = txn.objectStore(DOC_STORE).get(id);
    req.onsuccess = function process_docRead(event) {
        var metadata = event.target.result;
        if (metadata) {
            fetchedDocs.set(id, metadata);
        }
        checkDone();
    };
};
var argument5 = function (col) {
 callbackArguments.push(arguments) 

    if (!col.name.match(/\$/)) {
        name = col.name.match(/(\w+\.)(.*)/)[2];
        collections.push(name);
    }
};
var argument6 = false;
var argument7 = true;
var argument8 = function (ext) {
 callbackArguments.push(arguments) 

    if (ext.ep === 'themevariable') {
        var value = ext.name;
        themeVariables[value] = themeVariables[value] || ext.defaultValue;
    }
};
var argument9 = null;
var argument10 = {"460":"i","714":607,"893":"","4.829664077368389e+307":460,":":"Wf","1.0083141310803632e+308":1.6640215254899868e+308,"Q":"[","":"","7.79974405171124e+307":"#","-1":"7}"};
var base_0 = [0,705,82,607]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,705,82,607]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,705,82,607]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,705,82,607]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test681.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)