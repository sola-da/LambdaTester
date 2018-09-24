





var callbackArguments = [];
var argument1 = function (elem) {
 callbackArguments.push(arguments) 

    return elem.selected;
};
var argument2 = true;
var argument3 = function (p) {
 callbackArguments.push(arguments) 

    var t = p.trim();
    if (t && splits.indexOf(t) < 0 && t.indexOf(attrName) < 0) {
        p = t.replace(/([^:]*)(:*)(.*)/, '$1' + attrName + '$2$3');
    }
    return p;
};
var argument4 = function (expr) {
 callbackArguments.push(arguments) 

    return expr.visit(context);
};
var argument5 = false;
var argument6 = null;
var argument7 = function (part) {
 callbackArguments.push(arguments) 

    part = part.replace(/:/g, '_');
    return _ = path.join(_, part);
};
var argument8 = r_1;
var base_0 = [",K","6",618,-1,893,"<",25,"58_S"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [",K","6",618,-1,893,"<",25,"58_S"]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [",K","6",618,-1,893,"<",25,"58_S"]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test394.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)