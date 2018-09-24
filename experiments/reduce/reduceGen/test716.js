





var callbackArguments = [];
var argument1 = true;
var argument2 = "";
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = ""
argument3 = true
argument1[893] = [618,655,"V",82,0]
return a+b+c-d
};
var argument5 = null;
var argument6 = "";
var argument7 = [460,843,607,618,595,-1,122];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][4] = null
return a*b+c*d
};
var argument9 = {"82":1.580144930561495e+308,"242":"B,!","9.173720010528125e+307":1.5013097494912844e+308,"":1.6356449199931328e+308,"1.4213382921080498e+308":242,"JKh":"","1.3552422493886319e+308":157,"FZ":618};
var argument10 = {"122":1.5824407605943037e+308,"4.035264979310309e+307":1.0109286570604563e+308,"1.577495935778045e+307":823,"":3.406069688803398e+307,"`":"kn","lJ":"3","1.3387386638462885e+308":8.162107404727807e+307};
var argument11 = r_0;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][3] = ""
return a*b/c-d
};
var argument13 = r_3;
var argument14 = [823,",","m_3OP"];
var argument15 = {"0":25,"82":6.102472966588085e+307,"8.08511997337754e+307":"X","OH":-1,"2.9032141142086866e+307":"","1.755637176817368e+308":"","Egw":"","4.1905109177139766e+307":714};
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15['18{'] = [969,893,969,843,607]
return a/b+c/d
};
var base_0 = ["UTb>","U","6zx","P@","_","&bE)5","+U"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["UTb>","U","6zx","P@","_","&bE)5","+U"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["UTb>","U","6zx","P@","_","&bE)5","+U"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["UTb>","U","6zx","P@","_","&bE)5","+U"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test716.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)