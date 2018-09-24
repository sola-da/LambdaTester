





var callbackArguments = [];
var argument1 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: '\'' + val + '\'',
        token: 'keyword'
    };
};
var argument2 = function (comp) {
 callbackArguments.push(arguments) 

    return pvc_PercentValue.parse(comp);
};
var argument3 = function (name) {
 callbackArguments.push(arguments) 

    var trueName = usePrefix ? name.replace(new RegExp('^' + PouchDB.prefix), '') : name;
    var subOpts = utils.extend(true, opts, { adapter: backend.adapter });
    return PouchDB.destroy(trueName, subOpts);
};
var argument4 = function (i, elem) {
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
var argument5 = true;
var base_0 = [783,126,157,213,783,-1]
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
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/map/mapMined/test936.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)