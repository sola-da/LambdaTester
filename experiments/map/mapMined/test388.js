





var callbackArguments = [];
var argument1 = function (i, elem) {
 callbackArguments.push(arguments) 

    var val = jQuery(this).val();
    return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
        return {
            name: elem.name,
            value: val.replace(rCRLF, '\r\n')
        };
    }) : {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument2 = function (v) {
 callbackArguments.push(arguments) 

    return {
        subject: topic,
        property: { id: v.property },
        object: v,
        direction: 'outgoing'
    };
};
var argument3 = function (id) {
 callbackArguments.push(arguments) 

    customApi._getRevisionTree(id, function (err, rev_tree) {
        if (err && err.name === 'not_found' && err.message === 'missing') {
            missing[id] = { missing: req[id] };
        } else if (err) {
            return call(callback, err);
        } else {
            processDoc(id, rev_tree);
        }
        if (++count === ids.length) {
            return call(callback, null, missing);
        }
    });
};
var argument4 = ["F","7@|[","}GoO","h","d|Rd","r","tsF"];
var argument5 = true;
var argument6 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var base_0 = [607,714,126,242,969,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,714,126,242,969,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,714,126,242,969,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,714,126,242,969,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test388.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)