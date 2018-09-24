





var callbackArguments = [];
var argument1 = function (total, xB) {
 callbackArguments.push(arguments) 

    return total + (xB > xA ? 0 : xB < xA ? 1 : 0.5);
};
var argument2 = r_0;
var argument3 = function (hash, r) {
 callbackArguments.push(arguments) 

    if (r instanceof Rule && r.variable === true) {
        hash[r.name] = r;
    }
    if (r.message === 'Import' && r.root && r.root.variables) {
        var vars = r.root.variables();
        for (var name in vars) {
            if (vars.hasOwnProperty(name)) {
                hash[name] = vars[name];
            }
        }
    }
    return hash;
};
var argument4 = false;
var argument5 = 1.5036646044311374e+307;
var argument6 = function (count, op) {
 callbackArguments.push(arguments) 

    if (op.value != null) {
        count += op.value.length;
    }
    return count;
};
var argument7 = r_2;
var argument8 = function (model, val, i) {
 callbackArguments.push(arguments) 

    model[headers[i]] = val;
    return model;
};
var base_0 = [59,0,126,823,0,213,460,157,595]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,0,126,823,0,213,460,157,595]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,0,126,823,0,213,460,157,595]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,0,126,823,0,213,460,157,595]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test215.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)