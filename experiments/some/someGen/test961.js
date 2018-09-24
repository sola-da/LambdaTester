





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.7976931348623157e+308] = {"@":"D"}
base_0[0][4] = [100,823,460,460,893,655,893,823,655]
argument2[9] = true
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = {"":823}
base_1[1][0] = ["K","NBhq$J","Kl^"]
return a/b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = 4.107446339031718e+307
return a/b+c
};
var argument4 = 8.113456750394288e+306;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[122] = {"25":9.90933057958166e+307,"":"xR","sm@":403,"8.760632292605744e+307":"","R":-100,"-1":1.635419159699205e+308,"5.851265385323681e+307":"r","<":9.843329957885535e+307,"?p":"W","5.734438762938664e+306":460}
return a+b-c
};
var base_0 = ["Mg",",^j","t","-","w",49,0,"O",122]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Mg",",^j","t","-","w",49,0,"O",122]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Mg",",^j","t","-","w",49,0,"O",122]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Mg",",^j","t","-","w",49,0,"O",122]
var r_3= undefined
try {
r_3 = base_3.some(argument5)
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
require("fs").writeFileSync("./experiments/some/someGen/test961.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)