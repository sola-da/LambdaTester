





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    tmp_args.push(key);
    tmp_args.push(args[1][key]);
};
var argument2 = function (result) {
 callbackArguments.push(arguments) 

    var raw = Y.merge(result.raw), desc = raw.description || '';
    desc = Node.create('<div>' + desc + '</div>').get('text');
    if (desc.length > 65) {
        desc = Y.Escape.html(desc.substr(0, 65)) + ' &hellip;';
    } else {
        desc = Y.Escape.html(desc);
    }
    raw['class'] || (raw['class'] = '');
    raw.description = desc;
    raw.name = result.highlighted;
    return Lang.sub(this.RESULT_TEMPLATE, raw);
};
var argument3 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument4 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument5 = r_3;
var base_0 = [595,460]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,460]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,460]
var r_2= undefined
try {
r_2 = base_2.map(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,460]
var r_3= undefined
try {
r_3 = base_3.map(argument4,argument5)
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
require("fs").writeFileSync("./experiments/map/mapMined/test228.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)