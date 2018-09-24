





var callbackArguments = [];
var argument1 = function (file) {
 callbackArguments.push(arguments) 

    (function (file) {
        fs.readFile(path.join(buildBase, 'yql', file), stack.add(function (err, data) {
            var shasum = crypto.createHash('sha1');
            shasum.update(data);
            var d = shasum.digest('hex');
            results.post[file] = d;
        }));
    }(file));
};
var argument2 = function (i) {
 callbackArguments.push(arguments) 

    ret.push.apply(ret, i);
};
var argument3 = 3.603343547711391e+307;
var argument4 = r_1;
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    tmp = tmp.concat(_createPart(item, boundary));
};
var argument6 = r_1;
var argument7 = null;
var argument8 = function (value, key) {
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
var argument9 = null;
var argument10 = false;
var base_0 = ["u=d","_",82,1.7976931348623157e+308,"Q}","O"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["u=d","_",82,1.7976931348623157e+308,"Q}","O"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["u=d","_",82,1.7976931348623157e+308,"Q}","O"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["u=d","_",82,1.7976931348623157e+308,"Q}","O"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test809.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)