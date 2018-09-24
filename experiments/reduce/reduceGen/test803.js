





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[4] = {"3.6503648403278306e+307":"","4.842067363399663e+306":1.635428765765545e+308,"":460,"Rsi":"","1.1479695102964615e+308":"=","4.997377670044043e+307":1.4234832538044328e+308,"S4I":"","(":1.6917852123888831e+308}
base_0[6] = [714,213,-1,893,25,49,49]
argument2[627] = ""
return a*b/c-d
};
var argument2 = 714;
var argument3 = null;
var argument4 = "";
var argument5 = 655;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[7] = 1.1788826846819532e+308
base_1[0][4] = true
base_1[4] = 0
return a-b/c*d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = {"213":"@YK","627":0,"969":"9oL","1.5680653918836528e+308":1.239041810115926e+308,"d;":"L","":"XLo","Q":""}
argument8[9.331954948603684e+307] = ["g(=$","pf<","-","b","@[WL","Am","aDe,0V"]
argument8[1.612812046173122e+308] = 0
return a-b*c+d
};
var argument8 = r_2;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][3] = {"49":"","":595,"trz":"LWo","1.4866488612864695e+308":"","4.77253947322736e+307":"","6.39769996333306e+307":"o"}
argument10[25] = null
argument10[2] = false
return a*b-c*d
};
var argument10 = false;
var base_0 = [25,714,823]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,714,823]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,714,823]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,714,823]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test803.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)