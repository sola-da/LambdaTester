





var callbackArguments = [];
var argument1 = function (v, ix) {
 callbackArguments.push(arguments) 

    var r = fn(v, ix);
    if (r != null || includeNull) {
        result[ix] = r;
    }
};
var argument2 = function (id) {
 callbackArguments.push(arguments) 

    __data_names[id] = names[id];
};
var argument3 = null;
var argument4 = {"49":"","1.4901781336285262e+308":893,"3.865292017619513e+307":1.0032386322938247e+308,"k":""};
var argument5 = function (name) {
 callbackArguments.push(arguments) 

    var pd = trait[name];
    if (!hasOwnProperty(newTrait, name) || newTrait[name].required) {
        newTrait[name] = pd;
    }
};
var argument6 = false;
var argument7 = function (res) {
 callbackArguments.push(arguments) 

    resources_built.push(res.build(0, async));
};
var base_0 = ["h","aa","{dw","hzyxb","NC","(","!","B!e(w"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["h","aa","{dw","hzyxb","NC","(","!","B!e(w"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["h","aa","{dw","hzyxb","NC","(","!","B!e(w"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["h","aa","{dw","hzyxb","NC","(","!","B!e(w"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test897.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)