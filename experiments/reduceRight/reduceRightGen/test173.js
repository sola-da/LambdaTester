





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = ""
base_0[6] = ""
return a-b/c/d
};
var argument2 = 1.720672352712661e+308;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = [627,618,714,714]
base_1[1] = null
return a/b/c-d
};
var argument5 = r_1;
var argument6 = "";
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[8.575765443877852e+307] = {"157":1.3494054477273147e+308,"655":"","-8":"$","p":"S","":",","1.3097447795990767e+307":"","dB":82,"7.199546950176394e+306":5.197662223883925e+307,"7.500627425899161e+307":"","g":6.004962972088667e+307}
argument8[3] = {"823":25,"c>-":"3","":1.6770236667963414e+308,"j":"S","4.051101715554847e+307":5e-324,"1.3814348408329577e+308":"paG"}
base_2[7] = {"893":"BA","":"",">":"","1.138485125049531e+308":"V","t0G":893,"5.049917236330547e+307":655,"f":100,"5.83260437550614e+307":"","8.563536317037757e+307":5e-324}
return a-b/c+d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['v'] = true
argument9[2] = "D"
return a-b-c-d
};
var argument9 = ",|";
var argument10 = {"":213,"1.3989831205377993e+308":""};
var base_0 = ["[e","`","4","Y","zL","C?","n"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[e","`","4","Y","zL","C?","n"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[e","`","4","Y","zL","C?","n"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["[e","`","4","Y","zL","C?","n"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test173.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)