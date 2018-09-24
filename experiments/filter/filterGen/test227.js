





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][4] = ["*+zVmU","<n!uSdSq","&",655,595,100,"q?"]
base_0[4][7] = 1.4643429957293667e+307
return a-b-c
};
var argument2 = null;
var argument3 = {"L":6.677325635791598e+306,"7.304942541860138e+307":1.0569166113685154e+308,"":"4+s+CC"};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a-b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = ""
argument7[4] = true
return a+b*c
};
var argument6 = {"3":3.3715463811260117e+307,"b":"",";":618,"0by ":242};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1]['!cck7Mm'] = [627,213,25,49,49,126,460,25]
argument8[-1] = "V"
return a-b-c
};
var argument8 = null;
var base_0 = [-100,595,-1,82,1.7976931348623157e+308,157]
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
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test227.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)