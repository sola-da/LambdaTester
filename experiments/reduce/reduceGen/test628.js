





var callbackArguments = [];
var argument1 = r_0;
var argument2 = r_0;
var argument3 = ["7TJ","JT|w","7P","N","ur`","B","z$","f{","^"];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[403] = true
argument1['Cb'] = null
return a*b*c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = false
return a-b*c/d
};
var argument6 = null;
var argument7 = [157,49,823,893,157,460,-100,49,893];
var argument8 = r_1;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.1277822633002616e+308] = {"25":100,"969":8.833083949663643e+307,"5.146571207714699e+307":714,"1.7976931348623157e+308":""}
argument7[460] = [49,823]
return a+b/c-d
};
var argument10 = r_1;
var argument11 = "k";
var argument12 = r_1;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[0] = ["v","&","^","61?o","?%>","c","?","6","1"]
base_3['length'] = null
base_3[3] = true
return a*b/c-d
};
var base_0 = [893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test628.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)