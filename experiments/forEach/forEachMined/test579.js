





var callbackArguments = [];
var argument1 = function (axis) {
 callbackArguments.push(arguments) 

    this._axisSetScaleChartLevel[axis.message] & chartLevel && axis.isBound() && this._setAxisScale(axis, chartLevel);
};
var argument2 = r_0;
var argument3 = true;
var argument4 = function (file, index) {
 callbackArguments.push(arguments) 

    var uniquePath = isRemote ? url.resolve(path.dirname(sourceFile), file) : path.relative(self.relativeTo, path.resolve(path.dirname(sourceFile), file));
    sourcesMapping[uniquePath] = consumer.sourcesContent && consumer.sourcesContent[index];
};
var argument5 = 25;
var argument6 = r_1;
var argument7 = function (chain) {
 callbackArguments.push(arguments) 

    Assertion.addProperty(chain, function () {
        return this;
    });
};
var argument8 = {"460":7.826544123903178e+307,"705":823,"":"","-100":2.775804637196954e+307,"n":1.1780757106344372e+308,"3.268328023075883e+307":783,"-":"","># 6":""};
var argument9 = true;
var argument10 = function (v) {
 callbackArguments.push(arguments) 

    function f() {
        console.error('write', v);
        socket.write(v);
    }
    assert.throws(f, TypeError);
};
var argument11 = false;
var base_0 = ["O","R","M","TC9l#"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["O","R","M","TC9l#"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["O","R","M","TC9l#"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["O","R","M","TC9l#"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test579.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)