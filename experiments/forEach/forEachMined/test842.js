





var callbackArguments = [];
var argument1 = function (value, key) {
 callbackArguments.push(arguments) 

    dst[key] = value;
};
var argument2 = function (nonletter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('\\P{L}').test(nonletter)).toBe(true);
    expect(XRegExp('\\P{Letter}').test(nonletter)).toBe(true);
    expect(XRegExp('\\PL').test(nonletter)).toBe(true);
    expect(XRegExp('\\p{^L}').test(nonletter)).toBe(true);
    expect(XRegExp('\\p{^Letter}').test(nonletter)).toBe(true);
};
var argument3 = 5.840829025700274e+307;
var argument4 = null;
var argument5 = function (source) {
 callbackArguments.push(arguments) 

    for (var key in source)
        target[key] = source[key];
};
var argument6 = r_0;
var argument7 = function (msg) {
 callbackArguments.push(arguments) 

    if (message.text === msg.text && message.severity === msg.severity) {
        found = true;
    }
};
var argument8 = r_2;
var argument9 = true;
var base_0 = ["fz",",",595,"C",893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["fz",",",595,"C",893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["fz",",",595,"C",893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["fz",",",595,"C",893]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test842.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)