





var callbackArguments = [];
var argument1 = function (agent) {
 callbackArguments.push(arguments) 

    agentsResp.push({
        name: agent.name,
        group: agent.group,
        dead: agent.dead,
        version: agent.version,
        configVersion: agent.configVersion,
        loadBalancerState: agent.loadBalancerState
    });
};
var argument2 = true;
var argument3 = function (aTelVariant) {
 callbackArguments.push(arguments) 

    assert.equal(index.byTel[aTelVariant], uid);
};
var argument4 = null;
var argument5 = r_1;
var argument6 = function (el) {
 callbackArguments.push(arguments) 

    el._walk(visitor);
};
var argument7 = null;
var argument8 = function (settingExt) {
 callbackArguments.push(arguments) 

    typeNames.push(settingExt.name);
};
var argument9 = r_1;
var argument10 = true;
var base_0 = ["RR","v"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["RR","v"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["RR","v"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["RR","v"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test905.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)