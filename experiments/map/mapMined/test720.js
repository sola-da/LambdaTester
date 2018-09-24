





var callbackArguments = [];
var argument1 = function (a) {
 callbackArguments.push(arguments) 

    return {
        name: a.name,
        value: a.value.eval(env)
    };
};
var argument2 = r_0;
var argument3 = function (m) {
 callbackArguments.push(arguments) 

    return m.principalId;
};
var argument4 = r_0;
var argument5 = null;
var argument6 = function (originalGroupId) {
 callbackArguments.push(arguments) 

    return idMappings['groups'][currentBatch][originalGroupId].generatedId;
};
var argument7 = 783;
var argument8 = r_1;
var argument9 = function (v, i) {
 callbackArguments.push(arguments) 

    var border = parseInt(v, 10) || 0, padding = parseInt(p[i], 10) || 0;
    return border + padding;
};
var argument10 = null;
var base_0 = ["B","o","("]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["B","o","("]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["B","o","("]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test720.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)