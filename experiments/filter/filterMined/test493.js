





var callbackArguments = [];
var argument1 = function (n) {
 callbackArguments.push(arguments) 

    return 0 === n.failed_pings;
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    !this.name && validator.settings.debug && window.console && console.error('%o has no name assigned', this);
    if (this.name in rulesCache || !validator.objectLength($(this).rules()))
        return false;
    rulesCache[this.name] = true;
    return true;
};
var argument3 = {"242":"","8.704047389294296e+307":"","a":"","Iu":1.1578358116427372e+307};
var argument4 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument5 = false;
var argument6 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < self.length; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument7 = {"r":655,"1.7909083075660724e+308":213,"":1.6560698132124814e+308,"j":6.081905990409163e+307,"9.021589407718237e+307":0};
var argument8 = 1.6872198623085433e+308;
var base_0 = [1.7976931348623157e+308,403,25,242,783]
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
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,403,25,242,783]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test493.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)