





var callbackArguments = [];
var argument1 = function (majorTick) {
 callbackArguments.push(arguments) 

    new pvc.visual.CartesianAxisTickScene(rootScene, {
        tick: majorTick,
        tickRaw: majorTick,
        tickLabel: axis.scale.tickFormat(majorTick)
    });
};
var argument2 = function (operation) {
 callbackArguments.push(arguments) 

    operation.cancel();
};
var argument3 = r_0;
var argument4 = function (obj) {
 callbackArguments.push(arguments) 

    obj.disabled = datepickerCtrl.isDisabled(obj.date, mode);
};
var argument5 = function (f, i) {
 callbackArguments.push(arguments) 

    this._addRow(i + 1, this.getFileType(f.name), f.name, f.size);
};
var argument6 = false;
var base_0 = ["1","t","t","O","a","<","P[l","j","]","+"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["1","t","t","O","a","<","P[l","j","]","+"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["1","t","t","O","a","<","P[l","j","]","+"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["1","t","t","O","a","<","P[l","j","]","+"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test74.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)