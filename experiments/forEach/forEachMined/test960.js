





var callbackArguments = [];
var argument1 = function (proc) {
 callbackArguments.push(arguments) 

    filter_procs[Filter.getProcessID(conf.MACHINE_NAME, proc.pm2_env.name, proc.pm2_env.pm_id)] = [
        Math.floor(proc.monit.cpu),
        Math.floor(proc.monit.memory)
    ];
};
var argument2 = false;
var argument3 = false;
var argument4 = function (fold) {
 callbackArguments.push(arguments) 

    this.addFold(fold);
};
var argument5 = null;
var argument6 = "?";
var argument7 = function (k) {
 callbackArguments.push(arguments) 

    current[k] = conf[k];
};
var argument8 = null;
var argument9 = false;
var argument10 = function (kind) {
 callbackArguments.push(arguments) 

    for (var i = 0, L = kindScope[kind]; L > i; i++) {
        var info = this._itemInfos[index], dimName = this._userIndexesToSingleDim[index];
        void 0 === dimName && (dimName = '');
        out.push(' ' + index + '    | ' + kind + '    | ' + (info.message ? 'number' : 'string') + ' | ' + def.string.padRight(info.name || '', maxName) + ' | ' + def.string.padRight(info.label || '', maxLabel) + ' | ' + dimName);
        index++;
    }
};
var argument11 = {"607":82," ^":""};
var argument12 = "";
var base_0 = [49,0,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,0,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,0,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,0,618]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test960.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)