





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    return value * 2;
};
var argument2 = function (x) {
 callbackArguments.push(arguments) 

    return new Date(x);
};
var argument3 = "YQ";
var argument4 = r_1;
var argument5 = function (number) {
 callbackArguments.push(arguments) 

    return number / largest;
};
var argument6 = 627;
var argument7 = r_1;
var argument8 = function (d, i) {
 callbackArguments.push(arguments) 

    return i;
};
var argument9 = true;
var base_0 = [607,100,969,242,-100]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,100,969,242,-100]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test188.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)