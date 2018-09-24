





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    var filter = self._filters[key], value = data[key];
    return filter.match && filter.match.test(value) || filter.isValid && filter.isValid(value) || filter.target === value ? true : false;
};
var argument2 = null;
var argument3 = function () {
 callbackArguments.push(arguments) 

    context = this;
};
var argument4 = null;
var argument5 = function (x) {
 callbackArguments.push(arguments) 

    return x.length > 0;
};
var argument6 = {"82":1.6676953628332133e+308,"100":1.2204409718012848e+308,"126":"@4X","157":157,"607":"","969":1.6523855654197865e+308,"":1.3491157320744734e+308,"q0":"","6.823935105045055e+307":"","1.672786168326013e+308":""};
var argument7 = function (key) {
 callbackArguments.push(arguments) 

    return textStyle[key] === paragraphStyle[key];
};
var base_0 = ["hN","M","Q:","w",">","DU$","9"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["hN","M","Q:","w",">","DU$","9"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["hN","M","Q:","w",">","DU$","9"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["hN","M","Q:","w",">","DU$","9"]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyMined/test740.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)