





var callbackArguments = [];
var argument1 = function (line) {
 callbackArguments.push(arguments) 

    return '   ' + line;
};
var argument2 = null;
var argument3 = null;
var argument4 = function (a) {
 callbackArguments.push(arguments) 

    return a.eval(env);
};
var argument5 = [25];
var argument6 = function (propName) {
 callbackArguments.push(arguments) 

    var prop = __arrayFirst(parentType.getProperties(), __propEq(key, propName));
    if (prop) {
        parentType = prop.isNavigationProperty ? prop.entityType : prop.dataType;
    } else if (throwIfNotFound) {
        throw new Error('unable to locate property: ' + propName + ' on entityType: ' + parentType.name);
    } else {
        ok = false;
    }
    return prop;
};
var argument7 = function (val) {
 callbackArguments.push(arguments) 

    return keyMap[val];
};
var base_0 = ["pV5",59,1.7976931348623157e+308,242,"5<6z",242,705,"TJ","v"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["pV5",59,1.7976931348623157e+308,242,"5<6z",242,705,"TJ","v"]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["pV5",59,1.7976931348623157e+308,242,"5<6z",242,705,"TJ","v"]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test599.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)