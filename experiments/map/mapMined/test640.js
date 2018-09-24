





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return x.shift();
};
var argument2 = [25,783,1.7976931348623157e+308,82];
var argument3 = {"59":"=N","157":"n","1.107538355615099e+308":9.573067578488204e+307,"":"","&":"_",",":"GI(p","+":""};
var argument4 = function (e) {
 callbackArguments.push(arguments) 

    return e.eval(env);
};
var argument5 = r_0;
var argument6 = false;
var argument7 = function (o) {
 callbackArguments.push(arguments) 

    return {
        name: o.text,
        id: o.id,
        property: o.property
    };
};
var argument8 = r_1;
var argument9 = function (so) {
 callbackArguments.push(arguments) 

    return so.name;
};
var base_0 = ["_oEvRS",">","U","_","dQt!","3:i"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["_oEvRS",">","U","_","dQt!","3:i"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["_oEvRS",">","U","_","dQt!","3:i"]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["_oEvRS",">","U","_","dQt!","3:i"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test640.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)