





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[59] = {"843":"","1.0693760843967886e+307":"O","7.863433587284906e+307":"","4.063926819385979e+307":1.2752949752228228e+308,"w":1.5106855979975905e+308,"{":"[{@Y","":"","V":"l","Dr":"[","7.14770173801727e+307":""}
return a+b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['1SHF1'] = 1.0240844433267662e+308
base_1[1][1] = {"157":"","618":"","gO":9.189996948998033e+307,"5.843531335331757e+307":"","=-[":59,",#":783,"":1.724556268402602e+308,"J":1.8241596051246003e+307,"1.2714209598097229e+308":6.132654860904094e+307,"4.112080789503721e+307":"V"}
return a*b*c
};
var argument4 = [655,714,595,25,783,655,122,-1,213];
var argument5 = [242,893,49,823,969,122,126,100,242];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = [157]
argument7[-1] = {"82":"","242":"y","403":893,"705":"D","WF":"","s":"","1.2474551128701713e+308":"","wYk":"","":">ac","w<AC":"aP"}
argument6[7.92397107964922e+307] = [655,0,59,655,403,627,5e-324,82,100]
return a-b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = "OE"
return a-b+c
};
var argument8 = true;
var argument9 = {"242":"9z","-100":-100};
var base_0 = ["p",893,"M)","Eq",705,1.7976931348623157e+308,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["p",893,"M)","Eq",705,1.7976931348623157e+308,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["p",893,"M)","Eq",705,1.7976931348623157e+308,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["p",893,"M)","Eq",705,1.7976931348623157e+308,-100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test358.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)