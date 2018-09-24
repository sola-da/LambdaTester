





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[213] = false
return a/b+c-d
};
var argument2 = {"0":823,"126":"","_":"k","2.6030421066314186e+306":6.118953302131254e+307,"5.158106383729124e+307":1.75900587061816e+308,"2.1210138093361256e+307":"LG","":"%y"};
var argument3 = ["S","-",607,"oE"];
var argument4 = [823,82,-1,100,705,843,126,893,714];
var argument5 = r_1;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[9.331954948603684e+307] = ""
return a-b*c*d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[8] = false
argument7['s'] = {"607":"","":655,"1.014470064063603e+308":9.05655961632288e+307,"C":213}
return a+b*c/d
};
var argument8 = null;
var argument9 = null;
var argument10 = r_3;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[403] = [607,1.7976931348623157e+308,460,5e-324]
argument9[7.463432409233234e+307] = [783,82,25,627,403,-1,0,122]
return a/b*c*d
};
var base_0 = [-100,893,100,403,460]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,893,100,403,460]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,893,100,403,460]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,893,100,403,460]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test709.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)