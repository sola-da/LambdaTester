





var callbackArguments = [];
var argument1 = function (entity) {
 callbackArguments.push(arguments) 

    return entity.entityAspect.isBeingSaved;
};
var argument2 = function (feature) {
 callbackArguments.push(arguments) 

    return feature.name === cachingLayer;
};
var argument3 = r_0;
var argument4 = r_0;
var argument5 = function (route) {
 callbackArguments.push(arguments) 

    return route.props.name === routeName;
};
var argument6 = r_2;
var argument7 = "D";
var argument8 = function (a) {
 callbackArguments.push(arguments) 

    i++;
    arr.push(a + 3);
    return i > 3;
};
var argument9 = true;
var base_0 = ["==",":f","*","5_{",82,157,627]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["==",":f","*","5_{",82,157,627]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["==",":f","*","5_{",82,157,627]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["==",":f","*","5_{",82,157,627]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someMined/test879.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)