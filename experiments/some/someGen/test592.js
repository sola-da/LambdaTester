





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = 714
base_0[4] = [893,607,655,714,126,100,627,893]
argument3[0] = null
return a-b-c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = {"460":100,"PMw$8":0}
argument6[0] = ""
base_1[5] = "I"
return a/b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = "6u"
argument7[0] = null
base_2[9] = {"969":"@","1.3567901982387856e+308":0,"4.704723410622325e+307":"d","":"'","1.0560416431551267e+308":"ij","1.0016055099351705e+308":1.3280730024899556e+308,"-100":"@"}
return a*b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4.224481734419934e+307] = [1.7976931348623157e+308,25,893,242,49,460,59,607]
argument8[4] = true
argument7['Y'] = [49,82,893,1.7976931348623157e+308,1.7976931348623157e+308,403,705,627,618]
return a*b-c
};
var base_0 = [618,"x2p","eo"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,"x2p","eo"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,"x2p","eo"]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,"x2p","eo"]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test592.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)