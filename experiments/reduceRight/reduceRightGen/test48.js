





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = null
return a*b+c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = null
return a/b*c-d
};
var argument3 = {"9":9.313205406231542e+307,"403":"","783":"","{S":25,"Q":"","1.7976931348623157e+308":"NK-","w":0};
var argument4 = false;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = [969,893,82,460,126,126]
argument7[0] = ""
argument7[0] = {"705":"y#5R","783":"","5e-324":"","4.887463230690901e+306":"%Bw","q[":655,"":595,"1.5227816580272065e+308":"a"}
return a+b+c-d
};
var argument6 = null;
var argument7 = r_2;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[0] = "_&"
base_3[3] = [460,100,-100,59,126,213]
return a*b+c*d
};
var base_0 = [1.7976931348623157e+308,714,403,25,59,157,-1,82,82,783]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,714,403,25,59,157,-1,82,82,783]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,714,403,25,59,157,-1,82,82,783]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,714,403,25,59,157,-1,82,82,783]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test48.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)