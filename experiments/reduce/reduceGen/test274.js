





var callbackArguments = [];
var argument1 = true;
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1['s'] = [627,242,403,49,49,126,122]
argument2[4] = null
base_0[1] = [969]
return a*b+c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = ""
base_1[9] = 1.2701553411263331e+308
argument7[4] = true
return a/b+c+d
};
var argument6 = null;
var argument7 = 126;
var argument8 = null;
var argument9 = ["l3","N","A","f","@v2","B","-","%"];
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = [843,403,618,242,595,122]
argument7[2] = [460,"pn","B&",893,"o",82]
return a+b/c*d
};
var argument11 = [126,595,460,-100,0];
var argument12 = r_1;
var argument13 = [213,1.7976931348623157e+308,969,783,122,627,893,213];
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = 6.327489480904386e+307
argument13[25] = ""
argument11[8] = "T"
return a*b+c/d
};
var base_0 = ["y","jL"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["y","jL"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["y","jL"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["y","jL"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test274.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)