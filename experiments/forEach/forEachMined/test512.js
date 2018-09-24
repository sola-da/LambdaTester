





var callbackArguments = [];
var argument1 = function (viewName) {
 callbackArguments.push(arguments) 

    var fullViewName = ddocName + '/' + viewName;
    if (!metaDoc.views[fullViewName]) {
        fullViewName = viewName;
    }
    var viewDBNames = Object.keys(metaDoc.views[fullViewName]);
    var statusIsGood = row.doc && row.doc.views && row.doc.views[viewName];
    viewDBNames.forEach(function (viewDBName) {
        viewsToStatus[viewDBName] = viewsToStatus[viewDBName] || statusIsGood;
    });
};
var argument2 = function (fold) {
 callbackArguments.push(arguments) 

    ret.push('  ' + fold.toString());
};
var argument3 = function (t) {
 callbackArguments.push(arguments) 

    i = i.replace(H(t), ' ');
};
var argument4 = null;
var argument5 = function (methodKey) {
 callbackArguments.push(arguments) 

    var hubMethods = allListeners[methodKey];
    for (var j = hubMethods.length - 1; j >= 0; j--) {
        if (hubMethods[j].scope === scope) {
            hubMethods.splice(j, 1);
        }
    }
    if (hubMethods.length === 0) {
        ServerConnectionBackend.off(name, methodKey);
    }
};
var base_0 = ["2","H","GoU","i","a"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2","H","GoU","i","a"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2","H","GoU","i","a"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["2","H","GoU","i","a"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test512.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)