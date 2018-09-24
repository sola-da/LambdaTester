





var callbackArguments = [];
var argument1 = r_0;
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['18{'] = true
argument3['*c'] = 4.3395177128176445e+307
argument1['s'] = {"403":1.524964043945739e+308,"843":1.4658940426409106e+307,"":"_9","1.475090651896398e+308":"","z":5.937722021532066e+307,"$_":1.4076092052518112e+307,"5.798219842610947e+307":9.477607697016558e+307}
return a/b+c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[403] = true
return a+b+c/d
};
var argument6 = "";
var argument7 = r_0;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][0] = 213
base_2['length'] = ""
base_2[0][3] = null
return a/b/c-d
};
var argument9 = false;
var argument10 = {"100":893,"157":"Y","969":8.864056880663748e+307,"&tYG[":"S","":"u","2.0072959483689716e+307":"e","1.745432043569651e+306":"","3.89019608583137e+307":2.255993987107035e+307};
var argument11 = false;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['Cb'] = {"242":4.465896553642112e+307,"RH":"-",",":"","":"",")LI4GrC":"","1.7011406307105014e+308":1.40484545443774e+308,"7.59790862499284e+307":"","$y":""}
argument11[7] = {"49":655}
argument11['*c'] = 595
return a/b*c*d
};
var base_0 = ["+","J","b;:"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["+","J","b;:"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["+","J","b;:"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["+","J","b;:"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test975.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)