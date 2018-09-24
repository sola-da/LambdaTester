





var callbackArguments = [];
var argument1 = function (option) {
 callbackArguments.push(arguments) 

    if (value == option) {
        match = true;
    }
};
var argument2 = {"157":1.2369760275049482e+308,"823":"","893":4.0567380895672796e+307,"1.7976931348623157e+308":"","":"O","e&":403};
var argument3 = "^adY";
var argument4 = function (el) {
 callbackArguments.push(arguments) 

    bower[el] = pkg[el];
    jqConfig[el] = pkg[el];
};
var argument5 = [",","G"];
var argument6 = null;
var argument7 = function (result) {
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
var argument8 = function (domain) {
 callbackArguments.push(arguments) 

    wellKnownDomains[domain] = currentKey.toLowerCase().trim();
};
var argument9 = true;
var argument10 = "";
var base_0 = [627,460,893,82]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,460,893,82]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,460,893,82]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,460,893,82]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test544.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)