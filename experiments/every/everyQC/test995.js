





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 10; };
var argument2 = null;
var argument3 = {"242":1.6993160055851156e+308,"":893,"8.575361245828968e+307":"","-1":969,"d":"}^AH)ps]6","2.422265415749128e+307":""};
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -35.04960542751698; };
var argument5 = -1;
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 51; };
var argument8 = 1.6245910948854196e+308;
var argument9 = true;
var argument10 = function() {
 callbackArguments.push(arguments) 
 return 57.73460859049872; };
var argument11 = r_3;
var base_0 = [0,460,100,843,49,157,126,25,618]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,460,100,843,49,157,126,25,618]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,460,100,843,49,157,126,25,618]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,460,100,843,49,157,126,25,618]
var r_3= undefined
try {
r_3 = base_3.every(argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyQC/test995.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)