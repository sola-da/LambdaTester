





var callbackArguments = [];
var argument1 = function (nodeName) {
 callbackArguments.push(arguments) 

    retDesc[nodeName] = webshims[baseMethod](nodeName, a, b, c);
};
var argument2 = true;
var argument3 = function (key) {
 callbackArguments.push(arguments) 

    if (attributes[key] === undefined) {
        return;
    }
    if (ns) {
        node.setAttributeNS(ns, [
            Chartist.xmlNs.prefix,
            ':',
            key
        ].join(''), attributes[key]);
    } else {
        node.setAttribute(key, attributes[key]);
    }
};
var argument4 = function (nonletter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('\\P{L}').test(nonletter)).toBe(true);
    expect(XRegExp('\\P{Letter}').test(nonletter)).toBe(true);
    expect(XRegExp('\\PL').test(nonletter)).toBe(true);
    expect(XRegExp('\\p{^L}').test(nonletter)).toBe(true);
    expect(XRegExp('\\p{^Letter}').test(nonletter)).toBe(true);
};
var argument5 = r_1;
var argument6 = function (methodKey) {
 callbackArguments.push(arguments) 

    var hubMethods = allListeners[methodKey];
    for (var j = hubMethods.length - 1; j >= 0; j--) {
        if (hubMethods[j].scope === scope) {
            hubMethods.splice(j, 1);
        }
    }
    if (hubMethods.length === 0) {
        ServerConnectionBackend.off(name, methodKey);
    }
};
var argument7 = null;
var argument8 = 7.621354559013333e+307;
var base_0 = [126,893,"D#",655,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,893,"D#",655,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,893,"D#",655,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,893,"D#",655,122]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test227.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)