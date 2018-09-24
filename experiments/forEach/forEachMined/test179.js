





var callbackArguments = [];
var argument1 = function (method) {
 callbackArguments.push(arguments) 

    PouchAlt[method] = eventEmitter[method].bind(eventEmitter);
};
var argument2 = {"xYP{X8":"rui"};
var argument3 = "LE%";
var argument4 = function (k) {
 callbackArguments.push(arguments) 

    var n = parseInt(k.replace(/[^\d]/g, '')), spaces = k.replace(/[^ ]/g, '').length;
    if (spaces === 0 || n % spaces !== 0) {
        self.log.warn('Invalid ' + self.name + ' key: "' + k + '".');
        self.end();
        return false;
    }
    n /= spaces;
    md5.update(String.fromCharCode(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, n & 255));
};
var argument5 = r_1;
var argument6 = false;
var argument7 = function (k) {
 callbackArguments.push(arguments) 

    if (old[k] === undefined)
        return;
    console.log('Style change \'' + k + '\', newValue \'' + now[k] + '\', was \'' + old[k] + '\'', ev.target);
};
var argument8 = true;
var argument9 = false;
var argument10 = function (tickable) {
 callbackArguments.push(arguments) 

    if (!tickable.getStave()) {
        tickable.setStave(this.stave);
    }
};
var argument11 = false;
var argument12 = null;
var base_0 = [59,157,1.7976931348623157e+308,"B;",49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,157,1.7976931348623157e+308,"B;",49]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,157,1.7976931348623157e+308,"B;",49]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,157,1.7976931348623157e+308,"B;",49]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test179.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)