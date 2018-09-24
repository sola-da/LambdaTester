





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var t = this;
    return r.some.call(i, function (e) {
        return n.contains(e, t);
    });
};
var argument2 = false;
var argument3 = function (region) {
 callbackArguments.push(arguments) 

    var found = false;
    if (!region.class) {
        return true;
    }
    region.class.split(' ').forEach(function (c) {
        if (classes.indexOf(c) >= 0) {
            found = true;
        }
    });
    return !found;
};
var argument4 = function (r) {
 callbackArguments.push(arguments) 

    if (r instanceof Rule && r.variable) {
        return !ruleset.variable(r.name);
    }
    return true;
};
var argument5 = null;
var argument6 = null;
var argument7 = function (patch) {
 callbackArguments.push(arguments) 

    return !/[\/]length/gi.test(patch.path);
};
var argument8 = 1.7249872159766269e+307;
var argument9 = {"618":9.75215592328933e+307,"655":893,"823":1.5996664978435222e+308,"893":595,"":"","-H":"","<<`G":"","6.328298541686551e+307":"e;p","-100":"^r","YSM:SZ<@":"_Z"};
var base_0 = [157,213,705,82,213,618,5e-324]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,213,705,82,213,618,5e-324]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test224.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)