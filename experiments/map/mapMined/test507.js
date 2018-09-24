





var callbackArguments = [];
var argument1 = function (result) {
 callbackArguments.push(arguments) 

    return new compute.Image(self, result);
};
var argument2 = function (et) {
 callbackArguments.push(arguments) 

    return findOrCreateEntityGroup(em, et);
};
var argument3 = false;
var argument4 = [403,82];
var argument5 = function (securityGroup) {
 callbackArguments.push(arguments) 

    return securityGroup.GroupId;
};
var argument6 = r_2;
var argument7 = "Tfhx`n?";
var argument8 = function (i) {
 callbackArguments.push(arguments) 

    return 'a' + i;
};
var base_0 = ["kZ%","Tp","O","#"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["kZ%","Tp","O","#"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["kZ%","Tp","O","#"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["kZ%","Tp","O","#"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test507.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)