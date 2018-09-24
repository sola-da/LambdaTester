





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['8('] = {"!":"","1.6944188094033224e+308":"","7.469811717694166e+306":1.3002197172067547e+308,"7.674116019462609e+307":3.9047168751301043e+307,"1.2538012671212053e+307":893,"-1":1.6959042244852137e+308,"":893,"em":82,"Po":1.2071620338339777e+308}
return a-b-c+d
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = [705,969,1.7976931348623157e+308,-100,-1,1.7976931348623157e+308,714,627]
return a*b-c-d
};
var argument5 = 823;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
return a*b-c+d
};
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[705] = null
base_3[5] = ["de",",!","P4h","_","cABdv","C","X","B","KoUO"]
return a*b-c/d
};
var argument10 = 7.802523545221495e+307;
var base_0 = [49,893,893,1.7976931348623157e+308,-100,242,49,25,59]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,893,893,1.7976931348623157e+308,-100,242,49,25,59]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,893,893,1.7976931348623157e+308,-100,242,49,25,59]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,893,893,1.7976931348623157e+308,-100,242,49,25,59]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test573.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)