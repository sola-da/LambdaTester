





var callbackArguments = [];
var argument1 = function (a) {
 callbackArguments.push(arguments) 

    if (a.parent != null) {
        throw new Error('The complexObject is already attached. Either clone it or remove it from its current owner');
    }
    setAspect(a, complexArray);
};
var argument2 = {"2":"n","607":"","823":"G`E","pz":"","":969,"F":"JG"};
var argument3 = null;
var argument4 = function (prop) {
 callbackArguments.push(arguments) 

    webshims.defineNodeNamesProperty(prop == 'src' ? [
        'audio',
        'video',
        'source'
    ] : ['video'], prop, {
        reflect: true,
        propType: 'src'
    });
};
var argument5 = function (val) {
 callbackArguments.push(arguments) 

    moxieData.append(appendData[i].name, val);
};
var argument6 = function (leaf) {
 callbackArguments.push(arguments) 

    self.get(id, {
        rev: leaf,
        revs: opts.revs,
        attachments: opts.attachments
    }, function (err, doc) {
        if (!err) {
            result.push({ ok: doc });
        } else {
            result.push({ missing: leaf });
        }
        count--;
        if (!count) {
            callback(null, result);
        }
    });
};
var argument7 = r_1;
var argument8 = null;
var base_0 = [823,595,618,59]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,595,618,59]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,595,618,59]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,595,618,59]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test371.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)