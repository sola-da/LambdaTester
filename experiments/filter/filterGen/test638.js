





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['T'] = "j"
argument2 = ""
argument3[618] = "i:b"
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.0546776681946723e+308] = "5<Kq"
base_1[4] = {"126":"","705":49,"3.1289452769120877e+307":9.78292308039996e+307,"":1.1868075026754454e+308,"1.4599069598008973e+308":100,"wKWg":"","X":49}
base_1['length'] = "d"
return a*b/c
};
var argument3 = "";
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = ["$",403,783,82,0,655,"sHa","k"]
argument6['wIs'] = ""
return a*b-c
};
var argument6 = r_1;
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[714] = [714,49,460,705,122,-1,1.7976931348623157e+308,25,843]
base_3[1]['!cck7Mm'] = null
return a*b/c
};
var base_0 = ["jD",":`b","x?","32","t","m7(","6","jZ","d,"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["jD",":`b","x?","32","t","m7(","6","jZ","d,"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["jD",":`b","x?","32","t","m7(","6","jZ","d,"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["jD",":`b","x?","32","t","m7(","6","jZ","d,"]
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test638.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)