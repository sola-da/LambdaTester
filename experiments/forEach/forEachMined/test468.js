





var callbackArguments = [];
var argument1 = function (schedule) {
 callbackArguments.push(arguments) 

    console.log(schedule + ',' + scheduledCounts[schedule]);
};
var argument2 = false;
var argument3 = function (variable) {
 callbackArguments.push(arguments) 

    if (!variable.defs.length) {
        return;
    }
    var bindingSource;
    if ((bindingSource = symbolMap[variable.name]) && bindingSource !== scope && !isParameter(variable)) {
        reportShadow(variable.defs[0].name, variable.name);
    }
};
var argument4 = null;
var argument5 = function (key) {
 callbackArguments.push(arguments) 

    if (_.indexOf(propsToPop, key) === -1) {
        return all.push(_this[key]);
    }
};
var argument6 = function (record) {
 callbackArguments.push(arguments) 

    if (Ext.isEmpty(record.get('translatedElement')) || Ext.isEmpty(record.get('translateToLanguage'))) {
        allGood = false;
    }
};
var argument7 = true;
var base_0 = [893,157,618,59,403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,157,618,59,403]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,157,618,59,403]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,157,618,59,403]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test468.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)