





var callbackArguments = [];
var argument1 = function (f) {
 callbackArguments.push(arguments) 

    rm(f);
};
var argument2 = function (ps) {
 callbackArguments.push(arguments) 

    ps = ps instanceof Array ? ps : [
        ps,
        ps
    ];
    pvc_installLog(pvc, ps[0], ps[1], '[pvChart]');
};
var argument3 = true;
var argument4 = function (atomic) {
 callbackArguments.push(arguments) 

    var op = atomic[0];
    var val = atomic[1];
    operand(self, where, delta, data, val, op);
};
var argument5 = [843,213];
var argument6 = function (prop) {
 callbackArguments.push(arguments) 

    if (!modifyProps[name][prop]) {
        modifyProps[name][prop] = [];
        havePolyfill[prop] = true;
    }
    if (desc.set) {
        if (only) {
            desc.set.only = only;
        }
        modifyProps[name][prop].push(desc.set);
    }
    if (desc.initAttr) {
        initProp.content(name, prop);
    }
};
var argument7 = null;
var base_0 = [618,5e-324,242,126,823,403,460,783,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,5e-324,242,126,823,403,460,783,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,5e-324,242,126,823,403,460,783,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,5e-324,242,126,823,403,460,783,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test564.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)