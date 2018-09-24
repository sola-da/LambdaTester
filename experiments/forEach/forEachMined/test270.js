





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    if (dict[key] === value) {
        found = true;
    }
};
var argument2 = ["M",">9;H",100,59];
var argument3 = [823,607,705,59,893,607,627];
var argument4 = function (r) {
 callbackArguments.push(arguments) 

    var data = [
            r.uname,
            r.pw,
            r.global_rank,
            r.email,
            JSON.stringify({
                image: r.profile_image,
                text: r.profile_text
            }),
            Date.now()
        ];
    aq.queue(function (lock) {
        queryNew(insert, data, function (err) {
            if (!err) {
                console.log('Imported user ' + r.uname);
            }
            lock.release();
        });
    });
};
var argument5 = "pQR$e%";
var argument6 = function (callback, event) {
 callbackArguments.push(arguments) 

    if (networkEvents.indexOf(String(event)) >= 0) {
        network.on(event, callback);
    }
};
var argument7 = function (dep) {
 callbackArguments.push(arguments) 

    if (!dep)
        return;
    dep = DEPENDENCIES[dep] || dep;
    var ext = dep.split(/\./).pop();
    if (ext == 'css') {
        properties.head += '<link rel="stylesheet" href="' + dep + '" type="text/css">\n';
    } else if (ext == 'js') {
        properties.head += '<script src="' + dep + '"></script>\n';
    } else {
        properties.module = '="' + dep + '"';
    }
};
var argument8 = false;
var base_0 = ["52u","v",242]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["52u","v",242]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["52u","v",242]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["52u","v",242]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test270.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)