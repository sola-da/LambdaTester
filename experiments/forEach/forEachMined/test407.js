





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    this._getAttachment(attachments[key], {
        encode: true,
        ctx: ctx
    }, function (err, data) {
        var att = doc._attachments[key];
        att.data = data;
        delete att.stub;
        delete att.length;
        if (!--count) {
            callback(null, doc);
        }
    });
};
var argument2 = false;
var argument3 = 1.0356979002097948e+308;
var argument4 = function (range) {
 callbackArguments.push(arguments) 

    session.removeMarker(range.markerId);
    range.markerId = null;
};
var argument5 = null;
var argument6 = function (bundleLocations) {
 callbackArguments.push(arguments) 

    preloaded = preloaded.then(function () {
        return Promise.all(bundleLocations.map(function (bundleLocation) {
            load(bundleLocation);
            return getDefinition(bundleLocation).promise;
        }));
    });
};
var argument7 = {};
var argument8 = {"969":1.2027812935917822e+307,"2.2756013145654253e+307":82,"1.495245363496553e+306":"]=QHF6","1.7864881803224503e+308":"z`{","1.3117846078011863e+308":"","5.745424254985418e+307":460,"4.138432918334883e+307":1.1589720294522143e+308};
var argument9 = function (entity) {
 callbackArguments.push(arguments) 

    if (entity != null) {
        if (entity.getProperty(fkPropName) == oldValue) {
            entity.setProperty(fkPropName, newValue);
        }
    }
};
var argument10 = null;
var base_0 = ["w ",823,"OGWRI^",460,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["w ",823,"OGWRI^",460,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["w ",823,"OGWRI^",460,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["w ",823,"OGWRI^",460,-1]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test407.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)