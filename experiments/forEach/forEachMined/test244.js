





var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    callback(err, results);
};
var argument2 = true;
var argument3 = function (levelSpec) {
 callbackArguments.push(arguments) 

    levelSpec.bind(type);
};
var argument4 = null;
var argument5 = function (fullViewName) {
 callbackArguments.push(arguments) 

    var parts = parseViewName(fullViewName);
    var designDocName = '_design/' + parts[0];
    var viewName = parts[1];
    docsToViews[designDocName] = docsToViews[designDocName] || {};
    docsToViews[designDocName][viewName] = true;
};
var argument6 = null;
var argument7 = function (handler) {
 callbackArguments.push(arguments) 

    $injector.invoke(handler, auth, locals);
};
var argument8 = null;
var argument9 = true;
var base_0 = ["Th",893,"3"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Th",893,"3"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Th",893,"3"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Th",893,"3"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test244.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)