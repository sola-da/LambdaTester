





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return !$(this).data(configuration('handledName'));
};
var argument2 = r_0;
var argument3 = function () {
 callbackArguments.push(arguments) 

    var i = 0;
    for (; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument4 = function () {
 callbackArguments.push(arguments) 

    return !jQuery('a', this).length;
};
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    return isBarType(d);
};
var argument6 = null;
var argument7 = r_0;
var base_0 = [213,122,823,157,0,100,607,126]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,122,823,157,0,100,607,126]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,122,823,157,0,100,607,126]
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,122,823,157,0,100,607,126]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test643.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)