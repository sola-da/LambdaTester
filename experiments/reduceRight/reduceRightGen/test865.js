





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = null
return a-b/c+d
};
var argument2 = ["F",126,969,"l",100,1.7976931348623157e+308,"%",595];
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['PK4'] = ""
return a/b-c+d
};
var argument4 = false;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[126] = {"783":49,"#":"","":"q","9(X":"C^","5.378333084150775e+307":242,"1.6048930669991897e+308":-100,"5e-324":7.92135506831145e+307,"3.202359855072587e+307":1.364751304770949e+308}
argument7 = ["=","g"]
base_2[8] = ""
return a+b-c-d
};
var argument6 = 1.1648047245840662e+308;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['T'] = "o|-"
base_3[2][1] = null
argument10[62] = {"0":"","893":"PLE5|fs","#":"","|":"=S"}
return a/b*c*d
};
var base_0 = ["r|@","w|)>I+",627,783,"QD","Lx",969]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["r|@","w|)>I+",627,783,"QD","Lx",969]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["r|@","w|)>I+",627,783,"QD","Lx",969]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["r|@","w|)>I+",627,783,"QD","Lx",969]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test865.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)