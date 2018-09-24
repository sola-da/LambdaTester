





var callbackArguments = [];
var argument1 = function (method) {
 callbackArguments.push(arguments) 

    SVG.SetFX.prototype[method] = function () {
        for (var i = 0, il = this.set.members.length; i < il; i++)
            this.set.members[i].fx[method].apply(this.set.members[i].fx, arguments);
        return this;
    };
};
var argument2 = null;
var argument3 = function (majorTick) {
 callbackArguments.push(arguments) 

    new pvc.visual.CartesianAxisTickScene(rootScene, {
        tick: majorTick,
        tickRaw: majorTick,
        tickLabel: axis.scale.tickFormat(majorTick)
    });
};
var argument4 = function (block) {
 callbackArguments.push(arguments) 

    if (block && block.element)
        lastBlockMap[block.id] = block;
};
var argument5 = true;
var argument6 = function (scenario) {
 callbackArguments.push(arguments) 

    var _it = scenario.annotations.Pending ? xit : it;
    _it(scenario.title, function () {
        next(scenario);
    });
};
var argument7 = ["[",0];
var argument8 = null;
var base_0 = [59,122,49,893,655,49,59,843,618,25]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,122,49,893,655,49,59,843,618,25]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,122,49,893,655,49,59,843,618,25]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,122,49,893,655,49,59,843,618,25]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test624.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)