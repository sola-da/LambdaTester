





var callbackArguments = [];
var argument1 = function (dir) {
 callbackArguments.push(arguments) 

    if (fs.existsSync(dir)) {
        if (!options.fullpath)
            error('path already exists: ' + dir, true);
        return;
    }
    var baseDir = path.dirname(dir);
    if (!fs.existsSync(baseDir) && !options.fullpath) {
        error('no such file or directory: ' + baseDir, true);
        return;
    }
    if (options.fullpath)
        mkdirSyncRecursive(dir);
    else
        fs.mkdirSync(dir, parseInt('0777', 8));
};
var argument2 = function (r, i) {
 callbackArguments.push(arguments) 

    var p = r.cursor;
    var l = maxCol - p.column;
    var d = spaceOffsets[i] - minSpace;
    if (l > d)
        session.insert(p, lang.stringRepeat(' ', l - d));
    else
        session.remove(new Range(p.row, p.column, p.row, p.column - l + d));
    r.start.column = r.end.column = maxCol;
    r.start.row = r.end.row = p.row;
    r.cursor = r.end;
};
var argument3 = [82,460,49,893,49];
var argument4 = null;
var argument5 = function (value, key) {
 callbackArguments.push(arguments) 

    if (!dst.hasOwnProperty(key))
        dst[key] = value;
};
var argument6 = function (p) {
 callbackArguments.push(arguments) 

    paramNames[p] = true;
};
var argument7 = 126;
var argument8 = {"893":1.0862946320835376e+308,"1.469675614744603e+308":"","1.1400781839560427e+308":9.400181569736919e+307,">XHm1":1.0149538323736175e+308,"-100":"","5.988198300552646e+307":1.243446698529588e+308,"4.456251793057931e+307":""};
var base_0 = ["$^","YaQgtlk*","n","O","CNe","}Cr","F"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$^","YaQgtlk*","n","O","CNe","}Cr","F"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$^","YaQgtlk*","n","O","CNe","}Cr","F"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$^","YaQgtlk*","n","O","CNe","}Cr","F"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test461.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)