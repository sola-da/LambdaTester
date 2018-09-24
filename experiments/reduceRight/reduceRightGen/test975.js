





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[655] = null
argument2['y'] = null
argument3[1][4] = "EI[+zM"
return a-b/c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[5] = 8.171809159350694e+307
return a*b+c*d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[9.624051682326797e+306] = 1.1777844075263102e+308
base_2[2][1] = 1.7335723560265507e+308
base_2[2][2.819898637310108e+307] = "%"
return a/b+c-d
};
var argument4 = null;
var argument5 = {"59":1.5302685392658138e+308,"714":460,"Z":823,"1.6394904230850738e+308":"","8.804755659796779e+307":2.2012812401254755e+307,"{=J1*eQ[":5.329881924601431e+307,"":627};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1][4] = null
argument7[25] = [618,0,595,705]
argument7[9.624051682326797e+306] = 969
return a-b-c+d
};
var base_0 = [893,126,460,618,49,1.7976931348623157e+308,783,823,783]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,126,460,618,49,1.7976931348623157e+308,783,823,783]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,126,460,618,49,1.7976931348623157e+308,783,823,783]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,126,460,618,49,1.7976931348623157e+308,783,823,783]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test975.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)