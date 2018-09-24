





var callbackArguments = [];
var argument1 = function (ln) {
 callbackArguments.push(arguments) 

    return ln.indexOf('[') === 0 && ln.indexOf(']') > 0;
};
var argument2 = null;
var argument3 = true;
var argument4 = function (str) {
 callbackArguments.push(arguments) 

    return !goog.string.isEmptySafe(str);
};
var argument5 = r_0;
var argument6 = function (key) {
 callbackArguments.push(arguments) 

    var matched = filter(ok, function (ok) {
            if (~ok.indexOf('*'))
                return 0 == key.indexOf(ok.split('*')[0]);
            return key == ok;
        });
    return matched.length == 0 && (!global.navigator || 'onerror' !== key);
};
var argument7 = {"460":9.392511797395458e+307,"783":100,"5.190459812018248e+307":627,"`r8[B":"Xh","U":"6","":3.640591554624933e+307,"1.4493068194254503e+308":"M","05n6":"g+","1.5825384517169325e+307":"@"};
var argument8 = function (k) {
 callbackArguments.push(arguments) 

    return now[k] !== old[k];
};
var argument9 = null;
var argument10 = "";
var base_0 = [893,-1,"y"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,-1,"y"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,-1,"y"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,-1,"y"]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test174.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)