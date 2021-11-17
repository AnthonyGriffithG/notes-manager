// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kS06O":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "51cf58d705cf099e";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"lA0Es":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _categoryViewJs = require("./Views/CategoryView.js");
var _categoryViewJsDefault = parcelHelpers.interopDefault(_categoryViewJs);
var _notesViewJs = require("./Views/notesView.js");
var _notesViewJsDefault = parcelHelpers.interopDefault(_notesViewJs);
var _searchViewJs = require("./Views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
const controlAddCategory = function(newCategory) {
    try {
        // 1) add new category
        _modelJs.addCategory(newCategory);
        // 2) render category
        _categoryViewJsDefault.default.render(_modelJs.state.currentCategory);
        // 3) render notes
        _notesViewJsDefault.default.renderCategory(_modelJs.state.currentCategory);
    } catch (err) {
        console.log("Ya existe esa categoria");
    }
};
const controlCategoryClick = function(categoryName) {
    // 1) search category
    _modelJs.changeCategory(categoryName);
    // 2) render it
    _notesViewJsDefault.default.renderCategory(_modelJs.state.currentCategory);
};
const controlAddNote = function(note) {
    // 1) add note to the current category
    _modelJs.addNote(note);
    // 2) render it
    const newNote = _modelJs.state.currentCategory.notes.slice(-1)[0];
    _notesViewJsDefault.default.renderNote(newNote);
};
const controlSearchNotes = function(query) {
    // 1) search for results
    _modelJs.searchNotes(query);
    // 2) render them
    _notesViewJsDefault.default.renderCategory(_modelJs.state.search);
};
const controlDeleteNote = function(noteID) {
    // 1) delete the note
    _modelJs.deleteNote(noteID);
};
const init = function() {
    _categoryViewJsDefault.default._data = _modelJs.state;
    _notesViewJsDefault.default._deleteHandler = controlDeleteNote;
    _categoryViewJsDefault.default.addHandlerCreateCategory(controlAddCategory);
    _categoryViewJsDefault.default.addRenderCategoryHandler(controlCategoryClick);
    _notesViewJsDefault.default.renderCategory(_modelJs.state.currentCategory);
    _notesViewJsDefault.default.addNewNoteHandler(controlAddNote);
    _searchViewJsDefault.default.addHandlerSearch(controlSearchNotes);
};
init();

},{"./model.js":"1pVJj","./Views/CategoryView.js":"3gmlb","./Views/notesView.js":"bav4e","./Views/searchView.js":"3hyvd","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1pVJj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "addCategory", ()=>addCategory
);
parcelHelpers.export(exports, "changeCategory", ()=>changeCategory
);
parcelHelpers.export(exports, "addNote", ()=>addNote
);
parcelHelpers.export(exports, "searchNotes", ()=>searchNotes
);
parcelHelpers.export(exports, "deleteNote", ()=>deleteNote
);
const state = {
    currentCategory: {
        name: "",
        notes: [],
        currentID: 1
    },
    categories: [
        {
            name: "Reminders",
            notes: [],
            currentID: 1
        },
        {
            name: "Notes",
            notes: [],
            currentID: 1
        }, 
    ],
    search: {
        query: "",
        notes: []
    }
};
const addCategory = function(name) {
    try {
        // 1) check if the category already exists
        const exists = categoryExist(name);
        if (exists) throw new Error("Categoria ya existente");
        // 2) create and add the category
        const newCategory = {
            name: name,
            notes: [],
            currentID: 0
        };
        state.categories.push(newCategory);
        // 3) set current category to the new one.
        state.currentCategory = newCategory;
        saveData();
    } catch (err) {
        throw err;
    }
};
const changeCategory = function(name) {
    const category1 = state.categories.find((category)=>category.name.toLowerCase() === name.toLowerCase()
    );
    state.currentCategory = category1;
};
const addNote = function(note) {
    const date = new Date(Date.now()).toDateString();
    const newNote = {
        note: note,
        date: date,
        id: state.currentCategory.currentID + 1
    };
    state.currentCategory.currentID += 1;
    state.currentCategory.notes.push(newNote);
    saveData();
};
const categoryExist = function(name) {
    return state.categories.some((category)=>category.name === name
    );
};
const saveData = function() {
    localStorage.setItem("state", JSON.stringify(state));
};
const getData = function() {
    const data = JSON.parse(localStorage.getItem("state"));
    if (!data) return;
    state.categories = data.categories;
    state.currentCategory = data.categories;
    state.search = data.search;
};
const searchNotes = function(query) {
    const notes = state.currentCategory.notes.filter((note)=>note.note.toLowerCase().includes(query.toLowerCase())
    );
    state.search.notes = notes;
};
const deleteNote = function(id) {
    for (let [index, note] of state.currentCategory.notes.entries())if (note.id === id) state.currentCategory.notes.splice(index, 1);
    saveData();
};
const init = function() {
    getData();
    state.currentCategory = state.categories[0];
};
init();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3gmlb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class CategoryView {
    _parentEl;
    _formAddCategory;
    _errorMessage = "The category could not be add because it exceeds the characters limit.";
    _data;
    _addCategoryBtn;
    constructor(){
        this._parentEl = document.querySelector(".category-list");
        this._formAddCategory = document.getElementById("new-category-form");
        this._addCategoryBtn = document.querySelector(".add-icon");
        this._addCategoryBtn.addEventListener("click", this._showForm.bind(this));
        this.getFormInput().addEventListener("blur", this._hideForm.bind(this));
    }
    getQuery() {
        const query = this._parentEl.querySelector(".new-category").value;
        return query;
    }
    getFormInput() {
        return this._parentEl.querySelector(".new-category");
    }
    addHandlerCreateCategory(handler) {
        if (!this._formAddCategory) return;
        this._formAddCategory.addEventListener("submit", (e)=>{
            e.preventDefault();
            const query = this.getQuery();
            this._parentEl.lastElementChild.classList.toggle("hidden");
            if (!query) return;
            this.getFormInput().value = "";
            handler(query);
        });
        this.renderSavedCategories();
    }
    addRenderCategoryHandler(handler1) {
        this._parentEl.addEventListener("click", (e)=>{
            const categoryBTN = e.target.closest(".category");
            if (!categoryBTN) return;
            this._parentEl.querySelector(".current").classList.remove("current");
            categoryBTN.classList.add("current");
            const categoryName = categoryBTN.textContent.trim();
            handler1(categoryName);
        });
    }
    render(data) {
        if (!data) return;
        this._data = data;
        const markup = this._generateCategoryMarkup(data.name);
        this._parentEl.querySelector(".current").classList.remove("current");
        this._parentEl.lastElementChild.insertAdjacentHTML("beforebegin", markup);
    }
    renderSavedCategories() {
        const categories = this._data.categories.slice(2);
        const markup = categories.map((category)=>{
            return this._generateCategoryMarkup(category.name, false);
        }).join("");
        this._parentEl.lastElementChild.insertAdjacentHTML("beforebegin", markup);
    }
    _generateCategoryMarkup(name, isCurrent = true) {
        return `
    <li class="category ${isCurrent ? "current" : ""}">
      <svg xmlns="http://www.w3.org/2000/svg" class="category-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
      <p>${name}</p>
    </li>
    `;
    }
    _showForm(e) {
        e.preventDefault();
        this._parentEl.lastElementChild.classList.remove("hidden");
        this.getFormInput().focus();
    }
    _hideForm(e1) {
        e1.preventDefault();
        this._parentEl.lastElementChild.classList.add("hidden");
        this.getFormInput().value = "";
    }
}
exports.default = new CategoryView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bav4e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class NotesView {
    _parentEl = document.getElementById("notes");
    _btnAddNote = this._parentEl.querySelector(".submit-note");
    _formTextarea = this._parentEl.querySelector("textarea");
    _noteForm = this._parentEl.querySelector(".new-note-form");
    _data;
    _deleteHandler;
    addNewNoteHandler(handler) {
        this._noteForm.addEventListener("submit", (e)=>{
            e.preventDefault();
            const text = this._formTextarea.value;
            handler(text);
        });
    }
    renderCategory(data) {
        this._data = data;
        this._parentEl.querySelectorAll(".note").forEach((e)=>e.remove()
        );
        data.notes.forEach((note)=>{
            const markup = `
      <div class="note" data-id="${note.id}">
        ${note.note}
        <footer class="note-footer">
          <p>${note.date}</p>
          <div class="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" class="delete-note-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
        </footer>
      </div>
      `;
            this._noteForm.insertAdjacentHTML("beforebegin", markup);
            const noteElement = this._noteForm.previousElementSibling;
            const btnNote = noteElement.querySelector(".delete-note-icon");
            btnNote.addEventListener("click", (event)=>{
                event.preventDefault();
                this._deleteHandler(note.id);
                noteElement.style.opacity = "0";
                setTimeout(function() {
                    noteElement.remove();
                }, 1000);
            });
        });
    }
    renderNote(note) {
        if (!note) return;
        const markup = `
    <div class="note" data-id="${note.id}">
        ${note.note}
        <footer class="note-footer">
          <p>${note.date}</p>
          <div class="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" class="delete-note-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
        </footer>
      </div>
    `;
        this._noteForm.insertAdjacentHTML("beforebegin", markup);
        const noteElement = this._noteForm.previousElementSibling;
        const btnNote = noteElement.querySelector(".delete-note-icon");
        btnNote.addEventListener("click", (event)=>{
            event.preventDefault();
            this._deleteHandler(note.id);
            noteElement.style.opacity = "0";
            setTimeout(function() {
                noteElement.remove();
            }, 1000);
        });
        this._formTextarea.value = "";
    }
    addHandlerDelete(handler1) {
        this._deleteHandler = handler1;
    }
    getTextAreaElement() {
        return this._parentEl.querySelector("textarea");
    }
}
exports.default = new NotesView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3hyvd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    parentEl = document.getElementById("search-bar");
    inputEl = this.parentEl.querySelector("#search");
    searchBTN = this.parentEl.querySelector(".search-icon");
    deleteQuery = this.parentEl.querySelector(".delete-search-icon");
    constructor(){
        this.deleteQuery.addEventListener("click", (event)=>{
            event.preventDefault();
            this.inputEl.value = "";
        });
    }
    getSearchText() {
        return this.inputEl.value;
    }
    addHandlerSearch(handler) {
        this.parentEl.addEventListener("submit", (event)=>{
            event.preventDefault();
            const query = this.getSearchText();
            handler(query);
        });
        this.searchBTN.addEventListener("click", (event)=>{
            event.preventDefault();
            const query = this.getSearchText();
            handler(query);
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["kS06O","lA0Es"], "lA0Es", "parcelRequirec2ef")

//# sourceMappingURL=index.05cf099e.js.map
