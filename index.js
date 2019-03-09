"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.namer = void 0;

var namer = function namer(name) {
  return function (value) {
    var Name = name;

    if (value !== undefined) {
      if (!value.includes(" ")) {
        if (value[0] === "=") {
          return "".concat(Name).concat(value.replace(/=/g, "__"));
        } else if (value[0] === "+") {
          return "".concat(Name, " ").concat(Name).concat(value.replace(/[+]/g, "--"));
        }
      } else {
        var values = value.split(" ");
        var finalName = value.includes("+") ? Name + " " : "";
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            if (val[0] === "=") {
              var tempVal = val;
              finalName += "".concat(Name).concat(tempVal.replace(/=/g, "__"), " ");
            } else if (val[0] === "+") {
              var _tempVal = val;
              finalName += "".concat(Name).concat(_tempVal.replace(/[+]/g, "--"), " ");
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return finalName;
      }
    }

    return Name;
  };
};

exports.namer = namer;