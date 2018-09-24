





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = true
base_0['length'] = "3"
return a/b+c/d
};
var argument2 = {"0":0,"49":"PI!","618":"","qv":"!","1.3931479206101707e+308":"q","1.1366634720610106e+308":82,"":8.575765443877852e+307,"b":""};
var argument3 = 0;
var argument4 = 1.6079590396550376e+308;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = null
return a*b+c-d
};
var argument6 = ["SP0$","m",">!"];
var argument7 = [-1,49];
var argument8 = ["8caw","X","X","#",";","_+","@J","dn<Zc","b:"];
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = ["A","nb","(O","Xf-BWg","y[u","n#"," ","z!XI"]
argument7[3] = {"0":"","":"","jf":100,"i,1c":"p","U":7.378673109119064e+306,"4.2382872767954244e+307":"eR'EqVGbs","7.158016014875001e+307":9.976278450696203e+307}
base_2[0] = ""
return a-b*c*d
};
var argument10 = r_3;
var argument11 = r_0;
var argument12 = false;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = ["+4[",":s",";","S","J"," wBwicg","R","9"]
base_3[0] = null
base_3[1][0] = [969,823,823,59]
return a/b/c*d
};
var base_0 = [">","?","$`(","3","3","`d#"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [">","?","$`(","3","3","`d#"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [">","?","$`(","3","3","`d#"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [">","?","$`(","3","3","`d#"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test83.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)