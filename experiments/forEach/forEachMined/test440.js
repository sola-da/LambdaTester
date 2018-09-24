





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    stream.end();
    that.callback();
};
var argument2 = function (calcSpec) {
 callbackArguments.push(arguments) 

    complexTypeProj.setCalc(calcSpec);
};
var argument3 = false;
var argument4 = false;
var argument5 = function (fn) {
 callbackArguments.push(arguments) 

    if (fn !== 'inspect') {
        assert.isFunction(utile[fn]);
    }
};
var argument6 = false;
var argument7 = function (proc) {
 callbackArguments.push(arguments) 

    filter_procs[Filter.getProcessID(conf.MACHINE_NAME, proc.pm2_env.name, proc.pm2_env.pm_id)] = [
        Math.floor(proc.monit.cpu),
        Math.floor(proc.monit.memory)
    ];
};
var base_0 = [0,714,213,122,595,607,893,969,25,25]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,714,213,122,595,607,893,969,25,25]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,714,213,122,595,607,893,969,25,25]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,714,213,122,595,607,893,969,25,25]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test440.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)