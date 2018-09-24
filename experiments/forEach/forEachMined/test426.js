





var callbackArguments = [];
var argument1 = function (arg) {
 callbackArguments.push(arguments) 

    args.push(formatError(arg));
};
var argument2 = null;
var argument3 = function (cp) {
 callbackArguments.push(arguments) 

    if (cpHasOriginalValues(entity, cp)) {
        var coOrCos = entity.getProperty(cp.name);
        result[fn(cp.name, cp)] = __map(coOrCos, function (co) {
            return unwrapInstance(co, transformFn);
        });
    }
};
var argument4 = function (letter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('\\P{L}').test(letter)).toBe(false);
    expect(XRegExp('\\P{Letter}').test(letter)).toBe(false);
    expect(XRegExp('\\PL').test(letter)).toBe(false);
    expect(XRegExp('\\p{^L}').test(letter)).toBe(false);
    expect(XRegExp('\\p{^Letter}').test(letter)).toBe(false);
};
var argument5 = 1.5783429739871494e+308;
var argument6 = "s";
var argument7 = function (t) {
 callbackArguments.push(arguments) 

    var i;
    t.values = t.values.sort(function (v1, v2) {
        var x1 = v1.x || v1.x === 0 ? v1.x : Infinity, x2 = v2.x || v2.x === 0 ? v2.x : Infinity;
        return x1 - x2;
    });
    i = 0;
    t.values.forEach(function (v) {
        v.index = i++;
    });
};
var argument8 = 1.6394835545857114e+308;
var argument9 = r_3;
var base_0 = [893,705,783,49,607,49,122,705,783]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,705,783,49,607,49,122,705,783]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,705,783,49,607,49,122,705,783]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,705,783,49,607,49,122,705,783]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test426.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)