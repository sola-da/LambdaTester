





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = 843
argument3[8] = false
argument3[1][4] = {"25":"A","595":"","":6.634447959813193e+307,"1.494797818487872e+308":213,"1.5470537297270164e+307":1.6293489129121834e+308,"FV":"","6.447225992662938e+307":1.6100032415945687e+308,"Eb":"","1.3552692680841453e+308":403}
return a-b+c/d
};
var argument2 = "+!";
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = false
return a+b*c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[25] = {"0":"","122":1.1815123629077951e+308,"213":"","242":"hi5","655":"_pd","":"","M":"i34","1.4130141801045975e+308":"T"}
argument7['T'] = ""
return a/b+c-d
};
var argument6 = null;
var argument7 = r_0;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[5] = null
return a*b+c*d
};
var argument9 = {"N":"","":1.6832478444413878e+308,"V2":122};
var argument10 = {"705":"","1.7265655928775867e+308":122,"":"","x":618,"=":"w","?!K":"w","-100":"","1.5127958385170745e+308":1.2256549567921009e+308,"MbA":"","1.01149062472954e+308":8.222711960907972e+307};
var base_0 = ["1u",":","6^","Cl"," +","-v5","x","yi","Y","5"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["1u",":","6^","Cl"," +","-v5","x","yi","Y","5"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["1u",":","6^","Cl"," +","-v5","x","yi","Y","5"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["1u",":","6^","Cl"," +","-v5","x","yi","Y","5"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test676.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)