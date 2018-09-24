





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[126] = 893
return a+b-c*d
};
var argument2 = null;
var argument3 = {"595":25,"627":"F","705":"3","1.5275536583805205e+308":7.580537720339092e+304,"1.153630126244212e+308":8.600329109242109e+307,"":823,"{sW":-100,"1.6435300300566424e+308":""};
var argument4 = {"157":1.5675829652076046e+308};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = null
argument3[7.463432409233234e+307] = "2"
base_1[1][0] = {"1.4914702483669662e+307":2.1645443803920585e+307,"8.639430557167868e+307":6.335788866549053e+307,"":"`X3","2.1061086612083871e+307":655,"]$vc":242,"<":627,"QB":""}
return a-b/c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = 1.0040998332204157e+308
return a*b-c+d
};
var argument7 = true;
var argument8 = r_1;
var argument9 = r_1;
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = {"126":"lJa","843":1.280699256864876e+308,"-1":1.7976931348623157e+308,"":"X","3.1168163084760965e+307":705,"#":"<u#-","4XFMB":"","`":1.0034053626492548e+307}
argument9[2] = ""
return a*b-c*d
};
var base_0 = [403,893,823,403]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,893,823,403]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,893,823,403]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,893,823,403]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test130.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)