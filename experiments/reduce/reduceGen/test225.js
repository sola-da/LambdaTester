





var callbackArguments = [];
var argument1 = null;
var argument2 = ["T","<","J","9z","c","`"];
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][0] = null
base_0[0] = false
argument3[1] = [893,"=G","+",100,"i"]
return a+b-c*d
};
var argument5 = null;
var argument6 = 1.07646676467129e+307;
var argument7 = r_1;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[126] = {"1":"_IQ8","100":122,"1.7976931348623157e+308":"","1.7485161608100604e+308":1.0905873973647146e+308,"R":460,"":"","f":1.2327534357635355e+308,"1.1073416810345524e+308":"","1.1314923760512652e+308":1.5474898023762937e+308}
return a-b*c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['Cb'] = true
argument10 = {"655":"M9!`z","Oj":"R","":"n9","1.2433930589653532e+308":"","1.365526357932553e+308":1.1237989136244628e+308,"??":1.5294106654577661e+308,"1.578290327263916e+307":"c","1.5556897368562238e+307":"1"}
return a-b+c*d
};
var argument10 = false;
var argument11 = {"460":9.080536233128334e+306,"627":1.7954035851241233e+306,"705":"yH","1.52263177464278e+308":"(>","5.611813081801566e+307":"","i":607,"":"","2.9996219801984854e+307":"ip"};
var argument12 = false;
var argument13 = {"403":"","893":"`>#I","4.760889827248847e+307":"","":627,"eH":893,"1.6835275768351957e+308":"@","1.8986922897855612e+307":1.7928141916752428e+308,"[":"","5e-324":";"};
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[25] = null
return a-b*c+d
};
var base_0 = [100,100,823,705,618,969,705,783]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,100,823,705,618,969,705,783]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,100,823,705,618,969,705,783]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,100,823,705,618,969,705,783]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test225.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)