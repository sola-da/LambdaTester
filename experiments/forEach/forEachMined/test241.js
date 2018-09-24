





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    result[++index] = (isFunc ? methodName : value[methodName]).apply(value, args);
};
var argument2 = function (nonletter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('\\P{L}').test(nonletter)).toBe(true);
    expect(XRegExp('\\P{Letter}').test(nonletter)).toBe(true);
    expect(XRegExp('\\PL').test(nonletter)).toBe(true);
    expect(XRegExp('\\p{^L}').test(nonletter)).toBe(true);
    expect(XRegExp('\\p{^Letter}').test(nonletter)).toBe(true);
};
var argument3 = r_1;
var argument4 = function (prop) {
 callbackArguments.push(arguments) 

    Object.defineProperty(enchant.gl.Camera3D.prototype, prop, {
        get: function () {
            return this['_' + prop];
        },
        set: function (n) {
            this['_' + prop] = n;
            this._changedPosition = true;
        }
    });
};
var argument5 = r_1;
var argument6 = function (key) {
 callbackArguments.push(arguments) 

    var opt = obj.$options[key];
    if ('value' in opt)
        obj.setOption(key, opt.value);
};
var argument7 = false;
var base_0 = ["S=A","Fy","t?F-q","(e&``","6","f","[`"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["S=A","Fy","t?F-q","(e&``","6","f","[`"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["S=A","Fy","t?F-q","(e&``","6","f","[`"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["S=A","Fy","t?F-q","(e&``","6","f","[`"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test241.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)