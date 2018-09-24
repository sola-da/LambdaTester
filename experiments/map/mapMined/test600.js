





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    item['title'] = item['name'];
    for (var i = 0; i < locations.length; i++) {
        if (item.current_location !== null && item.current_location.id === locations[i].page_id) {
            $.extend(item.current_location, locations[i]);
        }
        if (item.hometown_location !== null && item.hometown_location.id === locations[i].page_id) {
            $.extend(item.hometown_location, locations[i]);
        }
    }
    return item;
};
var argument2 = function (name) {
 callbackArguments.push(arguments) 

    return window['inner' + name] || document.compatMode === 'CSS1Compat' && document.documentElement['client' + name] || document.body['client' + name];
};
var argument3 = null;
var argument4 = null;
var argument5 = function (line) {
 callbackArguments.push(arguments) 

    return '   ' + line;
};
var argument6 = r_2;
var argument7 = 49;
var argument8 = function (item) {
 callbackArguments.push(arguments) 

    var model;
    if (_.isObject(item)) {
        model = rel.relatedModel.findOrCreate(item);
    } else {
        var attrs = {};
        attrs[rel.relatedModel.prototype.idAttribute] = item;
        model = rel.relatedModel.findOrCreate(attrs);
    }
    return model;
};
var argument9 = null;
var argument10 = r_2;
var base_0 = [783,"E","w)","q",213,969,-1,"E"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,"E","w)","q",213,969,-1,"E"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,"E","w)","q",213,969,-1,"E"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test600.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)