





var callbackArguments = [];
var argument1 = function (model, val, i) {
 callbackArguments.push(arguments) 

    model[headers[i]] = val;
    return model;
};
var argument2 = null;
var argument3 = function (x, y) {
 callbackArguments.push(arguments) 

    return x && y;
};
var argument4 = {"8":"","R+":1.6578896047179117e+308,"fD":"","":1.162672938857025e+308,"9.6167907435392e+307":3.3600723624746206e+307,"6.770128744136145e+307":969};
var argument5 = r_1;
var argument6 = function (newargs, fn, cb) {
 callbackArguments.push(arguments) 

    fn.apply(that, newargs.concat([function () {
            var err = arguments[0];
            var nextargs = Array.prototype.slice.call(arguments, 1);
            cb(err, nextargs);
        }]));
};
var argument7 = true;
var argument8 = function (a, el) {
 callbackArguments.push(arguments) 

    el = el.evaluate(compressor);
    if (a.length == 0 || el.length == 1) {
        a.push(el);
    } else {
        var last = a[a.length - 1];
        if (last.length == 2) {
            var val = '' + last[1] + separator + el[1];
            a[a.length - 1] = [
                make_node_from_constant(compressor, val, last[0]),
                val
            ];
        } else {
            a.push(el);
        }
    }
    return a;
};
var argument9 = null;
var base_0 = ["bQ9","G","J@{","cf","Fr","V","{","7"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["bQ9","G","J@{","cf","Fr","V","{","7"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["bQ9","G","J@{","cf","Fr","V","{","7"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["bQ9","G","J@{","cf","Fr","V","{","7"]
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test735.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)