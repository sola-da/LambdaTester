





var callbackArguments = [];
var argument1 = r_0;
var argument2 = ["P3h","6","P","%5","fT@","?","ba|","xg","(,"];
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = ["{","|xU",")","E","x","J","AT"]
argument2[3] = ""
return a+b*c+d
};
var argument5 = r_0;
var argument6 = r_0;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = "R)6R"
base_1[4] = true
base_1['length'] = {"714":1.6142022022811687e+308,"":"","*":"9D","5.915156583291739e+307":1.051416698101429e+308}
return a+b+c/d
};
var argument9 = ",B";
var argument10 = r_1;
var argument11 = 403;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = {"100":122,"":" ","`@d":"","tt":5.632144848054355e+307,"8#":1.6369345784495156e+308}
argument10[7.463432409233234e+307] = ""
base_2[0][9.12287810829114e+307] = 5.227891884268011e+307
return a*b*c-d
};
var argument13 = false;
var argument14 = r_1;
var argument15 = 157;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[0] = ["6","<"]
base_3[4] = 1.7976931348623157e+308
return a*b-c-d
};
var base_0 = ["$,",1.7976931348623157e+308,"g"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$,",1.7976931348623157e+308,"g"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$,",1.7976931348623157e+308,"g"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$,",1.7976931348623157e+308,"g"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test133.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)