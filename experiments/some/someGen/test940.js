





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = [213,213,242]
base_0[9] = null
base_0[2][5e-324] = null
return a/b/c
};
var argument2 = "|";
var argument3 = {"1.0810356442853714e+307":122,"3.6830648793103817e+307":1.1403274968516612e+308,"-1":"","":"0","vM]95&":1.4162386948321647e+308};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = false
argument4[3] = "l@"
base_1[1][0] = {"655":"ZYzy","783":"","893":"","":122,"8.758643411387445e+307":655,"`":714}
return a+b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.0727847755854773e+308] = null
argument5[4] = [126,823,49,0,49,714]
argument7[7] = 122
return a+b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.0727847755854773e+308] = [460,59,893,242,823]
argument7[2] = false
return a-b*c
};
var argument7 = r_0;
var argument8 = 4.4510653571590835e+307;
var base_0 = ["n","4OW]","=[H"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["n","4OW]","=[H"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["n","4OW]","=[H"]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["n","4OW]","=[H"]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test940.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)