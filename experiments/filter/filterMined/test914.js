





var callbackArguments = [];
var argument1 = function (handler) {
 callbackArguments.push(arguments) 

    return handler && (!event || handler.event === event) && (!fn || handler.fn === fn) && (!selector || handler.selector === selector);
};
var argument2 = null;
var argument3 = function (r) {
 callbackArguments.push(arguments) 

    if (r instanceof Rule && r.variable) {
        return !ruleset.variable(r.name);
    }
    return true;
};
var argument4 = function (n) {
 callbackArguments.push(arguments) 

    return !!n;
};
var argument5 = [969,0,460];
var argument6 = null;
var argument7 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var base_0 = [1.7976931348623157e+308,25]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,25]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,25]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,25]
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test914.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)