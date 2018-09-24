





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][5] = [0,893,783,126,-100]
base_0[9] = 242
base_0[2][2] = 8.065664230134135e+307
return a*b+c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = ["(",">"]
argument3[6] = [823,655,1.7976931348623157e+308,655,157,460]
argument3[1] = true
return a/b-c-d
};
var argument3 = r_0;
var argument4 = {"100":"B","823":"","?":1.7976931348623157e+308,"1.280670208539956e+308":"WX","1.705228036153275e+308":":"};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['F2nCX>6'] = 618
argument6[8.575765443877852e+307] = true
return a+b*c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = 82
argument8['UU'] = false
return a/b+c-d
};
var argument7 = r_2;
var argument8 = 893;
var base_0 = [122,5e-324,843,893,627,655,618]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,5e-324,843,893,627,655,618]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,5e-324,843,893,627,655,618]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,5e-324,843,893,627,655,618]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test560.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)