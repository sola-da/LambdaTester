





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1]['{X'] = false
argument1 = 5.555518861788713e+307
argument3 = null
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4.224481734419934e+307] = false
argument3['f'] = {"49":5.936395240189782e+307,"":100}
argument4['T'] = 9.09649662152996e+307
return a/b+c
};
var argument3 = true;
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['5L'] = {"242":"","460":893,"1.7535103864102418e+308":"vabW9)hv>","":"","1.4584676204124166e+308":"",":":"",")":1.6630613865876052e+307,"-0":"I+"}
return a/b+c
};
var argument6 = "";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][3] = ["u"]
base_3[5] = true
argument8[1] = 1.191044023727387e+308
return a*b-c
};
var argument8 = true;
var argument9 = true;
var base_0 = [242,705,242,969,242,893,100,460,82,823]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,705,242,969,242,893,100,460,82,823]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,705,242,969,242,893,100,460,82,823]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,705,242,969,242,893,100,460,82,823]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test507.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)