





var callbackArguments = [];
var argument1 = function (a, branch) {
 callbackArguments.push(arguments) 

    return a.concat(branch.body);
};
var argument2 = null;
var argument3 = null;
var argument4 = function (hash, r) {
 callbackArguments.push(arguments) 

    if (r instanceof Rule && r.variable === true) {
        hash[r.name] = r;
    }
    return hash;
};
var argument5 = null;
var argument6 = 5.025484007053388e+307;
var argument7 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b.value;
};
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
var argument9 = true;
var argument10 = {"1.1160483267937641e+308":"","5kRy":627,"rQ":"Y","":"T|","w":607};
var base_0 = [1.7976931348623157e+308,122,59,705,82]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,122,59,705,82]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,122,59,705,82]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,122,59,705,82]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test203.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)