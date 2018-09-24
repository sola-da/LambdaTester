





var callbackArguments = [];
var argument1 = null;
var argument2 = [25,100,705];
var argument3 = "g'";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[59] = [59,59,213,59,82,126,969,1.7976931348623157e+308,-1,893]
return a*b-c+d
};
var argument5 = null;
var argument6 = false;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = ["n",";uN2,","PTT","ICx","@D","yi",607,59,655,"!-"]
argument7[6] = false
argument6[8] = ["|",783,969,595,"NC","}"]
return a+b-c*d
};
var argument9 = null;
var argument10 = {"a'":"LD"};
var argument11 = true;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[2] = true
argument11[1.3938918493123786e+308] = {"969":5.5241331934231355e+306,"-100":"i^0","5.188966516369199e+307":"S","5e-324":3.13083853325084e+306,"c":"","":"w)B",",R-E":126}
return a+b*c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15[59] = null
base_3[0] = null
return a-b+c-d
};
var argument14 = r_2;
var base_0 = [100,-1,655,893,49,49,714]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,-1,655,893,49,49,714]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,-1,655,893,49,49,714]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,-1,655,893,49,49,714]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test938.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)