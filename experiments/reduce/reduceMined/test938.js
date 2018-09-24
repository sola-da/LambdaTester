





var callbackArguments = [];
var argument1 = function (sum, suite) {
 callbackArguments.push(arguments) 

    return sum + suite.total();
};
var argument2 = true;
var argument3 = 403;
var argument4 = function (model, val, i) {
 callbackArguments.push(arguments) 

    model[headers[i]] = val;
    return model;
};
var argument5 = r_1;
var argument6 = function (ret, name) {
 callbackArguments.push(arguments) 

    ret[name] = genesis.lookupType(fields[name]);
    keys.push(name);
    offsets[name] = bytes;
    bytes += ret[name].bytes;
    return ret;
};
var argument7 = function (hash, r) {
 callbackArguments.push(arguments) 

    if (r instanceof tree.Rule && r.variable === true) {
        hash[r.name] = r;
    }
    return hash;
};
var argument8 = r_0;
var argument9 = null;
var base_0 = ["tRf-1){Tn!b]Q","]","H#W","S","{","_"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["tRf-1){Tn!b]Q","]","H#W","S","{","_"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["tRf-1){Tn!b]Q","]","H#W","S","{","_"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["tRf-1){Tn!b]Q","]","H#W","S","{","_"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test938.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)