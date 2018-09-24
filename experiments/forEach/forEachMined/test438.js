





var callbackArguments = [];
var argument1 = function (res) {
 callbackArguments.push(arguments) 

    if (!res.ok) {
        result.doc_write_failures++;
        errors.push(new Error(res.reason || res.message || 'Unknown reason'));
    }
};
var argument2 = null;
var argument3 = function (a) {
 callbackArguments.push(arguments) 

    if (a.parent != null) {
        throw new Error('The complexObject is already attached. Either clone it or remove it from its current owner');
    }
    setAspect(a, complexArray);
};
var argument4 = r_0;
var argument5 = r_0;
var argument6 = function (w, i) {
 callbackArguments.push(arguments) 

    if (w) {
        noWidgets = false;
        w.row = i;
    }
};
var argument7 = function (td, i) {
 callbackArguments.push(arguments) 

    if (!td.id) {
        td.id = 'tdid' + i + this.getTimeStamp();
    }
};
var argument8 = r_1;
var base_0 = [242,-100,403,157,0,705]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,-100,403,157,0,705]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,-100,403,157,0,705]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,-100,403,157,0,705]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test438.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)