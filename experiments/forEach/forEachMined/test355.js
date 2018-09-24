





var callbackArguments = [];
var argument1 = function (className) {
 callbackArguments.push(arguments) 

    var a = map[className];
    if (ignoreCase)
        a = a.toLowerCase();
    var list = a.split(splitChar || '|');
    for (var i = list.length; i--;)
        keywords[list[i]] = className;
};
var argument2 = function (tab) {
 callbackArguments.push(arguments) 

    tab.active = false;
};
var argument3 = function (axisCategData) {
 callbackArguments.push(arguments) 

    var categData = data.child(axisCategData.key), group = categData && categData.child(seriesKey), scene = new pvc.visual.Scene(seriesScene, { source: group }), categVar = scene.vars.category = pvc_ValueLabelVar.fromComplex(categData);
    categVar.group = categData;
    valueVarHelper.onNewScene(scene, !0);
    colorVarHelper.onNewScene(scene, !0);
};
var argument4 = 460;
var argument5 = function (value, key) {
 callbackArguments.push(arguments) 

    if (angular.isFunction(value) || angular.isArray(value)) {
        promisesArr.push($q.when($injector.invoke(value)));
    }
};
var argument6 = r_0;
var argument7 = null;
var base_0 = ["dD",969,"H","`","1+","b",":<C$aJO"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["dD",969,"H","`","1+","b",":<C$aJO"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["dD",969,"H","`","1+","b",":<C$aJO"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["dD",969,"H","`","1+","b",":<C$aJO"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test355.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)