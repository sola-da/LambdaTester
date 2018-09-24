





var callbackArguments = [];
var argument1 = function (el) {
 callbackArguments.push(arguments) 

    jqConfig[el] = pkg[el];
};
var argument2 = false;
var argument3 = null;
var argument4 = function (stuff) {
 callbackArguments.push(arguments) 

    dates.forEach(function (date) {
        model.compareThings(date, stuff).should.equal(-1);
        model.compareThings(stuff, date).should.equal(1);
    });
};
var argument5 = function (method) {
 callbackArguments.push(arguments) 

    SVG.SetFX.prototype[method] = function () {
        for (var i = 0, il = this.set.members.length; i < il; i++)
            this.set.members[i].fx[method].apply(this.set.members[i].fx, arguments);
        return this;
    };
};
var argument6 = function (value, key) {
 callbackArguments.push(arguments) 

    $scope.chartData.data.push({
        x: key,
        y: [value.length],
        tooltip: key
    });
};
var argument7 = ["l",157,"R",607];
var argument8 = true;
var base_0 = ["N","8","f","=","IJ<M(","8:","i","75d","KlV"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N","8","f","=","IJ<M(","8:","i","75d","KlV"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N","8","f","=","IJ<M(","8:","i","75d","KlV"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N","8","f","=","IJ<M(","8:","i","75d","KlV"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test655.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)