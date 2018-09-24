





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = ["ME5@N","g","dOe;>","D","pU_","3C","X","N","p%","7"]
base_0['length'] = {}
return a*b-c
};
var argument2 = ["(",618,"kvs!",0,"b",100];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][5e-324] = {"{p":"W]j","":-1,"8.21921212370915e+307":"z(j","1.189696564691772e+308":"?"}
base_1[1][2] = null
base_1['length'] = 8.829840842232409e+307
return a+b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = 82
return a/b-c
};
var argument5 = 1.488302034053386e+308;
var argument6 = {"59":"H","627":8.353356233632349e+307,"655":"L","{":655,"1.1259993326640715e+308":"yU","1.9291455605205584e+306":1.313643781914713e+307,"5.613146592542578e+307":6.759303491753559e+307,"_":1.6262749568691224e+305};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = "v"
base_3[7] = "wlPiAWPl"
argument8[1] = ""
return a*b*c
};
var argument8 = 100;
var argument9 = null;
var base_0 = [627,157,0,82,460,49,126,1.7976931348623157e+308,969]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,157,0,82,460,49,126,1.7976931348623157e+308,969]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,157,0,82,460,49,126,1.7976931348623157e+308,969]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,157,0,82,460,49,126,1.7976931348623157e+308,969]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test72.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)