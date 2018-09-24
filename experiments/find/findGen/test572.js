





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['LK'] = ""
argument1 = ""
return a/b+c
};
var argument2 = null;
var argument3 = {"0":157,"59":"","122":893,"":"?g?#&","a":714,"1.2954861718276338e+308":"CR!Bku","6.624558510802925e+307":"","8.304190061863894e+306":6.265197500447971e+307,"1.2801237495909298e+308":893};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][6] = true
argument6[1] = [1.7976931348623157e+308,"%","{h"]
return a-b/c
};
var argument5 = 1.5125491817288549e+308;
var argument6 = [714,893];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = 2.3380495469783683e+306
argument8[5] = "e@a"
argument8[1.399309004356655e+308] = 783
return a-b-c
};
var argument8 = r_2;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[3] = ["4","&","KAx{","Z`@^","<p","]","@,",">|","p"]
return a+b-c
};
var argument10 = "S";
var argument11 = null;
var base_0 = ["5IdV`",969,"ly",100,783,"DL+"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["5IdV`",969,"ly",100,783,"DL+"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["5IdV`",969,"ly",100,783,"DL+"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["5IdV`",969,"ly",100,783,"DL+"]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findGen/test572.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)