





var callbackArguments = [];
var argument1 = function (control) {
 callbackArguments.push(arguments) 

    control.$setPristine();
};
var argument2 = 8.020752015416555e+307;
var argument3 = function (e) {
 callbackArguments.push(arguments) 

    var last = groups[groups.length - 1] || null;
    if (last && pouchCollate(last.key[0][0], e.key) === 0) {
        last.key.push([
            e.key,
            e.id
        ]);
        last.value.push(e.value);
        return;
    }
    groups.push({
        key: [[
                e.key,
                e.id
            ]],
        value: [e.value]
    });
};
var argument4 = function (locale) {
 callbackArguments.push(arguments) 

    var target = bundlePathAndName + '/' + locale;
    if (has('dojo-preload-i18n-Api')) {
        checkForLegacyModules(target);
    }
    if (!cache[target]) {
        doLoad(require, bundlePathAndName, bundlePath, bundleName, locale, finish);
    } else {
        finish();
    }
};
var argument5 = r_2;
var argument6 = "tbL";
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    var val = parseFloat(fetchValue(vars, d, vars.color.value));
    if (typeof val == 'number' && !isNaN(val) && data_range.indexOf(val) < 0)
        data_range.push(val);
};
var argument8 = 1.6942728875080918e+308;
var argument9 = false;
var base_0 = ["C","6","(","a","BHG","+","b","lN","I"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["C","6","(","a","BHG","+","b","lN","I"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["C","6","(","a","BHG","+","b","lN","I"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["C","6","(","a","BHG","+","b","lN","I"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test843.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)