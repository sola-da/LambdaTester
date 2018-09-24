





var callbackArguments = [];
var argument1 = function (propertyPath) {
 callbackArguments.push(arguments) 

    var propNames = propertyPath.split('.');
    markLoadedNavPath(entities, propNames);
};
var argument2 = "1";
var argument3 = function (suite) {
 callbackArguments.push(arguments) 

    mapTOC(suite, obj);
};
var argument4 = function (t) {
 callbackArguments.push(arguments) 

    ys[t.id] = [];
    t.values.forEach(function (v) {
        ys[t.id].push(v.value);
    });
};
var argument5 = null;
var argument6 = function (item) {
 callbackArguments.push(arguments) 

    var height = (items.length + (item.submenu ? item.submenu.length : 0)) * 24;
    me.maxHeight = Math.max(me.maxHeight, height);
};
var base_0 = ["8{"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["8{"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["8{"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["8{"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test732.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)