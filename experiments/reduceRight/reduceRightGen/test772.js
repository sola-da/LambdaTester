





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][2] = ["&M",";Z","{[","LVy","*X","B",">"]
return a-b-c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['UU'] = 2.9784280372506695e+307
return a*b+c*d
};
var argument3 = null;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][2] = false
argument7[0] = false
return a/b-c+d
};
var argument6 = null;
var argument7 = ["e","J0","d","L;)kw0F","|3tw<","Q","y","f@TQI","1+"];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = ""
base_3[2] = {"100":6.448430350019702e+307,"":49}
argument10[0] = ["S^w@",")",595,1.7976931348623157e+308,"4",823,"K4[FW Q"]
return a*b/c/d
};
var argument9 = r_0;
var argument10 = {"460":1.4479382796205063e+308,"655":2.2064079254923655e+307,"705":"ar^","969":"","1.1975304197187232e+308":5.247917233770502e+307,"":"A","7.532055161367299e+307":"(n","5e-324":"","A":595};
var base_0 = ["bs8","_lP",1.7976931348623157e+308,607,705]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["bs8","_lP",1.7976931348623157e+308,607,705]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["bs8","_lP",1.7976931348623157e+308,607,705]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["bs8","_lP",1.7976931348623157e+308,607,705]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test772.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)