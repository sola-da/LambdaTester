





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = "%e0k=y6[1s"
return a/b/c
};
var argument2 = r_0;
var argument3 = {"":655};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = 595
base_1[1] = "l"
return a+b-c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][2] = null
argument7[-1] = null
argument7[6] = ""
return a/b+c
};
var argument7 = r_0;
var argument8 = true;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = "e"
return a/b*c
};
var argument10 = true;
var argument11 = r_3;
var base_0 = ["fAX","Q","&p","+>","nS","Z","h:?#"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["fAX","Q","&p","+>","nS","Z","h:?#"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["fAX","Q","&p","+>","nS","Z","h:?#"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test46.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)