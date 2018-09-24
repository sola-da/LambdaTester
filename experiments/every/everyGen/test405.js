





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[403] = 126
return a+b*c
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = {"59":1.080087650979422e+308,"460":"","783":"","893":7.599380035382065e+307,"5e-324":"2","1.170040614876174e+308":"","":"","-100":"","9.357566472868276e+307":"","p{&":""}
argument5['sJRZP'] = 1.5854408944078645e+308
return a/b-c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = [618,213,714,893,893,403,627]
argument8 = [714,893,655,213,25,242]
return a/b*c
};
var argument7 = {"5.605242879278047e+307":1.5579275204102046e+308,"2.573036140928571e+307":"n3"};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = true
argument8[2] = null
return a/b-c
};
var base_0 = ["<Bp7","C","Pq","q","l","$<("]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<Bp7","C","Pq","q","l","$<("]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<Bp7","C","Pq","q","l","$<("]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["<Bp7","C","Pq","q","l","$<("]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test405.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)