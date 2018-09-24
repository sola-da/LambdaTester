





var callbackArguments = [];
var argument1 = function (element) {
 callbackArguments.push(arguments) 

    element = angular.element(element);
    var data = element.data(NG_ANIMATE_STATE);
    if (data && data.active) {
        forEach(data.active, function (runner) {
            runner.cancel();
        });
    }
};
var argument2 = [843,-100,403,5e-324,0,823,157,460,213];
var argument3 = function (view) {
 callbackArguments.push(arguments) 

    var idx = view.contentIndex;
    if (indexes.contains(idx)) {
        ok(true, 'should find childView for contentIndex %@ (nowShowing=%@)'.fmt(idx, set));
    } else {
        ok(false, 'should NOT find childView for contentIndex %@ (nowShowing=%@)'.fmt(idx, set));
    }
    indexes.remove(idx);
};
var argument4 = function (v, i) {
 callbackArguments.push(arguments) 

    if (getAxisId(id) === getAxisId(baseId) && ys[baseId] && !(hasNegativeValue && +v > 0)) {
        ys[baseId][i] += +v;
    }
};
var argument5 = function (side) {
 callbackArguments.push(arguments) 

    sides[side] = Math.max(a[side] || 0, b[side] || 0);
};
var argument6 = false;
var base_0 = ["g","r"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["g","r"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["g","r"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["g","r"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test760.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)