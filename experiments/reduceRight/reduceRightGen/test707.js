





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[627] = null
argument3[8] = ["tSQ",1.7976931348623157e+308,"r",607]
base_0[6] = null
return a+b/c/d
};
var argument2 = {"893":7.543406487649633e+307,"1.2421645642809447e+308":49,"Jsp4":"","":"","1.294790067016568e+307":"","1.1564778704604463e+308":3.99513414084346e+307,"7.907688119405143e+307":"cO","'x":"]K","9.624051682326797e+306":100,"N":7.673806602777071e+307};
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = ""
return a+b/c/d
};
var argument5 = true;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[5] = 8.716721846439094e+306
argument7[0] = {"82":100,"100":"T","595":2.488642544068132e+307,"783":242,"":893,"H":"","O":6.136601020137008e+307,"1.2968395046116973e+308":1.7139497698869438e+308,"1.2132927893141232e+308":";>l"}
argument8[3] = null
return a*b+c+d
};
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[82] = 2.134432413164192e+307
return a/b+c*d
};
var argument10 = null;
var argument11 = true;
var base_0 = [100,-1,823,607,969,"P",157,"ZP","-"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,-1,823,607,969,"P",157,"ZP","-"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,-1,823,607,969,"P",157,"ZP","-"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,-1,823,607,969,"P",157,"ZP","-"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test707.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)