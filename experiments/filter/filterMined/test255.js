





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    return e.constructor === Object && '@id' in e && e['@id'] === flattened['@id'];
};
var argument2 = function (guest) {
 callbackArguments.push(arguments) 

    return !!guest.name && (attending ? guest.is_attending : true);
};
var argument3 = null;
var argument4 = {"403":595,"":100,"2.923788569477153e+307":783,"1.7572664759159699e+308":"","bl":":I","yO":""};
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    if (tmp.indexOf(item.id) === -1) {
        tmp.push(item.id);
        return item;
    }
};
var argument6 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < l; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument7 = null;
var base_0 = [714,783,-1,49,607]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/filter/filterMined/test255.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)