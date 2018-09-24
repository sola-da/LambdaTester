





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = ["S^w@",")",595,1.7976931348623157e+308,"4",823,"K4[FW Q"]
argument2[7] = false
base_0[0][5e-324] = {"460":1.4479382796205063e+308,"969":"","":"A","1.1975304197187232e+308":5.247917233770502e+307,"7.532055161367299e+307":"(n","5e-324":"","A":595}
return a/b+c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[618] = 618
return a*b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[893] = false
argument5[0] = {"0":"kI","2":4.305411622517315e+307,"460":2.5281833660476614e+307,"":"","1.2019780718775371e+308":"","S_$(":"","G`g6":8.89078325706745e+306,"1.4458862527735608e+308":8.496545174314812e+307,"7*":242}
return a/b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = "P"
return a+b/c
};
var argument6 = null;
var argument7 = null;
var base_0 = [893,"7",783,607,100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,"7",783,607,100]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,"7",783,607,100]
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,"7",783,607,100]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test774.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)