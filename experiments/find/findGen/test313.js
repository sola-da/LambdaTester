





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[5] = ["A:","WC7","u_",714,"z","y","=","X,4x+"]
return a/b*c
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['f-d'] = "="
argument4 = [823,49,705,627,59,618,843]
return a-b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = 843
argument7[3] = [783,"=",";6",82,"a",82]
return a-b*c
};
var argument6 = null;
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3.377960715099946e+307] = 843
argument9[2] = {"59":4.465932656351804e+307,"1.7976931348623157e+308":82,"8.886419335804026e+307":"Z","[D":893,"6.446032784436038e+307":"&","":1.5275469047209992e+308,"t":"B","1.1160914656590752e+308":"y",":@C=BN|D":"y"}
argument9[8.748669805137695e+307] = ""
return a*b+c
};
var base_0 = [0,823,"F<",618,"niKniPM{",242]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,823,"F<",618,"niKniPM{",242]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,823,"F<",618,"niKniPM{",242]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,823,"F<",618,"niKniPM{",242]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test313.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)