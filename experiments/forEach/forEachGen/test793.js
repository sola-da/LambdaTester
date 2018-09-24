





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = ""
argument2['a'] = true
argument2['-'] = "c"
return a/b/c
};
var argument2 = [627,607,595];
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = null
return a/b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.0481490052276395e+306] = null
argument6[2] = {"403":"","4.767572085441089e+307":1.9582036556560737e+307}
return a-b/c
};
var argument6 = r_0;
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = 1.1721058882423324e+308
base_3[3][0] = {"714":1.646665648162613e+308,"893":"3","Xot,":122,"8.380182554323404e+305":893,"1.593199381553529e+308":714,"":"","W":"wL1","1.7976931348623157e+308":823,"<":"8"}
return a/b-c
};
var base_0 = [714,59,213,460,-1,714,403,823,705]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,59,213,460,-1,714,403,823,705]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,59,213,460,-1,714,403,823,705]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,59,213,460,-1,714,403,823,705]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test793.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)