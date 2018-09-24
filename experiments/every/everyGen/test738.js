





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5][2] = false
argument2[893] = {"122":126,"242":3.1556494992576123e+307,"1.7453784044944727e+308":122,"":6.538902810916834e+307,"-100":"Pa-<","a+":5.1822094893782033e+306,"V)":"7Xt!xi","K7":"u","4.4675264780604195e+307":""}
argument2[0] = 1.4603260798979447e+308
return a-b+c
};
var argument2 = [-100,"]",":#4M","V",403,893,"bU","4","?_"];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = {"595":7.273263766874829e+306,"893":"8qBJ","":7.285391941991908e+306,"5e-324":"Yo","6.834642996416417e+307":",?m","1.0450685678569577e+308":25,"4.2192289810276826e+307":705,"]":126}
base_1[6] = {"6.584562673247489e+307":"Tj","":"^"}
return a+b+c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = null
base_2[2] = ["#","F","Zd"]
argument6[1.3599216339661573e+308] = {"0":6.945008375348747e+307,"126":460,"_Mk":4.640840057139578e+307,"":2.8721247755955494e+306,"9.902215828927864e+307":"","7.129080871490871e+307":7.758454405172427e+307,"1.2558760976087337e+308":157}
return a*b/c
};
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = [893,1.7976931348623157e+308,595,595,213,595]
return a*b/c
};
var argument8 = true;
var argument9 = null;
var base_0 = [-1,627,403,460,213]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,627,403,460,213]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,627,403,460,213]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,627,403,460,213]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test738.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)