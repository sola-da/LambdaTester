





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = null
base_0[0] = {"1.452034351035759e+307":"","5.307933382105556e+307":1.0362833710448801e+308,"":1.0163647487767389e+308," U":"&KiRF"}
return a+b*c
};
var argument2 = true;
var argument3 = [1.7976931348623157e+308,157,783,59,100,823,126,122];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][5] = 618
return a*b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = true
argument6[0] = 7.045151411751733e+307
base_2[2] = {"25":5.286215977385208e+307,"82":"tfP","100":"","242":"%H","783":1.7976931348623157e+308,"$P":49,"o":"","":"","9.29326485410369e+307":655}
return a/b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = false
argument8[5] = {"607":3.9076744842176235e+307,"Ne":"E","`-,":6.685409230317281e+307,"XT#":1.560196886093026e+308,"-1":"#","":5.194366870737791e+307,"7.085729132324933e+307":823,"B":"x","6.072649575468904e+307":25}
base_3[9] = null
return a+b*c
};
var argument7 = r_2;
var argument8 = "-";
var base_0 = ["?mc","R","d3"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["?mc","R","d3"]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["?mc","R","d3"]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["?mc","R","d3"]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test762.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)