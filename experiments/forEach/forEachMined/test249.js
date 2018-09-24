





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    pt1 = [
        c.p[0] / phys_scale,
        c.p[1] / phys_scale
    ];
    pt2 = [
        (c.p[0] + 280) / phys_scale,
        (c.p[1] + 280) / phys_scale
    ];
    ;
    checkpoints[c.n] = {
        'pt1': pt1,
        'pt2': pt2,
        'width': pt2[0] - pt1[0],
        'height': pt2[1] - pt1[1],
        'center': [
            (pt1[0] + pt2[0]) / 2,
            (pt1[1] + pt2[1]) / 2
        ]
    };
};
var argument2 = 1.4159006141767113e+308;
var argument3 = function (value, key) {
 callbackArguments.push(arguments) 

    if (angular.element(value).is('option')) {
        array.push(optionToData(angular.element(value)));
    } else if (angular.element(value).is('optgroup')) {
        var group = optionGroupToData(angular.element(value));
        angular.forEach(angular.element(value).children(), function (gval, gkey) {
            array.push(optionToData(angular.element(gval), group));
        });
    }
};
var argument4 = ["h",460,"|","$:M;",-100];
var argument5 = function (p) {
 callbackArguments.push(arguments) 

    p = p.trim();
    if (this.selectorNeedsScoping(p, name)) {
        p = strict ? this.applyStrictSelectorScope(p, name) : this.applySimpleSelectorScope(p, name);
    }
    r.push(p);
};
var argument6 = null;
var argument7 = function cb_forEach(rule) {
 callbackArguments.push(arguments) 

    if (!rule.pattern) {
        return logger.error({ rule: rule }, 'Simple naming rules require a pattern.');
    }
    if (!rule.name) {
        return logger.error({ rule: rule }, 'Simple naming rules require a replacement name.');
    }
    this.addSimple(rule.pattern, rule.name);
};
var base_0 = [-100,460]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,460]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,460]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,460]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test249.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)