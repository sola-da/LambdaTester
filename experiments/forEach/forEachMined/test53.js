





var callbackArguments = [];
var argument1 = function (m) {
 callbackArguments.push(arguments) 

    m.$reset();
};
var argument2 = function (store) {
 callbackArguments.push(arguments) 

    tx.executeSql('DROP TABLE IF EXISTS ' + store, []);
};
var argument3 = true;
var argument4 = function (value, key) {
 callbackArguments.push(arguments) 

    missingObj[key] = value;
};
var argument5 = 25;
var argument6 = function (part) {
 callbackArguments.push(arguments) 

    part = part.split('=');
    var key = part.shift().toLowerCase();
    var value = part.join('=').trim();
    if (key === 'user') {
        username = value;
    } else if (key === 'auth') {
        value = value.split(/\s+/);
        if (value.shift().toLowerCase() === 'bearer') {
            accessToken = value.join(' ');
        }
    }
};
var base_0 = ["?t",893,"n",122,607,"Mp",213,157,"Ef"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["?t",893,"n",122,607,"Mp",213,157,"Ef"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["?t",893,"n",122,607,"Mp",213,157,"Ef"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["?t",893,"n",122,607,"Mp",213,157,"Ef"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test53.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)