





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    return textStyle[key] === paragraphStyle[key];
};
var argument2 = function (x) {
 callbackArguments.push(arguments) 

    return x.length > 0;
};
var argument3 = {"59":1.412814055317757e+308,"714":49,"893":"@_&O","6.876718363708873e+307":714,"9.133915872854402e+307":403,"_@OG":"N?"};
var argument4 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument5 = null;
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    return x.length > 0;
};
var argument7 = "'";
var argument8 = 1.3975558743011628e+308;
var base_0 = [126,"|3","dZp",705,242,"[1Vc^<WbRB","X","*OI"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,"|3","dZp",705,242,"[1Vc^<WbRB","X","*OI"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,"|3","dZp",705,242,"[1Vc^<WbRB","X","*OI"]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,"|3","dZp",705,242,"[1Vc^<WbRB","X","*OI"]
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
require("fs").writeFileSync("./experiments/every/everyMined/test906.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)