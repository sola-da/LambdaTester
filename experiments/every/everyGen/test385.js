





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = null
base_0[9] = [-1,823,893,213,213,100,1.7976931348623157e+308,783]
base_0[1] = "N"
return a+b*c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.3599216339661573e+308] = ["m","$","T6L,>","6","w","S"]
argument6 = ""
base_1[9] = 7.699235315999069e+307
return a+b-c
};
var argument5 = null;
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = 4.3693923210761703e+304
return a*b+c
};
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[6] = true
return a-b*c
};
var argument10 = "";
var argument11 = null;
var base_0 = [122,49,126,100,-1,714,618,-100,49,213]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,49,126,100,-1,714,618,-100,49,213]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,49,126,100,-1,714,618,-100,49,213]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,49,126,100,-1,714,618,-100,49,213]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyGen/test385.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)