





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
var argument2 = function (arg, i) {
 callbackArguments.push(arguments) 

    return make_node(AST_String, self.args[i], { value: arg.print_to_string() });
};
var argument3 = null;
var argument4 = null;
var argument5 = function (model) {
 callbackArguments.push(arguments) 

    return model.get(attr);
};
var argument6 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument7 = true;
var base_0 = [49,122,157,607,-1,25,607]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,122,157,607,-1,25,607]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,122,157,607,-1,25,607]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,122,157,607,-1,25,607]
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
require("fs").writeFileSync("./experiments/map/mapMined/test839.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)