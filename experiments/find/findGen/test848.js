





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = ""
argument2[0] = {"122":7.918079119738196e+307,"i":1.1061614058339022e+308,"1.2916999472291128e+308":"","":1.7976931348623157e+308,"2.661429533844312e+307":893,"pn":"=","p+d;":"DW","1.7654507170360786e+308":8.58419377129611e+307,"5.151281583405768e+307":"Mw"}
base_0[1][6] = true
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['AwD'] = "fl"
argument4[403] = "L"
return a-b*c
};
var argument3 = ["q"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[5] = {"1.0091096972915812e+308":"","":"","6.518508923389424e+307":4.464936367497225e+307,"1.2626535060489396e+308":"c"}
argument6['V'] = [460,705,783,714,"??>","tTX)(G+"]
argument4[893] = {"49":"","2.930430056020608e+307":714}
return a/b/c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[893] = 1.5964914715748425e+308
argument8['^h'] = {"1.4065847980798706e+308":1.7976931348623157e+308}
return a*b-c
};
var base_0 = [-100,1.7976931348623157e+308,823,460,969,655,618,607]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,1.7976931348623157e+308,823,460,969,655,618,607]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,1.7976931348623157e+308,823,460,969,655,618,607]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,1.7976931348623157e+308,823,460,969,655,618,607]
var r_3= undefined
try {
r_3 = base_3.find(argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test848.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)