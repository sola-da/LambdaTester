





var callbackArguments = [];
var argument1 = function (count, op) {
 callbackArguments.push(arguments) 

    if (op.value != null) {
        count += op.value.length;
    }
    return count;
};
var argument2 = true;
var argument3 = true;
var argument4 = function (result, currentFunction) {
 callbackArguments.push(arguments) 

    return currentFunction(result);
};
var argument5 = function (x, y) {
 callbackArguments.push(arguments) 

    return x && y;
};
var argument6 = true;
var argument7 = null;
var argument8 = function (newargs, fn, cb) {
 callbackArguments.push(arguments) 

    fn.apply(that, newargs.concat([function () {
            var err = arguments[0];
            var nextargs = Array.prototype.slice.call(arguments, 1);
            cb(err, nextargs);
        }]));
};
var argument9 = "5!";
var base_0 = [893,157,126]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,157,126]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,157,126]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,157,126]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test283.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)