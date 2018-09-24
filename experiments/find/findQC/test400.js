





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 86; };
var argument4 = [783,460,893];
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 22; };
var argument6 = {"0":"0f","100":"]","460":403,"1.437186133221307e+308":")"};
var argument7 = {"213":126,"1.0333036211286918e+308":8.325633599369436e+307,"1.0193921682455973e+306":893,"-1":1.6706343314769343e+307,"1.7934322767504782e+308":"","iI<":1.7280963300438886e+308,"7.162876586755669e+307":1.7976931348623157e+308,"`pt":-100,"6Z":403};
var argument8 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument9 = true;
var argument10 = r_2;
var base_0 = [655,59,25,49,0,122,0,843,783,213]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,59,25,49,0,122,0,843,783,213]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,59,25,49,0,122,0,843,783,213]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,59,25,49,0,122,0,843,783,213]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findQC/test400.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)