





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[126] = null
base_0[2] = {"607":122,"655":213,"^z":893,"PAk":"","9.449852143916053e+307":3.5471890878934107e+307,"T":1.5243072351506423e+307,"F":1.6995693119694865e+308,"":714,"{":460}
return a*b/c-d
};
var argument2 = {"595":"","618":"M2w","843":213,"P":"","3.450190584515765e+307":8.979697330131496e+307,"2.947453644412264e+306":"","B":"","i":25,"":1.3195120910380904e+308,"x!":1.248905932273327e+308};
var argument3 = null;
var argument4 = null;
var argument5 = r_0;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][3] = [893,59,714,213,460,-100,157,595,-100]
argument4[25] = true
base_1[2] = ["HpCp","Vf","6","s|v"]
return a/b*c+d
};
var argument7 = false;
var argument8 = 1.422904259045692e+308;
var argument9 = ["3","{O]","$V","Mh","l","B",",","X","+T"];
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[7.463432409233234e+307] = ""
return a*b*c-d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[0] = [460,403]
base_3[0][3] = 122
return a-b-c/d
};
var argument12 = r_0;
var base_0 = [213,59,5e-324,126,126]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,59,5e-324,126,126]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,59,5e-324,126,126]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,59,5e-324,126,126]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test106.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)