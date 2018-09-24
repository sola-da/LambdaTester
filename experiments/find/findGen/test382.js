





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[5] = null
argument1[893] = 1.5826798667487726e+308
return a-b*c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.1881593224845412e+308] = {"213":"","SnkU":7.97482294041792e+307,"":"e","5.288941105480226e+306":"","2.6258741787955163e+307":1.7976931348623157e+308,"1.396515248544154e+308":1.5345049393694256e+308,"=0-0":1.786553691543186e+308}
argument3[5] = {"460":"","607":"","P|":655,"jQ":"","{":8.738511201107273e+307,"[w":"","5.2399112910595456e+306":"","3.815282488884429e+307":"","`":"C"}
argument5[0] = null
return a-b+c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = {"1.0732991161441151e+308":"3","":""}
return a*b-c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = [403,783,126,100,618,595,893,403,655,5e-324]
argument9[5] = 126
return a*b+c
};
var base_0 = ["c","$O","-f"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["c","$O","-f"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["c","$O","-f"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["c","$O","-f"]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test382.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)