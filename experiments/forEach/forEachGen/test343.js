





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][4] = 9.801384497643772e+307
argument2[5] = ")f"
argument3[9] = {"655":5.95296601811032e+307,"1.3541726647607454e+308":"!","8.460867942232095e+307":3.3509300391983715e+307,"1.6739630308372132e+308":"o","qC(8`cAiI":""}
return a/b+c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = "RU_"
argument5[2] = ["Z",595,126,"9","OOw",-100,"in",157]
base_1[1] = {"100":1.710179873579677e+308,"893":"","9.296803893218026e+306":1.6637608431304655e+308,"c7x":655,"x":"","1.4944476348093422e+308":"","1.3630620754626891e+308":"F"}
return a/b-c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = 705
argument5 = {"0":4.444400181481686e+307,"=":"wEnZ","3.4340214260266245e+307":100,"-":"7@&"}
return a/b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[9] = null
argument7[4] = true
argument7[2][783] = {"595":100,"":"","1.2291210771631783e+308":1.559289247923061e+307,"WM-{-":"g","9foT":"Lda]","1.612480785984089e+308":823,"8.344036560283269e+307":595,"Q":3.2293345029682805e+307,"P":595}
return a-b/c
};
var argument7 = 1.0022206920308943e+308;
var argument8 = 126;
var base_0 = ["O","+my","R","t*","djv@",":M;"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["O","+my","R","t*","djv@",":M;"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["O","+my","R","t*","djv@",":M;"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["O","+my","R","t*","djv@",":M;"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test343.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)