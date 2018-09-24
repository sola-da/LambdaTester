





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[157] = {"242":"^","L":9.722061963242501e+306,"5.209920741877736e+307":1.2162608661032114e+308,"":242,"*H":"","2.8963891146775795e+307":1.0441429715537235e+308,"2.4795166469588213e+307":"`hs 8","1.3222970632784578e+308":"0","1.5588920829752498e+308":242,"1.0220629341512104e+308":126}
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = null
return a-b*c
};
var argument3 = [122,-100,969,49,705,-1,122,-1];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5][1] = {"213":"","595":"aBK9","1.2613690818883276e+308":"","":213,"3.9895022445574034e+307":":8","1.0249241136007476e+308":"jn","1.2539039961382507e+308":"n"}
base_2[3] = false
argument5[403] = [823,893,893,122,25,607,5e-324]
return a*b/c
};
var argument5 = r_0;
var argument6 = 969;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = 1.2238725048629105e+308
argument8['f9zgt4n!ZJR]W'] = {"100":"","655":3.34201696323891e+307,"":213,"q":8.203808080930584e+307,")":"WG","+Ne":""}
argument8['Y'] = {"n'e":"m"}
return a-b*c
};
var base_0 = ["O","FPPZ","`!","1","G:","`","qZj","[*","{"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["O","FPPZ","`!","1","G:","`","qZj","[*","{"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["O","FPPZ","`!","1","G:","`","qZj","[*","{"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["O","FPPZ","`!","1","G:","`","qZj","[*","{"]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test429.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)