





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = "#"
argument2[1] = [5e-324,607,460,5e-324]
argument2[618] = [213,100,49]
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['Y'] = true
argument3[157] = null
argument4[7.004668712060429e+307] = ""
return a/b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5][0] = [1.7976931348623157e+308,843,242,126,893,49,49,893]
argument3[2] = ["cc","t$u","7!","V","6","f","*","y"]
argument4[0] = [607,460,460,627,893,618,0]
return a/b-c
};
var argument4 = "t";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['f'] = "$>"
return a+b+c
};
var base_0 = ["u","M>#s9KMe","4","Y","pS","r","9","Z","o"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["u","M>#s9KMe","4","Y","pS","r","9","Z","o"]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["u","M>#s9KMe","4","Y","pS","r","9","Z","o"]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["u","M>#s9KMe","4","Y","pS","r","9","Z","o"]
var r_3= undefined
try {
r_3 = base_3.some(argument5)
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
require("fs").writeFileSync("./experiments/some/someGen/test634.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)