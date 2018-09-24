





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['18{'] = "c"
argument1[4] = {"0":"","49":"<","157":"$J","1.2680911899020753e+308":"","":1.0688110498714917e+308,"1.4200867617549088e+308":"","6.639855487688099e+306":"-","4.823447194317783e+307":969,"1.471500690587278e+308":893}
argument1[2.1869172855352885e+307] = false
return a+b+c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = ["@","WM73","DU=","e2"]
return a/b/c+d
};
var argument3 = ["R","goM#",1.7976931348623157e+308,"E",403,82,";",0];
var argument4 = "";
var argument5 = true;
var argument6 = 0;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[403] = 9.29685169643512e+307
argument6[25] = [460,"G",25,100,49,"%",460,"&L8;","|_"]
argument6['18{'] = null
return a-b-c*d
};
var argument8 = r_0;
var argument9 = "1R|GJ";
var argument10 = "";
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1] = false
return a+b+c+d
};
var base_0 = [100,"CDR",-1,-100,"?","g",705,"WBXC<d,",82,783]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,"CDR",-1,-100,"?","g",705,"WBXC<d,",82,783]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,"CDR",-1,-100,"?","g",705,"WBXC<d,",82,783]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,"CDR",-1,-100,"?","g",705,"WBXC<d,",82,783]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test323.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)