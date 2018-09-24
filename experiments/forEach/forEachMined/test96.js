





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
var argument2 = function (name) {
 callbackArguments.push(arguments) 

    handlers[name] = [];
};
var argument3 = function (method) {
 callbackArguments.push(arguments) 

    SVG.Set.prototype[method] = function () {
        for (var i = 0, il = this.members.length; i < il; i++)
            if (this.members[i] && typeof this.members[i][method] == 'function')
                this.members[i][method].apply(this.members[i], arguments);
        return method == 'animate' ? this.fx || (this.fx = new SVG.SetFX(this)) : this;
    };
};
var argument4 = r_1;
var argument5 = r_1;
var argument6 = function (stuff) {
 callbackArguments.push(arguments) 

    dates.forEach(function (date) {
        model.compareThings(date, stuff).should.equal(-1);
        model.compareThings(stuff, date).should.equal(1);
    });
};
var argument7 = null;
var argument8 = {"100":-1,"627":"h","!p":1.7337205830402562e+308,"":"","1.6611521623160232e+308":1.5986440118448503e+308,"5.580251427134623e+307":"*Y","1.6645707170836928e+308":595};
var base_0 = [49,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,122]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test96.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)