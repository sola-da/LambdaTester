





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1]['d'] = {"783":"","2.3902142347736226e+307":1.7945252575141568e+308,"v":";z<4","":1.7430989773343469e+308,"|":843,"1.689495336215743e+308":"["}
return a*b+c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = null
argument4[0] = 25
return a+b*c
};
var argument4 = true;
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = 4.024151708932104e+307
argument7[49] = [0,595,"s8",618,893,"qJ",969,"M"]
argument8[0] = null
return a+b+c
};
var argument7 = r_0;
var argument8 = r_1;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3] = {"122":"","627":"","1.6834456070651472e+308":5e-324,"7.124177472956005e+306":618,"q":714,"d":"","":1.2402164714311106e+308,"7)":7.13988264894397e+307,"4.912018279662885e+307":3.302857819971205e+307,"H":1.7976931348623157e+308}
argument10[969] = {"618":"","O":2.5749332471157675e+306,"D1":"","":1.0968970006100329e+308}
base_3[2] = ""
return a-b*c
};
var argument10 = r_1;
var base_0 = ["jF0","&",655,"4p",627,"ah","}",0,"Pt+"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["jF0","&",655,"4p",627,"ah","}",0,"Pt+"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test271.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)