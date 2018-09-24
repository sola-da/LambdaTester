





var callbackArguments = [];
var argument1 = function (ln) {
 callbackArguments.push(arguments) 

    var key = getKey(ln);
    if (!filter || !key && filter.indexOf('chat') !== -1) {
        show.push(ln);
    } else if (filter.indexOf(key) >= 0) {
        show.push(ln);
    }
};
var argument2 = "UR";
var argument3 = function (key) {
 callbackArguments.push(arguments) 

    this.setOption(key, optList[key]);
};
var argument4 = "";
var argument5 = 7.204608415078851e+307;
var argument6 = function (arg) {
 callbackArguments.push(arguments) 

    if (!/^-/.exec(arg))
        that.argsWithoutOptions.push(arg);
    var result = /^--git-dir=(.*)$/.exec(arg);
    if (result) {
        if (result[1][0] == '/') {
            that.gitDir = result[1];
        } else {
            that.gitDir = path.join(process.cwd(), result[1]);
        }
    } else {
        result = /^(--.*)/.exec(arg);
        if (result) {
            that.argOptions.push(result[1]);
        }
    }
};
var argument7 = "La";
var argument8 = function (node) {
 callbackArguments.push(arguments) 

    this.removeListeners_(node);
    var registrations = registrationsTable.get(node);
    for (var i = 0; i < registrations.length; i++) {
        if (registrations[i] === this) {
            registrations.splice(i, 1);
            break;
        }
    }
};
var argument9 = null;
var base_0 = ["lu","!","C","c",">","Bq;$"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["lu","!","C","c",">","Bq;$"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["lu","!","C","c",">","Bq;$"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["lu","!","C","c",">","Bq;$"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test551.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)