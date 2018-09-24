





var callbackArguments = [];
var argument1 = [627,"d3t",460,"pN",843,"pFX",893,"S|"];
var argument2 = null;
var argument3 = {"":"","1.5158168841420183e+308":"","#":969,"d;":4.1011764257273306e+307,"5.436502411914039e+307":1.0193696122332925e+308};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[-1] = true
return a-b-c*d
};
var argument5 = false;
var argument6 = r_1;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = ""
argument7[25] = false
base_1[3][1] = {"595":"J","714":25,"893":714,"":"","CrYG<":"","1.5863116278335668e+308":403,"3.292612575355987e+307":460,"7.289582807042712e+305":618,"Z":6.149992616226511e+307,"1.3646313532498489e+308":1.3838122601895359e+308}
return a+b+c-d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['18{'] = true
argument11 = 6.729405966497242e+307
return a-b/c*d
};
var argument10 = r_0;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[126] = 2.6514967098939636e+307
argument11 = true
argument12[3] = {"":7.031722034722318e+307,"2q32$M":893,"9ij":843,"1.229248499305623e+308":"p"}
return a/b*c-d
};
var argument12 = r_1;
var base_0 = [100,705,403,0,607,460]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,705,403,0,607,460]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,705,403,0,607,460]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,705,403,0,607,460]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test694.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)