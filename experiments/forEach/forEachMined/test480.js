





var callbackArguments = [];
var argument1 = function (row) {
 callbackArguments.push(arguments) 

    compactDocument(row.id, 0, function () {
        count--;
        if (!count) {
            call(callback);
        }
    });
};
var argument2 = function (packageName) {
 callbackArguments.push(arguments) 

    queue.push(node.dependencies[packageName]);
};
var argument3 = [-100,49];
var argument4 = function (property) {
 callbackArguments.push(arguments) 

    var fn = $.fn[property];
    $.fn[property] = function () {
        var ret = fn.apply(this, arguments);
        ret.prevObject = this;
        return ret;
    };
};
var argument5 = null;
var argument6 = function (a) {
 callbackArguments.push(arguments) 

    if (typeof a === 'string') {
        recs.push('"' + a + '"');
    } else if (typeof a === 'function') {
        recs.push(a.toString().split('()')[0].substring(9));
    } else {
        recs.push(a.toString());
    }
};
var argument7 = [213];
var argument8 = "";
var base_0 = [49,"SD*","8","3",705,"R&",1.7976931348623157e+308,705,"uk,N4"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,"SD*","8","3",705,"R&",1.7976931348623157e+308,705,"uk,N4"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,"SD*","8","3",705,"R&",1.7976931348623157e+308,705,"uk,N4"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,"SD*","8","3",705,"R&",1.7976931348623157e+308,705,"uk,N4"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test480.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)