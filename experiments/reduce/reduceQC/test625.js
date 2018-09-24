





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -60.329132483699645; };
var argument2 = {"0":-1,"":"@[(d","Y&WEZ":"&","2.1687434807895552e+307":1.5135020132745365e+308,"2.702634589961885e+307":1.7713991511018176e+308,"u<":"","1.2290899610830929e+308":"g"};
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return [null,0.08654753912029878,0.9993882578162738,null]; };
var argument5 = [607];
var argument6 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument7 = true;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return -65; };
var argument9 = {"82":1.302645007625695e+307,"460":-1,"+":843,"":"v|","i":4.95615371717421e+307,"7.076248953686722e+307":6.332052003792544e+307};
var base_0 = ["eE","<T<F","D","S%","11","?","&9z"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["eE","<T<F","D","S%","11","?","&9z"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["eE","<T<F","D","S%","11","?","&9z"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test625.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)