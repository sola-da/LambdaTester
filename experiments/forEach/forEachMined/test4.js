





var callbackArguments = [];
var argument1 = function (gPoint) {
 callbackArguments.push(arguments) 

    gPoint.setAttribute('cx', Number(gPoint.getAttribute('cx')) + that.movedRX);
    gPoint.setAttribute('cy', Number(gPoint.getAttribute('cy')) + that.movedRY);
};
var argument2 = 213;
var argument3 = function (key) {
 callbackArguments.push(arguments) 

    var code = definitions[key];
    if (code && typeof code === 'object' && !(code instanceof RegExp)) {
        walkDefinitions(code, prefix + key + '.');
        applyObjectDefine(prefix + key, code);
        return;
    }
    applyDefineKey(prefix, key);
    applyDefine(prefix + key, code);
};
var argument4 = function (viewName) {
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
var argument5 = true;
var argument6 = function (qov) {
 callbackArguments.push(arguments) 

    qoStrings.push(qoName + '=' + encodeURIComponent(qov));
};
var base_0 = [0,403,607,157]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,403,607,157]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,403,607,157]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,403,607,157]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test4.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)