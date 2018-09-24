





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = [843,213,403,823,893,1.7976931348623157e+308,627,893,100]
base_0 = false
base_0 = {"4":"n|","122":9.652421407298482e+307,"607":"Ud4","843":1.0512533483382828e+308,"7.829565586401981e+307":"^@","":9.67171104245351e+307,"3.511630433668163e+307":1.2443388288581091e+308,"1.7976931348623157e+308":"","1.1816885179370083e+307":1.3958367817365632e+308,"-1":""}
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5][0] = ""
argument4 = null
argument4[6] = null
return a/b/c
};
var argument3 = true;
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][5e-324] = null
argument6[4] = ["LBnN",627,403,893,"f:s","6",403]
return a*b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][3] = ["U","b","L"]
return a-b*c
};
var argument7 = null;
var base_0 = [714,122,1.7976931348623157e+308,618,823,627,843,-1,122]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,122,1.7976931348623157e+308,618,823,627,843,-1,122]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,122,1.7976931348623157e+308,618,823,627,843,-1,122]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,122,1.7976931348623157e+308,618,823,627,843,-1,122]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test135.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)