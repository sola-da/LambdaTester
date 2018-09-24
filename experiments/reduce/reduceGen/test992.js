





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[460] = ["YR","o","^]","4iXN","]","7nu|","J@","XB+#"]
argument2[1.4205726959827606e+308] = 1.6284124534803684e+308
argument2[100] = ["n5",")","uO",")","3F|"]
return a*b+c-d
};
var argument2 = {"$":4.1039652677361207e+307,"1.5388890404865758e+308":"b2"};
var argument3 = true;
var argument4 = true;
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7.889879335222838e+307] = false
return a/b+c+d
};
var argument7 = r_0;
var argument8 = null;
var argument9 = "";
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[59] = {"59":1.1537702815670673e+308,"82":"","":"g;","&A":"","9.717590276007905e+306":1.3382602487787635e+308}
argument8[1.1277822633002616e+308] = null
return a+b*c/d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[4] = true
return a+b-c*d
};
var base_0 = ["X4zz","1","-","t",",","b","hO","b","tF"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["X4zz","1","-","t",",","b","hO","b","tF"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["X4zz","1","-","t",",","b","hO","b","tF"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["X4zz","1","-","t",",","b","hO","b","tF"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test992.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)