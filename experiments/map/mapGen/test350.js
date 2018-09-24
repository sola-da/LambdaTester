





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][3] = false
base_0[1][0] = "S5$"
argument3[403] = [655,-1,843,-100,25,595,783,82]
return a/b/c
};
var argument2 = false;
var argument3 = 6.525794269821431e+307;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[618] = [655,157,25,100,0,0]
argument6[403] = true
argument5[618] = "0"
return a/b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][1] = false
base_2[1][4] = ["`","{","b","F","c*XAo0w","W","_","J#y","{"]
argument6[3] = null
return a/b/c
};
var argument6 = {"126":"Di","460":"b|","Ph":";aG","":"g","P":"","1.219856123716824e+308":""};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = {"3":1.3572829961568635e+308,"4":":","714":"R","":"0","1.1466387024509896e+308":"","5.217044751255906e+307":100,"n":122,"wd":1.174999006085856e+308,"MJtF":9.68403533937301e+307}
return a*b*c
};
var argument8 = ["rr6",705,"*>","v","6","{","-t"];
var argument9 = r_3;
var base_0 = [" ","G","%I","0p"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [" ","G","%I","0p"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test350.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)