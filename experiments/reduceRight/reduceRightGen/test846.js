





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[8] = ""
argument3[-1] = null
return a/b*c*d
};
var argument2 = {"122":1.7445391789088273e+308,"126":"","893":5.142596967465889e+307,"2.645409972507282e+307":1.775070073389909e+308,"":59,"E":9.690986220648954e+307,")":"R"};
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[9.624051682326797e+306] = ""
base_1[0][3] = {"0":783,"":126,"N-0":"","s":1.1340117088716333e+308,"1.574663718085386e+308":"","1.6959943274713519e+308":1.7112917686510651e+308,"1.2730728726212715e+308":1.0772167627769787e+307,"-100":7.703306678278101e+307}
base_1[3] = null
return a-b/c-d
};
var argument5 = {};
var argument6 = [1.7976931348623157e+308,893,403,1.7976931348623157e+308,59,403,59];
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[783] = {"893":1.6611558269901984e+308,"":"F4","hdb ]":1.1947264756250362e+308,"1.3127941745042137e+308":"","3.9745110622479753e+307":100,"!":1.4042607521712399e+308}
argument9['UU'] = true
return a-b*c-d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = 126
argument9[3] = "ti"
return a*b*c-d
};
var base_0 = [403,0,655,618,59,618,-1,25,59,705]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,0,655,618,59,618,-1,25,59,705]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,0,655,618,59,618,-1,25,59,705]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,0,655,618,59,618,-1,25,59,705]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test846.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)