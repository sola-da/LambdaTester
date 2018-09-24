





var callbackArguments = [];
var argument1 = false;
var argument2 = 9.057972340198462e+307;
var argument3 = "c";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[4] = ["&",0]
argument3[25] = false
return a+b-c*d
};
var argument5 = false;
var argument6 = {"893":-1,"Rxc-o":"8","3.112624783775883e+307":7.053396205942065e+307,"3.448343150040892e+306":"",":":49};
var argument7 = {"59":1.515150649380959e+308,"":"M0","1.1596322454353835e+308":1.318080797077948e+308,"1.7970189351845126e+308":7.303201808839228e+307,"1.4279613862868489e+308":2.7608538342741447e+307};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.359136872727139e+308] = null
argument7 = false
base_1[9] = ["t1R","`hIs","Zl","k5$",">"]
return a*b-c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[1] = {"+":"","d1":"","M":1.7773172429952347e+308}
return a/b*c+d
};
var argument10 = [655,49,705,595,655,122];
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = true
argument13[0] = 705
return a/b+c/d
};
var argument12 = r_0;
var base_0 = ["2","E",460,"+","{x<O","PB","od","WH0,^Yj",122]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2","E",460,"+","{x<O","PB","od","WH0,^Yj",122]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2","E",460,"+","{x<O","PB","od","WH0,^Yj",122]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["2","E",460,"+","{x<O","PB","od","WH0,^Yj",122]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test315.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)