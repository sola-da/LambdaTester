





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['{S'] = ["IOC>W"]
argument1[1] = "Qnb"
return a*b-c-d
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = 9.839707339967456e+307
argument6[1] = ""
return a+b+c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = {"0":"","403":59,"5e-324":1.0922692161742197e+308,"6.146890116797704e+307":5e-324,"":"r","6.713421853113333e+307":1.4170334722649231e+308,"4.702768343464704e+306":"QwR",")":"","i,1c":"p","U":7.378673109119064e+306}
return a/b-c/d
};
var argument6 = {"eR'EqVGbs":7.158016014875001e+307,"9.976278450696203e+307":"Z"};
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['!j'] = [100,59,59,25,49,893,213]
argument10['8('] = 25
return a/b*c/d
};
var argument9 = r_1;
var argument10 = {"3":82,"595":"","618":122,"9.329154558202423e+306":7.132198436179097e+307,"":"",";":""};
var base_0 = ["X","X","#",";","_+","@J","dn<Zc"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["X","X","#",";","_+","@J","dn<Zc"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["X","X","#",";","_+","@J","dn<Zc"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["X","X","#",";","_+","@J","dn<Zc"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test100.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)