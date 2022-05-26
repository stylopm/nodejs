let cowsay = require("cowsay");
let moment = require("moment");
console.log(cowsay.say(
    {
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
    }
));
console.log(moment().format('dddd'));