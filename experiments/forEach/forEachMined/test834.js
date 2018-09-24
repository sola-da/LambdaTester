





var callbackArguments = [];
var argument1 = function (astralLetter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('^\\P{L}$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\P{Letter}$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\PL$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\p{^L}$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\p{^Letter}$').test(astralLetter)).toBe(false);
};
var argument2 = null;
var argument3 = "_";
var argument4 = function (o) {
 callbackArguments.push(arguments) 

    return ret.push(d3plus.util.copy(o));
};
var argument5 = [0,"5n"];
var argument6 = function (key) {
 callbackArguments.push(arguments) 

    console.error(key + '\t' + js.data[key].length);
};
var argument7 = function (child) {
 callbackArguments.push(arguments) 

    var a = child.anchor;
    if (a)
        if ('fill' === a)
            fillChildren.push(child);
        else {
            def.hasOwn(aoMap, a) || def.fail.operationInvalid('Unknown anchor value \'{0}\'', [a]);
            sideChildren.push(child);
        }
};
var base_0 = [627,714,0,-1,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,714,0,-1,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,714,0,-1,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,714,0,-1,618]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test834.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)