





var callbackArguments = [];
var argument1 = function (a) {
 callbackArguments.push(arguments) 

    return a.parent !== complexArray.parent;
};
var argument2 = function (d) {
 callbackArguments.push(arguments) 

    return !isNaN(d);
};
var argument3 = function (button) {
 callbackArguments.push(arguments) 

    return button['class'] === 'submit';
};
var argument4 = true;
var argument5 = r_2;
var argument6 = function (d, i) {
 callbackArguments.push(arguments) 

    return d & 1;
};
var base_0 = [969,655,100,714]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,655,100,714]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test684.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)