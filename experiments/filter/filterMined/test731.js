





var callbackArguments = [];
var argument1 = function (r) {
 callbackArguments.push(arguments) 

    if (r instanceof tree.Ruleset || r instanceof tree.mixin.Definition) {
        return r;
    }
};
var argument2 = true;
var argument3 = false;
var argument4 = function (val, key) {
 callbackArguments.push(arguments) 

    return _.str.include(key, term);
};
var argument5 = r_0;
var argument6 = 1.516924286414467e+308;
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    return isTargetToShow(d.id);
};
var argument8 = false;
var argument9 = true;
var argument10 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument11 = true;
var argument12 = true;
var base_0 = [-1,655,403,655,403,705,595,655,607]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,655,403,655,403,705,595,655,607]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,655,403,655,403,705,595,655,607]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,655,403,655,403,705,595,655,607]
var r_3= undefined
try {
r_3 = base_3.filter(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test731.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)