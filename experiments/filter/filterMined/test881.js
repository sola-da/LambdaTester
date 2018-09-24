





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    if (tmp.indexOf(item.id) === -1) {
        tmp.push(item.id);
        return item;
    }
};
var argument2 = function (v) {
 callbackArguments.push(arguments) 

    return !predicate(v);
};
var argument3 = false;
var argument4 = r_1;
var argument5 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < self.length; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument6 = function (key) {
 callbackArguments.push(arguments) 

    var matched = filter(ok, function (ok) {
            if (~ok.indexOf('*'))
                return 0 == key.indexOf(ok.split('*')[0]);
            return key == ok;
        });
    return matched.length == 0 && (!global.navigator || 'onerror' !== key);
};
var argument7 = false;
var base_0 = ["V2","J"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V2","J"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V2","J"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V2","J"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test881.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)