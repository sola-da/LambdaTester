





var callbackArguments = [];
var argument1 = null;
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6.35085648319999e+307] = "r"
argument2[4] = [-100,100,627,655,607,5e-324,25,823]
argument2[213] = [">","m{","k"]
return a+b*c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = "IT"
argument7[4] = true
base_1[3][1] = ["clI@","H!","o","q",":","!8tt","=,s",")1E","=@n"]
return a-b*c*d
};
var argument6 = 607;
var argument7 = "";
var argument8 = r_2;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[893] = ["G","B","i&","b"]
base_2[3] = ""
return a/b+c-d
};
var argument10 = 655;
var argument11 = [-1,-1];
var argument12 = {"":""};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[4] = false
argument10 = false
return a+b*c*d
};
var base_0 = [126,627,618,595,49,-1,714,403,823]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,627,618,595,49,-1,714,403,823]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,627,618,595,49,-1,714,403,823]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,627,618,595,49,-1,714,403,823]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test735.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)