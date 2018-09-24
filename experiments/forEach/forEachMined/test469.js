





var callbackArguments = [];
var argument1 = function (i) {
 callbackArguments.push(arguments) 

    ret.push.apply(ret, i);
};
var argument2 = false;
var argument3 = null;
var argument4 = function (obj) {
 callbackArguments.push(arguments) 

    if (obj !== dst && _.isObject(obj)) {
        for (var key in obj) {
            if (!_defineAccessor(dst, obj, key)) {
                dst[key] = _deepClone(obj[key], _extendWithGetSet);
            }
        }
    }
};
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    item.draw(viewport.lighting);
};
var argument6 = function (a) {
 callbackArguments.push(arguments) 

    if (a.parent != null) {
        throw new Error('The complexObject is already attached. Either clone it or remove it from its current owner');
    }
    setAspect(a, complexArray);
};
var argument7 = false;
var argument8 = false;
var base_0 = [49,59,100,705,-1,969,714,242]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,59,100,705,-1,969,714,242]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,59,100,705,-1,969,714,242]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,59,100,705,-1,969,714,242]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test469.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)