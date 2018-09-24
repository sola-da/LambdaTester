





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['b'] = [655,627,-100,1.7976931348623157e+308,25,655,126]
argument3[100] = null
argument2[8] = ["&","J","$=0","S","vw?aE",";?","9Zr_"]
return a-b+c
};
var argument2 = "2'";
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = [627,843,59,82,82,1.7976931348623157e+308,59,242,595,213]
base_1[0] = {"-100":1.3655228458362815e+308,"1.9274660965698764e+307":242}
return a/b*c
};
var argument5 = null;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = [403,126,893,122,82,618,49,403,-1]
return a+b/c
};
var argument8 = null;
var argument9 = 1.3151399694020574e+308;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[8.748669805137695e+307] = {"100":1.725983174264229e+308,"242":"#","":"","1.1694771261291023e+308":6.911428918756015e+307,"1.1659860869589554e+308":"M"}
return a*b-c
};
var base_0 = [893,242,25,460,705,783,655,627,157]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,242,25,460,705,783,655,627,157]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,242,25,460,705,783,655,627,157]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,242,25,460,705,783,655,627,157]
var r_3= undefined
try {
r_3 = base_3.find(argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test894.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)