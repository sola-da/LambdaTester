





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['j'] = "4"
argument2[1.6798476101238045e+308] = false
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6] = ["#","]","R_S|","5","9U","LO"]
return a+b-c
};
var argument3 = [213];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = {"7":"@o","L":"","1.554822650159092e+308":1.5471719967580133e+308,"1.292632388101371e+306":1.8517114630438463e+307,"1.7976931348623157e+308":"c&","-1":"y"}
argument5[9] = ""
return a-b*c
};
var argument5 = {"403":"*","T":1.2016091238717633e+308,"":8.410262853410777e+307};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[403] = "Lr@"
argument7[4] = {"893":"","1.4940788592482448e+308":"x","1.2863584466219516e+308":1.2697599657142604e+308,"":""}
argument8 = {"1.3728474353268047e+308":"qC9","1.1921109385947868e+308":714,"azG":5.706227761814804e+306}
return a*b/c
};
var argument8 = "N";
var base_0 = [783,893]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,893]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,893]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,893]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test436.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)