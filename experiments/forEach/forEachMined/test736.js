





var callbackArguments = [];
var argument1 = function (sid) {
 callbackArguments.push(arguments) 

    var id = parseInt(sid, 10);
    var path = msg.callbacks[id];
    traverse.set(args, path, f(id));
};
var argument2 = null;
var argument3 = function (t) {
 callbackArguments.push(arguments) 

    format_key(t);
};
var argument4 = function (obj, index) {
 callbackArguments.push(arguments) 

    actual[index] = obj;
};
var argument5 = {"H":"","":655,"X":7.837717139587785e+307,"{":"","0PL5":"","`I":627};
var argument6 = false;
var argument7 = function (w, i) {
 callbackArguments.push(arguments) 

    if (w) {
        noWidgets = false;
        w.row = i;
    }
};
var base_0 = [893,843,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,843,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,843,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,843,893]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test736.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)