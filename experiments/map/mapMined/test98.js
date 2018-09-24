





var callbackArguments = [];
var argument1 = function (node) {
 callbackArguments.push(arguments) 

    if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
        ancestors.push(node);
        return node;
    }
};
var argument2 = function (part) {
 callbackArguments.push(arguments) 

    part = part.replace(/:/g, '_');
    return _ = path.join(_, part);
};
var argument3 = "";
var argument4 = false;
var argument5 = function (item) {
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
var argument6 = 59;
var argument7 = function (t, e) {
 callbackArguments.push(arguments) 

    return (1 - s) * n[e] + s * t;
};
var argument8 = r_3;
var argument9 = "";
var base_0 = [213,59,1.7976931348623157e+308,403,122,893,-100,213,82,893]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,59,1.7976931348623157e+308,403,122,893,-100,213,82,893]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test98.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)