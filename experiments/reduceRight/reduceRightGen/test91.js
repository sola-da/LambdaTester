





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = [893,607,0,783,59]
return a*b/c-d
};
var argument2 = r_0;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = {"49":"","714":"Bm;","":"","1.588889527453394e+308":"","7.564969788718492e+307":9.58973355070946e+307,"Z>L":"","-100":"Y>yPr[","2.551163782560422e+307":"","O9'r":7.926412479491489e+307}
argument5 = 1.4011470989332165e+308
base_1[4][3] = 783
return a/b+c-d
};
var argument4 = r_0;
var argument5 = true;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = null
base_2[6] = null
argument7[2] = {"157":242,"242":1.4980274009384837e+308,"403":"x","+":"","-100":"","":"o8E"}
return a-b-c+d
};
var argument7 = {"618":"zsu=L","1.4611998308230543e+308":7.060943761746867e+307,"%<t":5.166279719770532e+307};
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = {"1.0245055926231254e+308":"Mb"}
argument11 = {"460":"","843":"Tk","":"L","eWwn8%":"","K":">","6.21396937912956e+307":4.085470341745275e+307,"8.277593958100862e+307":""}
return a-b/c-d
};
var argument10 = r_3;
var base_0 = [893,403,49,49,82,122]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,403,49,49,82,122]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,403,49,49,82,122]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,403,49,49,82,122]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test91.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)