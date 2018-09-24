





var callbackArguments = [];
var argument1 = null;
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = true
base_0[0] = ""
return a+b*c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = "[v"
base_1[7] = null
return a+b-c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[213] = {"25":"","655":595,"9.373331304708722e+307":1.7226876013262887e+308}
base_2[0] = {"100":843,"783":823,"":6.226698190101416e+307,"1.3692805590480685e+308":"h","1.0327305860096242e+308":"u","_":"Gzn","4.615583623461995e+307":""}
base_2['length'] = ["0",0,714,"p"]
return a+b+c-d
};
var argument7 = {"":1.1756260384542968e+308,"-100":25};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = {"157":8.532184654364648e+307,"9.667321439157517e+306":"","+":8.720403149100709e+307,"1.6924573318225972e+308":"H&$J"}
return a*b+c*d
};
var argument9 = true;
var argument10 = true;
var base_0 = [100,"6M",627,157]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,"6M",627,157]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,"6M",627,157]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,"6M",627,157]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test128.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)