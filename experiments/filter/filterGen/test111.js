





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = null
base_0[0][4] = false
return a-b+c
};
var argument2 = r_0;
var argument3 = 82;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[-1] = "v"
base_1[3][1.3434821406183095e+308] = "9;H"
base_1[0] = 59
return a-b/c
};
var argument5 = [823,607,705,59,893,607,627];
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = true
base_2['length'] = 6.958082509681468e+307
return a/b+c
};
var argument8 = r_0;
var argument9 = r_0;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[-100] = ""
argument12[1.4034744228995816e+308] = null
return a*b-c
};
var argument11 = r_3;
var argument12 = {"59":2.2273038874629112e+307,"403":403,"705":2.827439876128423e+307,"714":4.497381106868817e+307,":w+1p":"","-1":"KH","!Z":823,"l":""};
var base_0 = ["eG","3","|","8",1.7976931348623157e+308,5e-324,"2","f"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["eG","3","|","8",1.7976931348623157e+308,5e-324,"2","f"]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test111.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)