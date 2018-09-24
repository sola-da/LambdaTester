





var callbackArguments = [];
var argument1 = function (key2, node2) {
 callbackArguments.push(arguments) 

    ForceVectorUtils.fcBiRepulsor(node1, node2, that.repulsionStrength * (1 + node1.degree) * (1 + node2.degree));
};
var argument2 = false;
var argument3 = {"714":"`#`f","":4.757844257568974e+307};
var argument4 = function (index) {
 callbackArguments.push(arguments) 

    this._userIndexesToSingleDim[index] = null;
};
var argument5 = null;
var argument6 = function (tab) {
 callbackArguments.push(arguments) 

    tab.active = false;
};
var argument7 = false;
var argument8 = function (m) {
 callbackArguments.push(arguments) 

    var ch1 = m.charAt(0);
    var ch2 = m.charAt(m.length - 1);
    if (ch1 === ch2 && (ch1 === '"' || ch1 === '\'')) {
        m = m.substr(1, m.length - 2).replace('\\"', '"');
    }
    membersOnly[m] = false;
};
var base_0 = [126,627,783,157,25,49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,627,783,157,25,49]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,627,783,157,25,49]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,627,783,157,25,49]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test140.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)