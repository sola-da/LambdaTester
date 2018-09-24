





var callbackArguments = [];
var argument1 = function (b) {
 callbackArguments.push(arguments) 

    return checks.indexOf(b[vars.id.value]) >= 0;
};
var argument2 = null;
var argument3 = null;
var argument4 = function (json) {
 callbackArguments.push(arguments) 

    return !json.github.full_name.indexOf(query);
};
var argument5 = "C>8,FZfO";
var argument6 = false;
var argument7 = function (x, j) {
 callbackArguments.push(arguments) 

    return j !== i;
};
var argument8 = function () {
 callbackArguments.push(arguments) 

    var i = 0;
    for (; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument9 = r_1;
var base_0 = [460,969,607,595,49,595]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,969,607,595,49,595]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,969,607,595,49,595]
var r_2= undefined
try {
r_2 = base_2.filter(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,969,607,595,49,595]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test363.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)