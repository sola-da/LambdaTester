





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[25] = {"126":">k","618":9.023271089377334e+307,"":126,"3.3750765785904754e+307":705,"-100":"@I","So<m'nG}5=":"PV","1.6324431506460839e+308":1.2141044854794732e+308,"1.4858560770357317e+308":3.432427303751148e+306,"4.2474711777140506e+307":1.7976931348623157e+308}
argument3[6.35085648319999e+307] = false
argument2[627] = null
return a/b*c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7.463432409233234e+307] = {"59":"","82":"","122":1.7926686967343454e+308,"607":"M","618":"","4.899103819789114e+307":"7","":1.4017455472119043e+308,"1.1106205995498064e+308":"","8 CN":"oF"}
argument6[1.1277822633002616e+308] = 618
return a+b/c*d
};
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[213] = 1.089736170412095e+308
return a+b*c*d
};
var argument8 = "";
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[213] = null
argument11[1.359136872727139e+308] = ["az,i7w@","^","#","?","NI","5REtQ_Ix","C"]
argument9[4] = null
return a/b-c-d
};
var base_0 = [-100,969,843,893,403,618]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,969,843,893,403,618]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,969,843,893,403,618]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,969,843,893,403,618]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test357.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)