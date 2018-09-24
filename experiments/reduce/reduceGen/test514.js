





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[9.331954948603684e+307] = {"618":1.303451369982733e+308,"893":9.441685666583856e+306,"":3.109534700875864e+307,"k<7bJ":82}
return a*b+c-d
};
var argument2 = {"0":1.70339871581374e+308,"100":"","595":1.2162897381798326e+308,"^?":9.930730003780778e+306,"":"Pc9"};
var argument3 = false;
var argument4 = false;
var argument5 = 1.7502634833416796e+308;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = false
argument6[0] = 242
argument5[';N'] = ["D|","^","4q","=","N","#o"]
return a+b*c+d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][3] = null
argument10[1.359136872727139e+308] = null
argument9[';N'] = null
return a/b-c+d
};
var argument9 = true;
var argument10 = false;
var argument11 = null;
var argument12 = null;
var argument13 = [460,627];
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[2] = false
return a-b*c+d
};
var base_0 = [893,59,823,242,157,242,157,82,49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,59,823,242,157,242,157,82,49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,59,823,242,157,242,157,82,49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,59,823,242,157,242,157,82,49]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test514.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)