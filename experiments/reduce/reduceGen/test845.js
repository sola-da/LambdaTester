





var callbackArguments = [];
var argument1 = [618,705,403,1.7976931348623157e+308];
var argument2 = {"59":5.769513911933439e+306,"100":"","5.439379093465963e+307":"|iZ","6.106974798246119e+307":1.5222471423085663e+308,"":"_f4"};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['*c'] = null
base_0 = [705,595,49,49,843,-1,783,893,242]
return a*b*c-d
};
var argument5 = ["o0","Y","u",";`","n","{Vak","|","H","Y"];
var argument6 = false;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[655] = {"157":49,"=":"Nf","dWL":1.368774401622894e+308,"T(":"@-"}
argument5['s'] = true
return a*b+c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['(R'] = {"618":"","823":893,"893":"p","3.3497067678587286e+307":1.1389084531446306e+308,"1.083937592673945e+308":"","Y":"a(","8.54710658544865e+307":2.6320358142973813e+307,"1.7976931348623157e+308":"","'Z":""}
return a-b*c*d
};
var argument10 = r_2;
var argument11 = false;
var argument12 = 0;
var argument13 = false;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[25] = ""
return a/b-c/d
};
var base_0 = ["H<","hC","C","xD","Xt","Ht","E"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["H<","hC","C","xD","Xt","Ht","E"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["H<","hC","C","xD","Xt","Ht","E"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["H<","hC","C","xD","Xt","Ht","E"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test845.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)