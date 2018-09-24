





var callbackArguments = [];
var argument1 = function (td, i) {
 callbackArguments.push(arguments) 

    if (!td.id) {
        td.id = 'tdid' + i + this.getTimeStamp();
    }
};
var argument2 = function (object) {
 callbackArguments.push(arguments) 

    store.delete(object._id);
};
var argument3 = true;
var argument4 = "";
var argument5 = function (a) {
 callbackArguments.push(arguments) 

    if (typeof a === 'string') {
        recs.push('"' + a + '"');
    } else if (typeof a === 'function') {
        recs.push(a.toString().split('()')[0].substring(9));
    } else {
        recs.push(a.toString());
    }
};
var argument6 = null;
var argument7 = function (item, name) {
 callbackArguments.push(arguments) 

    stringsApp[key] = stringsApp[key].replace(new RegExp('{' + name + '}', 'g'), additionalGlobals[name]);
};
var base_0 = [5e-324,82,893,618,460,126,-100,157,213]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,82,893,618,460,126,-100,157,213]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,82,893,618,460,126,-100,157,213]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,82,893,618,460,126,-100,157,213]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test824.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)