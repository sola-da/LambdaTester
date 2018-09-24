





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = ["(@","+;"]
argument3[5] = ["NcU2",823,-1,25]
base_0[1][3] = true
return a+b/c*d
};
var argument2 = false;
var argument3 = false;
var argument4 = null;
var argument5 = false;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = 5.088834238728471e+306
argument5[213] = true
argument5[7.463432409233234e+307] = {"242":"&1","":"","(":1.2140423546875688e+308,"}7q2Nd":0,"H":9.367328704853606e+306,"1.3807167057230656e+306":""}
return a+b-c-d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['18{'] = {"w":7.707331780774763e+307,"":""}
argument9[1.1277822633002616e+308] = ["|]","JA","^g9","f=Yr7","wI","G","mui","$#","nB"]
return a*b/c/d
};
var argument9 = {"h":"j=","1.1709162473197719e+308":9.700403280046834e+307};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = {"82":969,"618":"","1.776153707266837e+308":7.40758122032e+307,"":"","Y":714,"1.7411186492015665e+308":">I","]!5":242}
return a+b-c*d
};
var base_0 = ["tm]*","4","z","0","]c"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["tm]*","4","z","0","]c"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["tm]*","4","z","0","]c"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["tm]*","4","z","0","]c"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test880.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)