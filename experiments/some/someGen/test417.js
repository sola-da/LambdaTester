





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['f!BO'] = false
return a/b-c
};
var argument2 = null;
var argument3 = 6.122179147945555e+307;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.6798476101238045e+308] = false
argument5 = null
argument5[1] = true
return a-b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = false
argument6[6] = {"":1.141538039463552e+308}
return a+b/c
};
var argument6 = {"122":5.999829552754223e+307,"3.7629928992492055e+307":9.24718195932309e+307,"av,":1.5814370428387145e+308,"3.5953800320001437e+307":4.50764040129721e+307};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = {"595":"","655":"mG","":"","J":705,"7b":"&","1.4300549969367354e+308":"","1.2825252546332025e+308":"[","5.954864602232775e+307":""}
base_3[5][0] = [-1,783,122,607,25,607,-1,-1,969]
return a+b+c
};
var base_0 = ["i&",59,"kB","1","!`",618,"&n"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["i&",59,"kB","1","!`",618,"&n"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["i&",59,"kB","1","!`",618,"&n"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["i&",59,"kB","1","!`",618,"&n"]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test417.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)