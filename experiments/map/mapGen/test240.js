





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = {"783":2.287192392495372e+307,"823":"","":1.7131368900644317e+308,"E":"","1.9790907935240508e+307":"6","1.26850174334409e+308":7.667346353135682e+307,"9.065568984505817e+307":2.482908916231815e+307,"1.367736350406494e+307":"","5.39879533509159e+306":"Y","-1":""}
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[82] = null
base_1[4] = [0,82,618,618,595,714,1.7976931348623157e+308,157]
argument3[49] = true
return a/b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = ["=1 ","cn","vb"]
base_2[0] = ""
return a/b*c
};
var argument4 = 1.2630456086363035e+308;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[607] = 5.92412572728307e+307
base_3 = null
return a+b+c
};
var argument6 = "";
var argument7 = false;
var base_0 = ["q",")0CG",783]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["q",")0CG",783]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["q",")0CG",783]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["q",")0CG",783]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test240.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)