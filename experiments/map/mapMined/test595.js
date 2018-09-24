





var callbackArguments = [];
var argument1 = function (i) {
 callbackArguments.push(arguments) 

    return 'a' + i + '=this._shape' + i;
};
var argument2 = {"618":"M","893":-1,"969":"","":618,"h":"6c!","H?)r":1.7976931348623157e+308,"1.501504710884216e+308":403,"9.885192399648506e+307":"_"};
var argument3 = null;
var argument4 = function (x) {
 callbackArguments.push(arguments) 

    return x.shift();
};
var argument5 = null;
var argument6 = "";
var argument7 = function (m) {
 callbackArguments.push(arguments) 

    return m.principalId;
};
var argument8 = {"893":"","*,{d":"4[J[m"};
var argument9 = function (al) {
 callbackArguments.push(arguments) 

    return [
        al.visit_id,
        al.ip,
        al.name,
        al.time
    ];
};
var base_0 = [-1,122,"N!+V",126]
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
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/map/mapMined/test595.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)