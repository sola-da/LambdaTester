





var callbackArguments = [];
var argument1 = function (r) {
 callbackArguments.push(arguments) 

    var data = [
            r.name,
            r.owner,
            Date.now()
        ];
    aq.queue(function (lock) {
        queryNew(insert, data, function (err) {
            if (!err) {
                console.log('Imported channel record ' + r.name + ' (' + r.owner + ')');
            }
            lock.release();
        });
    });
};
var argument2 = 82;
var argument3 = "";
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    ret[key] = obj[key];
};
var argument5 = [59,607,157,607,-1,0,655,893];
var argument6 = function (v) {
 callbackArguments.push(arguments) 

    var d = dist(v, pos);
    if (d < minDist || !minDist) {
        minDist = d;
        closest = v;
    }
};
var argument7 = "";
var argument8 = true;
var argument9 = function (c, i) {
 callbackArguments.push(arguments) 

    dataString = c.join(',');
    csv_data += i < csv_to_return.length ? dataString + '\n' : dataString;
};
var argument10 = false;
var argument11 = {"705":"7b","":"sgZ","g":"3","&":1.4300549969367354e+308,"[":5.954864602232775e+307,"mG":595,"ost&":" 0w","Pj":"%;N<"};
var base_0 = [843,655,403,403,969,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,655,403,403,969,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,655,403,403,969,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,655,403,403,969,-100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test984.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)