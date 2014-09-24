var inherits = require('inherits');


module.exports = function(cTor, superCTor, props) {
    inherits(cTor, superCTor);

    if (props) {
        for(var p in props) {
            if (props.hasOwnProperty(p)) {
                cTor.prototype[p] = props[p];
            }
        }
    }
};
