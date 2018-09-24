





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = {"1.1032097886077648e+308":"}6W"};
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return {")\u001e\u001d.5QÚf¨":0,"V«ÎHÀd*{":0,"Ä":1.135440985694549,"Ðgàx9\u0000\u0007~ê":5,"ð£Ð2,\u0019\u000b1":true,"¤©rÉ\u0011ý":-20.587558629079943,"\u0016x$":false,"±gD\u0016":")9=ý±"}; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 26.698941301230228; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = true;
var argument8 = null;
var base_0 = [242,49,126,893,59,49,25,0]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,49,126,893,59,49,25,0]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,49,126,893,59,49,25,0]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapQC/test344.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)