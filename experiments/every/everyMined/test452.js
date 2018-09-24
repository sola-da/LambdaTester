





var callbackArguments = [];
var argument1 = function (haystack) {
 callbackArguments.push(arguments) 

    return contains(haystack, needle);
};
var argument2 = function (other) {
 callbackArguments.push(arguments) 

    return _.contains(other, item);
};
var argument3 = true;
var argument4 = function (obj, index) {
 callbackArguments.push(arguments) 

    actual[index] = obj;
    numberOfRuns += 1;
    if (numberOfRuns == 3) {
        return false;
    }
    return true;
};
var argument5 = function (dep) {
 callbackArguments.push(arguments) 

    return list[dep];
};
var argument6 = true;
var base_0 = [607,242,1.7976931348623157e+308,122,893,82,1.7976931348623157e+308,5e-324]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,242,1.7976931348623157e+308,122,893,82,1.7976931348623157e+308,5e-324]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,242,1.7976931348623157e+308,122,893,82,1.7976931348623157e+308,5e-324]
var r_2= undefined
try {
r_2 = base_2.every(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,242,1.7976931348623157e+308,122,893,82,1.7976931348623157e+308,5e-324]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6)
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
require("fs").writeFileSync("./experiments/every/everyMined/test452.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)