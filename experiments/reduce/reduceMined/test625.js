





var callbackArguments = [];
var argument1 = function (promise, hook) {
 callbackArguments.push(arguments) 

    return promise ? promise.then(hook) : hook();
};
var argument2 = {"25":5.877434930285495e+307,"595":1.6152346133681402e+308,"607":">","6.919560247588946e+307":893,"3.53032971021679e+307":0,"":618,"L":2.497385861660227e+307,"1.2368015593403405e+308":"k]2Y","1.1554427590343538e+308":"BPu<"};
var argument3 = function (prev, next) {
 callbackArguments.push(arguments) 

    var mp = multiplier(prev), mn = multiplier(next);
    return mp > mn ? mp : mn;
};
var argument4 = true;
var argument5 = function (obj, pair) {
 callbackArguments.push(arguments) 

    var i = pair.indexOf('='), key = pair.slice(0, i), val = pair.slice(++i);
    obj[key] = decodeURIComponent(val);
    return obj;
};
var argument6 = true;
var argument7 = function (acc, key) {
 callbackArguments.push(arguments) 

    acc[key] = options[key];
    return acc;
};
var argument8 = null;
var argument9 = ["GM","f","9!qD","u","3Mn","E","L"];
var base_0 = ["m=r_","Dn","5X","W[","|(}",";","1","y{"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["m=r_","Dn","5X","W[","|(}",";","1","y{"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["m=r_","Dn","5X","W[","|(}",";","1","y{"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["m=r_","Dn","5X","W[","|(}",";","1","y{"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test625.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)