





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = {"":"x","1.0592834884291444e+308":242,"K":8.821732642146916e+307,"]":595,"}":"$"};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = ""
base_0[0][0] = 1.4859087181049716e+308
return a*b-c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = 5.774255824649443e+307
argument7[2] = false
base_1 = ""
return a*b-c/d
};
var argument6 = 4.587251057032755e+307;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][4] = {"":969}
return a+b-c*d
};
var argument8 = {"655":157,"705":157,"":0,"1.7657330694133932e+308":"JmA","1.7976931348623157e+308":9.651049154294674e+307,"5.129521366080711e+307":1.5264041932246965e+308,"1.3192851796456936e+308":"","W p":""};
var argument9 = {"0":893,"5":618,"":82,"Y":"","5e-324":"","1.5544694252765613e+308":59,"2.59438365595762e+307":1.6690663327986369e+308,":c":"","?":5.853125859834072e+306,"1.1552610037919661e+308":1.4132826198143067e+308};
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[7] = 893
argument10[2] = [-1,59,242,618,893,213,-100]
return a/b+c/d
};
var base_0 = [705,25,-100,607,122]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,25,-100,607,122]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,25,-100,607,122]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,25,-100,607,122]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test420.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)