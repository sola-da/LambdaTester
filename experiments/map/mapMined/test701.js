





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var styleInfo = this, dfd = $.Deferred(), opts = $.extend({}, o, {
            queue: false,
            complete: function () {
                dfd.resolve(styleInfo);
            }
        });
    this.el.animate(this.diff, opts);
    return dfd.promise();
};
var argument2 = "";
var argument3 = function (i, elem) {
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
var argument4 = r_0;
var argument5 = {"714":"","":"T:","P;=":"e","H":823,"-1":"y4"};
var argument6 = function (i) {
 callbackArguments.push(arguments) 

    return start + step * i;
};
var argument7 = ["5D","8","<+","Z"];
var argument8 = true;
var argument9 = function (attribute) {
 callbackArguments.push(arguments) 

    return {
        caption: attribute,
        snippet: attribute + '="$0"',
        meta: 'attribute',
        score: Number.MAX_VALUE
    };
};
var argument10 = null;
var argument11 = true;
var base_0 = [100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapMined/test701.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)