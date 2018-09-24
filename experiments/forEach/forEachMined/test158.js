





var callbackArguments = [];
var argument1 = function (result) {
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
var argument2 = function (child) {
 callbackArguments.push(arguments) 

    child.collapse(recurse);
};
var argument3 = r_0;
var argument4 = function (m) {
 callbackArguments.push(arguments) 

    m.setMap(null);
};
var argument5 = null;
var argument6 = function (w) {
 callbackArguments.push(arguments) 

    w && this.removeLineWidget(w);
};
var argument7 = [843,-1,-1,1.7976931348623157e+308];
var base_0 = [403,126,460,-100,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,126,460,-100,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,126,460,-100,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,126,460,-100,-100]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test158.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)