





var callbackArguments = [];
var argument1 = function (domain) {
 callbackArguments.push(arguments) 

    wellKnownDomains[domain] = currentKey.toLowerCase().trim();
};
var argument2 = function (property) {
 callbackArguments.push(arguments) 

    var fn = $.fn[property];
    $.fn[property] = function () {
        var ret = fn.apply(this, arguments);
        ret.prevObject = this;
        return ret;
    };
};
var argument3 = null;
var argument4 = function (resp) {
 callbackArguments.push(arguments) 

    if (resp.error)
        return resp.error(err);
};
var argument5 = function (event) {
 callbackArguments.push(arguments) 

    $$.fn[event] = function (callback) {
        return this.on(event, callback);
    };
};
var base_0 = [25,242]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,242]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,242]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,242]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test576.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)