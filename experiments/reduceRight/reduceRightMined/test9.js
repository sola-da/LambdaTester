





var callbackArguments = [];
var argument1 = function (a, b) {
 callbackArguments.push(arguments) 

    if (a)
        visited[a] = true;
    if (b)
        visited[b] = true;
    return 0;
};
var argument2 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument3 = null;
var argument4 = function (acc, parent) {
 callbackArguments.push(arguments) 

    return acc + parent.name + '.';
};
var argument5 = true;
var argument6 = r_1;
var argument7 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument8 = {"":"n","1.7976931348623157e+308":"","6.274704700864123e+306":"f","GiN":1.6048908450819008e+307};
var base_0 = ["GV","76","2["]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["GV","76","2["]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["GV","76","2["]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["GV","76","2["]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightMined/test9.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)