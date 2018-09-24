





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][3] = {"100":"S>","":7.759026089484421e+307,"1.3884302730272398e+308":157,"6.813784185741731e+307":"w"}
argument2[1.7071986534150335e+308] = ["I(","E+",213,"E","g","*",655,714,"QYJ``"]
argument2['St'] = ""
return a+b+c*d
};
var argument2 = ["F=","=","f","5N","I","HT?|,n"];
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.921533274132203e+307] = [893,783]
argument5[1.7071986534150335e+308] = 7.71948221899767e+307
return a*b+c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = null
argument7['UU'] = ""
return a/b*c+d
};
var argument6 = {"403":5.57441205618235e+307,"893":"G 8","D":"","":"","8.610187288067022e+307":"zPn","Z":"F",",#":" ","1.7976931348623157e+308":"","1.7214196333076597e+308":"","_f5D3":1.0016487002105424e+308};
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3.8120440085202614e+307] = {"":"0","4.114263102435715e+307":"","O":"","-100":"C"}
argument9['y'] = false
return a/b+c/d
};
var argument9 = null;
var base_0 = [607,242]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,242]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,242]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,242]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test861.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)