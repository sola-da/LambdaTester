





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    var tmp = item, color;
    if (Lang.isString(item)) {
        color = AColor.toHex(item);
        tmp = {
            name: color,
            value: color
        };
    }
    return tmp;
};
var argument2 = 8.881632411313154e+307;
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument5 = r_0;
var argument6 = [":","}","o{(","M","["];
var argument7 = function (v, k) {
 callbackArguments.push(arguments) 

    if (v)
        return k;
};
var argument8 = function (propName) {
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
var argument9 = "";
var base_0 = [122,">","bs","ib4CY",-100,25,"0",25,"0"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,">","bs","ib4CY",-100,25,"0",25,"0"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,">","bs","ib4CY",-100,25,"0",25,"0"]
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,">","bs","ib4CY",-100,25,"0",25,"0"]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test268.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)