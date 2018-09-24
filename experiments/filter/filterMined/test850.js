





var callbackArguments = [];
var argument1 = function (match) {
 callbackArguments.push(arguments) 

    return !hasMatch(currentMatches, match);
};
var argument2 = r_0;
var argument3 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
};
var argument4 = function (s) {
 callbackArguments.push(arguments) 

    return typeof d3plus.style[s] === 'object';
};
var argument5 = function (key) {
 callbackArguments.push(arguments) 

    var matched = filter(ok, function (ok) {
            if (~ok.indexOf('*'))
                return 0 == key.indexOf(ok.split('*')[0]);
            return key == ok;
        });
    return matched.length == 0 && (!global.navigator || 'onerror' !== key);
};
var argument6 = null;
var argument7 = r_3;
var base_0 = ["!K","m","3",25]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["!K","m","3",25]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["!K","m","3",25]
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/filter/filterMined/test850.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)