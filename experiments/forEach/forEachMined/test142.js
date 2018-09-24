





var callbackArguments = [];
var argument1 = function (r) {
 callbackArguments.push(arguments) 

    sel.substractPoint(r.cursor);
};
var argument2 = {};
var argument3 = null;
var argument4 = function (ext) {
 callbackArguments.push(arguments) 

    str += '; ' + ext;
};
var argument5 = 1.1292220190494528e+308;
var argument6 = function (user) {
 callbackArguments.push(arguments) 

    if (user.username) {
        byUserName[user.username] = user;
    }
};
var argument7 = r_0;
var argument8 = r_0;
var argument9 = function (value, key) {
 callbackArguments.push(arguments) 

    if (key.charAt(0) != '$') {
        if (src[key]) {
            value += (key === 'style' ? ';' : ' ') + src[key];
        }
        dst.$set(key, value, true, srcAttr[key]);
    }
};
var base_0 = [100,969,783,618,213,1.7976931348623157e+308,705,843,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,969,783,618,213,1.7976931348623157e+308,705,843,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,969,783,618,213,1.7976931348623157e+308,705,843,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,969,783,618,213,1.7976931348623157e+308,705,843,1.7976931348623157e+308]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test142.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)