





var callbackArguments = [];
var argument1 = function (rev) {
 callbackArguments.push(arguments) 

    if (height[rev] > max_height) {
        candidates.push(rev);
    }
};
var argument2 = function (node2) {
 callbackArguments.push(arguments) 

    var n2, xx, yy;
    if (checked.indexOf(node2) < 0) {
        n2 = accessor ? accessor(node2) : [
            node2.x,
            node2.y
        ];
        xx = Math.abs(n1[0] - n2[0]);
        yy = Math.abs(n1[1] - n2[1]);
        return distances.push(Math.sqrt(xx * xx + yy * yy));
    }
};
var argument3 = function (subFold) {
 callbackArguments.push(arguments) 

    fold.addSubFold(subFold);
};
var argument4 = function (task) {
 callbackArguments.push(arguments) 

    result.push('{id: ' + task.id + ', ' + 'time: ' + task.time + '}');
};
var argument5 = null;
var argument6 = "7(Eb";
var base_0 = [-1,"[w9","V","#@",-100,157,"Q"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,"[w9","V","#@",-100,157,"Q"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,"[w9","V","#@",-100,157,"Q"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,"[w9","V","#@",-100,157,"Q"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test683.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)