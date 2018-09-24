





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = [618,1.7976931348623157e+308,157,0,714,460]
return a+b/c*d
};
var argument2 = ["}","9U","LO","ijV","Qe)","+fG$","Jnn","s"];
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = ")y"
argument4['y'] = ""
base_1[0][0] = {"403":"*","T":1.2016091238717633e+308,"":8.410262853410777e+307}
return a*b+c+d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['!j'] = null
argument5[100] = "M"
argument5[0] = ""
return a-b*c*d
};
var argument5 = {"893":"","1.4940788592482448e+308":"x","1.2863584466219516e+308":1.2697599657142604e+308,"":""};
var argument6 = r_2;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3.286160553564105e+307] = [157,823,242,714,0,0,893,100]
return a/b-c-d
};
var argument8 = "h";
var argument9 = 5.647567210351649e+307;
var base_0 = [607,460,157,783,242,-1,893,100]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,460,157,783,242,-1,893,100]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,460,157,783,242,-1,893,100]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,460,157,783,242,-1,893,100]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test437.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)