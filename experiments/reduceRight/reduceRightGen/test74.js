





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = {}
base_0[6] = {"49":"","783":"","1.0134827231626654e+308":7.388448562382157e+307,"":4.1481743717799743e+307,"[":"","1.0476328653556973e+308":595,"1.7976931348623157e+308":4.3746750152707355e+307}
return a-b-c*d
};
var argument2 = {"2":618,"627":"","":1.585340262681923e+308,"-1":"","1.1665178431473182e+308":126,"1.7320073382810557e+308":1.75273847064817e+308,",":"","1.3525734672468675e+308":4.1249855321716053e+307,"Fn":9.518434361342049e+307};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['!j'] = false
return a*b/c+d
};
var argument4 = true;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = null
argument7['!j'] = [")Sg-","-",242]
argument5[0] = null
return a*b/c-d
};
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = ["g","%xYP{X8",126,"ui"]
argument9[6] = "LE%"
return a-b-c-d
};
var argument8 = 1.2634807410669418e+308;
var argument9 = r_3;
var base_0 = [618,618,5e-324,5e-324,893,-100]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,618,5e-324,5e-324,893,-100]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,618,5e-324,5e-324,893,-100]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,618,5e-324,5e-324,893,-100]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test74.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)