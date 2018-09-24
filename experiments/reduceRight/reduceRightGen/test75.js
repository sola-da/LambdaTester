





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = {"":"BZ","E5@N":"","7.834011997342561e+307":595,"xpU_":1.7976931348623157e+308}
base_0[2] = null
return a*b*c/d
};
var argument2 = [969,49];
var argument3 = 1.7976931348623157e+308;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = 25
return a-b-c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = 6.124583506497592e+307
base_2[0] = [823]
base_2[0][0] = false
return a*b/c+d
};
var argument6 = "YQ";
var argument7 = r_1;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = [100,126,213,705,100,595,655]
base_3[0] = false
base_3[8] = {"{p":"W]j","":-1,"8.21921212370915e+307":"z(j","1.189696564691772e+308":"?"}
return a*b+c+d
};
var argument9 = null;
var argument10 = null;
var base_0 = [969,618,627,157,0,82,460,49]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,618,627,157,0,82,460,49]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,618,627,157,0,82,460,49]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,618,627,157,0,82,460,49]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test75.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)