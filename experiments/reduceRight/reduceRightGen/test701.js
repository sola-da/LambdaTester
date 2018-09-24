





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = null
return a-b/c+d
};
var argument2 = {"157":"_u","1.6785446363385304e+307":"x"};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.921533274132203e+307] = null
base_1[9] = ["Ei","x","%","M","M","T",";mrq","1","m"]
argument5[7] = "e:"
return a-b/c*d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = {"126":"","":"*","9.291783715020781e+306":1.357331010905479e+308,"4.0962021842593467e+307":4.0398745997161057e+307,"8.910893931240081e+307":59}
base_2[1][5] = 1.0774077837109926e+308
return a-b-c*d
};
var argument5 = [823,-1,0,242,627,969];
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['v'] = "3d"
argument7['St'] = {"618":82,"783":"b","@X_":655,"3.1865019158936856e+306":"","l":"rY","&N-$^":"","":"","?B^":7.820324975933222e+307}
argument8[1] = 705
return a-b*c/d
};
var argument7 = null;
var base_0 = ["L;",595,"^q","G",969,714,122,82,"!GX"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["L;",595,"^q","G",969,714,122,82,"!GX"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["L;",595,"^q","G",969,714,122,82,"!GX"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["L;",595,"^q","G",969,714,122,82,"!GX"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test701.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)