





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = {"823":25,"2.874490392403545e+307":"(b","1.719767749613759e+308":"$","1.3888337418853272e+308":"C","":"p","3.0381706871442473e+307":"_","1.3894763341357139e+308":-1,"|":1.4914770715373767e+308,"1.3568691127768978e+308":655}
argument3['8('] = ""
return a-b*c+d
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8.575765443877852e+307] = ["T","X{","-r",714,"&","CLZ",126,-1]
return a/b*c-d
};
var argument5 = [783,607,627,655,-1,893,1.7976931348623157e+308,655,403];
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = ""
return a*b/c+d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = 100
argument8['w'] = 213
return a/b+c-d
};
var argument8 = r_2;
var argument9 = true;
var base_0 = [655,969,49,893,242,783,705,403]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,969,49,893,242,783,705,403]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,969,49,893,242,783,705,403]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,969,49,893,242,783,705,403]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test306.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)