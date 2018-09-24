





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return parseInt(d, 10);
};
var argument2 = {"59":"","714":"","823":"","[R26":"","1.524167175574863e+308":126,"9.946106774713741e+307":"z","":"g","1.401968890243631e+308":""};
var argument3 = null;
var argument4 = function (c) {
 callbackArguments.push(arguments) 

    return c.cookieString();
};
var argument5 = "";
var argument6 = {"1.4345361684343348e+306":1.6884933778693634e+308};
var argument7 = function (localizedDigit) {
 callbackArguments.push(arguments) 

    return regexpEscape(localizedDigit);
};
var argument8 = {"242":1.0213216005102407e+308,"969":5.398026277954124e+307,"1.3354124980997118e+308":1.051195395003133e+308,"7.38851814870651e+307":1.6888028834914813e+308,"3.8286982160530555e+307":1.6123513890157737e+308,"=*":"qG","":1.0411488585605958e+308,"3.6474998758631774e+307":157,"vw":"o"};
var argument9 = function (c) {
 callbackArguments.push(arguments) 

    return c.name;
};
var base_0 = [59,25,403,-1,403,627]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,25,403,-1,403,627]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test644.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)