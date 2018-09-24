





var callbackArguments = [];
var argument1 = function (p) {
 callbackArguments.push(arguments) 

    paramNames[p] = true;
};
var argument2 = null;
var argument3 = true;
var argument4 = function (handler) {
 callbackArguments.push(arguments) 

    if (event.path.substr(0, pl) === path) {
        var ev = {};
        for (var key in event) {
            ev[key] = event[key];
        }
        ev.relativePath = event.path.replace(new RegExp('^' + path), '');
        try {
            handler(ev);
        } catch (e) {
            console.error('\'change\' handler failed: ', e, e.stack);
            self._emit('error', e);
        }
    }
};
var argument5 = function (km) {
 callbackArguments.push(arguments) 

    var group = em._entityGroupMap[km.entityTypeName];
    if (!group) {
        throw new Error('Unable to locate the following fully qualified EntityType name: ' + km.entityTypeName);
    }
    group._fixupKey(km.tempValue, km.realValue);
};
var argument6 = [1.7976931348623157e+308,"v",0,823,607,783,59,"X","s6","6Nt"];
var argument7 = function (groupScene) {
 callbackArguments.push(arguments) 

    groupScene.childNodes.forEach(layoutItem, this);
};
var base_0 = [82,969,0]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,969,0]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,969,0]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,969,0]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test819.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)