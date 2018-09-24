





var callbackArguments = [];
var argument1 = r_0;
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = {"82":607,"100":"&tL",")Ho":823,"1.468509623408546e+308":"","":"","9.310348179156823e+307":"HP","f":"I"}
argument2[0] = {"783":403,"1.1736987468546853e+308":"","1.5911168012068258e+308":"","":1.7976931348623157e+308,"6.019280973505707e+306":242,"8.113986980696457e+306":1.4100210073558947e+308}
return a/b*c*d
};
var argument5 = "";
var argument6 = {};
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[6.35085648319999e+307] = 1.6583979799386508e+308
argument7[1] = {"8":"ls","59":"","122":"&","823":0,"":"","1.351632650600655e+308":"","bU":-1,"7.309203280748562e+307":1.372058377750905e+307,"6.280277281329504e+306":9.97688067705216e+307}
argument7[7.889879335222838e+307] = 403
return a/b/c*d
};
var argument9 = true;
var argument10 = "";
var argument11 = ["FA",893,1.7976931348623157e+308,"a","pYxli","C",49,"WRp"];
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][0] = [783,82,783]
argument9['s'] = [126,213,"3","2"]
argument10[1.1277822633002616e+308] = {"49":3.102028722292738e+307,"783":"W",",":655,"":59,"8.906170039297333e+307":"G","1.4082797562394701e+308":1.0947853609881186e+308}
return a+b-c/d
};
var argument13 = true;
var argument14 = r_0;
var argument15 = 1.6510177249852912e+308;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15[90] = "8|>r"
argument15[1.359136872727139e+308] = null
return a+b-c+d
};
var base_0 = [157,1.7976931348623157e+308,"Q@","O<",460,"u5{","GzW?",783]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,1.7976931348623157e+308,"Q@","O<",460,"u5{","GzW?",783]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,1.7976931348623157e+308,"Q@","O<",460,"u5{","GzW?",783]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,1.7976931348623157e+308,"Q@","O<",460,"u5{","GzW?",783]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test857.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)