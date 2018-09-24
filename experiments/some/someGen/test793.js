





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = {"1.1193383061379528e+308":",","6.237666380064724e+307":"","R":213,"1.19103119205173e+308":"","":"-","1.2326873010839068e+308":1.4540009349770659e+308}
argument2[7] = 5.79069793139624e+307
return a-b-c
};
var argument2 = {"8.975073344249545e+307":"","8.900877472853084e+306":""};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['f9zgt4n!ZJR]W'] = ""
base_1[2][5e-324] = {"59":"-",";)kw0F":843,"H":"","xQ":"","":"o1+"}
base_1[5][0] = "q`"
return a*b/c
};
var argument4 = {"714":1.646665648162613e+308,"893":"3","Xot,":122,"8.380182554323404e+305":893,"1.593199381553529e+308":714,"":"","W":"wL1","1.7976931348623157e+308":823,"<":"8"};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[618] = true
base_2[0] = ["w","pT","C(n","D"]
return a*b*c
};
var argument6 = ["9","Kz","N","z(","r^","P="];
var argument7 = r_2;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = ""
argument9[2.249941463060761e+307] = null
return a*b*c
};
var argument9 = ["i","C","Q*+","I"];
var argument10 = r_2;
var base_0 = [-100,823,627,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,823,627,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,823,627,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,823,627,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test793.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)