





var callbackArguments = [];
var argument1 = function (data) {
 callbackArguments.push(arguments) 

    $.fn[data.name] = function () {
        var elems = [];
        this.each(function () {
            var shadowData = elementData(this, 'shadowData');
            var elem = shadowData && shadowData[data.prop] || this;
            if ($.inArray(elem, elems) == -1) {
                elems.push(elem);
            }
        });
        return this.pushStack(elems);
    };
};
var argument2 = function (key) {
 callbackArguments.push(arguments) 

    if (!key.match(/^\d+$/)) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
};
var argument3 = function (data) {
 callbackArguments.push(arguments) 

    it('should checksum ' + JSON.stringify(data) + ' correctly', function () {
        assert.equal(jsHashes.CRC32(data), testVectors[data]);
    });
};
var argument4 = true;
var argument5 = true;
var argument6 = function (val, key) {
 callbackArguments.push(arguments) 

    delete angular.callbacks[key];
};
var argument7 = true;
var base_0 = ["P","[<","wm(Y","$$j6"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["P","[<","wm(Y","$$j6"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["P","[<","wm(Y","$$j6"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["P","[<","wm(Y","$$j6"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test927.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)