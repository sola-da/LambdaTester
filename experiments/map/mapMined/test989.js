





var callbackArguments = [];
var argument1 = function (js) {
 callbackArguments.push(arguments) 

    return ctor.fromJSON(js);
};
var argument2 = {"25":2.9639895079293507e+307,"0I":4.4371141311960307e+307,"^":"I","":"nTv"};
var argument3 = true;
var argument4 = function (fold) {
 callbackArguments.push(arguments) 

    return fold.clone();
};
var argument5 = false;
var argument6 = null;
var argument7 = function () {
 callbackArguments.push(arguments) 

    return [];
};
var argument8 = function (r) {
 callbackArguments.push(arguments) 

    var r1 = r.clone();
    r1.isBackwards = r.cursor == r.start;
    return r1;
};
var base_0 = ["y",783,",","`"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["y",783,",","`"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["y",783,",","`"]
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["y",783,",","`"]
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test989.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)