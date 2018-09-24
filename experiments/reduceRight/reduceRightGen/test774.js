





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['T'] = {"":"xc","%P_s:":9.911890856436923e+307,"8.911259482769481e+307":"V","1.7222047307665174e+308":"a",":$uY":"","2.716925744444939e+307":"V"}
argument2[6] = 9.235142679906881e+307
return a-b+c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.4250811791542279e+308] = {"25":"b","655":"q","1.7976931348623157e+308":5.371940570010906e+307,"":"","1.2613670846359662e+308":"vX?","1.5858714572025583e+308":"_","E":5.158167929352815e+307,"-1":"p","-S&:);=PS7J":"("}
argument3 = [705,714,0,49,25]
base_1[3] = ["N","1","KR","?c6kzd<g@","b*x","@","`H","NxSY"]
return a/b/c+d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[7] = false
argument4['a'] = 893
argument5[62] = false
return a-b+c+d
};
var argument4 = false;
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[-1] = "Nbl2"
argument8[4] = false
return a+b+c/d
};
var base_0 = [705,242]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,242]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,242]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,242]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test774.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)