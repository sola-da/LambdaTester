





var callbackArguments = [];
var argument1 = "[";
var argument2 = null;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.3938918493123786e+308] = true
argument1[4] = [213,126,25,242]
argument3[403] = {"714":714,"6.303023637969558e+306":5.627964882291802e+307,"":"$Pv","Y":969,"C#":1.539270130284915e+308," ":655,"l":5.91486289851296e+307,">Gb":"Fv-{","'":"!","LZ":""}
return a-b/c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[';N'] = {"":""}
base_1[2] = {}
return a-b/c/d
};
var argument6 = true;
var argument7 = "8";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[6] = false
argument8[8] = 893
argument10[1.359136872727139e+308] = {"":"?`"}
return a+b+c-d
};
var argument9 = true;
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = ["=","f"]
base_3[9] = ["AK","B","$",969,"n",-100,0,122]
return a+b/c+d
};
var argument12 = r_0;
var argument13 = null;
var base_0 = [100,627,-1]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,627,-1]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,627,-1]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,627,-1]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test863.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)