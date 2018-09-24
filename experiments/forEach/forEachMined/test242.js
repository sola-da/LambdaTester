





var callbackArguments = [];
var argument1 = function (name) {
 callbackArguments.push(arguments) 

    this.removeCommand(commands[name]);
};
var argument2 = null;
var argument3 = [")%e2Q7",">","8Y","3","K","wm*","wE","Xdo(CM","?W","nw"];
var argument4 = function (obj, index) {
 callbackArguments.push(arguments) 

    this.a[index] = obj;
};
var argument5 = r_0;
var argument6 = function (e) {
 callbackArguments.push(arguments) 

    if (d !== e) {
        assert.ok(spec.metric(d.center(), e.center()) > spec.clusterDistance);
    }
};
var argument7 = null;
var argument8 = r_0;
var argument9 = function (ps) {
 callbackArguments.push(arguments) 

    ps = ps instanceof Array ? ps : [
        ps,
        ps
    ];
    pvc_installLog(this, '_' + ps[0], ps[1], logId);
};
var argument10 = r_0;
var argument11 = false;
var base_0 = ["O","asw","c]09","J#(K","X9"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["O","asw","c]09","J#(K","X9"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["O","asw","c]09","J#(K","X9"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["O","asw","c]09","J#(K","X9"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test242.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)