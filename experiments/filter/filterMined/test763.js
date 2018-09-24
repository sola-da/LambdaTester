





var callbackArguments = [];
var argument1 = function (v) {
 callbackArguments.push(arguments) 

    return typeof v.x !== 'undefined';
};
var argument2 = true;
var argument3 = function (d, i) {
 callbackArguments.push(arguments) 

    return !data[i].disabled;
};
var argument4 = true;
var argument5 = true;
var argument6 = function (c) {
 callbackArguments.push(arguments) 

    return c[vars.edges.source][vars.id.value] != vars.focus.value[0] && c[vars.edges.target][vars.id.value] != vars.focus.value[0];
};
var argument7 = [655,0,823,783,122,1.7976931348623157e+308,49,618,122];
var argument8 = function () {
 callbackArguments.push(arguments) 

    var t = this;
    return r.some.call(i, function (e) {
        return n.contains(e, t);
    });
};
var base_0 = ["H","1"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["H","1"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["H","1"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["H","1"]
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test763.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)