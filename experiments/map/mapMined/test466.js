





var callbackArguments = [];
var argument1 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument2 = function (d, i) {
 callbackArguments.push(arguments) 

    return +value.call(pie, d, i);
};
var argument3 = function (key) {
 callbackArguments.push(arguments) 

    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
};
var argument4 = r_0;
var argument5 = "7";
var argument6 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || document.body;
    while (offsetParent && (!/^body|html$/i.test(offsetParent.nodeName) && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent;
};
var argument7 = true;
var argument8 = "0,";
var base_0 = [893,893,969,460,59,607,705,843,49,893]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,893,969,460,59,607,705,843,49,893]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,893,969,460,59,607,705,843,49,893]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,893,969,460,59,607,705,843,49,893]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test466.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)