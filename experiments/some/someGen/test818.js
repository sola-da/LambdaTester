





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.0727847755854773e+308] = false
argument2[1] = ["A","+","&Adh$","IAG","{","$","H:L","-7[S","*-"]
return a+b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.0727847755854773e+308] = {"49":5.38776092210549e+307,"969":893,"":-1,"1.632279317511283e+308":""}
argument4['Y'] = null
return a+b-c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = null
return a*b*c
};
var argument6 = "";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = {"403":"","595":627,"783":"","843":1.2903546391762857e+308,"*FU":"","&'":"","1.5505320665090638e+307":3.3448306063336e+307,"$":1.5552355514644017e+308}
argument8['5L'] = null
return a-b*c
};
var base_0 = [893,25,157,783,59,655]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,25,157,783,59,655]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,25,157,783,59,655]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,25,157,783,59,655]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test818.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)