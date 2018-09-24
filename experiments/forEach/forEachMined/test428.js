





var callbackArguments = [];
var argument1 = function (child) {
 callbackArguments.push(arguments) 

    if (index) {
        element.insertBefore(child, index);
    } else {
        element.appendChild(child);
        index = child;
    }
};
var argument2 = function (p) {
 callbackArguments.push(arguments) 

    var curr = path.join(dir, p);
    var stat = fs.statSync(curr);
    if (stat.isDirectory()) {
        ret = ret.concat(_readDir(curr));
    } else {
        ret.push(curr);
    }
};
var argument3 = function (other) {
 callbackArguments.push(arguments) 

    var anchor = doc.createAnchor(other.row, other.column);
    _self.others.push(anchor);
};
var argument4 = function (pair) {
 callbackArguments.push(arguments) 

    var eq_idx = pair.indexOf('=');
    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();
    if ('"' == val[0]) {
        val = val.slice(1, -1);
    }
    if (undefined == obj[key]) {
        obj[key] = decode(val);
    }
};
var base_0 = ["l+or>%*i4zC","x","vB","CzM7(","s","nh","i","4","Ia"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["l+or>%*i4zC","x","vB","CzM7(","s","nh","i","4","Ia"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["l+or>%*i4zC","x","vB","CzM7(","s","nh","i","4","Ia"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["l+or>%*i4zC","x","vB","CzM7(","s","nh","i","4","Ia"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test428.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)