





var callbackArguments = [];
var argument1 = function (side) {
 callbackArguments.push(arguments) 

    var len_a = pvc.BasePanel.orthogonalLength[side], clientLen = clientSize[len_a], paddingLen = pads[len_a], len = clientLen + paddingLen;
    if (!tickRoundPads[side + 'Locked']) {
        var offLen = len * (offPads[side] || 0), roundLen = clientLen * (tickRoundPads[side] || 0);
        (reqPads || (reqPads = {}))[side] = Math.max(offLen - roundLen, 0);
    }
};
var argument2 = function (value, key) {
 callbackArguments.push(arguments) 

    var lkey = angular.lowercase(key);
    var isImage = tag === 'img' && lkey === 'src' || lkey === 'background';
    if (validAttrs[lkey] === true && (uriAttrs[lkey] !== true || uriValidator(value, isImage))) {
        out(' ');
        out(key);
        out('="');
        out(encodeEntities(value));
        out('"');
    }
};
var argument3 = false;
var argument4 = null;
var argument5 = function (sample, index, samples) {
 callbackArguments.push(arguments) 

    samples[index] = invertValue - sample;
};
var argument6 = "B";
var argument7 = function (rv) {
 callbackArguments.push(arguments) 

    val = parseRawValue(rv, dataType);
    oldVal.push(val);
};
var argument8 = null;
var argument9 = 49;
var base_0 = ["rY4","|","Za","n",":n","!","r","{Z"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["rY4","|","Za","n",":n","!","r","{Z"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["rY4","|","Za","n",":n","!","r","{Z"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["rY4","|","Za","n",":n","!","r","{Z"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test556.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)