





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][0] = 1.4555810093486001e+308
base_0[7][2] = [157,969,"r","p","8",157,627]
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = {"0":25,"25":8.884115110299682e+307,"82":"","157":"b","242":"","":"","a":893,"g":242}
base_1[6] = ""
argument4[1] = ["`","qZj","[*","{",242,607,"#v",893]
return a/b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = false
argument5['3Tpj5'] = {"1.2162608661032114e+308":"","1.6674092173531185e+308":"*H","":2.8963891146775795e+307}
return a+b-c
};
var argument4 = {"":242,"2.4795166469588213e+307":"`hs 8","1.3222970632784578e+308":"0","1.5588920829752498e+308":242,"1.0220629341512104e+308":126,"[":460};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = {"122":"`","213":213,"607":1.4261364618337118e+308,"1.2415636734292694e+308":1.2613690818883276e+308,"":3.9895022445574034e+307,":8":1.0249241136007476e+308,"jn":595,"aBK9":1.2539039961382507e+308}
return a*b*c
};
var argument6 = null;
var base_0 = ["K","g",460]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["K","g",460]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["K","g",460]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["K","g",460]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test423.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)