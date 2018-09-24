





var callbackArguments = [];
var argument1 = function (obj) {
 callbackArguments.push(arguments) 

    obj.disabled = datepickerCtrl.isDisabled(obj.date, mode);
};
var argument2 = null;
var argument3 = function (proc) {
 callbackArguments.push(arguments) 

    filter_procs[Filter.getProcessID(conf.MACHINE_NAME, proc.pm2_env.name, proc.pm2_env.pm_id)] = [
        Math.floor(proc.monit.cpu),
        Math.floor(proc.monit.memory)
    ];
};
var argument4 = null;
var argument5 = function (a) {
 callbackArguments.push(arguments) 

    var str;
    switch (a) {
    case 'PUBKEY':
        str = splitype([
            'SHORT',
            'MPI',
            'MPI',
            'MPI',
            'MPI'
        ], msg).join('');
        break;
    case 'DATA':
    case 'MPI':
        str = msg.substring(0, HLP.readLen(msg) + 4);
        break;
    default:
        str = msg.substring(0, DTS[a]);
    }
    data.push(str);
    msg = msg.substring(str.length);
};
var argument6 = {"82":1.6676953628332133e+308,"100":1.2204409718012848e+308,"126":"@4X","157":157,"607":"","969":1.6523855654197865e+308,"":1.3491157320744734e+308,"q0":"","6.823935105045055e+307":"","1.672786168326013e+308":""};
var argument7 = function (el) {
 callbackArguments.push(arguments) 

    bower[el] = pkg[el];
    jqConfig[el] = pkg[el];
};
var base_0 = ["hN","M","Q:","w",">","DU$","9"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["hN","M","Q:","w",">","DU$","9"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["hN","M","Q:","w",">","DU$","9"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["hN","M","Q:","w",">","DU$","9"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test740.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)