





var callbackArguments = [];
var argument1 = function (msg) {
 callbackArguments.push(arguments) 

    self._sendMsg(msg);
};
var argument2 = 242;
var argument3 = [":fb","&k","8Vm",783];
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    for (j = 0; j < __data_groups.length; j++) {
        if (__data_groups[j].indexOf(d.id) < 0) {
            continue;
        }
        for (k = 0; k < __data_groups[j].length; k++) {
            if (__data_groups[j][k] in indices) {
                indices[d.id] = indices[__data_groups[j][k]];
                break;
            }
        }
    }
    if (isUndefined(indices[d.id])) {
        indices[d.id] = i++;
    }
};
var argument5 = false;
var argument6 = function (key, value) {
 callbackArguments.push(arguments) 

    map.set(key, value);
};
var argument7 = true;
var argument8 = "";
var argument9 = function (k) {
 callbackArguments.push(arguments) 

    var n = parseInt(k.replace(/[^\d]/g, '')), spaces = k.replace(/[^ ]/g, '').length;
    if (spaces === 0 || n % spaces !== 0) {
        self.log.warn('Invalid ' + self.name + ' key: "' + k + '".');
        self.end();
        return false;
    }
    n /= spaces;
    md5.update(String.fromCharCode(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, n & 255));
};
var base_0 = [969]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test32.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)