





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.3938918493123786e+308] = [403,969,618,618]
argument3[2] = "]F"
argument2[3] = null
return a*b+c/d
};
var argument5 = null;
var argument6 = true;
var argument7 = r_1;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = {"49":5.974194923394087e+306,"100":25,"714":"=","893":823,"Ld":"G&FK","":59}
base_1[4] = 823
argument7[7.889879335222838e+307] = {"823":"","OL":"3k$T","":"5M","5.24047489805919e+307":714}
return a+b-c-d
};
var argument9 = false;
var argument10 = false;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[8] = null
argument9[0] = -1
argument10[627] = [49,-100,893,100,59,618,59]
return a/b/c*d
};
var argument13 = 4.2757966321214363e+307;
var argument14 = {"126":"","823":"a!5","843":"","":403,"L#":126};
var argument15 = false;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15[1.3938918493123786e+308] = 403
base_3[0] = ["X]","c{","H","t+","@6<"]
argument15[2] = false
return a+b*c+d
};
var base_0 = ["F",460,-1,5e-324]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["F",460,-1,5e-324]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["F",460,-1,5e-324]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["F",460,-1,5e-324]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test637.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)