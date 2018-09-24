





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = ["+^","*","n","h)","="]
return a-b*c+d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = "P"
base_1[7] = ""
return a*b/c/d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = false
base_2 = ["Zu9k",1.7976931348623157e+308,"{","$",403]
argument5[4] = ["10i3",213]
return a*b*c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = ""
argument6[1] = {"5":1.1706688857958813e+308,"122":2.5350593773444405e+307,"893":"JN","|>":893,"":"pM","-100":"|","|":1.7876495787331064e+307,"9.316543297065427e+307":783,"1.005102947000259e+307":1.098635400235862e+308}
argument6[4] = null
return a*b+c*d
};
var base_0 = ["p",1.7976931348623157e+308,242,969,893,"#",157]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["p",1.7976931348623157e+308,242,969,893,"#",157]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["p",1.7976931348623157e+308,242,969,893,"#",157]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["p",1.7976931348623157e+308,242,969,893,"#",157]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test109.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)