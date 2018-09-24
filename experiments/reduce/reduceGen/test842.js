





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = {"59":"","783":1.394497268419084e+307,"":"0","1.2537821261124338e+308":",0","-100":"?[","1.0536955036862481e+308":"","l&":969,"1.5765894070365226e+306":"","i":-1};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1['Cb'] = {"595":1.0516165677078222e+308,"'":""}
return a*b+c/d
};
var argument5 = 7.209071641853804e+307;
var argument6 = null;
var argument7 = 1.206905467073046e+308;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = true
argument5[9] = {"49":213,"":403,"1.7010282680235213e+308":"","D":"L"}
argument7[2] = 655
return a*b-c*d
};
var argument9 = r_2;
var argument10 = true;
var argument11 = {"242":595,"(R":82,"":"S","TU&D?":82};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[25] = ""
return a*b*c-d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[82] = [157,25,460,82,59,157,655,100]
return a*b/c+d
};
var argument14 = true;
var base_0 = ["aK",969,403,655,"l3x;lz",59,"&",82]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["aK",969,403,655,"l3x;lz",59,"&",82]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["aK",969,403,655,"l3x;lz",59,"&",82]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["aK",969,403,655,"l3x;lz",59,"&",82]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test842.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)