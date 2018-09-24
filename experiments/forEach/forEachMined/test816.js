





var callbackArguments = [];
var argument1 = function (eventName) {
 callbackArguments.push(arguments) 

    $.fn[eventName] = function (callback) {
        return this.on(eventName, callback);
    };
};
var argument2 = function (w) {
 callbackArguments.push(arguments) 

    if (w && w.rowCount)
        screenRows += w.rowCount;
};
var argument3 = 460;
var argument4 = {"0":"WPG","82":"","213":4.21486649171757e+307,"":"nZ p","4.507252229605276e+307":"RY","Tk":"","U":"MLx{","9.876632004293613e+307":595,"5.024524815253774e+306":"{"};
var argument5 = function (k) {
 callbackArguments.push(arguments) 

    var oldKey = EntityKey.fromJSON(k, that.metadataStore);
    tempKeyMap[oldKey.toString()] = new EntityKey(oldKey.entityType, that.keyGenerator.generateTempKeyValue(oldKey.entityType, oldKey.values[0]));
};
var argument6 = function (obj) {
 callbackArguments.push(arguments) 

    var googleAnalyticsId = obj.stringPropertyValue('googleAnalyticsId');
    if (googleAnalyticsId) {
        service.googleAnalyticsId = googleAnalyticsId;
    }
};
var argument7 = true;
var argument8 = r_1;
var base_0 = ["as","&","a=I",893,"TN"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["as","&","a=I",893,"TN"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["as","&","a=I",893,"TN"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["as","&","a=I",893,"TN"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test816.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)