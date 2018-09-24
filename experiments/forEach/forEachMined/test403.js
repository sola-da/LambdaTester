





var callbackArguments = [];
var argument1 = function (fileName) {
 callbackArguments.push(arguments) 

    var script = getEmbeddedTemplate(fileName);
    try {
        if (window.execScript) {
            window.execScript(script || '""');
        } else {
            window.eval(script + '//@ sourceURL=' + fileName);
        }
    } catch (e) {
        if (window.console) {
            window.console.log(script, '\n', e);
        } else {
            window.alert(e);
        }
    }
};
var argument2 = function (key) {
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
var argument3 = function (arg) {
 callbackArguments.push(arguments) 

    arg.replace(FN_ARG, function (all, underscore, name) {
        $inject.push(name);
    });
};
var argument4 = {"E%":"q*","s8;":"","":"([+","sL=GjC@@X":"","f":"F","1.3559784896714044e+308":""};
var argument5 = function (keyPart) {
 callbackArguments.push(arguments) 

    var binding = this.parseKeys(keyPart, command);
    var hashId = binding.hashId;
    (ckb[hashId] || (ckb[hashId] = {}))[binding.key] = command;
};
var argument6 = null;
var argument7 = "";
var base_0 = ["<",":","`","X","q8e","k9","8","}6"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<",":","`","X","q8e","k9","8","}6"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<",":","`","X","q8e","k9","8","}6"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["<",":","`","X","q8e","k9","8","}6"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test403.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)