





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['5L'] = "`"
argument2['j'] = "q)^+h0X"
argument3 = {"460":5e-324,"":-100,"1.0430501775245312e+308":"","c":1.4549736598903586e+307}
return a-b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = ["=",823,"M","<","g",0]
argument5[1] = 1.5490238156719779e+308
argument5 = [705,618,705,0]
return a-b*c
};
var argument4 = null;
var argument5 = {"25":1.6383231046336024e+308,"3.617147928317779e+307":8.301525959199035e+307,"5e-324":893,"PS":",","1.374832439334367e+307":"","6.403185514892485e+307":8.546485767235842e+306};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[6] = ""
return a/b/c
};
var argument7 = r_0;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[705] = 0
base_3 = ["l","P"]
return a+b-c
};
var argument9 = 8.728199146248087e+307;
var argument10 = r_3;
var base_0 = ["#","$:","f^-=","S","]","x","PFh+p#v"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#","$:","f^-=","S","]","x","PFh+p#v"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#","$:","f^-=","S","]","x","PFh+p#v"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#","$:","f^-=","S","]","x","PFh+p#v"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test306.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)