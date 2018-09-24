





var callbackArguments = [];
var argument1 = function (key2) {
 callbackArguments.push(arguments) 

    if (c.property[key2].valuetype == 'object') {
        c.property[key2].values = c.property[key2].values.map(function (s) {
            s.property = [
                key,
                key2
            ];
            return s;
        });
        out = out.concat(c.property[key2].values);
    }
};
var argument2 = false;
var argument3 = function (r) {
 callbackArguments.push(arguments) 

    if (typeof r === 'string') {
        if (!vars[r].value)
            missing.push('"' + r + '"');
    } else if (typeof r === 'function') {
        var reqReturn = r(vars);
        if (!reqReturn.status && reqReturn.text) {
            missing.push('"' + reqReturn.text + '"');
        }
    }
};
var argument4 = function (w, i) {
 callbackArguments.push(arguments) 

    if (w) {
        noWidgets = false;
        w.row = i;
    }
};
var argument5 = false;
var argument6 = false;
var argument7 = function (fn) {
 callbackArguments.push(arguments) 

    nodeNameCache[name].each(fn);
};
var base_0 = [893,"k",1.7976931348623157e+308,403,655,"X7-F","b"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,"k",1.7976931348623157e+308,403,655,"X7-F","b"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,"k",1.7976931348623157e+308,403,655,"X7-F","b"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,"k",1.7976931348623157e+308,403,655,"X7-F","b"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test659.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)