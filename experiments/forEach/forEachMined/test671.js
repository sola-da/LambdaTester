





var callbackArguments = [];
var argument1 = function (kp, i) {
 callbackArguments.push(arguments) 

    if (kp.dataType === DataType.Guid) {
        keyValues[i] = keyValues[i] && keyValues[i].toLowerCase();
    }
};
var argument2 = true;
var argument3 = {"25":"","49":"","655":"7","*":9.944717699730713e+307,"":"","1.0928980909311949e+308":7.080746991583843e+307,"2.349375789630748e+307":"","}y":595,"7.297655352336853e+307":"","7.805115187626627e+307":""};
var argument4 = function (copyProp) {
 callbackArguments.push(arguments) 

    if (copyProp in descs[prop]) {
        descs[prop][propType][copyProp] = descs[prop][copyProp];
        delete descs[prop][copyProp];
    }
};
var argument5 = "$";
var argument6 = function (result) {
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
    IdbPouch.Changes.notify(name);
    IdbPouch.Changes.notifyLocalWindows(name);
};
var argument7 = r_0;
var argument8 = 607;
var argument9 = function (el, idx) {
 callbackArguments.push(arguments) 

    trees.push({
        ids: el,
        diff: item.diff - 1,
        parent: item.ids,
        parentIdx: idx
    });
};
var argument10 = {"[":""};
var base_0 = [893,"9s",-100,126,59,714,"V"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,"9s",-100,126,59,714,"V"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,"9s",-100,126,59,714,"V"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,"9s",-100,126,59,714,"V"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test671.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)