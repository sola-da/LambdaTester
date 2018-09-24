





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8] = {"":"{!,4J","4.06035286321483e+306":7.453573093466299e+307,"mz8MD":""}
argument2[3.286160553564105e+307] = {"25":"","3.7311326337870444e+307":"","":2.9572101049116436e+307,"7.79176402879804e+307":"","cC=:&M":59}
return a-b-c*d
};
var argument2 = "";
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = true
return a/b+c/d
};
var argument4 = true;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['v'] = 126
base_2[1][2] = {"122":1.3365527947980934e+308,"":1.2673612982114394e+308,"1.083619356654681e+308":1.6831805939311406e+308,"(":655,"-1":"c|","1.1329045931687976e+308":1.4578143397123987e+308,"6.335911326673055e+307":""}
return a+b-c/d
};
var argument6 = null;
var argument7 = [403,82,"e",157];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1][4] = null
argument9[1] = {"0":1.1451014958501163e+308,"82":"","242":"","655":714,"823":"","7.756985374646928e+307":4.995794053646538e+306,"%":1.6368029755389503e+308,"a":1.5710870143983992e+308,"":607}
return a*b*c+d
};
var base_0 = [82,213,25,122,460,655,0,893]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,213,25,122,460,655,0,893]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,213,25,122,460,655,0,893]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,213,25,122,460,655,0,893]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test909.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)