





var callbackArguments = [];
var argument1 = function (n) {
 callbackArguments.push(arguments) 

    color[color.length] = parseInt(n, 10) / 255;
};
var argument2 = false;
var argument3 = null;
var argument4 = function (p) {
 callbackArguments.push(arguments) 

    if (Math.abs(value - p) < Math.abs(value - closest)) {
        return closest = p;
    }
};
var argument5 = function (p) {
 callbackArguments.push(arguments) 

    p = p.trim();
    if (p.match(hostElementRe)) {
        p = p.replace(hostElementRe, name + '$1$3, ' + is + '$1$3');
    } else if (p.match(hostFixableRe)) {
        p = name + p + ', ' + is + p;
    }
    r.push(p);
};
var argument6 = r_2;
var argument7 = function (tickData) {
 callbackArguments.push(arguments) 

    new pvc.visual.CartesianAxisTickScene(rootScene, {
        source: tickData,
        tick: tickData.value,
        tickRaw: tickData.rawValue,
        tickLabel: tickData.label
    });
};
var base_0 = ["UB","E","NW0"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["UB","E","NW0"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["UB","E","NW0"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["UB","E","NW0"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test297.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)