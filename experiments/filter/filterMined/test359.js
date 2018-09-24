





var callbackArguments = [];
var argument1 = function (value, index, collection) {
 callbackArguments.push(arguments) 

    return !callback(value, index, collection);
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    return 1;
};
var argument3 = function (value) {
 callbackArguments.push(arguments) 

    return !_.contains(rest, value);
};
var argument4 = function (p, index) {
 callbackArguments.push(arguments) 

    return p && typeof p === 'string';
};
var base_0 = [607,893,655,157]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,893,655,157]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,893,655,157]
var r_2= undefined
try {
r_2 = base_2.filter(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,893,655,157]
var r_3= undefined
try {
r_3 = base_3.filter(argument4)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test359.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)