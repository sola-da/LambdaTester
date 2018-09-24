





var callbackArguments = [];
var argument1 = function (n) {
 callbackArguments.push(arguments) 

    return 0 === n.failed_pings;
};
var argument2 = ["(TG"];
var argument3 = r_0;
var argument4 = function (model) {
 callbackArguments.push(arguments) 

    return filters.all(function (filter) {
        return filter.compare(model);
    });
};
var argument5 = function () {
 callbackArguments.push(arguments) 

    var m = this.slice(0, parts[i].length), p = parts[i].slice(0, m.length);
    return m == p;
};
var argument6 = function () {
 callbackArguments.push(arguments) 

    !this.name && validator.settings.debug && window.console && console.error('%o has no name assigned', this);
    if (this.name in rulesCache || !validator.objectLength($(this).rules()))
        return false;
    rulesCache[this.name] = true;
    return true;
};
var argument7 = 82;
var base_0 = [126,714,"ob",618,"?",",F+",783,607,157,618]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test804.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)