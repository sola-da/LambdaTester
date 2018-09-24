





var callbackArguments = [];
var argument1 = function (user) {
 callbackArguments.push(arguments) 

    return '' + user.id;
};
var argument2 = "#,";
var argument3 = function (entry) {
 callbackArguments.push(arguments) 

    return 2 === entry.length ? entry : [
        entry,
        entry
    ].flatten();
};
var argument4 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument5 = [893,-100,893];
var argument6 = function (item) {
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
var argument7 = r_2;
var base_0 = ["q;","j","s","),"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["q;","j","s","),"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test508.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)