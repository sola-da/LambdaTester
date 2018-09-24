





var callbackArguments = [];
var argument1 = function (member) {
 callbackArguments.push(arguments) 

    return member && member.jquery ? $.makeArray(member) : member && member.length ? drag.flatten(member) : member;
};
var argument2 = function (t) {
 callbackArguments.push(arguments) 

    return t.width;
};
var argument3 = function (id) {
 callbackArguments.push(arguments) 

    return selectorTarget(id);
};
var argument4 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument5 = null;
var argument6 = "7(Eb";
var base_0 = [-1,"[w9","V","#@",-100,157,"Q"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,"[w9","V","#@",-100,157,"Q"]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,"[w9","V","#@",-100,157,"Q"]
var r_2= undefined
try {
r_2 = base_2.map(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,"[w9","V","#@",-100,157,"Q"]
var r_3= undefined
try {
r_3 = base_3.map(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test729.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)