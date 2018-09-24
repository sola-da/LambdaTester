





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = false
return a*b/c
};
var argument2 = r_0;
var argument3 = "";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][2] = null
base_1[8] = {"823":25,"c>-":"3","":1.6770236667963414e+308,"j":"S","4.051101715554847e+307":5e-324,"1.3814348408329577e+308":"paG"}
base_1[4] = {"893":"BA","":"",">":"","1.138485125049531e+308":"V","t0G":893,"5.049917236330547e+307":655,"f":100,"5.83260437550614e+307":"","8.563536317037757e+307":5e-324}
return a/b*c
};
var argument5 = 1.6879414108901296e+308;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = "D"
return a-b*c
};
var argument7 = ",|";
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[82] = [25,655,595]
argument9[618] = {"49":"Q","595":618,"6.133438857147574e+307":"","N":"K","N*V":6.827824184568651e+306,"":"V8","9.929648174212228e+307":"","1.9189199539311864e+307":1.6587949909746016e+308,"z":""}
return a+b/c
};
var base_0 = ["^","G"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["^","G"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["^","G"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test174.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)