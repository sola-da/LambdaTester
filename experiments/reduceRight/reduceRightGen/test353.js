





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][2] = {"460":5.229209214347997e+307,"655":157,"8.884447985787871e+307":9.732020957704176e+307,"9.921663566756569e+307":"Xc*XAo0w","5.811867245860105e+307":"#y","":893,"1.0103046873891339e+308":"Ph",";aG":460}
base_0[6] = null
return a/b*c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = null
return a-b+c*d
};
var argument3 = [25,"C B","!","p"];
var argument4 = [843,126,893,969,157];
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = [655,823,595,59,823,655,82]
return a/b+c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = 3.3344671408925024e+306
return a*b*c-d
};
var argument7 = {"0":714,"126":"JtF","1.6541991600572076e+307":460,"6.744170309014382e+307":"i","1.855947792133103e+307":"r+dd*$<","9.68403533937301e+307":"","R":1.2028188195061072e+308};
var base_0 = [403,100,705,627,460]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,100,705,627,460]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,100,705,627,460]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,100,705,627,460]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test353.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)