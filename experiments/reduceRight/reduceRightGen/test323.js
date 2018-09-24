





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = {"783":";m","xg":969,"7.816816269289009e+307":7.253829295158002e+307,"1.620180738394417e+308":8.038187672663037e+306,"*":213,"":8.863624987688443e+307,"1.1256572151750166e+308":"L?","1.0525060036565042e+308":"g"}
base_0[4][1.7976931348623157e+308] = 1.1101693342372076e+308
return a/b*c-d
};
var argument2 = {"82":"","100":"","157":1.5816034487453778e+308,"843":460,"6.051893450529862e+307":"","":1.1438530166427232e+308};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = [655,49,5e-324,403,969]
return a+b*c+d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = {"823":126,"":"","T":460,"By*2r":1.0337075915727351e+308,"4.1952678770654696e+307":"h=cn","R2K":""}
return a-b/c/d
};
var argument5 = true;
var argument6 = r_0;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['8('] = 1.0257540930639211e+308
return a+b/c-d
};
var base_0 = [213,"O","65",893,-1,969,242,-100,627]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,"O","65",893,-1,969,242,-100,627]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,"O","65",893,-1,969,242,-100,627]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,"O","65",893,-1,969,242,-100,627]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test323.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)