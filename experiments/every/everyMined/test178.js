





var callbackArguments = [];
var argument1 = function (a) {
 callbackArguments.push(arguments) 

    i++;
    arr.push(a + 3);
    return i <= 3;
};
var argument2 = {"Fn":9.518434361342049e+307,"1.6633790894557595e+308":893};
var argument3 = {"242":9.87584936400125e+307,"783":2.329586229988876e+307};
var argument4 = function (el) {
 callbackArguments.push(arguments) 

    return !fn(el);
};
var argument5 = function (element) {
 callbackArguments.push(arguments) 

    return this.indexOf(element) >= 0;
};
var argument6 = function (a) {
 callbackArguments.push(arguments) 

    i++;
    arr.push(a + 3);
    return i <= 3;
};
var argument7 = null;
var base_0 = ["V","w{c","RWU","URDcuf"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V","w{c","RWU","URDcuf"]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V","w{c","RWU","URDcuf"]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V","w{c","RWU","URDcuf"]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyMined/test178.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)