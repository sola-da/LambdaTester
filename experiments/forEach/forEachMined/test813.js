





var callbackArguments = [];
var argument1 = function (script) {
 callbackArguments.push(arguments) 

    if (script.src.match(re)) {
        basePath = script.src.replace(re, '');
    }
};
var argument2 = function (domain) {
 callbackArguments.push(arguments) 

    wellKnownDomains[domain] = currentKey.toLowerCase().trim();
};
var argument3 = r_1;
var argument4 = function (c) {
 callbackArguments.push(arguments) 

    var rgb = c.rgb();
    r += rgb.r;
    g += rgb.g;
    b += rgb.b;
    a += rgb.a;
};
var argument5 = r_1;
var argument6 = null;
var argument7 = function (p) {
 callbackArguments.push(arguments) 

    if (p.name && p.name.indexOf('.') === -1) {
        if (p.optional && optClass) {
            pnames.push('<span class="' + optClass + '">' + p.name + '</span>');
        } else {
            pnames.push(p.name);
        }
    }
};
var base_0 = [893,100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test813.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)