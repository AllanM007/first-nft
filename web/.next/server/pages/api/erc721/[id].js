"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/erc721/[id]";
exports.ids = ["pages/api/erc721/[id]"];
exports.modules = {

/***/ "./pages/api/erc721/[id].js":
/*!**********************************!*\
  !*** ./pages/api/erc721/[id].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst metadata = {\n  1: {\n    attributes: [{\n      trait_type: \"Shape\",\n      value: \"Circle\"\n    }, {\n      trait_type: \"Mood\",\n      value: \"Sad\"\n    }],\n    description: \"A sad circle.\",\n    image: \"https://i.imgur.com/Qkw9N0A.jpeg\",\n    name: \"Sad Circle\"\n  },\n  2: {\n    attributes: [{\n      trait_type: \"Shape\",\n      value: \"Rectangle\"\n    }, {\n      trait_type: \"Mood\",\n      value: \"Angry\"\n    }],\n    description: \"An angry rectangle.\",\n    image: \"https://i.imgur.com/SMneO6k.jpeg\",\n    name: \"Angry Rectangle\"\n  },\n  3: {\n    attributes: [{\n      trait_type: \"Shape\",\n      value: \"Triangle\"\n    }, {\n      trait_type: \"Mood\",\n      value: \"Bored\"\n    }],\n    description: \"An bored triangle.\",\n    image: \"https://i.imgur.com/hMVRFoJ.jpeg\",\n    name: \"Bored Triangle\"\n  }\n};\nfunction handler(req, res) {\n  res.status(200).json(metadata[req.query.id] || {});\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZXJjNzIxL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFFBQVEsR0FBRztBQUNiLEtBQUc7QUFDREMsSUFBQUEsVUFBVSxFQUFFLENBQ1Y7QUFDRUMsTUFBQUEsVUFBVSxFQUFFLE9BRGQ7QUFFRUMsTUFBQUEsS0FBSyxFQUFFO0FBRlQsS0FEVSxFQUtWO0FBQ0VELE1BQUFBLFVBQVUsRUFBRSxNQURkO0FBRUVDLE1BQUFBLEtBQUssRUFBRTtBQUZULEtBTFUsQ0FEWDtBQVdEQyxJQUFBQSxXQUFXLEVBQUUsZUFYWjtBQVlEQyxJQUFBQSxLQUFLLEVBQUUsa0NBWk47QUFhREMsSUFBQUEsSUFBSSxFQUFFO0FBYkwsR0FEVTtBQWdCYixLQUFHO0FBQ0RMLElBQUFBLFVBQVUsRUFBRSxDQUNWO0FBQ0VDLE1BQUFBLFVBQVUsRUFBRSxPQURkO0FBRUVDLE1BQUFBLEtBQUssRUFBRTtBQUZULEtBRFUsRUFLVjtBQUNFRCxNQUFBQSxVQUFVLEVBQUUsTUFEZDtBQUVFQyxNQUFBQSxLQUFLLEVBQUU7QUFGVCxLQUxVLENBRFg7QUFXREMsSUFBQUEsV0FBVyxFQUFFLHFCQVhaO0FBWURDLElBQUFBLEtBQUssRUFBRSxrQ0FaTjtBQWFEQyxJQUFBQSxJQUFJLEVBQUU7QUFiTCxHQWhCVTtBQStCYixLQUFHO0FBQ0RMLElBQUFBLFVBQVUsRUFBRSxDQUNWO0FBQ0VDLE1BQUFBLFVBQVUsRUFBRSxPQURkO0FBRUVDLE1BQUFBLEtBQUssRUFBRTtBQUZULEtBRFUsRUFLVjtBQUNFRCxNQUFBQSxVQUFVLEVBQUUsTUFEZDtBQUVFQyxNQUFBQSxLQUFLLEVBQUU7QUFGVCxLQUxVLENBRFg7QUFXREMsSUFBQUEsV0FBVyxFQUFFLG9CQVhaO0FBWURDLElBQUFBLEtBQUssRUFBRSxrQ0FaTjtBQWFEQyxJQUFBQSxJQUFJLEVBQUU7QUFiTDtBQS9CVSxDQUFqQjtBQWdEaUIsU0FBU0MsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQ3hDQSxFQUFBQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQlgsUUFBUSxDQUFDUSxHQUFHLENBQUNJLEtBQUosQ0FBVUMsRUFBWCxDQUFSLElBQTBCLEVBQS9DO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQvLi9wYWdlcy9hcGkvZXJjNzIxL1tpZF0uanM/MTRkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZXRhZGF0YSA9IHtcbiAgICAxOiB7XG4gICAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0cmFpdF90eXBlOiBcIlNoYXBlXCIsXG4gICAgICAgICAgdmFsdWU6IFwiQ2lyY2xlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0cmFpdF90eXBlOiBcIk1vb2RcIixcbiAgICAgICAgICB2YWx1ZTogXCJTYWRcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBkZXNjcmlwdGlvbjogXCJBIHNhZCBjaXJjbGUuXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2kuaW1ndXIuY29tL1FrdzlOMEEuanBlZ1wiLFxuICAgICAgbmFtZTogXCJTYWQgQ2lyY2xlXCIsXG4gICAgfSxcbiAgICAyOiB7XG4gICAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0cmFpdF90eXBlOiBcIlNoYXBlXCIsXG4gICAgICAgICAgdmFsdWU6IFwiUmVjdGFuZ2xlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0cmFpdF90eXBlOiBcIk1vb2RcIixcbiAgICAgICAgICB2YWx1ZTogXCJBbmdyeVwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkFuIGFuZ3J5IHJlY3RhbmdsZS5cIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vU01uZU82ay5qcGVnXCIsXG4gICAgICBuYW1lOiBcIkFuZ3J5IFJlY3RhbmdsZVwiLFxuICAgIH0sXG4gICAgMzoge1xuICAgICAgYXR0cmlidXRlczogW1xuICAgICAgICB7XG4gICAgICAgICAgdHJhaXRfdHlwZTogXCJTaGFwZVwiLFxuICAgICAgICAgIHZhbHVlOiBcIlRyaWFuZ2xlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0cmFpdF90eXBlOiBcIk1vb2RcIixcbiAgICAgICAgICB2YWx1ZTogXCJCb3JlZFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkFuIGJvcmVkIHRyaWFuZ2xlLlwiLFxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9oTVZSRm9KLmpwZWdcIixcbiAgICAgIG5hbWU6IFwiQm9yZWQgVHJpYW5nbGVcIixcbiAgICB9LFxuICB9O1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG1ldGFkYXRhW3JlcS5xdWVyeS5pZF0gfHwge30pO1xuICB9Il0sIm5hbWVzIjpbIm1ldGFkYXRhIiwiYXR0cmlidXRlcyIsInRyYWl0X3R5cGUiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJuYW1lIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJxdWVyeSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/erc721/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/erc721/[id].js"));
module.exports = __webpack_exports__;

})();