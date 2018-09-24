





var callbackArguments = [];
var argument1 = function (value, index, list) {
 callbackArguments.push(arguments) 

    if (predicate(value, index, list)) {
        result = value;
        return true;
    }
};
var argument2 = function (p) {
 callbackArguments.push(arguments) 

    var principalType = p.message || undefined;
    var principalId = p.id || undefined;
    return principalType === RoleMapping.ROLE && principalId === role;
};
var argument3 = function (feature) {
 callbackArguments.push(arguments) 

    return feature.name === cachingLayer;
};
var argument4 = function (enumType) {
 callbackArguments.push(arguments) 

    return enumType.name === baseTypeName;
};
var base_0 = ["l+or>%*i4zC","x","vB","CzM7(","s","nh","i","4","Ia"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["l+or>%*i4zC","x","vB","CzM7(","s","nh","i","4","Ia"]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["l+or>%*i4zC","x","vB","CzM7(","s","nh","i","4","Ia"]
var r_2= undefined
try {
r_2 = base_2.some(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["l+or>%*i4zC","x","vB","CzM7(","s","nh","i","4","Ia"]
var r_3= undefined
try {
r_3 = base_3.some(argument4)
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
require("fs").writeFileSync("./experiments/some/someMined/test428.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)