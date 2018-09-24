





var callbackArguments = [];
var argument1 = function (fn) {
 callbackArguments.push(arguments) 

    fn();
};
var argument2 = {"49":"4X","59":"C)Z","969":655,"":"n"};
var argument3 = function (item) {
 callbackArguments.push(arguments) 

    buttons.push(item.button);
    if (item.buttonExpand) {
        buttons.push(item.buttonExpand);
    }
    if (item.subItems && item == me.expandedItem) {
        item.subItems.forEach(function (subItem) {
            buttons.push(subItem.button);
            if (subItem.buttonExpand) {
                buttons.push(subItem.buttonExpand);
            }
        });
    }
};
var argument4 = "g";
var argument5 = null;
var argument6 = function (name) {
 callbackArguments.push(arguments) 

    handlers[name] = [];
};
var argument7 = null;
var argument8 = true;
var argument9 = function (docInfo) {
 callbackArguments.push(arguments) 

    var attachments = docInfo.data && docInfo.data._attachments ? Object.keys(docInfo.data._attachments) : [];
    if (!attachments.length) {
        return done();
    }
    function processedAttachment() {
        recv++;
        if (recv === attachments.length) {
            done();
        }
    }
    for (var key in docInfo.data._attachments) {
        preprocessAttachment(docInfo.data._attachments[key], processedAttachment);
    }
};
var base_0 = [100,595,618,655,0,893,823,843,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,595,618,655,0,893,823,843,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,595,618,655,0,893,823,843,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,595,618,655,0,893,823,843,-100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test817.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)