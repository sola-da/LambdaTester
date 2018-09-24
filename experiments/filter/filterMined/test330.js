





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument2 = false;
var argument3 = null;
var argument4 = function (value) {
 callbackArguments.push(arguments) 

    return !_.contains(rest, value);
};
var argument5 = false;
var argument6 = function (d, i) {
 callbackArguments.push(arguments) 

    return d & 1;
};
var argument7 = null;
var argument8 = {"460":"","893":0,"k":"","`J":"","1.2932175504087319e+308":"","":""};
var argument9 = function (p) {
 callbackArguments.push(arguments) 

    var i;
    if (p[0].elements[0].combinator.value === ' ') {
        p[0].elements[0].combinator = new tree.Combinator('');
    }
    for (i = 0; i < p.length; i++) {
        if (p[i].getIsReferenced() && p[i].getIsOutput()) {
            return true;
        }
    }
    return false;
};
var base_0 = [714,242,49,618,157,213,460,-1,607]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,242,49,618,157,213,460,-1,607]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,242,49,618,157,213,460,-1,607]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test330.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)