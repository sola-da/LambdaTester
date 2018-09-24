





var callbackArguments = [];
var argument1 = function (cp) {
 callbackArguments.push(arguments) 

    var cos = target.getProperty(cp.name);
    if (cp.isScalar) {
        rejectChangesCore(cos);
    } else {
        cos._rejectChanges();
        cos.forEach(rejectChangesCore(co));
    }
};
var argument2 = r_0;
var argument3 = r_0;
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    obj[item] = true;
};
var argument5 = function (callback, event) {
 callbackArguments.push(arguments) 

    if (timelineEvents.indexOf(String(event)) >= 0) {
        timeline.on(event, callback);
    }
};
var argument6 = null;
var argument7 = r_1;
var argument8 = function (k) {
 callbackArguments.push(arguments) 

    opts[k] = otr.smw[k];
};
var argument9 = null;
var argument10 = r_2;
var base_0 = [893,242,122,714,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,242,122,714,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,242,122,714,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,242,122,714,-1]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test257.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)