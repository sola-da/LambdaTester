





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = false
argument2[0] = 9.76704634284337e+307
argument3['n,5s@s'] = {"0":"","2":"","705":"","":7.717324337395375e+307,"b1":"x","&&":""}
return a/b-c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['A'] = 627
return a+b/c
};
var argument5 = false;
var argument6 = {"157":"w","705":"4","1.145563948593814e+308":"|8","":"z,","-1":8.542812008924557e+307,"7.38416293600931e+307":"","1.0526646436709863e+308":1.4572446287792212e+308,"Xf":823,"K":3.0394239069017275e+307};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = 783
base_2[5] = true
argument8[-1] = ["u","QM",5e-324,843]
return a+b+c
};
var argument8 = r_2;
var argument9 = null;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument12['T'] = [49,100,714,969]
argument11[4] = "zx"
return a*b+c
};
var base_0 = [0,705,705,607,82,403,893,627]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,705,705,607,82,403,893,627]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test827.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)