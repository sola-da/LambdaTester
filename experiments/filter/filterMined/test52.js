





var callbackArguments = [];
var argument1 = function (option) {
 callbackArguments.push(arguments) 

    return option.selected;
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    return this.nodeName === name;
};
var argument3 = r_1;
var argument4 = "";
var argument5 = function (x, j) {
 callbackArguments.push(arguments) 

    return j !== i;
};
var argument6 = r_1;
var argument7 = function (d, i) {
 callbackArguments.push(arguments) 

    return d & 1;
};
var base_0 = ["s"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["s"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["s"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test52.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)