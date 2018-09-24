





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[213] = ["dz","|","e","FA","a3","a"]
argument1 = [969,0,823,-100,627,1.7976931348623157e+308,213,122,213]
argument2['{S'] = {"49":3.102028722292738e+307,"gg":"","":59,"1.7976931348623157e+308":"","1.4604525347813011e+308":"","5.53157842428196e+307":126,"3.5957118439234903e+307":25,"u":5.322172132566041e+307,"z":"","8.906170039297333e+307":"G"}
return a+b+c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[-1] = [403,49,0,627,618,823]
argument4[1.1706227480013105e+307] = null
argument4[1] = true
return a*b*c/d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.0050602206045617e+308] = ""
return a-b*c+d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.0050602206045617e+308] = {"]":"","":893}
return a-b*c-d
};
var argument5 = {"618":1.5480892313984524e+307,"2.2115682770454407e+307":"d"};
var argument6 = null;
var base_0 = [607,893,-1,100,705,0]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,893,-1,100,705,0]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,893,-1,100,705,0]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,893,-1,100,705,0]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test986.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)