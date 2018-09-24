





var callbackArguments = [];
var argument1 = function (el) {
 callbackArguments.push(arguments) 

    if (el.tagName && (el.hasAttribute('tab-heading') || el.hasAttribute('data-tab-heading') || el.tagName.toLowerCase() == 'tab-heading' || el.tagName.toLowerCase() == 'data-tab-heading')) {
        heading = el;
    } else {
        contents.push(el);
    }
};
var argument2 = [843,49,705,100,49];
var argument3 = {"":126};
var argument4 = function (f) {
 callbackArguments.push(arguments) 

    var segs = f.split('=');
    if (segs[0] === 'debug' && [
            'true',
            '1'
        ].indexOf(segs[1]) != -1) {
        $rootScope.debugMode = true;
    }
};
var argument5 = function (scenario) {
 callbackArguments.push(arguments) 

    var _it = scenario.annotations.Pending ? xit : it;
    _it(scenario.title, function () {
        next(scenario);
    });
};
var argument6 = function (key) {
 callbackArguments.push(arguments) 

    dst[key] = src[key];
};
var base_0 = [0,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test198.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)