





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['3Tpj5'] = ["O","[;"]
argument3['V'] = {"460":893,"893":126,"969":823,"8.393216708082758e+307":"6","PaG":"=","":"","2.6738324604435048e+306":403,"R":714}
return a+b+c
};
var argument2 = "";
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.1881593224845412e+308] = 783
argument5[607] = false
return a*b+c
};
var argument5 = true;
var argument6 = {"595":49};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][7] = [893,460,0,25,783]
base_2[6] = {"49":"|bx^","4.068169820917815e+306":5.472990149757309e+307,"":"","_a":655,"1.7816157984989429e+308":607,"585sDn":213,"2.560014275756536e+307":""}
base_2[3][2][6] = false
return a-b+c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[5] = 1.7942219009699323e+308
return a/b*c
};
var argument9 = "";
var base_0 = [">","-",":","S>","y",")"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [">","-",":","S>","y",")"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [">","-",":","S>","y",")"]
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test718.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)