





var callbackArguments = [];
var argument1 = function (m) {
 callbackArguments.push(arguments) 

    theme = this.addMixin(theme, elementType, m);
};
var argument2 = 126;
var argument3 = false;
var argument4 = function (suite) {
 callbackArguments.push(arguments) 

    mapTOC(suite, obj);
};
var argument5 = function (cancelFn) {
 callbackArguments.push(arguments) 

    (cancelFn || noop)(true);
};
var argument6 = function (data) {
 callbackArguments.push(arguments) 

    it('should checksum ' + JSON.stringify(data) + ' correctly', function () {
        assert.equal(jsHashes.CRC32(data), testVectors[data]);
    });
};
var argument7 = null;
var base_0 = [157,607,0,-100,607,0,655,969,49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,607,0,-100,607,0,655,969,49]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,607,0,-100,607,0,655,969,49]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,607,0,-100,607,0,655,969,49]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test130.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)