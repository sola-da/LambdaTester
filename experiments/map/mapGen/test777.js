





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['C'] = [595,0,82,1.7976931348623157e+308,823,59,705,122,25,126]
argument2[1.268696794505825e+308] = null
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['A'] = null
argument3[969] = ""
return a*b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.1881593224845412e+308] = null
return a*b-c
};
var argument4 = {"":"xc","%P_s:":9.911890856436923e+307,"8.911259482769481e+307":"V","1.7222047307665174e+308":"a",":$uY":"","2.716925744444939e+307":"V"};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][1.4677087964888306e+308] = {"25":"b","655":"q","":"","1.7976931348623157e+308":5.371940570010906e+307,"1.2613670846359662e+308":"vX?","1.5858714572025583e+308":"_","E":5.158167929352815e+307,"-1":"p","-S&:);=PS7J":"(","1.6617816347249792e+307":-1}
return a+b-c
};
var argument6 = [595];
var base_0 = [49,-1,607,25,893,242,1.7976931348623157e+308,893,100]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,-1,607,25,893,242,1.7976931348623157e+308,893,100]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,-1,607,25,893,242,1.7976931348623157e+308,893,100]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,-1,607,25,893,242,1.7976931348623157e+308,893,100]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test777.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)