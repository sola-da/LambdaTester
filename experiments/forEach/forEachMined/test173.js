





var callbackArguments = [];
var argument1 = function (m) {
 callbackArguments.push(arguments) 

    if (!(m in vars)) {
        vars[m] = {};
    }
    vars[m] = d3plus.object.merge(d3plus.method[m], vars[m]);
    if (styles.indexOf(m) >= 0) {
        vars[m] = d3plus.object.merge(initStyle[m], vars[m]);
        styles.splice(styles.indexOf(m), 1);
    }
    d3plus.method.init(vars, vars[m], m);
    vars.self[m] = d3plus.method.function(m, vars);
};
var argument2 = function (dep) {
 callbackArguments.push(arguments) 

    findUnmet(obj.dependencies[dep]);
};
var argument3 = false;
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
var argument6 = [783,59,100,893,893,122];
var argument7 = function (key) {
 callbackArguments.push(arguments) 

    assert.isTrue(that.env.indexOf(key) === -1);
};
var argument8 = r_3;
var argument9 = {"242":"","607":"","655":157,"1.5838780135121968e+307":7.513600885346787e+307,"":"F","G":"Q","1.327205183442181e+308":4.131138570478191e+307};
var base_0 = [783,655,157,100,460]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,655,157,100,460]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,655,157,100,460]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,655,157,100,460]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test173.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)