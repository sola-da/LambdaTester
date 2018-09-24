





var callbackArguments = [];
var argument1 = function (line) {
 callbackArguments.push(arguments) 

    var parts = line.split(/=/);
    var key = parts.shift();
    hash[key] = parts.join('=');
};
var argument2 = false;
var argument3 = false;
var argument4 = function (letter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('\\P{L}').test(letter)).toBe(false);
    expect(XRegExp('\\P{Letter}').test(letter)).toBe(false);
    expect(XRegExp('\\PL').test(letter)).toBe(false);
    expect(XRegExp('\\p{^L}').test(letter)).toBe(false);
    expect(XRegExp('\\p{^Letter}').test(letter)).toBe(false);
};
var argument5 = function (oldDatum) {
 callbackArguments.push(arguments) 

    data_processDatumAtoms.call(this, oldDatum, !1, !0);
};
var argument6 = ["<","q","PS","U","a>","Q4"];
var argument7 = function (q) {
 callbackArguments.push(arguments) 

    if (Object.hasOwnProperty.call(vers, q))
        ver.push(vers[q]);
};
var base_0 = ["yd",843,157,"qW"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["yd",843,157,"qW"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["yd",843,157,"qW"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["yd",843,157,"qW"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test35.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)