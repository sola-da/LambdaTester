





var callbackArguments = [];
var argument1 = function (user) {
 callbackArguments.push(arguments) 

    return user.p('number') > 2 && user.p('number2') < 100;
};
var argument2 = null;
var argument3 = function (t) {
 callbackArguments.push(arguments) 

    return t.id !== id;
};
var argument4 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument5 = 403;
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    return uniques.indexOf(d[id_var]) >= 0;
};
var argument7 = null;
var base_0 = [157,783,460,969,59,126]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,783,460,969,59,126]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,783,460,969,59,126]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,783,460,969,59,126]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test587.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)