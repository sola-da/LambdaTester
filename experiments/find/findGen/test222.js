





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[893] = "I"
argument2[8.748669805137695e+307] = 1.7976931348623157e+308
return a+b-c
};
var argument2 = {"9.625258062656207e+307":"1ZsY"};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4.953791384496108e+307] = "q8J,"
base_1[1] = [969,-100,969,627,607,460,59,607]
argument6[0] = {"242":"E","460":"","969":"fZf","-1":893,"":"","1.5740098833165188e+308":1.1397250880058809e+308,"5.103369243827552e+307":1.2186421422982974e+308,"lP":126,"2.8283979772395057e+307":-1,"1.3116823641661389e+308":1.0645581271319431e+308}
return a/b/c
};
var argument5 = [627,100,403];
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = [893,714]
return a*b*c
};
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = {"59":403,"126":"","627":">A","25aQplu":"o","6.07867324724749e+306":"","!p*mW0":"","1.6954864375518318e+308":9.266058894692924e+307,"":""}
base_3[8][0] = {"8":1.2129001274577625e+308,"":126}
base_3[4] = "$ne"
return a-b-c
};
var argument10 = false;
var base_0 = ["B",714,49,"X#C",783,82,783,705]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["B",714,49,"X#C",783,82,783,705]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["B",714,49,"X#C",783,82,783,705]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["B",714,49,"X#C",783,82,783,705]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test222.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)