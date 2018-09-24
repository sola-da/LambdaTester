





var callbackArguments = [];
var argument1 = function (d, i) {
 callbackArguments.push(arguments) 

    return d & 1;
};
var argument2 = r_0;
var argument3 = function (d) {
 callbackArguments.push(arguments) 

    return isValue(d.value);
};
var argument4 = [100,627,"N",705,5e-324,"Y","D","K","_",823];
var argument5 = function (bench) {
 callbackArguments.push(arguments) 

    return result[0].compare(bench) == 0;
};
var argument6 = function (a) {
 callbackArguments.push(arguments) 

    return a[vars.id.value] === data[i][vars.id.value];
};
var argument7 = "A";
var argument8 = 4.750351543725998e+307;
var base_0 = [242]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test148.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)