





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[618] = {"893":-100}
argument3[3] = [122,843,82,969,403,607,-100,-100]
argument2[9.869573703797622e+307] = [403,1.7976931348623157e+308,82,1.7976931348623157e+308,5e-324,783,714,242]
return a/b/c
};
var argument2 = false;
var argument3 = [607,705];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][4] = 4.516158280187796e+307
return a-b/c
};
var argument5 = ["<5","<B","MY","dxa","9j","@","SYCA=","t4["];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = ""
return a*b+c
};
var argument7 = "";
var argument8 = 607;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[893] = false
base_3[1][0] = {"157":100,"595":7.481056309209953e+307,"1.289059142612775e+308":969,"3.0737901183783954e+307":5.1621582598551955e+306,"1.6816292898777244e+308":"+,","9.69631634124538e+307":1.4287095820855059e+308}
return a/b/c
};
var argument10 = true;
var argument11 = false;
var base_0 = [213,705,"J","7WX&;",893,"B9"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,705,"J","7WX&;",893,"B9"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapGen/test275.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)