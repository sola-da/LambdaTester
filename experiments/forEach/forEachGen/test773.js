





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[7.92397107964922e+307] = [-1,893,843,126,1.7976931348623157e+308,595,460,157,705,618]
argument2[1.7394185942769049e+308] = null
argument3[0] = null
return a+b+c
};
var argument2 = {"0":893,"460":242,"":"*","5e-324":9.633097284829712e+307,"w":"7","4.669923691692095e+307":"","<M5o":"f^"};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = null
return a+b+c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[8.748669805137695e+307] = [627,82,0,823,823,627]
return a+b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = 595
argument8[1.4034744228995816e+308] = "]"
return a*b+c
};
var argument7 = {"24":"","":"i","d":"","CX":5.2263508882390494e+306,"4.479761668823e+307":714,"-100":"","1.3653844873598535e+308":1.1099672283299202e+308,"3.490376420323038e+307":""};
var base_0 = [126,893,1.7976931348623157e+308,213,242,460,655,969,714,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,893,1.7976931348623157e+308,213,242,460,655,969,714,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,893,1.7976931348623157e+308,213,242,460,655,969,714,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,893,1.7976931348623157e+308,213,242,460,655,969,714,-1]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test773.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)