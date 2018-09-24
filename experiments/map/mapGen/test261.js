





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = ["$","W[","|(}",";","1","y{","N","N"]
argument3[714] = {"618":"L","714":"X","":">","2.497385861660227e+307":1.2368015593403405e+308,"k]2Y":25}
return a/b+c
};
var argument2 = [607,893,618,"EC"];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[82] = "AWG)Zj"
argument3[3] = 49
return a+b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[9.869573703797622e+307] = true
argument4[3] = [403,122,242,5e-324,126,969,25]
return a-b-c
};
var argument5 = true;
var argument6 = {"1.2464623589684027e+308":6.26909138615582e+306,"1.4055758350784088e+307":"Mn","TL":"aN6=","":5.645365563370983e+307,"1.7976931348623157e+308":59,"8.963527553574085e+307":"'","+f;":""};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = false
base_3 = 1.3785112651663834e+308
return a+b/c
};
var base_0 = [82]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test261.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)