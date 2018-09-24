





var callbackArguments = [];
var argument1 = function (et) {
 callbackArguments.push(arguments) 

    var entityType = parseCsdlEntityType(et, schema, metadataStore);
};
var argument2 = function (propertyPath) {
 callbackArguments.push(arguments) 

    var propNames = propertyPath.split('.');
    markLoadedNavPath(entities, propNames);
};
var argument3 = null;
var argument4 = null;
var argument5 = function (y) {
 callbackArguments.push(arguments) 

    if (typeof y === 'function') {
        vars.data.time.values.forEach(function (t) {
            if (y(t.getTime()))
                years.push(t.getTime());
        });
    } else if (y.constructor === Date) {
        years.push(new Date(y).getTime());
    } else {
        var d = new Date(y.toString());
        if (d !== 'Invalid Date') {
            d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000);
            years.push(d.getTime());
        }
    }
};
var argument6 = {"59":"'J","627":"","":1.3952514026713953e+308,"8.786623196418602e+307":"","1.4157886272800431e+308":"","ke4Yth":"","G":"Sm","1.2013829955713626e+308":"^"};
var argument7 = function (name) {
 callbackArguments.push(arguments) 

    var desc = webshims.defineNodeNameProperty(name, 'checkValidity', {
            prop: {
                value: function () {
                    isCheckValidity = true;
                    var ret = desc.prop._supvalue.apply(this, arguments);
                    isCheckValidity = false;
                    return ret;
                }
            }
        });
};
var argument8 = null;
var argument9 = false;
var base_0 = [460,403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,403]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,403]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,403]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test672.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)