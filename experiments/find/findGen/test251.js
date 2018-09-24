





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = {"F":""}
argument2[-1] = {"157":"giT","403":"","893":"`>#I","":627,"5e-324":";","'":"Q","8.99283216607652e+307":618}
argument3[783] = "y"
return a+b*c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6][4] = [403]
return a+b-c
};
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = true
return a+b/c
};
var argument6 = {"403":714,"807":"","":843,"1.4321001943035092e+308":"_",">7":"","G":213,"m=r_":460,"$":82,"1.5955126732838482e+307":""};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[5] = false
base_3[8][0] = {"618":"L","U":9.333540681575306e+307,"":">","2.497385861660227e+307":1.2368015593403405e+308,"k]2Y":25}
return a/b/c
};
var argument8 = [607,893,618,"EC"];
var base_0 = ["w","m","I","zhA","H","`","Hg","?"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["w","m","I","zhA","H","`","Hg","?"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["w","m","I","zhA","H","`","Hg","?"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["w","m","I","zhA","H","`","Hg","?"]
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
require("fs").writeFileSync("./experiments/find/findGen/test251.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)