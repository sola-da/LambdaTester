





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = true
base_0[8] = {"@^":1.0159967239947215e+308,"i":59,"":705,"6.019504428165783e+307":5.207614748987645e+307,"6.201153422039201e+306":"","8.207833640839383e+307":"-","1.4804344884196164e+308":"","E":1.073680361298059e+308}
base_0[6] = ["#0","Yt","-","&h:","[","]","b","p","r"]
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = {"":"O"}
argument3[1.399309004356655e+308] = 2.0634261534873457e+307
return a*b/c
};
var argument3 = r_0;
var argument4 = {"0":0,"100":"","618":"","f`d#":"1","":8.575765443877852e+307,"lo":7.780138533208252e+306,"1.3931479206101707e+308":"q","1.1366634720610106e+308":82};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = {"":705}
return a+b-c
};
var argument6 = 0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['AO?'] = null
return a+b-c
};
var argument8 = "";
var argument9 = 1.3834154181425196e+308;
var base_0 = [0,"Gc@"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,"Gc@"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,"Gc@"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,"Gc@"]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test87.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)