





var callbackArguments = [];
var argument1 = function (user) {
 callbackArguments.push(arguments) 

    return '' + user.id;
};
var argument2 = "V";
var argument3 = ["y"];
var argument4 = function (value) {
 callbackArguments.push(arguments) 

    if (value instanceof BigNumber) {
        asBigNumber = true;
        value = value.toNumber();
    }
    if (!isNumber(value) || !isInteger(value) || value < 0) {
        throw new Error('Parameters in function eye must be positive integers');
    }
    return value;
};
var argument5 = null;
var argument6 = r_1;
var argument7 = function (cookie) {
 callbackArguments.push(arguments) 

    return cookie.replace(_this.cookieNamePrefix, '');
};
var argument8 = null;
var argument9 = r_0;
var argument10 = function (cat) {
 callbackArguments.push(arguments) 

    return cat.name;
};
var argument11 = {"9":1.001705347062233e+308,"126":"","":"","1.3657620703247472e+308":1.1507615407994848e+308,"I":"O","UZE":"_","1.3952186269769712e+308":1.6982669307746574e+308};
var argument12 = r_0;
var base_0 = [242,"4x","7",655,460,"0","B:",618,";V"]
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
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,"4x","7",655,460,"0","B:",618,";V"]
var r_3= undefined
try {
r_3 = base_3.map(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/map/mapMined/test639.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)