





var callbackArguments = [];
var argument1 = function (method) {
 callbackArguments.push(arguments) 

    SVG.SetFX.prototype[method] = function () {
        for (var i = 0, il = this.set.members.length; i < il; i++)
            this.set.members[i].fx[method].apply(this.set.members[i].fx, arguments);
        return this;
    };
};
var argument2 = r_0;
var argument3 = function (deregisterWatch) {
 callbackArguments.push(arguments) 

    deregisterWatch();
};
var argument4 = r_0;
var argument5 = null;
var argument6 = function (res) {
 callbackArguments.push(arguments) 

    resources_built.push(res.build(0, async));
};
var argument7 = function (booth) {
 callbackArguments.push(arguments) 

    booth.sellSheet = _.filter(booth.sellSheet, function (item) {
        return productName == item.item;
    });
    booth.hasVarieties = false;
};
var base_0 = [705,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,-100]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test168.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)