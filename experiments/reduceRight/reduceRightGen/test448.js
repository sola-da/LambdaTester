





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = ["?M","y","WU[B","Nv","Vb["]
argument2[3.286160553564105e+307] = ["v_^",25,82,122]
base_0[4][1.7976931348623157e+308] = [618,25,893,783,655,595,0,0,100]
return a-b*c+d
};
var argument2 = r_0;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4][3] = {}
base_1[4][1.7976931348623157e+308] = true
return a-b+c+d
};
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.738403780925446e+308] = ["G","80z","f","G","X[","Nf{D","d",",","M","["]
argument8[655] = false
argument6[0] = ""
return a+b/c/d
};
var argument7 = 82;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = {"126":126}
argument10[2] = null
argument9[2] = ["_"]
return a+b*c*d
};
var argument9 = {"[i":3.6911891752413514e+307};
var base_0 = ["prH",25,783,595,"q",":b",157,"6CM",714,"1od"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["prH",25,783,595,"q",":b",157,"6CM",714,"1od"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["prH",25,783,595,"q",":b",157,"6CM",714,"1od"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["prH",25,783,595,"q",":b",157,"6CM",714,"1od"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test448.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)