





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[403] = {"618":"}F]a","h":"","1.3294661058110333e+308":""," #":1.333078497251135e+308}
argument3[5] = true
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[8.748669805137695e+307] = {"705":"fV^}","783":1.5458658507202084e+308,"i`":1.5637358572419622e+307,"1.7976931348623157e+308":"ZJs-","-1":2.2470233051553184e+307,"5.275819548307361e+307":"vm","Fiy":"I"}
return a-b*c
};
var argument3 = "";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][3] = false
argument5[1.0500354979187844e+308] = {"0":126,"25":0,"460":"j","-1":"S","":"|t","1.039081929067825e+308":8.479404047906074e+307,"Q><":4.0737227502458114e+307,"?%":6.348620818208779e+307}
base_2[3][1] = [126]
return a-b-c
};
var argument5 = r_2;
var argument6 = {"403":"","":"7}","-1":595,"1.2914288996794494e+308":655,"1.4542750134075283e+308":"","5e-324":1.2522299132567939e+308,"8.406810138915523e+306":"m","J$-":2.8198366532876196e+307,"1.4240203058220243e+308":403};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = "36w5P"
argument8[8] = 5.33184224486282e+307
argument9[969] = {"100":460,"1.571763309675117e+308":49,"":1.2222630274622548e+308,"o'":"A","T":157,"9.034798370101516e+307":1.6543975938447925e+308}
return a+b+c
};
var argument8 = null;
var base_0 = [25,843,843,82,242,823]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,843,843,82,242,823]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,843,843,82,242,823]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,843,843,82,242,823]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test472.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)