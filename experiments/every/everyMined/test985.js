





var callbackArguments = [];
var argument1 = function (other) {
 callbackArguments.push(arguments) 

    return _.indexOf(other, item) >= 0;
};
var argument2 = false;
var argument3 = 242;
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    return textStyle[key] === paragraphStyle[key];
};
var argument5 = false;
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument7 = r_1;
var argument8 = r_1;
var argument9 = function () {
 callbackArguments.push(arguments) 

    context = this;
};
var base_0 = [59,403,460,242,969,100,714,607,157]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,403,460,242,969,100,714,607,157]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,403,460,242,969,100,714,607,157]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,403,460,242,969,100,714,607,157]
var r_3= undefined
try {
r_3 = base_3.every(argument9)
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
require("fs").writeFileSync("./experiments/every/everyMined/test985.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)