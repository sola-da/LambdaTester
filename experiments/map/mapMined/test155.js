





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument2 = true;
var argument3 = function () {
 callbackArguments.push(arguments) 

    var e = t(this);
    return {
        el: e,
        start: i(this)
    };
};
var argument4 = {"460":">u^","843":1.2439341878418049e+308,"kCK":"(h"};
var argument5 = null;
var argument6 = function (y, i2) {
 callbackArguments.push(arguments) 

    return resultSelector(x, y, i, i2);
};
var argument7 = function (match) {
 callbackArguments.push(arguments) 

    return new Range(i, match.offset, i, match.offset + match.length);
};
var argument8 = r_2;
var base_0 = [655,595]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,595]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,595]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test155.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)