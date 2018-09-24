





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = 460
return a*b*c*d
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = 1.4764885500549132e+308
return a/b*c-d
};
var argument5 = ["b78","#","O)S",82,126,"g]D"];
var argument6 = "";
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = {"122":2.79021680837961e+307,"403":1.3225083507384393e+308,"ta":126,"":">&6t","$":"","-100":"r","1.966163970540522e+305":"t","1.2344685950159422e+308":""}
return a-b-c/d
};
var argument8 = [126,25,25,1.7976931348623157e+308,655,"Z","g?1",0,"vR"];
var argument9 = [969,157,122,714,-100,618,25,714,213];
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[126] = {"6.278942604959382e+307":969}
argument11[25] = "Am%"
return a*b-c+d
};
var argument11 = ["[h?krjYhSl",714];
var argument12 = [783,705,"O","82[","d","X",213,25,"J"];
var base_0 = ["`","<"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["`","<"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["`","<"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["`","<"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test647.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)