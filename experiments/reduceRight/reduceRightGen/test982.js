





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][3] = false
argument2[5] = 3.8471367402128325e+307
return a+b/c+d
};
var argument2 = r_0;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = {"122":242,"627":"","":"","1.7590517185892325e+308":403,";fPhw":6.815819445764595e+307,"1.589429952988306e+307":""}
argument4[2] = {"":843}
return a-b+c-d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[100] = null
return a+b-c-d
};
var argument5 = 1.3018746335351528e+308;
var argument6 = "";
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['L'] = {"122":49,"126":"","1.1117222313835598e+308":6.709881620213263e+307,"2.5286558912523006e+306":213,"LVnw'":"%","9.324608232514576e+307":213,"4.703033258008847e+307":"?e","1.3567756496329524e+308":""}
return a*b/c*d
};
var argument8 = [714,783,213,823,460,25,783,126];
var argument9 = r_1;
var base_0 = [0,893,0,843,49,607,-1,403,126]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,893,0,843,49,607,-1,403,126]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,893,0,843,49,607,-1,403,126]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,893,0,843,49,607,-1,403,126]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test982.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)