





var callbackArguments = [];
var argument1 = function (prefix) {
 callbackArguments.push(arguments) 

    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
};
var argument2 = r_0;
var argument3 = true;
var argument4 = function (ctor, i) {
 callbackArguments.push(arguments) 

    out.indent();
    doitem(ctor);
    out.newline();
};
var argument5 = function (prop) {
 callbackArguments.push(arguments) 

    Object.defineProperty(enchant.gl.Sprite3D.prototype, prop, {
        get: function () {
            return this['_' + prop];
        },
        set: function (scale) {
            this['_' + prop] = scale;
            this._changedScale = true;
        }
    });
};
var argument6 = null;
var argument7 = function (listener) {
 callbackArguments.push(arguments) 

    return google.maps.event.removeListener(listener);
};
var argument8 = 8.788859529869881e+307;
var base_0 = ["#zN","d","r","O","{","6V$","Dy",",","]","`5*6Vk"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#zN","d","r","O","{","6V$","Dy",",","]","`5*6Vk"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#zN","d","r","O","{","6V$","Dy",",","]","`5*6Vk"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#zN","d","r","O","{","6V$","Dy",",","]","`5*6Vk"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test615.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)