





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['!j'] = {"`t":7.989428390386075e+307,"1.7231638903519395e+307":""}
argument1[1] = [59,157]
argument3[3] = "YP[l"
return a-b+c/d
};
var argument2 = {};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = true
base_1[2] = null
return a/b-c+d
};
var argument4 = true;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = [618,"G","H",403,82,157,100,"_",122]
return a+b-c/d
};
var argument6 = true;
var argument7 = {"46":"","126":"","242":" M","2.4465844400175155e+307":49,"Ft":"","1.0146434406876084e+308":"qn","3.0006702620700676e+307":"u':"};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = [627,213,893,618,1.7976931348623157e+308]
argument9 = {"":-100,"l":"Vs?tm","-100":823,"W0Q2":"["}
return a*b/c*d
};
var base_0 = [893,25,-100,100,157,-1]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,25,-100,100,157,-1]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,25,-100,100,157,-1]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,25,-100,100,157,-1]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test28.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)