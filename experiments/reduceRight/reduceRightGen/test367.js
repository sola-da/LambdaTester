





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['y'] = true
base_0[3] = {"":"","iM@K":705,"1.5009725861725255e+307":""}
return a*b-c-d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = "22K;=a39pH"
argument5[655] = false
argument4[627] = [82,705,460,"B","RabcN",607,157,213,618,-1]
return a-b-c/d
};
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[8.575765443877852e+307] = false
argument6['^N'] = [843,595,607,100,893,655,59,893,126,460]
argument6[8.575765443877852e+307] = ""
return a-b+c/d
};
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[7] = ["7","FZ","ii",157,100,"fT"]
argument8[6] = "_"
argument8[4] = 1.5804469610557152e+308
return a/b*c*d
};
var argument8 = {"122":969,"2.9030623459582435e+307":" ","":"Ol@","e":1.228176387182171e+308,"2.2533605123032505e+306":403,"d":"","No":2.899026469480456e+307,"-r,-":2.4504837340413813e+307,"2.76589595675279e+307":8.219755775179059e+307};
var base_0 = ["G","&:","2","!"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["G","&:","2","!"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["G","&:","2","!"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["G","&:","2","!"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test367.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)