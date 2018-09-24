





var callbackArguments = [];
var argument1 = function (nonletter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('\\P{L}').test(nonletter)).toBe(true);
    expect(XRegExp('\\P{Letter}').test(nonletter)).toBe(true);
    expect(XRegExp('\\PL').test(nonletter)).toBe(true);
    expect(XRegExp('\\p{^L}').test(nonletter)).toBe(true);
    expect(XRegExp('\\p{^Letter}').test(nonletter)).toBe(true);
};
var argument2 = function (scenario) {
 callbackArguments.push(arguments) 

    var _it = scenario.annotations.Pending ? xit : it;
    _it(scenario.title, function () {
        next(scenario);
    });
};
var argument3 = [25,783,403];
var argument4 = function (e) {
 callbackArguments.push(arguments) 

    exported[e] = true;
};
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    d.d3plus.d3plus = d3plus.object.merge(d.d3plus.d3plus, {
        'x': d.x + d.dx / 2,
        'y': d.y + d.dy / 2,
        'width': d.dx,
        'height': d.dy,
        'share': d.value / root.value
    });
    returnData.push(d.d3plus);
};
var argument6 = null;
var argument7 = null;
var base_0 = [607,618,-1,"Vs<9[k","=",82,403,607,969]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,618,-1,"Vs<9[k","=",82,403,607,969]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,618,-1,"Vs<9[k","=",82,403,607,969]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,618,-1,"Vs<9[k","=",82,403,607,969]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test398.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)