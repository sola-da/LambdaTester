





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = [783,969,25,213]
return a*b-c-d
};
var argument2 = r_0;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = ["ACwXR",969,59,714,"lx","W","+","L","4PU"]
argument6[1] = true
argument5['{S'] = 714
return a*b+c*d
};
var argument5 = {"25":823,"I%8":82};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['8('] = {"25":"","627":":","8.140640130903092e+307":"9j*>D","1.5094845967139705e+308":126,"R&Ba":4.736860252904556e+307,"1.7178072294807906e+308":"7>#u","":"&","3.7154103611117224e+307":0,"7.843971167920212e+307":3.258334956079105e+307,"7.916882055627849e+307":"?"}
base_2 = null
return a-b*c/d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = ["@,",":","G}lP","Pi",969,157,"C","P",893]
argument8[4] = {"59":"u3`","595":"","969":969,"i":"Y[","":"|",",`":5.729874349087147e+307,"1.6146985707938535e+308":1.493682339013866e+308,"1.1181229298228666e+308":1.7643303536089484e+308}
return a/b/c-d
};
var argument8 = r_0;
var base_0 = [823,460,618,122,59,5e-324]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,460,618,122,59,5e-324]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,460,618,122,59,5e-324]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,460,618,122,59,5e-324]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test186.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)