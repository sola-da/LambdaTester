





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5][2] = {"460":"","1.4335257858432265e+308":"","3.486496275369738e+307":595,"6.666984580692789e+307":2.6379456646488857e+307,"F":126,"":"{","1.4103437715715215e+308":7.867517158985813e+306,"1.178283130139097e+308":969,"1.7386072579571837e+308":"","mT":"XYp"}
return a+b*c
};
var argument2 = r_0;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = {"122":8.071591407448021e+307,"705":"=+","^@":"zU]","1.2962396147967114e+308":"","3.0374093562406294e+307":4.484622472717246e+307,"":126,"q`E":"1sB","`":"","-100":157}
argument5[9.869573703797622e+307] = ""
return a-b*c
};
var argument5 = null;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = false
argument8 = [893,714,"tu","xKv[",595,"(t",655,"Jb8"]
argument9[8] = "P"
return a/b+c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][2] = false
argument9[1] = ""
argument10[893] = ""
return a-b-c
};
var argument9 = r_2;
var argument10 = r_2;
var base_0 = [59,"Q",122,25,"!K","A"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,"Q",122,25,"!K","A"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test780.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)