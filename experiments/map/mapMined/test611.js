





var callbackArguments = [];
var argument1 = function (fn, callback) {
 callbackArguments.push(arguments) 

    if (fn) {
        fn(function (err) {
            var args = Array.prototype.slice.call(arguments, 1);
            if (args.length <= 1) {
                args = args[0];
            }
            callback.call(null, err, args);
        });
    }
};
var argument2 = null;
var argument3 = 100;
var argument4 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument5 = true;
var argument6 = true;
var argument7 = function (name) {
 callbackArguments.push(arguments) 

    return lang.getObject(name);
};
var argument8 = r_2;
var argument9 = function (i) {
 callbackArguments.push(arguments) 

    return 'c' + i;
};
var argument10 = r_0;
var base_0 = ["HD9 ","wj","zn4","*z","S",":Uw:lSM&","F8","Y","i"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["HD9 ","wj","zn4","*z","S",":Uw:lSM&","F8","Y","i"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["HD9 ","wj","zn4","*z","S",":Uw:lSM&","F8","Y","i"]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["HD9 ","wj","zn4","*z","S",":Uw:lSM&","F8","Y","i"]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test611.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)