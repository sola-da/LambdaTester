





var callbackArguments = [];
var argument1 = function (haystack) {
 callbackArguments.push(arguments) 

    return contains(haystack, needle);
};
var argument2 = false;
var argument3 = {"100":122,"7.570029149564394e+307":655,"C2":627,"":1.4451062225792429e+308,",":"^VrZ","8.044405069216452e+307":""};
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    return Math.floor(epsilon + v.dotProduct(n, v.substract(item, a))) >= 0;
};
var argument5 = function (other) {
 callbackArguments.push(arguments) 

    return _.indexOf(other, item) >= 0;
};
var argument6 = ["Kv","E","jn","N[t","@;m"];
var argument7 = {"25":1.614133961669199e+308,"655":655,"893":"","5.792843044902137e+307":3.4244586164172016e+307,"1.2996437972174193e+308":"","":823,"5e-324":823,"4.959281066363809e+306":"","&":843};
var argument8 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument9 = {"618":969,"":7.995422896269288e+306};
var argument10 = null;
var base_0 = [595,"7",122,157,100,"N","y",655,403,"5t"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,"7",122,157,100,"N","y",655,403,"5t"]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,"7",122,157,100,"N","y",655,403,"5t"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,"7",122,157,100,"N","y",655,403,"5t"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyMined/test458.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)