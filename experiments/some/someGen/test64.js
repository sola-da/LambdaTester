





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = 1.6627156997453817e+308
base_0[0] = {"3":"","59":"","1.7678589530309284e+307":"","Y":1.490276125008629e+308,",-":1.6927767412688706e+308,"":"O","Ma":"F","1.7705134176985786e+308":"","6.913975849299216e+307":""}
base_0[1][2] = 1.4713133351664196e+308
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6] = null
base_1[8] = {"213":"dy","1.2533112079763149e+308":82,"-1":1.0383264622929799e+308,"":157,";":"","p":"s","-100":1.4025581202546616e+308}
return a*b+c
};
var argument3 = [655];
var argument4 = 4.18709734126478e+307;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = ["oNJy","Faa","T","S6","QU","D",",$"]
argument6 = ""
argument6 = ""
return a*b+c
};
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = null
base_3[7] = [":","E,",823,"oTY",242]
base_3[5] = true
return a-b*c
};
var argument8 = [595,"g_6MM","7","Q","H",59,"+7(f",1.7976931348623157e+308,"`<5;",1.7976931348623157e+308];
var argument9 = r_0;
var base_0 = [607,655,59]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,655,59]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,655,59]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,655,59]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test64.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)