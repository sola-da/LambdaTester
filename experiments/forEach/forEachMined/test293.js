





var callbackArguments = [];
var argument1 = function (docInfo) {
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
var argument2 = null;
var argument3 = function (w) {
 callbackArguments.push(arguments) 

    if (w && w.screenWidth > width)
        width = w.screenWidth;
};
var argument4 = function (name) {
 callbackArguments.push(arguments) 

    filtered[name] = values[name];
};
var argument5 = function (prop) {
 callbackArguments.push(arguments) 

    assert.isTrue(!!~source.indexOf(prop));
};
var argument6 = "FK]";
var argument7 = 82;
var base_0 = [607,"y",122,705,-1,"G"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,"y",122,705,-1,"G"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,"y",122,705,-1,"G"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,"y",122,705,-1,"G"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test293.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)