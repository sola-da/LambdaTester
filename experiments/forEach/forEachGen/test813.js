





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[126] = "y"
argument2[0] = null
argument1 = false
return a*b/c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = [1.7976931348623157e+308,460,618,823]
base_1[0] = "zCc"
return a+b/c
};
var argument4 = true;
var argument5 = 460;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.2421645642809447e+308] = null
argument7['?'] = null
return a*b+c
};
var argument7 = -100;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[5] = {"627":"Z","893":"1t","":"^[","1.754325049947219e+308":"P3s_","1.3413990323623382e+308":"","[a":1.0731832243744757e+307,"1.4838461756804117e+308":1.6847490516532034e+308,"9.748755599600995e+307":""}
base_3[1][1] = {"e,;d{r9c[":"O","":""}
base_3[1][2] = ""
return a-b*c
};
var argument9 = {"":9.769317999424343e+307};
var base_0 = [122,823,705,627,-100,82,100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,823,705,627,-100,82,100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,823,705,627,-100,82,100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,823,705,627,-100,82,100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test813.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)