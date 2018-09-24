





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = {"607":627,"9.761834203444188e+307":"","":"p","3.3337341902538313e+307":213,"7.817279116295537e+307":6.585217530312216e+307,"F4'j*":5.878015821024991e+307,"9.909504150284462e+307":1.6063988801192282e+308,"wc":",","1.7976931348623157e+308":"","1.7755979577710697e+308":")"}
return a+b/c/d
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = ["gp","{!","k(!"," vQ<"]
return a/b-c+d
};
var argument5 = r_1;
var argument6 = "(";
var argument7 = null;
var argument8 = false;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = null
argument7[627][126] = true
return a-b*c-d
};
var argument10 = null;
var argument11 = true;
var argument12 = {"0":"","213":4.273959636589443e+307,"893":"","}":"","1.0757779751393317e+308":"","2.400324396028558e+307":714,"1.832060785626497e+307":1.1945329604829922e+308,"":1.370369415709412e+306,"2.6323744499367724e+307":""};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][3] = true
base_3[3] = [607,"b",607,49,"E",655]
argument12[90] = null
return a/b-c+d
};
var base_0 = [627,0,122,893,823]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,0,122,893,823]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,0,122,893,823]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,0,122,893,823]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test565.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)