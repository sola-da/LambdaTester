





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = "i"
return a*b-c-d
};
var argument2 = true;
var argument3 = ["*Brs"];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.359136872727139e+308] = true
argument5[0] = 714
return a+b/c+d
};
var argument5 = "?";
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[7] = {"157":6.5487667246112065e+307,"403":627,"823":-100,"5.144055343020953e+307":"+","3.7170742390941417e+306":"CI","":"","1.4856450029912693e+308":"[E","DG":4.846879412151112e+306,"#,g":"J5"}
argument8[5] = true
return a+b+c*d
};
var argument7 = true;
var argument8 = true;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11 = null
argument10[627] = true
return a+b*c+d
};
var argument10 = false;
var base_0 = [25,"}eD",242,969,783,"W",460,"nZ",213]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,"}eD",242,969,783,"W",460,"nZ",213]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,"}eD",242,969,783,"W",460,"nZ",213]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,"}eD",242,969,783,"W",460,"nZ",213]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test306.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)