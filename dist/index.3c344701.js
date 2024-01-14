var e=globalThis,t={},n={},i=e.parcelRequire82ef;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire82ef=i);var r=i.register;r("6KOho",function(e,t){var n,i;n="undefined"!=typeof window?window:e.exports,i=function(e,t){var n,i=[],r=Object.getPrototypeOf,o=i.slice,s=i.flat?function(e){return i.flat.call(e)}:function(e){return i.concat.apply([],e)},a=i.push,l=i.indexOf,c={},u=c.toString,f=c.hasOwnProperty,d=f.toString,h=d.call(Object),p={},g=function(e){// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
// Plus for old WebKit, typeof returns "function" for HTML collections
// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},m=function(e){return null!=e&&e===e.window},v=e.document,y={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var i,r,o=(n=n||v).createElement("script");if(o.text=e,t)for(i in y)// Support: Firefox 64+, Edge 18+
// Some browsers don't support the "nonce" property on scripts.
// On the other hand, just using `getAttribute` is not enough as
// the `nonce` attribute is reset to an empty string whenever it
// becomes browsing-context connected.
// See https://github.com/whatwg/html/issues/2369
// See https://html.spec.whatwg.org/#nonce-attributes
// The `node.getAttribute` check was added for the sake of
// `jQuery.globalEval` so that it can fake a nonce-containing node
// via an object.
(r=t[i]||t.getAttribute&&t.getAttribute(i))&&o.setAttribute(i,r);n.head.appendChild(o).parentNode.removeChild(o)}function _(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[u.call(e)]||"object":typeof e}/* global Symbol */// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var w="3.7.1",x=/HTML$/i,E=function(e,t){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new E.fn.init(e,t)};function T(e){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=_(e);return!(g(e)||m(e))&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function C(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}E.fn=E.prototype={// The current version of jQuery being used
jquery:w,constructor:E,// The default length of a jQuery object is 0
length:0,toArray:function(){return o.call(this)},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){return(// Return all the elements in a clean array
null==e?o.call(this):e<0?this[e+this.length]:this[e])},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){// Build a new jQuery matched element set
var t=E.merge(this.constructor(),e);// Return the newly-formed element set
return(// Add the old object onto the stack (as a reference)
t.prevObject=this,t)},// Execute a callback for every element in the matched set.
each:function(e){return E.each(this,e)},map:function(e){return this.pushStack(E.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(E.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:a,sort:i.sort,splice:i.splice},E.extend=E.fn.extend=function(){var e,t,n,i,r,o,s=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,// Skip the boolean and the target
s=arguments[a]||{},a++),"object"==typeof s||g(s)||(s={}),a===l&&(s=this,a--);a<l;a++)// Only deal with non-null/undefined values
if(null!=(e=arguments[a]))for(t in e)i=e[t],"__proto__"!==t&&s!==i&&(c&&i&&(E.isPlainObject(i)||(r=Array.isArray(i)))?(n=s[t],o=r&&!Array.isArray(n)?[]:r||E.isPlainObject(n)?n:{},r=!1,// Never move original objects, clone them
s[t]=E.extend(c,o,i)):void 0!==i&&(s[t]=i));// Return the modified object
return s},E.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(w+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return(// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
!!e&&"[object Object]"===u.call(e)&&(!(t=r(e))||"function"==typeof// Objects with prototype are plain iff they were constructed by a global Object function
(n=f.call(t,"constructor")&&t.constructor)&&d.call(n)===h))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},// Evaluates a script in a provided context; falls back to the global one
// if not specified.
globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,i=0;if(T(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},// Retrieve the text value of an array of DOM nodes
text:function(e){var t,n="",i=0,r=e.nodeType;if(!r)for(;t=e[i++];)n+=E.text(t);return 1===r||11===r?e.textContent:9===r?e.documentElement.textContent:3===r||4===r?e.nodeValue:n},// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(T(Object(e))?E.merge(n,"string"==typeof e?[e]:e):a.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:l.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;// Assume HTML when documentElement doesn't yet exist, such as inside
// document fragments.
return!x.test(t||n&&n.nodeName||"HTML")},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;i++)e[r++]=t[i];return e.length=r,e},grep:function(e,t,n){// Go through the array, only saving the items
// that pass the validator function
for(var i=[],r=0,o=e.length,s=!n;r<o;r++)!t(e[r],r)!==s&&i.push(e[r]);return i},// arg is for internal usage only
map:function(e,t,n){var i,r,o=0,a=[];// Go through the array, translating each of the items to their new values
if(T(e))for(i=e.length;o<i;o++)null!=(r=t(e[o],o,n))&&a.push(r);else for(o in e)null!=(r=t(e[o],o,n))&&a.push(r);// Flatten any nested arrays
return s(a)},// A global GUID counter for objects
guid:1,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:p}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=i[Symbol.iterator]),// Populate the class2type map
E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});var S=i.pop,k=i.sort,D=i.splice,A="[\\x20\\t\\r\\n\\f]",N=RegExp("^"+A+"+|((?:^|[^\\\\])(?:\\\\.)*)"+A+"+$","g");// Note: an element does not contain itself
E.contains=function(e,t){var n=t&&t.parentNode;return e===n||!!(n&&1===n.nodeType&&// Support: IE 9 - 11+
// IE doesn't have `contains` on SVG.
(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var j=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function O(e,t){return t?// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\x00"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}E.escapeSelector=function(e){return(e+"").replace(j,O)},function(){var t,n,r,s,c,u,d,h,g,m,y=a,b=E.expando,_=0,w=0,x=ee(),T=ee(),j=ee(),O=ee(),L=function(e,t){return e===t&&(c=!0),0},I="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
P="(?:\\\\[\\da-fA-F]{1,6}"+A+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+",q="\\["+A+"*("+P+")(?:"+A+// Operator (capture 2)
"*([*^$|!~]?=)"+A+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+P+"))|)"+A+"*\\]",H=":("+P+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+q+")*)|.*)\\)|)",R=RegExp(A+"+","g"),F=RegExp("^"+A+"*,"+A+"*"),M=RegExp("^"+A+"*([>+~]|"+A+")"+A+"*"),W=RegExp(A+"|>"),B=new RegExp(H),U=RegExp("^"+P+"$"),Q={ID:RegExp("^#("+P+")"),CLASS:RegExp("^\\.("+P+")"),TAG:RegExp("^("+P+"|[*])"),ATTR:RegExp("^"+q),PSEUDO:RegExp("^"+H),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+A+"*(even|odd|(([+-]|)(\\d*)n|)"+A+"*(?:([+-]|)"+A+"*(\\d+)|))"+A+"*\\)|)","i"),bool:RegExp("^(?:"+I+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:RegExp("^"+A+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+A+"*((?:-\\d)?\\d*)"+A+"*\\)|)(?=[^-]|$)","i")},$=/^(?:input|select|textarea|button)$/i,z=/^h\d$/i,V=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,X=/[+~]/,// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
Y=RegExp("\\\\[\\da-fA-F]{1,6}"+A+"?|\\\\([^\\r\\n\\f])","g"),K=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},// Support: IE 9 - 11+, Edge 12 - 18+
// Removing the function wrapper causes a "Permission Denied"
// error in IE/Edge.
G=function(){es()},J=eu(function(e){return!0===e.disabled&&C(e,"fieldset")},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{y.apply(i=o.call(v.childNodes),v.childNodes),// Support: Android <=4.0
// Detect silently failing push.apply
// eslint-disable-next-line no-unused-expressions
i[v.childNodes.length].nodeType}catch(e){y={apply:function(e,t){a.apply(e,o.call(t))},call:function(e){a.apply(e,o.call(arguments,1))}}}function Z(e,t,n,i){var r,o,s,a,l,c,f,d=t&&t.ownerDocument,m=t?t.nodeType:9;// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==m&&9!==m&&11!==m)return n;// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!i&&(es(t),t=t||u,h)){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==m&&(l=V.exec(e))){// ID selector
if(r=l[1]){// Document context
if(9===m){if(!(s=t.getElementById(r)))return n;if(s.id===r)return y.call(n,s),n;// Element context
}else // getElementById can match elements by name instead of ID
if(d&&(s=d.getElementById(r))&&Z.contains(t,s)&&s.id===r)return y.call(n,s),n}else if(l[2])return y.apply(n,t.getElementsByTagName(e)),n;else if((r=l[3])&&t.getElementsByClassName)return y.apply(n,t.getElementsByClassName(r)),n}// Take advantage of querySelectorAll
if(!O[e+" "]&&(!g||!g.test(e))){// qSA considers elements outside a scoping root when evaluating child or
// descendant combinators, which is not what we want.
// In such cases, we work around the behavior by prefixing every selector in the
// list with an ID selector referencing the scope context.
// The technique has to be used as well when a leading combinator is used
// as such selectors are not recognized by querySelectorAll.
// Thanks to Andrew Dupont for this technique.
if(f=e,d=t,1===m&&(W.test(e)||M.test(e))){for(// Expand context for sibling selectors
(d=X.test(e)&&eo(t.parentNode)||t)==t&&p.scope||((a=t.getAttribute("id"))?a=E.escapeSelector(a):t.setAttribute("id",a=b)),o=// Prefix every selector in the list
(c=el(e)).length;o--;)c[o]=(a?"#"+a:":scope")+" "+ec(c[o]);f=c.join(",")}try{return y.apply(n,d.querySelectorAll(f)),n}catch(t){O(e,!0)}finally{a===b&&t.removeAttribute("id")}}}// All others
return ep(e.replace(N,"$1"),t,n,i)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function ee(){var e=[];function t(i,r){return e.push(i+" ")>n.cacheLength&&delete t[e.shift()],t[i+" "]=r}return t}/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */function et(e){return e[b]=!0,e}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function en(e){var t=u.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),// release memory in IE
t=null}}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function ei(e){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(t){// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
if("form"in t)return(// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
t.parentNode&&!1===t.disabled?// Option elements defer to a parent optgroup if present
"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||// Where there is no isDisabled, check manually
!e!==t.isDisabled&&J(t)===e:t.disabled===e);return"label"in t&&t.disabled===e}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function er(e){return et(function(t){return t=+t,et(function(n,i){// Match elements found at the specified indexes
for(var r,o=e([],n.length,t),s=o.length;s--;)n[r=o[s]]&&(n[r]=!(i[r]=n[r]))})})}/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function eo(e){return e&&void 0!==e.getElementsByTagName&&e}/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */function es(e){var t,i=e?e.ownerDocument||e:v;return i!=u&&9===i.nodeType&&i.documentElement&&(d=// Update global variables
(u=i).documentElement,h=!E.isXMLDoc(u),// Support: iOS 7 only, IE 9 - 11+
// Older browsers didn't support unprefixed `matches`.
m=d.matches||d.webkitMatchesSelector||d.msMatchesSelector,d.msMatchesSelector&&// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
v!=u&&(t=u.defaultView)&&t.top!==t&&t.addEventListener("unload",G),// Support: IE <10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
p.getById=en(function(e){return d.appendChild(e).id=E.expando,!u.getElementsByName||!u.getElementsByName(E.expando).length}),// Support: IE 9 only
// Check to see if it's possible to do matchesSelector
// on a disconnected node.
p.disconnectedMatch=en(function(e){return m.call(e,"*")}),// Support: IE 9 - 11+, Edge 12 - 18+
// IE/Edge don't support the :scope pseudo-class.
p.scope=en(function(){return u.querySelectorAll(":scope")}),// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
// Make sure the `:has()` argument is parsed unforgivingly.
// We include `*` in the test to detect buggy implementations that are
// _selectively_ forgiving (specifically when the list includes at least
// one valid selector).
// Note that we treat complete lack of support for `:has()` as if it were
// spec-compliant support, which is fine because use of `:has()` in such
// environments will fail in the qSA path and fall back to jQuery traversal
// anyway.
p.cssHas=en(function(){try{return u.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),p.getById?(n.filter.ID=function(e){var t=e.replace(Y,K);return function(e){return e.getAttribute("id")===t}},n.find.ID=function(e,t){if(void 0!==t.getElementById&&h){var n=t.getElementById(e);return n?[n]:[]}}):(n.filter.ID=function(e){var t=e.replace(Y,K);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
n.find.ID=function(e,t){if(void 0!==t.getElementById&&h){var n,i,r,o=t.getElementById(e);if(o){if(// Verify the id attribute
(n=o.getAttributeNode("id"))&&n.value===e)return[o];for(// Fall back on getElementsByName
r=t.getElementsByName(e),i=0;o=r[i++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),// Tag
n.find.TAG=function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},// Class
n.find.CLASS=function(e,t){if(void 0!==t.getElementsByClassName&&h)return t.getElementsByClassName(e)},/* QSA/matchesSelector
	---------------------------------------------------------------------- */// QSA and matchesSelector support
g=[],// Build QSA regex
// Regex strategy adopted from Diego Perini
en(function(e){var t;d.appendChild(e).innerHTML="<a id='"+b+"' href='' disabled='disabled'></a><select id='"+b+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+A+"*(?:value|"+I+")"),e.querySelectorAll("[id~="+b+"-]").length||g.push("~="),e.querySelectorAll("a#"+b+"+*").length||g.push(".#.+[+~]"),e.querySelectorAll(":checked").length||g.push(":checked"),// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
(t=u.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),// Support: IE 9 - 11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
// In some of the document kinds, these selectors wouldn't work natively.
// This is probably OK but for backwards compatibility we want to maintain
// handling them through jQuery traversal in jQuery 3.x.
d.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),// Support: IE 11+, Edge 15 - 18+
// IE 11/Edge don't find elements on a `[name='']` query in some cases.
// Adding a temporary attribute to the document before the selection works
// around the issue.
// Interestingly, IE 10 & older don't seem to have the issue.
(t=u.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||g.push("\\["+A+"*name"+A+"*="+A+"*(?:''|\"\")")}),p.cssHas||// Our regular `try-catch` mechanism fails to detect natively-unsupported
// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
// in browsers that parse the `:has()` argument as a forgiving selector list.
// https://drafts.csswg.org/selectors/#relational now requires the argument
// to be parsed unforgivingly, but browsers have not yet fully adjusted.
g.push(":has"),g=g.length&&new RegExp(g.join("|")),/* Sorting
	---------------------------------------------------------------------- */// Document order sorting
L=function(e,t){// Flag for duplicate removal
if(e===t)return c=!0,0;// Sort on method existence if only one input has compareDocumentPosition
var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&// Calculate position if both inputs belong to the same document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!p.sortDetached&&t.compareDocumentPosition(e)===n?// Choose the first element that is related to our preferred document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
e===u||e.ownerDocument==v&&Z.contains(v,e)?-1:t===u||t.ownerDocument==v&&Z.contains(v,t)?1:s?l.call(s,e)-l.call(s,t):0:4&n?-1:1)}),u}// Add button/input type pseudos
for(t in Z.matches=function(e,t){return Z(e,null,null,t)},Z.matchesSelector=function(e,t){if(es(e),h&&!O[t+" "]&&(!g||!g.test(t)))try{var n=m.call(e,t);// IE 9's matchesSelector returns false on disconnected nodes
if(n||p.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return n}catch(e){O(t,!0)}return Z(t,u,null,[e]).length>0},Z.contains=function(e,t){return(e.ownerDocument||e)!=u&&es(e),E.contains(e,t)},Z.attr=function(e,t){// Set document vars if needed
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(e.ownerDocument||e)!=u&&es(e);var i=n.attrHandle[t.toLowerCase()],r=i&&f.call(n.attrHandle,t.toLowerCase())?i(e,t,!h):void 0;return void 0!==r?r:e.getAttribute(t)},Z.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */E.uniqueSort=function(e){var t,n=[],i=0,r=0;if(// Unless we *know* we can detect duplicates, assume their presence
//
// Support: Android <=4.0+
// Testing for detecting duplicates is unpredictable so instead assume we can't
// depend on duplicate detection in all browsers without a stable sort.
c=!p.sortStable,s=!p.sortStable&&o.call(e,0),k.call(e,L),c){for(;t=e[r++];)t===e[r]&&(i=n.push(r));for(;i--;)D.call(e,n[i],1)}return(// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
s=null,e)},E.fn.uniqueSort=function(){return this.pushStack(E.uniqueSort(o.apply(this)))},(n=E.expr={// Can be adjusted by the user
cacheLength:50,createPseudo:et,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Y,K),// Move the given value to match[3] whether quoted or unquoted
e[3]=(e[3]||e[4]||e[5]||"").replace(Y,K),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return(/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||Z.error(e[0]),// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&Z.error(e[0]),e)},PSEUDO:function(e){var t,n=!e[6]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&B.test(n)&&// Get excess from tokenize (recursively)
(t=el(n,!0))&&// advance to the next closing parenthesis
(t=n.indexOf(")",n.length-t)-n.length)&&(// excess is a negative index
e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Y,K).toLowerCase();return"*"===e?function(){return!0}:function(e){return C(e,t)}},CLASS:function(e){var t=x[e+" "];return t||(t=RegExp("(^|"+A+")"+e+"("+A+"|$)"),x(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(i){var r=Z.attr(i,e);return null==r?"!="===t:!t||((r+="","="===t)?r===n:"!="===t?r!==n:"^="===t?n&&0===r.indexOf(n):"*="===t?n&&r.indexOf(n)>-1:"$="===t?n&&r.slice(-n.length)===n:"~="===t?(" "+r.replace(R," ")+" ").indexOf(n)>-1:"|="===t&&(r===n||r.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,i,r){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,l){var c,u,f,d,h,p=o!==s?"nextSibling":"previousSibling",g=t.parentNode,m=a&&t.nodeName.toLowerCase(),v=!l&&!a,y=!1;if(g){// :(first|last|only)-(child|of-type)
if(o){for(;p;){for(f=t;f=f[p];)if(a?C(f,m):1===f.nodeType)return!1;// Reverse direction for :only-* (if we haven't yet done so)
h=p="only"===e&&!h&&"nextSibling"}return!0}// non-xml :nth-child(...) stores cache data on `parent`
if(h=[s?g.firstChild:g.lastChild],s&&v){for(y=(d=(c=// Seek `elem` from a previously-cached index
(u=g[b]||(g[b]={}))[e]||[])[0]===_&&c[1])&&c[2],f=d&&g.childNodes[d];f=++d&&f&&f[p]||// Fallback to seeking `elem` from the start
(y=d=0)||h.pop();)if(1===f.nodeType&&++y&&f===t){u[e]=[_,d,y];break}}else // xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(v&&(y=d=(c=(u=t[b]||(t[b]={}))[e]||[])[0]===_&&c[1]),!1===y)// Use the same loop as above to seek `elem` from the start
for(;(f=++d&&f&&f[p]||(y=d=0)||h.pop())&&(!((a?C(f,m):1===f.nodeType)&&++y)||(v&&((u=f[b]||(f[b]={}))[e]=[_,y]),f!==t)););return(// Incorporate the offset, then check against cycle size
(y-=r)===i||y%i==0&&y/i>=0)}}},PSEUDO:function(e,t){// pseudo-class names are case-insensitive
// https://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var i,r=n.pseudos[e]||n.setFilters[e.toLowerCase()]||Z.error("unsupported pseudo: "+e);return(// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as jQuery does
r[b]?r(t):r.length>1?(i=[e,e,"",t],n.setFilters.hasOwnProperty(e.toLowerCase())?et(function(e,n){for(var i,o=r(e,t),s=o.length;s--;)i=l.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,i)}):r)}},pseudos:{// Potentially complex pseudos
not:et(function(e){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var t=[],n=[],i=eh(e.replace(N,"$1"));return i[b]?et(function(e,t,n,r){// Match elements unmatched by `matcher`
for(var o,s=i(e,null,r,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),// Don't keep the element
// (see https://github.com/jquery/sizzle/issues/299)
t[0]=null,!n.pop()}}),has:et(function(e){return function(t){return Z(e,t).length>0}}),contains:et(function(e){return e=e.replace(Y,K),function(t){return(t.textContent||E.text(t)).indexOf(e)>-1}}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// https://www.w3.org/TR/selectors/#lang-pseudo
lang:et(function(e){return U.test(e||"")||Z.error("unsupported lang: "+e),e=e.replace(Y,K).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType)return!1}}),// Miscellaneous
target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function(){try{return u.activeElement}catch(e){}}()&&u.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},// Boolean properties
enabled:ei(!1),disabled:ei(!0),checked:function(e){// In CSS3, :checked should return both checked and selected elements
// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
return C(e,"input")&&!!e.checked||C(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},// Contents
empty:function(e){// https://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!n.pseudos.empty(e)},// Element/input types
header:function(e){return z.test(e.nodeName)},input:function(e){return $.test(e.nodeName)},button:function(e){return C(e,"input")&&"button"===e.type||C(e,"button")},text:function(e){var t;return C(e,"input")&&"text"===e.type&&// Support: IE <10 only
// New HTML5 attribute values (e.g., "search") appear
// with elem.type === "text"
(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},// Position-in-collection
first:er(function(){return[0]}),last:er(function(e,t){return[t-1]}),eq:er(function(e,t,n){return[n<0?n+t:n]}),even:er(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:er(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:er(function(e,t,n){var i;for(i=n<0?n+t:n>t?t:n;--i>=0;)e.push(i);return e}),gt:er(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})}}).pseudos.nth=n.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})n.pseudos[t]=/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function(e){return function(t){return C(t,"input")&&t.type===e}}(t);for(t in{submit:!0,reset:!0})n.pseudos[t]=/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function(e){return function(t){return(C(t,"input")||C(t,"button"))&&t.type===e}}(t);// Easy API for creating new setFilters
function ea(){}function el(e,t){var i,r,o,s,a,l,c,u=T[e+" "];if(u)return t?0:u.slice(0);for(a=e,l=[],c=n.preFilter;a;){// Filters
for(s in(!i||(r=F.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),l.push(o=[])),i=!1,(r=M.exec(a))&&(i=r.shift(),o.push({value:i,// Cast descendant combinators to space
type:r[0].replace(N," ")}),a=a.slice(i.length)),n.filter)(r=Q[s].exec(a))&&(!c[s]||(r=c[s](r)))&&(i=r.shift(),o.push({value:i,type:s,matches:r}),a=a.slice(i.length));if(!i)break}return(// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
t?a.length:a?Z.error(e):T(e,l).slice(0))}function ec(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function eu(e,t,n){var i=t.dir,r=t.next,o=r||i,s=n&&"parentNode"===o,a=w++;return t.first?function(t,n,r){for(;t=t[i];)if(1===t.nodeType||s)return e(t,n,r);return!1}:function(t,n,l){var c,u,f=[_,a];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(l){for(;t=t[i];)if((1===t.nodeType||s)&&e(t,n,l))return!0}else for(;t=t[i];)if(1===t.nodeType||s){if(u=t[b]||(t[b]={}),r&&C(t,r))t=t[i]||t;else{if((c=u[o])&&c[0]===_&&c[1]===a)return f[2]=c[2];// A match means we're done; a fail means we have to keep checking
if(// Reuse newcache so results back-propagate to previous elements
u[o]=f,f[2]=e(t,n,l))return!0}}return!1}}function ef(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function ed(e,t,n,i,r){for(var o,s=[],a=0,l=e.length,c=null!=t;a<l;a++)(o=e[a])&&(!n||n(o,i,r))&&(s.push(o),c&&t.push(a));return s}function eh(e,t/* Internal Use Only */){var i,o,s,a,c=[],f=[],d=j[e+" "];if(!d){for(t||(t=el(e)),a=t.length;a--;)(d=function e(t){for(var i,o,s,a=t.length,c=n.relative[t[0].type],u=c||n.relative[" "],f=c?1:0,d=eu(function(e){return e===i},u,!0),h=eu(function(e){return l.call(i,e)>-1},u,!0),p=[function(e,t,n){// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
var o=!c&&(n||t!=r)||((i=t).nodeType?d(e,t,n):h(e,t,n));return(// Avoid hanging onto element
// (see https://github.com/jquery/sizzle/issues/299)
i=null,o)}];f<a;f++)if(o=n.relative[t[f].type])p=[eu(ef(p),o)];else{// Return special upon seeing a positional matcher
if((o=n.filter[t[f].type].apply(null,t[f].matches))[b]){for(// Find the next relative operator (if any) for proper handling
s=++f;s<a&&!n.relative[t[s].type];s++);return function e(t,n,i,r,o,s){return r&&!r[b]&&(r=e(r)),o&&!o[b]&&(o=e(o,s)),et(function(e,s,a,c){var u,f,d,h,p=[],g=[],m=s.length,v=e||function(e,t,n){for(var i=0,r=t.length;i<r;i++)Z(e,t[i],n);return n}(n||"*",a.nodeType?[a]:a,[]),b=t&&(e||!n)?ed(v,p,t,a,c):v;// Apply postFilter
if(i?// Find primary matches
i(b,// If we have a postFinder, or filtered seed, or non-seed postFilter
// or preexisting results,
h=o||(e?t:m||r)?[]:s,a,c):h=b,r)for(u=ed(h,g),r(u,[],a,c),// Un-match failing elements by moving them back to matcherIn
f=u.length;f--;)(d=u[f])&&(h[g[f]]=!(b[g[f]]=d));if(e){if(o||t){if(o){for(// Get the final matcherOut by condensing this intermediate into postFinder contexts
u=[],f=h.length;f--;)(d=h[f])&&u.push(b[f]=d);o(null,h=[],u,c)}for(// Move matched elements from seed to results to keep them synchronized
f=h.length;f--;)(d=h[f])&&(u=o?l.call(e,d):p[f])>-1&&(e[u]=!(s[u]=d))}}else h=ed(h===s?h.splice(m,h.length):h),o?o(null,s,h,c):y.apply(s,h)})}(f>1&&ef(p),f>1&&ec(t.slice(0,f-1).concat({value:" "===t[f-2].type?"*":""})).replace(N,"$1"),o,f<s&&e(t.slice(f,s)),s<a&&e(t=t.slice(s)),s<a&&ec(t))}p.push(o)}return ef(p)}(t[a]))[b]?c.push(d):f.push(d);// Save selector and tokenization
// Cache the compiled function
(d=j(e,(i=c.length>0,o=f.length>0,s=function(e,t,s,a,l){var d,p,g,m=0,v="0",b=e&&[],w=[],x=r,T=e||o&&n.find.TAG("*",l),C=_+=null==x?1:Math.random()||.1,k=T.length;// Add elements passing elementMatchers directly to results
// Support: iOS <=7 - 9 only
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
// elements by id. (see trac-14142)
for(l&&// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(r=t==u||t||l);v!==k&&null!=(d=T[v]);v++){if(o&&d){for(p=0,t||d.ownerDocument==u||(es(d),s=!h);g=f[p++];)if(g(d,t||u,s)){y.call(a,d);break}l&&(_=C)}// Track unmatched elements for set filters
i&&((d=!g&&d)&&m--,e&&b.push(d))}// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
m+=v,i&&v!==m){for(p=0;g=c[p++];)g(b,w,t,s);if(e){// Reintegrate element matches to eliminate the need for sorting
if(m>0)for(;v--;)b[v]||w[v]||(w[v]=S.call(a));// Discard index placeholder values to get only actual matches
w=ed(w)}// Add matches to results
y.apply(a,w),l&&!e&&w.length>0&&m+c.length>1&&E.uniqueSort(a)}return l&&(_=C,r=x),b},i?et(s):s))).selector=e}return d}/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */function ep(e,t,i,r){var o,s,a,l,c,u="function"==typeof e&&e,f=!r&&el(e=u.selector||e);// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(i=i||[],1===f.length){if(// Reduce context if the leading compound selector is an ID
(s=f[0]=f[0].slice(0)).length>2&&"ID"===(a=s[0]).type&&9===t.nodeType&&h&&n.relative[s[1].type]){if(!(t=(n.find.ID(a.matches[0].replace(Y,K),t)||[])[0]))return i;u&&(t=t.parentNode),e=e.slice(s.shift().value.length)}for(// Fetch a seed set for right-to-left matching
o=Q.needsContext.test(e)?0:s.length;// Abort if we hit a combinator
o--&&(a=s[o],!n.relative[l=a.type]);)if((c=n.find[l])&&(r=c(a.matches[0].replace(Y,K),X.test(s[0].type)&&eo(t.parentNode)||t))){if(// If seed is empty or no tokens remain, we can return early
s.splice(o,1),!(e=r.length&&ec(s)))return y.apply(i,r),i;break}}return(// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(u||eh(e,f))(r,t,!h,i,!t||X.test(e)&&eo(t.parentNode)||t),i)}ea.prototype=n.filters=n.pseudos,n.setFilters=new ea,// One-time assignments
// Support: Android <=4.0 - 4.1+
// Sort stability
p.sortStable=b.split("").sort(L).join("")===b,// Initialize against the default document
es(),// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
p.sortDetached=en(function(e){// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(u.createElement("fieldset"))}),E.find=Z,// Deprecated
E.expr[":"]=E.expr.pseudos,E.unique=E.uniqueSort,// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
Z.compile=eh,Z.select=ep,Z.setDocument=es,Z.tokenize=el,Z.escape=E.escapeSelector,Z.getText=E.text,Z.isXML=E.isXMLDoc,Z.selectors=E.expr,Z.support=E.support,Z.uniqueSort=E.uniqueSort;/* eslint-enable */}();var L=function(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&E(e).is(n))break;i.push(e)}return i},I=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},P=E.expr.match.needsContext,q=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;// Implement the identical functionality for filter and not
function H(e,t,n){return g(t)?E.grep(e,function(e,i){return!!t.call(e,i,e)!==n}):t.nodeType?E.grep(e,function(e){return e===t!==n}):"string"!=typeof t?E.grep(e,function(e){return l.call(t,e)>-1!==n}):E.filter(t,e,n)}E.filter=function(e,t,n){var i=t[0];return(n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType)?E.find.matchesSelector(i,e)?[i]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,i=this.length,r=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<i;t++)if(E.contains(r[t],this))return!0}));for(t=0,n=this.pushStack([]);t<i;t++)E.find(e,r[t],n);return i>1?E.uniqueSort(n):n},filter:function(e){return this.pushStack(H(this,e||[],!1))},not:function(e){return this.pushStack(H(this,e||[],!0))},is:function(e){return!!H(this,// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof e&&P.test(e)?E(e):e||[],!1).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var R,// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
// Strict HTML recognition (trac-11290: must start with <)
// Shortcut simple #id case for speed
F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;// Give the init function the jQuery prototype for later instantiation
(E.fn.init=function(e,t,n){var i,r;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;// Handle HTML strings
if(// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
n=n||R,"string"==typeof e){// Match html or make sure no context is specified for #id
if((i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:F.exec(e))&&(i[1]||!t)){// HANDLE: $(html) -> $(array)
if(!i[1])return(r=v.getElementById(i[2]))&&(// Inject the element directly into the jQuery object
this[0]=r,this.length=1),this;// HANDLE: $(html, props)
if(t=t instanceof E?t[0]:t,// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
E.merge(this,E.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:v,!0)),q.test(i[1])&&E.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);// HANDLE: $(DOMElement)
}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,// Initialize central reference
R=E(v);var M=/^(?:parents|prev(?:Until|All))/,W={children:!0,contents:!0,next:!0,prev:!0};function B(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,i=0,r=this.length,o=[],s="string"!=typeof e&&E(e);// Positional selectors never match, since there's no _selection_ context
if(!P.test(e)){for(;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}}return this.pushStack(o.length>1?E.uniqueSort(o):o)},// Determine the position of an element within the set
index:function(e){return(// No argument, return index in parent
e?"string"==typeof e?l.call(E(e),this[0]):l.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1)},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return L(e,"parentNode")},parentsUntil:function(e,t,n){return L(e,"parentNode",n)},next:function(e){return B(e,"nextSibling")},prev:function(e){return B(e,"previousSibling")},nextAll:function(e){return L(e,"nextSibling")},prevAll:function(e){return L(e,"previousSibling")},nextUntil:function(e,t,n){return L(e,"nextSibling",n)},prevUntil:function(e,t,n){return L(e,"previousSibling",n)},siblings:function(e){return I((e.parentNode||{}).firstChild,e)},children:function(e){return I(e.firstChild)},contents:function(e){return null!=e.contentDocument&&// Support: IE 11+
// <object> elements with no `data` attribute has an object
// `contentDocument` with a `null` prototype.
r(e.contentDocument)?e.contentDocument:(C(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(e,t){E.fn[e]=function(n,i){var r=E.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=E.filter(i,r)),this.length>1&&(W[e]||E.uniqueSort(r),M.test(e)&&r.reverse()),this.pushStack(r)}});var U=/[^\x20\t\r\n\f]+/g;function Q(e){return e}function $(e){throw e}function z(e,t,n,i){var r;try{// Check for promise aspect first to privilege synchronous behavior
e&&g(r=e.promise)?r.call(e).done(t).fail(n):e&&g(r=e.then)?r.call(e,t,n):// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
t.apply(void 0,[e].slice(i));// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(e){// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
n.apply(void 0,[e])}}/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */E.Callbacks=function(e){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
e="string"==typeof e?(t=e,n={},E.each(t.match(U)||[],function(e,t){n[t]=!0}),n):E.extend({},e);var t,n,i,r,o,s,a=[],l=[],c=-1,u=function(){for(// Enforce single-firing
s=s||e.once,// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
o=i=!0;l.length;c=-1)for(r=l.shift();++c<a.length;)!1===a[c].apply(r[0],r[1])&&e.stopOnFalse&&(// Jump to end and forget the data so .add doesn't re-fire
c=a.length,r=!1);e.memory||(r=!1),i=!1,s&&(a=r?[]:"")},f={// Add a callback or a collection of callbacks to the list
add:function(){return a&&(r&&!i&&(c=a.length-1,l.push(r)),function t(n){E.each(n,function(n,i){g(i)?e.unique&&f.has(i)||a.push(i):i&&i.length&&"string"!==_(i)&&t(i)})}(arguments),r&&!i&&u()),this},// Remove a callback from the list
remove:function(){return E.each(arguments,function(e,t){for(var n;(n=E.inArray(t,a,n))>-1;)a.splice(n,1),n<=c&&c--}),this},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?E.inArray(e,a)>-1:a.length>0},// Remove all callbacks from the list
empty:function(){return a&&(a=[]),this},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return s=l=[],a=r="",this},disabled:function(){return!a},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return s=l=[],r||i||(a=r=""),this},locked:function(){return!!s},// Call all callbacks with the given context and arguments
fireWith:function(e,t){return s||(t=[e,(t=t||[]).slice?t.slice():t],l.push(t),i||u()),this},// Call all the callbacks with the given arguments
fire:function(){return f.fireWith(this,arguments),this},// To know if the callbacks have already been called at least once
fired:function(){return!!o}};return f},E.extend({Deferred:function(t){var n=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",r={state:function(){return i},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return r.then(null,e)},// Keep pipe for back-compat
pipe:function(){var e=arguments;return E.Deferred(function(t){E.each(n,function(n,i){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var r=g(e[i[4]])&&e[i[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
o[i[1]](function(){var e=r&&r.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[i[0]+"With"](this,r?[e]:arguments)})}),e=null}).promise()},then:function(t,i,r){var o=0;function s(t,n,i,r){return function(){var a=this,l=arguments,c=function(){var e,c;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(t<o)){// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((e=i.apply(a,l))===n.promise())throw TypeError("Thenable self-resolution");// Handle a returned thenable
g(// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
c=e&&// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
("object"==typeof e||"function"==typeof e)&&e.then)?r?c.call(e,s(o,n,Q,r),s(o,n,$,r)):(// ...and disregard older resolution values
o++,c.call(e,s(o,n,Q,r),s(o,n,$,r),s(o,n,Q,n.notifyWith))):(i!==Q&&(a=void 0,l=[e]),// Process the value(s)
// Default process is resolve
(r||n.resolveWith)(a,l))}},u=r?c:function(){try{c()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,u.error),t+1>=o&&(i!==$&&(a=void 0,l=[e]),n.rejectWith(a,l))}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
t?u():(E.Deferred.getErrorHook?u.error=E.Deferred.getErrorHook():E.Deferred.getStackHook&&(u.error=E.Deferred.getStackHook()),e.setTimeout(u))}}return E.Deferred(function(e){// progress_handlers.add( ... )
n[0][3].add(s(0,e,g(r)?r:Q,e.notifyWith)),// fulfilled_handlers.add( ... )
n[1][3].add(s(0,e,g(t)?t:Q)),// rejected_handlers.add( ... )
n[2][3].add(s(0,e,g(i)?i:$))}).promise()},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?E.extend(e,r):r}},o={};// All done!
return(// Add list-specific methods
E.each(n,function(e,t){var s=t[2],a=t[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
r[t[1]]=s.add,a&&s.add(function(){// state = "resolved" (i.e., fulfilled)
// state = "rejected"
i=a},// fulfilled_callbacks.disable
n[3-e][2].disable,// fulfilled_handlers.disable
n[3-e][3].disable,n[0][2].lock,n[0][3].lock),// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
s.add(t[3].fire),// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
o[t[0]+"With"]=s.fireWith}),// Make the deferred a promise
r.promise(o),t&&t.call(o,o),o)},// Deferred helper
when:function(e){var t=arguments.length,n=t,i=Array(n),r=o.call(arguments),s=E.Deferred(),a=function(e){return function(n){i[e]=this,r[e]=arguments.length>1?o.call(arguments):n,--t||s.resolveWith(i,r)}};// Single- and empty arguments are adopted like Promise.resolve
if(t<=1&&(z(e,s.done(a(n)).resolve,s.reject,!t),"pending"===s.state()||g(r[n]&&r[n].then)))return s.then();// Multiple arguments are aggregated like Promise.all array elements
for(;n--;)z(r[n],a(n),s.reject);return s.promise()}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var V=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
E.Deferred.exceptionHook=function(t,n){// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
e.console&&e.console.warn&&t&&V.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},E.readyException=function(t){e.setTimeout(function(){throw t})};// The deferred used on DOM ready
var X=E.Deferred();// The ready event handler and self cleanup method
function Y(){v.removeEventListener("DOMContentLoaded",Y),e.removeEventListener("load",Y),E.ready()}E.fn.ready=function(e){return X.then(e)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(e){E.readyException(e)}),this},E.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,// A counter to track how many items to wait for before
// the ready event fires. See trac-6781
readyWait:1,// Handle when the DOM is ready
ready:function(e){// Abort if there are pending holds or we're already ready
!(!0===e?--E.readyWait:E.isReady)&&(// Remember that the DOM is ready
E.isReady=!0,!0!==e&&--E.readyWait>0||// If there are functions bound, to execute
X.resolveWith(v,[E]))}}),E.ready.then=X.then,"complete"!==v.readyState&&("loading"===v.readyState||v.documentElement.doScroll)?(// Use the handy event callback
v.addEventListener("DOMContentLoaded",Y),// A fallback to window.onload, that will always work
e.addEventListener("load",Y)):e.setTimeout(E.ready);// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var K=function(e,t,n,i,r,o,s){var a=0,l=e.length,c=null==n;// Sets many values
if("object"===_(n))for(a in r=!0,n)K(e,t,a,n[a],!0,o,s);else if(void 0!==i&&(r=!0,g(i)||(s=!0),c&&(s?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(E(e),n)})),t))for(;a<l;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return r?e:c?t.call(e):l?t(e[0],n):o},G=/^-ms-/,J=/-([a-z])/g;// Used by camelCase as callback to replace()
function Z(e,t){return t.toUpperCase()}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function ee(e){return e.replace(G,"ms-").replace(J,Z)}var et=function(e){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function en(){this.expando=E.expando+en.uid++}en.uid=1,en.prototype={cache:function(e){// Check if the owner object already has a cache
var t=e[this.expando];return!t&&(t={},et(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,r=this.cache(e);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)r[ee(t)]=n;else for(i in t)r[ee(i)]=t[i];return r},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][ee(t)]},access:function(e,t,n){return(// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(e,t,n),void 0!==n?n:t))},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t)for(n=(// We always set camelCase keys, so remove that.
t=Array.isArray(t)?t.map(ee):((t=ee(t))in i)?[t]:t.match(U)||[]).length;n--;)delete i[t[n]];// Remove the expando if there's no more data
(void 0===t||E.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var ei=new en,er=new en,eo=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,es=/[A-Z]/g;function ea(e,t,n){var i,r;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType){if(i="data-"+t.replace(es,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{r=n,n="true"===r||"false"!==r&&("null"===r?null:r===+r+""?+r:eo.test(r)?JSON.parse(r):r)}catch(e){}// Make sure we set the data so it isn't changed later
er.set(e,t,n)}else n=void 0}return n}E.extend({hasData:function(e){return er.hasData(e)||ei.hasData(e)},data:function(e,t,n){return er.access(e,t,n)},removeData:function(e,t){er.remove(e,t)},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return ei.access(e,t,n)},_removeData:function(e,t){ei.remove(e,t)}}),E.fn.extend({data:function(e,t){var n,i,r,o=this[0],s=o&&o.attributes;// Gets all values
if(void 0===e){if(this.length&&(r=er.get(o),1===o.nodeType&&!ei.get(o,"hasDataAttrs"))){for(n=s.length;n--;)// The attrs elements can be null (trac-14894)
s[n]&&0===(i=s[n].name).indexOf("data-")&&ea(o,i=ee(i.slice(5)),r[i]);ei.set(o,"hasDataAttrs",!0)}return r}return(// Sets multiple values
"object"==typeof e?this.each(function(){er.set(this,e)}):K(this,function(t){var n;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(o&&void 0===t)return void 0!==// Attempt to get data from the cache
// The key will always be camelCased in Data
(n=er.get(o,e))||void 0!==// Attempt to "discover" the data in
// HTML5 custom data-* attrs
(n=ea(o,e))?n:// We tried really hard, but the data doesn't exist.
void 0;// Set the data...
this.each(function(){// We always store the camelCased key
er.set(this,e,t)})},null,t,arguments.length>1,null,!0))},removeData:function(e){return this.each(function(){er.remove(this,e)})}}),E.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=ei.get(e,t),n&&(!i||Array.isArray(n)?i=ei.access(e,t,E.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),i=n.length,r=n.shift(),o=E._queueHooks(e,t);"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),// Clear up the last queue stop function
delete o.stop,r.call(e,function(){E.dequeue(e,t)},o)),!i&&o&&o.empty.fire()},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return ei.get(e,n)||ei.access(e,n,{empty:E.Callbacks("once memory").add(function(){ei.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(e,t){var n=2;return("string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n)?E.queue(this[0],e):void 0===t?this:this.each(function(){var n=E.queue(this,e,t);// Ensure a hooks for this queue
E._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&E.dequeue(this,e)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,i=1,r=E.Deferred(),o=this,s=this.length,a=function(){--i||r.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=ei.get(o[s],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),r.promise(t)}});var el=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ec=RegExp("^(?:([+-])=|)("+el+")([a-z%]*)$","i"),eu=["Top","Right","Bottom","Left"],ef=v.documentElement,ed=function(e){return E.contains(e.ownerDocument,e)},eh={composed:!0};ef.getRootNode&&(ed=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(eh)===e.ownerDocument});var ep=function(e,t){// Inline style trumps all
return"none"===// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
(e=t||e).style.display||""===e.style.display&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
ed(e)&&"none"===E.css(e,"display")};function eg(e,t,n,i){var r,o,s=20,a=i?function(){return i.cur()}:function(){return E.css(e,t,"")},l=a(),c=n&&n[3]||(E.cssNumber[t]?"":"px"),u=e.nodeType&&(E.cssNumber[t]||"px"!==c&&+l)&&ec.exec(E.css(e,t));if(u&&u[3]!==c){for(// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
l/=2,// Trust units reported by jQuery.css
c=c||u[3],// Iteratively approximate from a nonzero starting point
u=+l||1;s--;)// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
E.style(e,t,u+c),(1-o)*(1-(o=a()/l||.5))<=0&&(s=0),u/=o;u*=2,E.style(e,t,u+c),// Make sure we update the tween properties later on
n=n||[]}return n&&(u=+u||+l||0,// Apply relative offset (+=/-=) if specified
r=n[1]?u+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=u,i.end=r)),r}var em={};function ev(e,t){// Determine new display value for elements that need to change
for(var n,i,r=[],o=0,s=e.length;o<s;o++)(i=e[o]).style&&(n=i.style.display,t?("none"!==n||(r[o]=ei.get(i,"display")||null,r[o]||(i.style.display="")),""===i.style.display&&ep(i)&&(r[o]=function(e){var t,n=e.ownerDocument,i=e.nodeName,r=em[i];return r||(t=n.body.appendChild(n.createElement(i)),r=E.css(t,"display"),t.parentNode.removeChild(t),"none"===r&&(r="block"),em[i]=r),r}(i))):"none"!==n&&(r[o]="none",// Remember what we're overwriting
ei.set(i,"display",n)));// Set the display of the elements in a second loop to avoid constant reflow
for(o=0;o<s;o++)null!=r[o]&&(e[o].style.display=r[o]);return e}E.fn.extend({show:function(){return ev(this,!0)},hide:function(){return ev(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ep(this)?E(this).show():E(this).hide()})}});var ey=/^(?:checkbox|radio)$/i,eb=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,e_=/^$|^module$|\/(?:java|ecma)script/i;e4=v.createDocumentFragment().appendChild(v.createElement("div")),// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (trac-11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (trac-14901)
(e5=v.createElement("input")).setAttribute("type","radio"),e5.setAttribute("checked","checked"),e5.setAttribute("name","t"),e4.appendChild(e5),// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
p.checkClone=e4.cloneNode(!0).cloneNode(!0).lastChild.checked,// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
e4.innerHTML="<textarea>x</textarea>",p.noCloneChecked=!!e4.cloneNode(!0).lastChild.defaultValue,// Support: IE <=9 only
// IE <=9 replaces <option> tags with their contents when inserted outside of
// the select element.
e4.innerHTML="<option></option>",p.option=!!e4.lastChild;// We have to close these tags to support XHTML (trac-13200)
var ew={// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ex(e,t){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
var n;return(n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&C(e,t))?E.merge([e],n):n}// Mark scripts as having already been evaluated
function eE(e,t){for(var n=0,i=e.length;n<i;n++)ei.set(e[n],"globalEval",!t||ei.get(t[n],"globalEval"))}ew.tbody=ew.tfoot=ew.colgroup=ew.caption=ew.thead,ew.th=ew.td,p.option||(ew.optgroup=ew.option=[1,"<select multiple='multiple'>","</select>"]);var eT=/<|&#?\w+;/;function eC(e,t,n,i,r){for(var o,s,a,l,c,u=t.createDocumentFragment(),f=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o){// Add nodes directly
if("object"===_(o))// push.apply(_, arraylike) throws on ancient WebKit
E.merge(f,o.nodeType?[o]:o);else if(eT.test(o)){for(s=s||u.appendChild(t.createElement("div")),a=ew[(eb.exec(o)||["",""])[1].toLowerCase()]||ew._default,s.innerHTML=a[1]+E.htmlPrefilter(o)+a[2],// Descend through wrappers to the right content
c=a[0];c--;)s=s.lastChild;// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
E.merge(f,s.childNodes),// Ensure the created nodes are orphaned (trac-12392)
// Remember the top-level container
(s=u.firstChild).textContent=""}else f.push(t.createTextNode(o))}for(// Remove wrapper from fragment
u.textContent="",d=0;o=f[d++];){// Skip elements already in the context collection (trac-4087)
if(i&&E.inArray(o,i)>-1){r&&r.push(o);continue}// Capture executables
if(l=ed(o),// Append to fragment
s=ex(u.appendChild(o),"script"),l&&eE(s),n)for(c=0;o=s[c++];)e_.test(o.type||"")&&n.push(o)}return u}var eS=/^([^.]*)(?:\.(.+)|)/;function ek(){return!0}function eD(){return!1}function eA(e,t,n,i,r,o){var s,a;// Types can be a map of types/handlers
if("object"==typeof t){for(a in"string"!=typeof n&&(// ( types-Object, data )
i=i||n,n=void 0),t)eA(e,a,n,i,t[a],o);return e}if(null==i&&null==r?(// ( types, fn )
r=n,i=n=void 0):null==r&&("string"==typeof n?(// ( types, selector, fn )
r=i,i=void 0):(// ( types, data, fn )
r=i,i=n,n=void 0)),!1===r)r=eD;else if(!r)return e;return 1===o&&(s=r,// Use same guid so caller can remove using origFn
(r=function(e){return(// Can use an empty set, since event contains the info
E().off(e),s.apply(this,arguments))}).guid=s.guid||(s.guid=E.guid++)),e.each(function(){E.event.add(this,t,r,i,n)})}// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function eN(e,t,n){// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
if(!n){void 0===ei.get(e,t)&&E.event.add(e,t,ek);return}// Register the controller as a special universal handler for all event namespaces
ei.set(e,t,!1),E.event.add(e,t,{namespace:!1,handler:function(e){var n,i=ei.get(this,t);if(1&e.isTrigger&&this[t]){// Interrupt processing of the outer synthetic .trigger()ed event
if(i)(E.event.special[t]||{}).delegateType&&e.stopPropagation();else if(// Store arguments for use when handling the inner native event
// There will always be at least one argument (an event object), so this array
// will not be confused with a leftover capture object.
i=o.call(arguments),ei.set(this,t,i),// Trigger the native event and capture its result
this[t](),n=ei.get(this,t),ei.set(this,t,!1),i!==n)return(// Cancel the outer synthetic event
e.stopImmediatePropagation(),e.preventDefault(),n)}else i&&(// ...and capture the result
ei.set(this,t,E.event.trigger(i[0],i.slice(1),this)),// Abort handling of the native event by all jQuery handlers while allowing
// native handlers on the same element to run. On target, this is achieved
// by stopping immediate propagation just on the jQuery event. However,
// the native event is re-wrapped by a jQuery one on each level of the
// propagation so the only way to stop it for jQuery is to stop it for
// everyone via native `stopPropagation()`. This is not a problem for
// focus/blur which don't bubble, but it does also stop click on checkboxes
// and radios. We accept this limitation.
e.stopPropagation(),e.isImmediatePropagationStopped=ek)}})}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */E.event={global:{},add:function(e,t,n,i,r){var o,s,a,l,c,u,f,d,h,p,g,m=ei.get(e);// Only attach events to objects that accept data
if(et(e))for(n.handler&&(n=(o=n).handler,r=o.selector),r&&E.find.matchesSelector(ef,r),n.guid||(n.guid=E.guid++),(l=m.events)||(l=m.events=Object.create(null)),(s=m.handle)||(s=m.handle=function(t){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return E.event.triggered!==t.type?E.event.dispatch.apply(e,arguments):void 0}),c=// Handle multiple events separated by a space
(t=(t||"").match(U)||[""]).length;c--;)// There *must* be a type, no attaching namespace-only handlers
h=g=(a=eS.exec(t[c])||[])[1],p=(a[2]||"").split(".").sort(),h&&(// If event changes its type, use the special event handlers for the changed type
f=E.event.special[h]||{},// If selector defined, determine special event api type, otherwise given type
h=(r?f.delegateType:f.bindType)||h,// Update special based on newly reset type
f=E.event.special[h]||{},// handleObj is passed to all event handlers
u=E.extend({type:h,origType:g,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&E.expr.match.needsContext.test(r),namespace:p.join(".")},o),(d=l[h])||((d=l[h]=[]).delegateCount=0,(!f.setup||!1===f.setup.call(e,i,p,s))&&e.addEventListener&&e.addEventListener(h,s)),f.add&&(f.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),r?d.splice(d.delegateCount++,0,u):d.push(u),// Keep track of which events have ever been used, for event optimization
E.event.global[h]=!0)},// Detach an event or set of events from an element
remove:function(e,t,n,i,r){var o,s,a,l,c,u,f,d,h,p,g,m=ei.hasData(e)&&ei.get(e);if(m&&(l=m.events)){for(c=// Once for each type.namespace in types; type may be omitted
(t=(t||"").match(U)||[""]).length;c--;){// Unbind all events (on this namespace, if provided) for the element
if(h=g=(a=eS.exec(t[c])||[])[1],p=(a[2]||"").split(".").sort(),!h){for(h in l)E.event.remove(e,h+t[c],n,i,!0);continue}for(f=E.event.special[h]||{},d=l[h=(i?f.delegateType:f.bindType)||h]||[],a=a[2]&&RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),// Remove matching events
s=o=d.length;o--;)u=d[o],(r||g===u.origType)&&(!n||n.guid===u.guid)&&(!a||a.test(u.namespace))&&(!i||i===u.selector||"**"===i&&u.selector)&&(d.splice(o,1),u.selector&&d.delegateCount--,f.remove&&f.remove.call(e,u));s&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,p,m.handle)||E.removeEvent(e,h,m.handle),delete l[h])}E.isEmptyObject(l)&&ei.remove(e,"handle events")}},dispatch:function(e){var t,n,i,r,o,s,a=Array(arguments.length),l=E.event.fix(e),c=(ei.get(this,"events")||Object.create(null))[l.type]||[],u=E.event.special[l.type]||{};for(t=1,// Use the fix-ed jQuery.Event rather than the (read-only) native event
a[0]=l;t<arguments.length;t++)a[t]=arguments[t];// Call the preDispatch hook for the mapped type, and let it bail if desired
if(l.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,l)){for(// Determine handlers
s=E.event.handlers.call(this,l,c),// Run delegates first; they may want to stop propagation beneath us
t=0;(r=s[t++])&&!l.isPropagationStopped();)for(l.currentTarget=r.elem,n=0;(o=r.handlers[n++])&&!l.isImmediatePropagationStopped();)// specially universal or its namespaces are a superset of the event's.
(!l.rnamespace||!1===o.namespace||l.rnamespace.test(o.namespace))&&(l.handleObj=o,l.data=o.data,void 0!==(i=((E.event.special[o.origType]||{}).handle||o.handler).apply(r.elem,a))&&!1===(l.result=i)&&(l.preventDefault(),l.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,l),l.result}},handlers:function(e,t){var n,i,r,o,s,a=[],l=t.delegateCount,c=e.target;// Find delegate handlers
if(l&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
c.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&e.button>=1)){for(;c!==this;c=c.parentNode||this)// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
if(1===c.nodeType&&!("click"===e.type&&!0===c.disabled)){for(n=0,o=[],s={};n<l;n++)void 0===s[// Don't conflict with Object.prototype properties (trac-13203)
r=(i=t[n]).selector+" "]&&(s[r]=i.needsContext?E(r,this).index(c)>-1:E.find(r,this,null,[c]).length),s[r]&&o.push(i);o.length&&a.push({elem:c,handlers:o})}}return(// Add the remaining (directly-bound) handlers
c=this,l<t.length&&a.push({elem:c,handlers:t.slice(l)}),a)},addProp:function(e,t){Object.defineProperty(E.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},click:{// Utilize native event to ensure correct state for checkable inputs
setup:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Return false to allow normal processing in the caller
return ey.test(t.type)&&t.click&&C(t,"input")&&eN(t,"click",!0),!1},trigger:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Return non-false to allow normal event-path propagation
return ey.test(t.type)&&t.click&&C(t,"input")&&eN(t,"click"),!0},// For cross-browser consistency, suppress native .click() on links
// Also prevent it if we're currently inside a leveraged native-event stack
_default:function(e){var t=e.target;return ey.test(t.type)&&t.click&&C(t,"input")&&ei.get(t,"click")||C(t,"a")}},beforeunload:{postDispatch:function(e){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){// This "if" is needed for plain objects
e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){// Allow instantiation without the 'new' keyword
if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&// Support: Android <=2.3 only
!1===e.returnValue?ek:eD,// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (trac-504, trac-13143)
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||Date.now(),// Mark it as fixed
this[E.expando]=!0},// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
E.Event.prototype={constructor:E.Event,isDefaultPrevented:eD,isPropagationStopped:eD,isImmediatePropagationStopped:eD,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ek,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ek,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ek,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},// Includes all common event props including KeyEvent and MouseEvent specific props
E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(e,t){function n(e){if(v.documentMode){// Support: IE 11+
// Attach a single focusin/focusout handler on the document while someone wants
// focus/blur. This is because the former are synchronous in IE while the latter
// are async. In other browsers, all those handlers are invoked synchronously.
// `handle` from private data would already wrap the event, but we need
// to change the `type` here.
var n=ei.get(this,"handle"),i=E.event.fix(e);i.type="focusin"===e.type?"focus":"blur",i.isSimulated=!0,// First, handle focusin/focusout
n(e),i.target===i.currentTarget&&// `jQuery.event.add`, so event handle will already have been set
// by this point.
n(i)}else // while someone wants focusin/focusout.
E.event.simulate(t,e.target,E.event.fix(e))}E.event.special[e]={// Utilize native event if possible so blur/focus sequence is correct
setup:function(){var i;if(// Claim the first handler
// dataPriv.set( this, "focus", ... )
// dataPriv.set( this, "blur", ... )
eN(this,e,!0),!v.documentMode)return!1;// Support: IE 9 - 11+
// We use the same native handler for focusin & focus (and focusout & blur)
// so we need to coordinate setup & teardown parts between those events.
// Use `delegateType` as the key as `type` is already used by `leverageNative`.
(i=ei.get(this,t))||this.addEventListener(t,n),ei.set(this,t,(i||0)+1)},trigger:function(){// Return non-false to allow normal event-path propagation
return(// Force setup before trigger
eN(this,e),!0)},teardown:function(){var e;if(!v.documentMode)return!1;(e=ei.get(this,t)-1)?ei.set(this,t,e):(this.removeEventListener(t,n),ei.remove(this,t))},// Suppress native focus or blur if we're currently inside
// a leveraged native-event stack
_default:function(t){return ei.get(t.target,e)},delegateType:t},// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
//
// Support: IE 9 - 11+
// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
// attach a single handler for both events in IE.
E.event.special[t]={setup:function(){// Handle: regular nodes (via `this.ownerDocument`), window
// (via `this.document`) & document (via `this`).
var i=this.ownerDocument||this.document||this,r=v.documentMode?this:i,o=ei.get(r,t);o||(v.documentMode?this.addEventListener(t,n):i.addEventListener(e,n,!0)),ei.set(r,t,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this.document||this,r=v.documentMode?this:i,o=ei.get(r,t)-1;o?ei.set(r,t,o):(v.documentMode?this.removeEventListener(t,n):i.removeEventListener(e,n,!0),ei.remove(r,t))}}}),// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){E.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=e.relatedTarget,r=e.handleObj;return i&&(i===this||E.contains(this,i))||(e.type=r.origType,n=r.handler.apply(this,arguments),e.type=t),n}}}),E.fn.extend({on:function(e,t,n,i){return eA(this,e,t,n,i)},one:function(e,t,n,i){return eA(this,e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return(// ( event )  dispatched jQuery.Event
i=e.handleObj,E(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this);if("object"==typeof e){// ( types-object [, selector] )
for(r in e)this.off(r,t,e[r]);return this}return(!1===t||"function"==typeof t)&&(// ( types [, fn] )
n=t,t=void 0),!1===n&&(n=eD),this.each(function(){E.event.remove(this,e,n,t)})}});var // In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
ej=/<script|<style|<link/i,eO=/checked\s*(?:[^=]|=\s*.checked.)/i,eL=/^\s*<!\[CDATA\[|\]\]>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function eI(e,t){return C(e,"table")&&C(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}// Replace/restore the type attribute of script elements for safe DOM manipulation
function eP(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function eq(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function eH(e,t){var n,i,r,o,s,a;if(1===t.nodeType){// 1. Copy private data: events, handlers, etc.
if(ei.hasData(e)&&(a=ei.get(e).events))for(r in ei.remove(t,"handle events"),a)for(n=0,i=a[r].length;n<i;n++)E.event.add(t,r,a[r][n]);// 2. Copy user data
er.hasData(e)&&(o=er.access(e),s=E.extend({},o),er.set(t,s))}}function eR(e,t,n,i){// Flatten any nested arrays
t=s(t);var r,o,a,l,c,u,f=0,d=e.length,h=d-1,m=t[0],v=g(m);// We can't cloneNode fragments that contain checked, in WebKit
if(v||d>1&&"string"==typeof m&&!p.checkClone&&eO.test(m))return e.each(function(r){var o=e.eq(r);v&&(t[0]=m.call(this,r,o.html())),eR(o,t,n,i)});if(d&&(o=(r=eC(t,e[0].ownerDocument,!1,e,i)).firstChild,1===r.childNodes.length&&(r=o),o||i)){// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (trac-8070).
for(l=(a=E.map(ex(r,"script"),eP)).length;f<d;f++)c=r,f!==h&&(c=E.clone(c,!0,!0),l&&// push.apply(_, arraylike) throws on ancient WebKit
E.merge(a,ex(c,"script"))),n.call(e[f],c,f);if(l)// Evaluate executable scripts on first document insertion
for(u=a[a.length-1].ownerDocument,// Re-enable scripts
E.map(a,eq),f=0;f<l;f++)c=a[f],e_.test(c.type||"")&&!ei.access(c,"globalEval")&&E.contains(u,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?E._evalUrl&&!c.noModule&&E._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")},u):// needed as in XML documents they're already not visible when
// inspecting element contents and in HTML documents they have no
// meaning but we're preserving that logic for backwards compatibility.
// This will be removed completely in 4.0. See gh-4904.
b(c.textContent.replace(eL,""),c,u))}return e}function eF(e,t,n){for(var i,r=t?E.filter(t,e):e,o=0;null!=(i=r[o]);o++)n||1!==i.nodeType||E.cleanData(ex(i)),i.parentNode&&(n&&ed(i)&&eE(ex(i,"script")),i.parentNode.removeChild(i));return e}E.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var i,r,o,s,a=e.cloneNode(!0),l=ed(e);// Fix IE cloning issues
if(!p.noCloneChecked&&(1===e.nodeType||11===e.nodeType)&&!E.isXMLDoc(e))for(i=0,// We eschew jQuery#find here for performance reasons:
// https://jsperf.com/getall-vs-sizzle/2
s=ex(a),r=(o=ex(e)).length;i<r;i++)!// Fix IE bugs, see support tests
function(e,t){var n=t.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===n&&ey.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}(o[i],s[i]);// Copy the events from the original to the clone
if(t){if(n)for(i=0,o=o||ex(e),s=s||ex(a),r=o.length;i<r;i++)eH(o[i],s[i]);else eH(e,a)}// Return the cloned set
return(// Preserve script evaluation history
(s=ex(a,"script")).length>0&&eE(s,!l&&ex(e,"script")),a)},cleanData:function(e){for(var t,n,i,r=E.event.special,o=0;void 0!==(n=e[o]);o++)if(et(n)){if(t=n[ei.expando]){if(t.events)for(i in t.events)r[i]?E.event.remove(n,i):E.removeEvent(n,i,t.handle);// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[ei.expando]=void 0}n[er.expando]&&// Assign undefined instead of using delete, see Data#remove
(n[er.expando]=void 0)}}}),E.fn.extend({detach:function(e){return eF(this,e,!0)},remove:function(e){return eF(this,e)},text:function(e){return K(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return eR(this,arguments,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&eI(this,e).appendChild(e)})},prepend:function(){return eR(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=eI(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return eR(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return eR(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(// Prevent memory leaks
E.cleanData(ex(e,!1)),// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return K(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!ej.test(e)&&!ew[(eb.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<i;n++)t=this[n]||{},1===t.nodeType&&(E.cleanData(ex(t,!1)),t.innerHTML=e);t=0;// If using innerHTML throws an exception, use the fallback method
}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];// Make the changes, replacing each non-ignored context element with the new content
return eR(this,arguments,function(t){var n=this.parentNode;0>E.inArray(this,e)&&(E.cleanData(ex(this)),n&&n.replaceChild(t,this));// Force callback invocation
},e)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){E.fn[e]=function(e){for(var n,i=[],r=E(e),o=r.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),E(r[s])[t](n),// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
a.apply(i,n.get());return this.pushStack(i)}});var eM=RegExp("^("+el+")(?!px)[a-z%]+$","i"),eW=/^--/,eB=function(t){// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},eU=function(e,t,n){var i,r,o={};// Remember the old values, and insert the new ones
for(r in t)o[r]=e.style[r],e.style[r]=t[r];// Revert the old values
for(r in i=n.call(e),t)e.style[r]=o[r];return i},eQ=RegExp(eu.join("|"),"i");function e$(e,t,n){var i,r,o,s,a=eW.test(t),// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
l=e.style;return(n=n||eB(e))&&(// Support: IE <=9 - 11+
// IE only supports `"float"` in `getPropertyValue`; in computed styles
// it's only available as `"cssFloat"`. We no longer modify properties
// sent to `.css()` apart from camelCasing, so we need to check both.
// Normally, this would create difference in behavior: if
// `getPropertyValue` returns an empty string, the value returned
// by `.css()` would be `undefined`. This is usually the case for
// disconnected elements. However, in IE even disconnected elements
// with no styles return `"none"` for `getPropertyValue( "float" )`
s=n.getPropertyValue(t)||n[t],a&&s&&// Spec requires trimming whitespace for custom properties (gh-4926).
// Firefox only trims leading whitespace. Chrome just collapses
// both leading & trailing whitespace to a single space.
//
// Fall back to `undefined` if empty string returned.
// This collapses a missing definition with property defined
// and set to an empty string but there's no standard API
// allowing us to differentiate them without a performance penalty
// and returning `undefined` aligns with older jQuery.
//
// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
// as whitespace while CSS does not, but this is not a problem
// because CSS preprocessing replaces them with U+000A LINE FEED
// (which *is* CSS whitespace)
// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
(s=s.replace(N,"$1")||void 0),""!==s||ed(e)||(s=E.style(e,t)),!p.pixelBoxStyles()&&eM.test(s)&&eQ.test(t)&&(// Remember the original values
i=l.width,r=l.minWidth,o=l.maxWidth,// Put in the new values to get a computed value out
l.minWidth=l.maxWidth=l.width=s,s=n.width,// Revert the changed values
l.width=i,l.minWidth=r,l.maxWidth=o)),void 0!==s?// IE returns zIndex value as an integer.
s+"":s}function ez(e,t){// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(e()){// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get;return}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=t).apply(this,arguments)}}}!function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function t(){// This is a singleton, we need to execute it only once
if(u){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ef.appendChild(c).appendChild(u);var t=e.getComputedStyle(u);i="1%"!==t.top,// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
l=12===n(t.marginLeft),// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
u.style.right="60%",s=36===n(t.right),// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
r=36===n(t.width),// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
// Support: Chrome <=64
// Don't get tricked when zoom affects offsetWidth (gh-4029)
u.style.position="absolute",o=12===n(u.offsetWidth/3),ef.removeChild(c),// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
u=null}}function n(e){return Math.round(parseFloat(e))}var i,r,o,s,a,l,c=v.createElement("div"),u=v.createElement("div");// Finish early in limited (non-browser) environments
u.style&&(// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (trac-8908)
u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",p.clearCloneStyle="content-box"===u.style.backgroundClip,E.extend(p,{boxSizingReliable:function(){return t(),r},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),l},scrollboxSize:function(){return t(),o},// Support: IE 9 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Behavior in IE 9 is more subtle than in newer versions & it passes
// some versions of this test; make sure not to make it pass there!
//
// Support: Firefox 70+
// Only Firefox includes border widths
// in computed dimensions. (gh-4529)
reliableTrDimensions:function(){var t,n,i,r;return null==a&&(t=v.createElement("table"),n=v.createElement("tr"),i=v.createElement("div"),t.style.cssText="position:absolute;left:-11111px;border-collapse:separate",n.style.cssText="box-sizing:content-box;border:1px solid",// Support: Chrome 86+
// Height set through cssText does not get applied.
// Computed height then comes back as 0.
n.style.height="1px",i.style.height="9px",// Support: Android 8 Chrome 86+
// In our bodyBackground.html iframe,
// display for all div elements is set to "inline",
// which causes a problem only in Android 8 Chrome 86.
// Ensuring the div is `display: block`
// gets around this issue.
i.style.display="block",ef.appendChild(t).appendChild(n).appendChild(i),a=parseInt((r=e.getComputedStyle(n)).height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===n.offsetHeight,ef.removeChild(t)),a}}))}();var eV=["Webkit","Moz","ms"],eX=v.createElement("div").style,eY={};// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function eK(e){return E.cssProps[e]||eY[e]||(e in eX?e:eY[e]=// Return a vendor-prefixed property or undefined
function(e){for(// Check for vendor prefixed names
var t=e[0].toUpperCase()+e.slice(1),n=eV.length;n--;)if((e=eV[n]+t)in eX)return e}(e)||e)}var // except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
eG=/^(none|table(?!-c[ea]).+)/,eJ={position:"absolute",visibility:"hidden",display:"block"},eZ={letterSpacing:"0",fontWeight:"400"};function e0(e,t,n){// Any relative (+/-) values have already been
// normalized at this point
var i=ec.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function e1(e,t,n,i,r,o){var s="width"===t?1:0,a=0,l=0,c=0;// Adjustment may not be necessary
if(n===(i?"border":"content"))return 0;for(;s<4;s+=2)"margin"===n&&(c+=E.css(e,n+eu[s],!0,r)),i?("content"===n&&(l-=E.css(e,"padding"+eu[s],!0,r)),"margin"!==n&&(l-=E.css(e,"border"+eu[s]+"Width",!0,r))):(// Add padding
l+=E.css(e,"padding"+eu[s],!0,r),"padding"!==n?l+=E.css(e,"border"+eu[s]+"Width",!0,r):a+=E.css(e,"border"+eu[s]+"Width",!0,r));return!i&&o>=0&&// Assuming integer scroll gutter, subtract the rest and round down
(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-l-a-.5))||0),l+c}function e2(e,t,n){// Start with computed style
var i=eB(e),r=(!p.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,i),o=r,s=e$(e,t,i),a="offset"+t[0].toUpperCase()+t.slice(1);// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(eM.test(s)){if(!n)return s;s="auto"}// Adjust for the element's box model
return(!p.boxSizingReliable()&&r||// Support: IE 10 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Interestingly, in some cases IE 9 doesn't suffer from this issue.
!p.reliableTrDimensions()&&C(e,"tr")||// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
"auto"===s||// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
!parseFloat(s)&&"inline"===E.css(e,"display",!1,i))&&// Make sure the element is visible & connected
e.getClientRects().length&&(r="border-box"===E.css(e,"boxSizing",!1,i),// Where available, offsetWidth/offsetHeight approximate border box dimensions.
// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
// retrieved value as a content box dimension.
(o=a in e)&&(s=e[a])),// Normalize "" and auto
(s=parseFloat(s)||0)+e1(e,t,n||(r?"border":"content"),o,i,s)+"px"}function e3(e,t,n,i,r){return new e3.prototype.init(e,t,n,i,r)}E.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){// We should always get a number back from opacity
var n=e$(e,"opacity");return""===n?"1":n}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,// SVG-related
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},// Get and set the style property on a DOM Node
style:function(e,t,n,i){// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){// Make sure that we're working with the right name
var r,o,s,a=ee(t),l=eW.test(t),c=e.style;// Check if we're setting a value
if(l||(t=eK(a)),// Gets hook for the prefixed version, then unprefixed version
s=E.cssHooks[t]||E.cssHooks[a],void 0===n)return(// If a hook was provided get the non-computed value from there
s&&"get"in s&&void 0!==(r=s.get(e,!1,i))?r:c[t]);// Make sure that null and NaN values aren't set (trac-7116)
"string"==(o=typeof n)&&(r=ec.exec(n))&&r[1]&&(n=eg(e,t,r),// Fixes bug trac-9237
o="number"),null!=n&&n==n&&("number"!==o||l||(n+=r&&r[3]||(E.cssNumber[a]?"":"px")),p.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,i){var r,o,s,a=ee(t);return(// Make numeric if forced or a qualifier was provided and val looks numeric
(eW.test(t)||(t=eK(a)),// Try prefixed name followed by the unprefixed name
(s=E.cssHooks[t]||E.cssHooks[a])&&"get"in s&&(r=s.get(e,!0,n)),void 0===r&&(r=e$(e,t,i)),"normal"===r&&t in eZ&&(r=eZ[t]),""===n||n)?(o=parseFloat(r),!0===n||isFinite(o)?o||0:r):r)}}),E.each(["height","width"],function(e,t){E.cssHooks[t]={get:function(e,n,i){if(n)// but it must have a current display style that would benefit
return!eG.test(E.css(e,"display"))||// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
e.getClientRects().length&&e.getBoundingClientRect().width?e2(e,t,i):eU(e,eJ,function(){return e2(e,t,i)})},set:function(e,n,i){var r,o=eB(e),// to avoid forcing a reflow.
s=!p.scrollboxSize()&&"absolute"===o.position,a=(s||i)&&"border-box"===E.css(e,"boxSizing",!1,o),l=i?e1(e,t,i,a,o):0;return a&&s&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-e1(e,t,"border",!1,o)-.5)),l&&(r=ec.exec(n))&&"px"!==(r[3]||"px")&&(e.style[t]=n,n=E.css(e,t)),e0(e,n,l)}}}),E.cssHooks.marginLeft=ez(p.reliableMarginLeft,function(e,t){if(t)return(parseFloat(e$(e,"marginLeft"))||e.getBoundingClientRect().left-eU(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),// These hooks are used by animate to expand properties
E.each({margin:"",padding:"",border:"Width"},function(e,t){E.cssHooks[e+t]={expand:function(n){for(var i=0,r={},o="string"==typeof n?n.split(" "):[n];i<4;i++)r[e+eu[i]+t]=o[i]||o[i-2]||o[0];return r}},"margin"!==e&&(E.cssHooks[e+t].set=e0)}),E.fn.extend({css:function(e,t){return K(this,function(e,t,n){var i,r,o={},s=0;if(Array.isArray(t)){for(i=eB(e),r=t.length;s<r;s++)o[t[s]]=E.css(e,t[s],!1,i);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,arguments.length>1)}}),E.Tween=e3,e3.prototype={constructor:e3,init:function(e,t,n,i,r,o){this.elem=e,this.prop=n,this.easing=r||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=e3.propHooks[this.prop];return e&&e.get?e.get(this):e3.propHooks._default.get(this)},run:function(e){var t,n=e3.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):e3.propHooks._default.set(this),this}},e3.prototype.init.prototype=e3.prototype,e3.propHooks={_default:{get:function(e){var t;return(// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0)},set:function(e){// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
E.fx.step[e.prop]?E.fx.step[e.prop](e):1===e.elem.nodeType&&(E.cssHooks[e.prop]||null!=e.elem.style[eK(e.prop)])?E.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
e3.propHooks.scrollTop=e3.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=e3.prototype.init,// Back compat <1.8 extension point
E.fx.step={};var e4,e5,e6,e9,e8=/^(?:toggle|show|hide)$/,e7=/queueHooks$/;// Animations created synchronously will run synchronously
function te(){return e.setTimeout(function(){e6=void 0}),e6=Date.now()}// Generate parameters to create a standard animation
function tt(e,t){var n,i=0,r={height:e};for(// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
t=t?1:0;i<4;i+=2-t)r["margin"+(n=eu[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tn(e,t,n){for(var i,r=(ti.tweeners[t]||[]).concat(ti.tweeners["*"]),o=0,s=r.length;o<s;o++)if(i=r[o].call(n,t,e))return i}function ti(e,t,n){var i,r,o=0,s=ti.prefilters.length,a=E.Deferred().always(function(){// Don't match elem in the :animated selector
delete l.elem}),l=function(){if(r)return!1;for(var t=e6||te(),n=Math.max(0,c.startTime+c.duration-t),i=1-(n/c.duration||0),o=0,s=c.tweens.length;o<s;o++)c.tweens[o].run(i);return(// If there's more to do, yield
(a.notifyWith(e,[c,i,n]),i<1&&s)?n:(s||a.notifyWith(e,[c,1,0]),// Resolve the animation and report its conclusion
a.resolveWith(e,[c]),!1))},c=a.promise({elem:e,props:E.extend({},t),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},n),originalProperties:t,originalOptions:n,startTime:e6||te(),duration:n.duration,tweens:[],createTween:function(t,n){var i=E.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(i),i},stop:function(t){var n=0,// otherwise we skip this part
i=t?c.tweens.length:0;if(r)return this;for(r=!0;n<i;n++)c.tweens[n].run(1);return t?(a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c,t])):a.rejectWith(e,[c,t]),this}}),u=c.props;for(function(e,t){var n,i,r,o,s;// camelCase, specialEasing and expand cssHook pass
for(n in e)if(r=t[i=ee(n)],Array.isArray(o=e[n])&&(r=o[1],o=e[n]=o[0]),n!==i&&(e[i]=o,delete e[n]),(s=E.cssHooks[i])&&("expand"in s))// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in o=s.expand(o),delete e[i],o)(n in e)||(e[n]=o[n],t[n]=r);else t[i]=r}(u,c.opts.specialEasing);o<s;o++)if(i=ti.prefilters[o].call(c,e,u,c.opts))return g(i.stop)&&(E._queueHooks(c.elem,c.opts.queue).stop=i.stop.bind(i)),i;return E.map(u,tn,c),g(c.opts.start)&&c.opts.start.call(e,c),// Attach callbacks from options
c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),E.fx.timer(E.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c}E.Animation=E.extend(ti,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return eg(n.elem,e,ec.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(U);for(var n,i=0,r=e.length;i<r;i++)n=e[i],ti.tweeners[n]=ti.tweeners[n]||[],ti.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var i,r,o,s,a,l,c,u,f="width"in t||"height"in t,d=this,h={},p=e.style,g=e.nodeType&&ep(e),m=ei.get(e,"fxshow");// Detect show/hide animations
for(i in n.queue||(null==(s=E._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,d.always(function(){// Ensure the complete handler is called before this completes
d.always(function(){s.unqueued--,E.queue(e,"fx").length||s.empty.fire()})})),t)if(r=t[i],e8.test(r)){if(delete t[i],o=o||"toggle"===r,r===(g?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==r||!m||void 0===m[i])continue;g=!0}h[i]=m&&m[i]||E.style(e,i)}if(!(!// Bail out if this is a no-op like .hide().hide()
(l=!E.isEmptyObject(t))&&E.isEmptyObject(h)))for(i in f&&1===e.nodeType&&(// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
n.overflow=[p.overflow,p.overflowX,p.overflowY],null==// Identify a display type, preferring old show/hide data over the CSS cascade
(c=m&&m.display)&&(c=ei.get(e,"display")),"none"===(u=E.css(e,"display"))&&(c?u=c:(// Get nonempty value(s) by temporarily forcing visibility
ev([e],!0),c=e.style.display||c,u=E.css(e,"display"),ev([e]))),("inline"===u||"inline-block"===u&&null!=c)&&"none"===E.css(e,"float")&&(l||(d.done(function(){p.display=c}),null!=c||(c="none"===(u=p.display)?"":u)),p.display="inline-block")),n.overflow&&(p.overflow="hidden",d.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]})),// Implement show/hide animations
l=!1,h)l||(m?"hidden"in m&&(g=m.hidden):m=ei.access(e,"fxshow",{display:c}),o&&(m.hidden=!g),g&&ev([e],!0),/* eslint-disable no-loop-func */d.done(function(){for(i in g||ev([e]),ei.remove(e,"fxshow"),h)E.style(e,i,h[i])})),// Per-property setup
l=tn(g?m[i]:0,i,d),i in m||(m[i]=l.start,g&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?ti.prefilters.unshift(e):ti.prefilters.push(e)}}),E.speed=function(e,t,n){var i=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return E.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in E.fx.speeds?i.duration=E.fx.speeds[i.duration]:i.duration=E.fx.speeds._default),(null==i.queue||!0===i.queue)&&(i.queue="fx"),// Queueing
i.old=i.complete,i.complete=function(){g(i.old)&&i.old.call(this),i.queue&&E.dequeue(this,i.queue)},i},E.fn.extend({fadeTo:function(e,t,n,i){// Show any hidden elements after setting opacity to 0
return this.filter(ep).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=E.isEmptyObject(e),o=E.speed(t,n,i),s=function(){// Operate on a copy of prop so per-property easing won't be lost
var t=ti(this,E.extend({},e),o);// Empty animations, or finishing resolves immediately
(r||ei.get(this,"finish"))&&t.stop(!0)};return s.finish=s,r||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var t=!0,r=null!=e&&e+"queueHooks",o=E.timers,s=ei.get(this);if(r)s[r]&&s[r].stop&&i(s[r]);else for(r in s)s[r]&&s[r].stop&&e7.test(r)&&i(s[r]);for(r=o.length;r--;)o[r].elem===this&&(null==e||o[r].queue===e)&&(o[r].anim.stop(n),t=!1,o.splice(r,1));// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
(t||!n)&&E.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=ei.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],o=E.timers,s=i?i.length:0;// Look for any active animations, and finish them
for(// Enable finishing flag on private data
n.finish=!0,// Empty the queue first
E.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));// Look for any animations in the old queue and finish them
for(t=0;t<s;t++)i[t]&&i[t].finish&&i[t].finish.call(this);// Turn off finishing flag
delete n.finish})}}),E.each(["toggle","show","hide"],function(e,t){var n=E.fn[t];E.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(tt(t,!0),e,i,r)}}),// Generate shortcuts for custom animations
E.each({slideDown:tt("show"),slideUp:tt("hide"),slideToggle:tt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){E.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(e6=Date.now();t<n.length;t++)// Run the timer and safely remove it when done (allowing for external removal)
(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),e6=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){e9||(e9=!0,function t(){e9&&(!1===v.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(t):e.setTimeout(t,E.fx.interval),E.fx.tick())}())},E.fx.stop=function(){e9=null},E.fx.speeds={slow:600,fast:200,// Default speed
_default:400},// Based off of the plugin by Clint Helfers, with permission.
E.fn.delay=function(t,n){return t=E.fx&&E.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,i){var r=e.setTimeout(n,t);i.stop=function(){e.clearTimeout(r)}})},tr=v.createElement("input"),to=v.createElement("select").appendChild(v.createElement("option")),tr.type="checkbox",// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
p.checkOn=""!==tr.value,// Support: IE <=11 only
// Must access selectedIndex to make default options select
p.optSelected=to.selected,// Support: IE <=11 only
// An input loses its value after becoming a radio
(tr=v.createElement("input")).value="t",tr.type="radio",p.radioValue="t"===tr.value;var tr,to,ts,ta=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return K(this,E.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var i,r,o=e.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o){// Fallback to prop when attributes are not supported
if(void 0===e.getAttribute)return E.prop(e,t,n);if(1===o&&E.isXMLDoc(e)||(r=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?ts:void 0)),void 0!==n){if(null===n){E.removeAttr(e,t);return}return r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n)}return r&&"get"in r&&null!==(i=r.get(e,t))?i:null==(i=E.find.attr(e,t))?void 0:i}},attrHooks:{type:{set:function(e,t){if(!p.radioValue&&"radio"===t&&C(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
r=t&&t.match(U);if(r&&1===e.nodeType)for(;n=r[i++];)e.removeAttribute(n)}}),// Hooks for boolean attributes
ts={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ta[t]||E.find.attr;ta[t]=function(e,t,i){var r,o,s=t.toLowerCase();return i||(// Avoid an infinite loop by temporarily removing this function from the getter
o=ta[s],ta[s]=r,r=null!=n(e,t,i)?s:null,ta[s]=o),r}});var tl=/^(?:input|select|textarea|button)$/i,tc=/^(?:a|area)$/i;// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function tu(e){return(e.match(U)||[]).join(" ")}function tf(e){return e.getAttribute&&e.getAttribute("class")||""}function td(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(U)||[]}E.fn.extend({prop:function(e,t){return K(this,E.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var i,r,o=e.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)return(1===o&&E.isXMLDoc(e)||(// Fix name and attach hooks
t=E.propFix[t]||t,r=E.propHooks[t]),void 0!==n)?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// Use proper attribute retrieval (trac-12072)
var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):tl.test(e.nodeName)||tc.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),p.optSelected||(E.propHooks.selected={get:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(e){var t,n,i,r,o,s;return g(e)?this.each(function(t){E(this).addClass(e.call(this,t,tf(this)))}):(t=td(e)).length?this.each(function(){if(i=tf(this),n=1===this.nodeType&&" "+tu(i)+" "){for(o=0;o<t.length;o++)r=t[o],0>n.indexOf(" "+r+" ")&&(n+=r+" ");i!==// Only assign if different to avoid unneeded rendering.
(s=tu(n))&&this.setAttribute("class",s)}}):this},removeClass:function(e){var t,n,i,r,o,s;return g(e)?this.each(function(t){E(this).removeClass(e.call(this,t,tf(this)))}):arguments.length?(t=td(e)).length?this.each(function(){if(i=tf(this),// This expression is here for better compressibility (see addClass)
n=1===this.nodeType&&" "+tu(i)+" "){for(o=0;o<t.length;o++)// Remove *all* instances
for(r=t[o];n.indexOf(" "+r+" ")>-1;)n=n.replace(" "+r+" "," ");i!==// Only assign if different to avoid unneeded rendering.
(s=tu(n))&&this.setAttribute("class",s)}}):this:this.attr("class","")},toggleClass:function(e,t){var n,i,r,o,s=typeof e,a="string"===s||Array.isArray(e);return g(e)?this.each(function(n){E(this).toggleClass(e.call(this,n,tf(this),t),t)}):"boolean"==typeof t&&a?t?this.addClass(e):this.removeClass(e):(n=td(e),this.each(function(){if(a)for(r=0,// Toggle individual class names
o=E(this);r<n.length;r++)i=n[r],o.hasClass(i)?o.removeClass(i):o.addClass(i);else(void 0===e||"boolean"===s)&&((i=tf(this))&&ei.set(this,"__className__",i),this.setAttribute&&this.setAttribute("class",i||!1===e?"":ei.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&(" "+tu(tf(n))+" ").indexOf(t)>-1)return!0;return!1}});var th=/\r/g;E.fn.extend({val:function(e){var t,n,i,r=this[0];return arguments.length?(i=g(e),this.each(function(n){var r;1!==this.nodeType||(null==(r=i?e.call(this,n,E(this).val()):e)?r="":"number"==typeof r?r+="":Array.isArray(r)&&(r=E.map(r,function(e){return null==e?"":e+""})),(t=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))})):r?(t=E.valHooks[r.type]||E.valHooks[r.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:"string"==typeof(n=r.value)?n.replace(th,""):null==n?"":n:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:// option.text throws exceptions (trac-14686, trac-14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
tu(E.text(e))}},select:{get:function(e){var t,n,i,r=e.options,o=e.selectedIndex,s="select-one"===e.type,a=s?null:[],l=s?o+1:r.length;// Loop through all the selected options
for(i=o<0?l:s?o:0;i<l;i++)// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (trac-2551)
if(((n=r[i]).selected||i===o)&&// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!C(n.parentNode,"optgroup"))){// We don't need an array for one selects
if(// Get the specific value for the option
t=E(n).val(),s)return t;// Multi-Selects return an array
a.push(t)}return a},set:function(e,t){for(var n,i,r=e.options,o=E.makeArray(t),s=r.length;s--;)/* eslint-disable no-cond-assign */((i=r[s]).selected=E.inArray(E.valHooks.option.get(i),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),// Radios and checkboxes getter/setter
E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=E.inArray(E(e).val(),t)>-1}},p.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});// Return jQuery for attributes-only inclusion
var tp=e.location,tg={guid:Date.now()},tm=/\?/;// Cross-browser xml parsing
E.parseXML=function(t){var n,i;if(!t||"string"!=typeof t)return null;// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{n=new e.DOMParser().parseFromString(t,"text/xml")}catch(e){}return i=n&&n.getElementsByTagName("parsererror")[0],(!n||i)&&E.error("Invalid XML: "+(i?E.map(i.childNodes,function(e){return e.textContent}).join("\n"):t)),n};var tv=/^(?:focusinfocus|focusoutblur)$/,ty=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(t,n,i,r){var o,s,a,l,c,u,d,h,p=[i||v],y=f.call(t,"type")?t.type:t,b=f.call(t,"namespace")?t.namespace.split("."):[];// Don't do events on text and comment nodes
if(s=h=a=i=i||v,!(3===i.nodeType||8===i.nodeType||tv.test(y+E.event.triggered))&&(y.indexOf(".")>-1&&(y=// Namespaced trigger; create a regexp to match event type in handle()
(b=y.split(".")).shift(),b.sort()),c=0>y.indexOf(":")&&"on"+y,// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
// Caller can pass in a jQuery.Event object, Object, or just an event type string
(t=t[E.expando]?t:new E.Event(y,"object"==typeof t&&t)).isTrigger=r?2:3,t.namespace=b.join("."),t.rnamespace=t.namespace?RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,// Clean up the event in case it is being reused
t.result=void 0,t.target||(t.target=i),// Clone any incoming data and prepend the event, creating the handler arg list
n=null==n?[t]:E.makeArray(n,[t]),// Allow special events to draw outside the lines
d=E.event.special[y]||{},r||!d.trigger||!1!==d.trigger.apply(i,n))){// Determine event propagation path in advance, per W3C events spec (trac-9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
if(!r&&!d.noBubble&&!m(i)){for(l=d.delegateType||y,tv.test(l+y)||(s=s.parentNode);s;s=s.parentNode)p.push(s),a=s;a===(i.ownerDocument||v)&&p.push(a.defaultView||a.parentWindow||e)}for(// Fire handlers on the event path
o=0;(s=p[o++])&&!t.isPropagationStopped();)h=s,t.type=o>1?l:d.bindType||y,// jQuery handler
(u=(ei.get(s,"events")||Object.create(null))[t.type]&&ei.get(s,"handle"))&&u.apply(s,n),// Native handler
(u=c&&s[c])&&u.apply&&et(s)&&(t.result=u.apply(s,n),!1===t.result&&t.preventDefault());return t.type=y,!r&&!t.isDefaultPrevented()&&(!d._default||!1===d._default.apply(p.pop(),n))&&et(i)&&c&&g(i[y])&&!m(i)&&(// Don't re-trigger an onFOO event when we call its FOO() method
(a=i[c])&&(i[c]=null),// Prevent re-triggering of the same event, since we already bubbled it above
E.event.triggered=y,t.isPropagationStopped()&&h.addEventListener(y,ty),i[y](),t.isPropagationStopped()&&h.removeEventListener(y,ty),E.event.triggered=void 0,a&&(i[c]=a)),t.result}},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,t,n){var i=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(i,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}});var tb=/\[\]$/,t_=/\r?\n/g,tw=/^(?:submit|button|image|reset|file)$/i,tx=/^(?:input|select|textarea|keygen)/i;// Serialize an array of form elements or a set of
// key/values into a query string
E.param=function(e,t){var n,i=[],r=function(e,t){// If value is a function, invoke it and use its return value
var n=g(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){r(this.name,this.value)});else // did it), otherwise encode params recursively.
for(n in e)!function e(t,n,i,r){var o;if(Array.isArray(n))E.each(n,function(n,o){i||tb.test(t)?r(t,o):e(t+"["+("object"==typeof o&&null!=o?n:"")+"]",o,i,r)});else if(i||"object"!==_(n))r(t,n);else for(o in n)e(t+"["+o+"]",n[o],i,r)}(n,e[n],t,r);// Return the resulting serialization
return i.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!E(this).is(":disabled")&&tx.test(this.nodeName)&&!tw.test(e)&&(this.checked||!ey.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(t_,"\r\n")}}):{name:t.name,value:n.replace(t_,"\r\n")}}).get()}});var tE=/%20/g,tT=/#.*$/,tC=/([?&])_=[^&]*/,tS=/^(.*?):[ \t]*([^\r\n]*)$/mg,tk=/^(?:GET|HEAD)$/,tD=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */tA={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */tN={},tj="*/".concat("*"),tO=v.createElement("a");// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function tL(e){// dataTypeExpression is optional and defaults to "*"
return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,r=0,o=t.toLowerCase().match(U)||[];if(g(n))// For each dataType in the dataTypeExpression
for(;i=o[r++];)"+"===i[0]?(e[i=i.slice(1)||"*"]=e[i]||[]).unshift(n):(e[i]=e[i]||[]).push(n)}}// Base inspection function for prefilters and transports
function tI(e,t,n,i){var r={},o=e===tN;function s(a){var l;return r[a]=!0,E.each(e[a]||[],function(e,a){var c=a(t,n,i);return"string"!=typeof c||o||r[c]?o?!(l=c):void 0:(t.dataTypes.unshift(c),s(c),!1)}),l}return s(t.dataTypes[0])||!r["*"]&&s("*")}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function tP(e,t){var n,i,r=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n]);return i&&E.extend(!0,e,i),e}tO.href=tp.href,E.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:tp.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(tp.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":tj,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":!0,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":E.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){return t?tP(tP(e,E.ajaxSettings),t):tP(E.ajaxSettings,e)},ajaxPrefilter:tL(tA),ajaxTransport:tL(tN),// Main method
ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),// Force options to be an object
n=n||{};var i,r,o,s,a,l,c,u,f,d,h=E.ajaxSetup({},n),p=h.context||h,g=h.context&&(p.nodeType||p.jquery)?E(p):E.event,m=E.Deferred(),y=E.Callbacks("once memory"),b=h.statusCode||{},_={},w={},x="canceled",T={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(c){if(!s)for(s={};t=tS.exec(o);)s[t[1].toLowerCase()+" "]=(s[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=s[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},// Raw string
getAllResponseHeaders:function(){return c?o:null},// Caches the header
setRequestHeader:function(e,t){return null==c&&(_[e=w[e.toLowerCase()]=w[e.toLowerCase()]||e]=t),this},// Overrides response content-type header
overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},// Status-dependent callbacks
statusCode:function(e){var t;if(e){if(c)T.always(e[T.status]);else for(t in e)b[t]=[b[t],e[t]]}return this},// Cancel the request
abort:function(e){var t=e||x;return i&&i.abort(t),C(0,t),this}};// A cross-domain request is in order when the origin doesn't match the current origin.
if(// Attach deferreds
m.promise(T),// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (trac-10093: consistency with old signature)
// We also use the url parameter if available
h.url=((t||h.url||tp.href)+"").replace(tD,tp.protocol+"//"),// Alias method option to type as per ticket trac-12004
h.type=n.method||n.type||h.method||h.type,// Extract dataTypes list
h.dataTypes=(h.dataType||"*").toLowerCase().match(U)||[""],null==h.crossDomain){l=v.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{l.href=h.url,// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
l.href=l.href,h.crossDomain=tO.protocol+"//"+tO.host!=l.protocol+"//"+l.host}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
h.crossDomain=!0}}// If request was aborted inside a prefilter, stop there
if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=E.param(h.data,h.traditional)),// Apply prefilters
tI(tA,h,n,T),c)return T;// Check for headers option
for(f in// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
(u=E.event&&h.global)&&0==E.active++&&E.event.trigger("ajaxStart"),// Uppercase the type
h.type=h.type.toUpperCase(),// Determine if request has content
h.hasContent=!tk.test(h.type),// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
r=h.url.replace(tT,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(tE,"+")):(// Remember the hash so we can put it back
d=h.url.slice(r.length),h.data&&(h.processData||"string"==typeof h.data)&&(r+=(tm.test(r)?"&":"?")+h.data,// trac-9682: remove data so that it's not used in an eventual retry
delete h.data),!1===h.cache&&(r=r.replace(tC,"$1"),d=(tm.test(r)?"&":"?")+"_="+tg.guid+++d),// Put hash and anti-cache on the URL that will be requested (gh-1732)
h.url=r+d),h.ifModified&&(E.lastModified[r]&&T.setRequestHeader("If-Modified-Since",E.lastModified[r]),E.etag[r]&&T.setRequestHeader("If-None-Match",E.etag[r])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&T.setRequestHeader("Content-Type",h.contentType),// Set the Accepts header for the server, depending on the dataType
T.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+tj+"; q=0.01":""):h.accepts["*"]),h.headers)T.setRequestHeader(f,h.headers[f]);// Allow custom headers/mimetypes and early abort
if(h.beforeSend&&(!1===h.beforeSend.call(p,T,h)||c))return T.abort();// If no transport, we auto-abort
if(// Aborting is no longer a cancellation
x="abort",// Install callbacks on deferreds
y.add(h.complete),T.done(h.success),T.fail(h.error),// Get transport
i=tI(tN,h,n,T)){// If request was aborted inside ajaxSend, stop there
if(T.readyState=1,u&&g.trigger("ajaxSend",[T,h]),c)return T;h.async&&h.timeout>0&&(a=e.setTimeout(function(){T.abort("timeout")},h.timeout));try{c=!1,i.send(_,C)}catch(e){// Rethrow post-completion exceptions
if(c)throw e;// Propagate others as results
C(-1,e)}}else C(-1,"No Transport");// Callback for when everything is done
function C(t,n,s,l){var f,d,v,_,w,x=n;// Ignore repeat invocations
c||(c=!0,a&&e.clearTimeout(a),// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
i=void 0,// Cache response headers
o=l||"",// Set readyState
T.readyState=t>0?4:0,// Determine if successful
f=t>=200&&t<300||304===t,s&&(_=/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function(e,t,n){// Remove auto dataType and get content-type in the process
for(var i,r,o,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));// Check if we're dealing with a known content-type
if(i){for(r in a)if(a[r]&&a[r].test(i)){l.unshift(r);break}}// Check to see if we have a response for the expected dataType
if(l[0]in n)o=l[0];else{// Try convertible dataTypes
for(r in n){if(!l[0]||e.converters[r+" "+l[0]]){o=r;break}s||(s=r)}// Or just use first one
o=o||s}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(o)return o!==l[0]&&l.unshift(o),n[o]}(h,T,s)),!f&&E.inArray("script",h.dataTypes)>-1&&0>E.inArray("json",h.dataTypes)&&(h.converters["text script"]=function(){}),// Convert no matter what (that way responseXXX fields are always set)
_=/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function(e,t,n,i){var r,o,s,a,l,c={},u=e.dataTypes.slice();// Create converters map with lowercased keys
if(u[1])for(s in e.converters)c[s.toLowerCase()]=e.converters[s];// Convert to each sequential dataType
for(o=u.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=u.shift()){// There's only work to do if current dataType is non-auto
if("*"===o)o=l;else if("*"!==l&&l!==o){// If none found, seek a pair
if(!// Seek a direct converter
(s=c[l+" "+o]||c["* "+o])){for(r in c)if(// If conv2 outputs current
(a=r.split(" "))[1]===o&&// If prev can be converted to accepted input
(s=c[l+" "+a[0]]||c["* "+a[0]])){// Condense equivalence converters
!0===s?s=c[r]:!0!==c[r]&&(o=a[0],u.unshift(a[1]));break}}// Apply converter (if not an equivalence)
if(!0!==s){// Unless errors are allowed to bubble, catch and return them
if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+o}}}}}return{state:"success",data:t}}(h,_,T,f),f?(h.ifModified&&((w=T.getResponseHeader("Last-Modified"))&&(E.lastModified[r]=w),(w=T.getResponseHeader("etag"))&&(E.etag[r]=w)),204===t||"HEAD"===h.type?x="nocontent":304===t?x="notmodified":(x=_.state,d=_.data,f=!(v=_.error))):(// Extract error from statusText and normalize for non-aborts
v=x,(t||!x)&&(x="error",t<0&&(t=0))),// Set data for the fake xhr object
T.status=t,T.statusText=(n||x)+"",f?m.resolveWith(p,[d,x,T]):m.rejectWith(p,[T,x,v]),// Status-dependent callbacks
T.statusCode(b),b=void 0,u&&g.trigger(f?"ajaxSuccess":"ajaxError",[T,h,f?d:v]),// Complete
y.fireWith(p,[T,x]),!u||(g.trigger("ajaxComplete",[T,h]),--E.active||E.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,t){E[t]=function(e,n,i,r){// The url can be an options object (which then must have .url)
return g(n)&&(r=r||i,i=n,n=void 0),E.ajax(E.extend({url:e,type:t,dataType:r,data:n,success:i},E.isPlainObject(e)&&e))}}),E.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),E._evalUrl=function(e,t,n){return E.ajax({url:e,// Make this explicit, since user can override this through ajaxSetup (trac-11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,// Only evaluate the response if it is successful (gh-4126)
// dataFilter is not invoked for failure responses, so using it instead
// of the default converter is kludgy but it works.
converters:{"text script":function(){}},dataFilter:function(e){E.globalEval(e,t,n)}})},E.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),// The elements to wrap the target around
t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){E(this).wrapInner(e.call(this,t))}):this.each(function(){var t=E(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){E(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var tq={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// trac-1450: sometimes IE returns 1223 when it should be 204
1223:204},tH=E.ajaxSettings.xhr();p.cors=!!tH&&"withCredentials"in tH,p.ajax=tH=!!tH,E.ajaxTransport(function(t){var n,i;// Cross domain only allowed if supported through XMLHttpRequest
if(p.cors||tH&&!t.crossDomain)return{send:function(r,o){var s,a=t.xhr();// Apply custom fields if provided
if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(s in t.xhrFields)a[s]=t.xhrFields[s];// Set headers
for(s in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)a.setRequestHeader(s,r[s]);// Callback
n=function(e){return function(){n&&(n=i=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o(tq[a.status]||a.status,a.statusText,"text"!==// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},// Listen to events
a.onload=n(),i=a.onerror=a.ontimeout=n("error"),void 0!==a.onabort?a.onabort=i:a.onreadystatechange=function(){// Check readyState before timeout as it changes
4===a.readyState&&// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
e.setTimeout(function(){n&&i()})},// Create the abort callback
n=n("abort");try{// Do send the request (this may raise an exception)
a.send(t.hasContent&&t.data||null)}catch(e){// trac-14683: Only rethrow if this hasn't been notified as an error yet
if(n)throw e}},abort:function(){n&&n()}}}),// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),// Install script dataType
E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),// Handle cache's special case and crossDomain
E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),// Bind script tag hack transport
E.ajaxTransport("script",function(e){// This transport only deals with cross domain or forced-by-attrs requests
if(e.crossDomain||e.scriptAttrs){var t,n;return{send:function(i,r){t=E("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&r("error"===e.type?404:200,e.type)}),// Use native DOM manipulation to avoid our domManip AJAX trickery
v.head.appendChild(t[0])},abort:function(){n&&n()}}}});var tR=[],tF=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=tR.pop()||E.expando+"_"+tg.guid++;return this[e]=!0,e}}),// Detect, normalize options and install callbacks for jsonp requests
E.ajaxPrefilter("json jsonp",function(t,n,i){var r,o,s,a=!1!==t.jsonp&&(tF.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&tF.test(t.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(a||"jsonp"===t.dataTypes[0])// Delegate to script
return(// Get callback name, remembering preexisting value associated with it
r=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(tF,"$1"+r):!1!==t.jsonp&&(t.url+=(tm.test(t.url)?"&":"?")+t.jsonp+"="+r),// Use data converter to retrieve json after script execution
t.converters["script json"]=function(){return s||E.error(r+" was not called"),s[0]},// Force json dataType
t.dataTypes[0]="json",// Install callback
o=e[r],e[r]=function(){s=arguments},// Clean-up function (fires after converters)
i.always(function(){void 0===o?E(e).removeProp(r):e[r]=o,t[r]&&(// Make sure that re-using the options doesn't screw things around
t.jsonpCallback=n.jsonpCallback,// Save the callback name for future use
tR.push(r)),s&&g(o)&&o(s[0]),s=o=void 0}),"script")}),// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
p.createHTMLDocument=((n=v.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===n.childNodes.length),// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
E.parseHTML=function(e,t,n){var i,r,o;return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(p.createHTMLDocument?(// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
(i=(t=v.implementation.createHTMLDocument("")).createElement("base")).href=v.location.href,t.head.appendChild(i)):t=v),r=q.exec(e),o=!n&&[],r)?[t.createElement(r[1])]:(r=eC([e],t,o),o&&o.length&&E(o).remove(),E.merge([],r.childNodes))},/**
 * Load a url into a page
 */E.fn.load=function(e,t,n){var i,r,o,s=this,a=e.indexOf(" ");return a>-1&&(i=tu(e.slice(a)),e=e.slice(0,a)),g(t)?(// We assume that it's the callback
n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),s.length>0&&E.ajax({url:e,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:r||"GET",dataType:"html",data:t}).done(function(e){// Save response for use in complete callback
o=arguments,s.html(i?// Exclude scripts to avoid IE 'Permission Denied' errors
E("<div>").append(E.parseHTML(e)).find(i):e);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(n&&function(e,t){s.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.expr.pseudos.animated=function(e){return E.grep(E.timers,function(t){return e===t.elem}).length},E.offset={setOffset:function(e,t,n){var i,r,o,s,a,l,c=E.css(e,"position"),u=E(e),f={};"static"===c&&(e.style.position="relative"),a=u.offset(),o=E.css(e,"top"),l=E.css(e,"left"),("absolute"===c||"fixed"===c)&&(o+l).indexOf("auto")>-1?(s=(i=u.position()).top,r=i.left):(s=parseFloat(o)||0,r=parseFloat(l)||0),g(t)&&(t=t.call(e,n,E.extend({},a))),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+r),"using"in t?t.using.call(e,f):u.css(f)}},E.fn.extend({// offset() relates an element's border box to the document origin
offset:function(e){// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each(function(t){E.offset.setOffset(this,e,t)});var t,n,i=this[0];if(i)return(// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
i.getClientRects().length?(// Get document-relative position by adding viewport scroll to viewport-relative gBCR
t=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0})},// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var e,t,n,i=this[0],r={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===E.css(i,"position"))t=i.getBoundingClientRect();else{for(t=this.offset(),// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&(// Incorporate borders into its offset, since they are outside its content origin
r=E(e).offset(),r.top+=E.css(e,"borderTopWidth",!0),r.left+=E.css(e,"borderLeftWidth",!0))}// Subtract parent offsets and element margins
return{top:t.top-r.top-E.css(i,"marginTop",!0),left:t.left-r.left-E.css(i,"marginLeft",!0)}}},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===E.css(e,"position");)e=e.offsetParent;return e||ef})}}),// Create scrollLeft and scrollTop methods
E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;E.fn[e]=function(i){return K(this,function(e,i,r){// Coalesce documents and windows
var o;if(m(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===r)return o?o[t]:e[i];o?o.scrollTo(n?o.pageXOffset:r,n?r:o.pageYOffset):e[i]=r},e,i,arguments.length)}}),// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
E.each(["top","left"],function(e,t){E.cssHooks[t]=ez(p.pixelPosition,function(e,n){if(n)// If curCSS returns percentage, fallback to offset
return n=e$(e,t),eM.test(n)?E(e).position()[t]+"px":n})}),// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
E.each({Height:"height",Width:"width"},function(e,t){E.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){// Margin is only for outerHeight, outerWidth
E.fn[i]=function(r,o){var s=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===o?"margin":"border");return K(this,function(t,n,r){var o;return m(t)?0===i.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===r?E.css(t,n,a):E.style(t,n,r,a)},t,s?r:void 0,s)}})}),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){// ( namespace ) or ( selector, types [, fn] )
return 1==arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){// Handle event binding
E.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}});// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var tM=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
E.proxy=function(e,t){var n,i,r;// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return(// Simulated bind
i=o.call(arguments,2),// Set the guid of unique handler to the same of original handler, so it can be removed
(r=function(){return e.apply(t||this,i.concat(o.call(arguments)))}).guid=e.guid=e.guid||E.guid++,r)},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=C,E.isFunction=g,E.isWindow=m,E.camelCase=ee,E.type=_,E.now=Date.now,E.isNumeric=function(e){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=E.type(e);return("number"===t||"string"===t)&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(e-parseFloat(e))},E.trim=function(e){return null==e?"":(e+"").replace(tM,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var tW=e.jQuery,tB=e.$;return E.noConflict=function(t){return e.$===E&&(e.$=tB),t&&e.jQuery===E&&(e.jQuery=tW),E},void 0===t&&(e.jQuery=e.$=E),E},"object"==typeof e.exports?// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket trac-14549 for more info.
e.exports=n.document?i(n,!0):function(e){if(!e.document)throw Error("jQuery requires a window with a document");return i(e)}:i(n)}),r("kJWRP",function(t,n){Object.defineProperty(t.exports,"__esModule",{value:!0,configurable:!0}),Object.defineProperty(t.exports,"default",{get:()=>Z,set:void 0,enumerable:!0,configurable:!0});/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */var i="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,r=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(i&&navigator.userAgent.indexOf(e[t])>=0)return 1;return 0}(),o=i&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},r))}};/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */function s(e){return e&&"[object Function]"===({}).toString.call(e)}/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */function a(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */function l(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */function c(e){// Return body, `getScroll` will take care to get the correct `scrollTop` from it
if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}// Firefox want us to check `-x` and `-y` variations as well
var t=a(e),n=t.overflow,i=t.overflowX,r=t.overflowY;return/(auto|scroll|overlay)/.test(n+r+i)?e:c(l(e))}/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */function u(e){return e&&e.referenceNode?e.referenceNode:e}var f=i&&!!(window.MSInputMethodContext&&document.documentMode),d=i&&/MSIE 10/.test(navigator.userAgent);/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */function h(e){return 11===e?f:10===e?d:f||d}/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */function p(e){if(!e)return document.documentElement;// Skip hidden elements which don't have an offsetParent
for(var t=h(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===a(n,"position")?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */function g(e){return null!==e.parentNode?g(e.parentNode):e}/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */function m(e,t){// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;// Here we make sure to give as "start" the element that comes first in the DOM
var n,i=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,r=i?e:t,o=i?t:e,s=document.createRange();s.setStart(r,0),s.setEnd(o,0);var a=s.commonAncestorContainer;// Both nodes are inside #document
if(e!==a&&t!==a||r.contains(o))return"BODY"!==(n=a.nodeName)&&("HTML"===n||p(a.firstElementChild)===a)?a:p(a);// one of the nodes is inside shadowDOM, find which one
var l=g(e);return l.host?m(l.host,t):m(e,g(t).host)}/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",i=e.nodeName;if("BODY"===i||"HTML"===i){var r=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||r)[n]}return e[n]}/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */function y(e,t){var n="x"===t?"Left":"Top";return parseFloat(e["border"+n+"Width"])+parseFloat(e["border"+("Left"===n?"Right":"Bottom")+"Width"])}function b(e,t,n,i){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],h(10)?parseInt(n["offset"+e])+parseInt(i["margin"+("Height"===e?"Top":"Left")])+parseInt(i["margin"+("Height"===e?"Bottom":"Right")]):0)}function _(e){var t=e.body,n=e.documentElement,i=h(10)&&getComputedStyle(n);return{height:b("Height",t,n,i),width:b("Width",t,n,i)}}var w=function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")},x=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),E=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */function C(e){return T({},e,{right:e.left+e.width,bottom:e.top+e.height})}/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */function S(e){var t={};// IE10 10 FIX: Please, don't ask, the element isn't
// considered in DOM in some circumstances...
// This isn't reproducible in IE10 compatibility mode of IE11
try{if(h(10)){t=e.getBoundingClientRect();var n=v(e,"top"),i=v(e,"left");t.top+=n,t.left+=i,t.bottom+=n,t.right+=i}else t=e.getBoundingClientRect()}catch(e){}var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},o="HTML"===e.nodeName?_(e.ownerDocument):{},s=o.width||e.clientWidth||r.width,l=o.height||e.clientHeight||r.height,c=e.offsetWidth-s,u=e.offsetHeight-l;// if an hypothetical scrollbar is detected, we must be sure it's not a `border`
// we make this check conditional for performance reasons
if(c||u){var f=a(e);c-=y(f,"x"),u-=y(f,"y"),r.width-=c,r.height-=u}return C(r)}function k(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=h(10),r="HTML"===t.nodeName,o=S(e),s=S(t),l=c(e),u=a(t),f=parseFloat(u.borderTopWidth),d=parseFloat(u.borderLeftWidth);n&&r&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var p=C({top:o.top-s.top-f,left:o.left-s.left-d,width:o.width,height:o.height});// Subtract margins of documentElement in case it's being used as parent
// we do this only on HTML because it's the only element that behaves
// differently when margins are applied to it. The margins are included in
// the box of the documentElement, in the other cases not.
if(p.marginTop=0,p.marginLeft=0,!i&&r){var g=parseFloat(u.marginTop),m=parseFloat(u.marginLeft);p.top-=f-g,p.bottom-=f-g,p.left-=d-m,p.right-=d-m,// Attach marginTop and marginLeft because in some circumstances we may need them
p.marginTop=g,p.marginLeft=m}return(i&&!n?t.contains(l):t===l&&"BODY"!==l.nodeName)&&(p=/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=v(t,"top"),r=v(t,"left"),o=n?-1:1;return e.top+=i*o,e.bottom+=i*o,e.left+=r*o,e.right+=r*o,e}(p,t)),p}/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */function D(e){// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!e||!e.parentElement||h())return document.documentElement;for(var t=e.parentElement;t&&"none"===a(t,"transform");)t=t.parentElement;return t||document.documentElement}/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */function A(e,t,n,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o={top:0,left:0},s=r?D(e):m(e,u(t));// Handle viewport case
if("viewport"===i)o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,i=k(e,n),r=Math.max(n.clientWidth,window.innerWidth||0),o=Math.max(n.clientHeight,window.innerHeight||0),s=t?0:v(n),a=t?0:v(n,"left");return C({top:s-i.top+i.marginTop,left:a-i.left+i.marginLeft,width:r,height:o})}(s,r);else{// Handle other cases based on DOM element used as boundaries
var f=void 0;"scrollParent"===i?"BODY"===(f=c(l(t))).nodeName&&(f=e.ownerDocument.documentElement):f="window"===i?e.ownerDocument.documentElement:i;var d=k(f,s,r);// In case of HTML, we need a different computation
if("HTML"===f.nodeName&&!/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */function e(t){var n=t.nodeName;if("BODY"===n||"HTML"===n)return!1;if("fixed"===a(t,"position"))return!0;var i=l(t);return!!i&&e(i)}(s)){var h=_(e.ownerDocument),p=h.height,g=h.width;o.top+=d.top-d.marginTop,o.bottom=p+d.top,o.left+=d.left-d.marginLeft,o.right=g+d.left}else o=d}var y="number"==typeof// Add paddings
(n=n||0);return o.left+=y?n:n.left||0,o.top+=y?n:n.top||0,o.right-=y?n:n.right||0,o.bottom-=y?n:n.bottom||0,o}/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function N(e,t,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var s=A(n,i,o,r),a={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},l=Object.keys(a).map(function(e){var t;return T({key:e},a[e],{area:(t=a[e]).width*t.height})}).sort(function(e,t){return t.area-e.area}),c=l.filter(function(e){var t=e.width,i=e.height;return t>=n.clientWidth&&i>=n.clientHeight}),u=c.length>0?c[0].key:l[0].key,f=e.split("-")[1];return u+(f?"-"+f:"")}/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */function j(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=i?D(t):m(t,u(n));return k(n,r,i)}/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */function O(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),i=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+i,height:e.offsetHeight+n}}/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */function L(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */function I(e,t,n){n=n.split("-")[0];// Get popper node sizes
var i=O(e),r={width:i.width,height:i.height},o=-1!==["right","left"].indexOf(n),s=o?"top":"left",a=o?"left":"top",l=o?"height":"width";return r[s]=t[s]+t[l]/2-i[l]/2,n===a?r[a]=t[a]-i[o?"width":"height"]:r[a]=t[L(a)],r}/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */function P(e,t){return(// use native find if supported
Array.prototype.find?e.find(t):e.filter(t)[0])}/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */function q(e,t,n){return(void 0===n?e:e.slice(0,/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */function(e,t,n){// use native findIndex if supported
if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});// use `find` + `indexOf` if `findIndex` isn't supported
var i=P(e,function(e){return e[t]===n});return e.indexOf(i)}(e,"name",n))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;// eslint-disable-line dot-notation
e.enabled&&s(n)&&(// Add properties to offsets to make them a complete clientRect object
// we do this before each modifier to make sure the previous one doesn't
// mess with these values
t.offsets.popper=C(t.offsets.popper),t.offsets.reference=C(t.offsets.reference),t=n(t,e))}),t}/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */function H(){// if popper is destroyed, don't perform any further update
if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};// compute reference element offsets
e.offsets.reference=j(this.state,this.popper,this.reference,this.options.positionFixed),// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
e.placement=N(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),// store the computed placement inside `originalPlacement`
e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,// compute the popper offsets
e.offsets.popper=I(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",// run the modifiers
e=q(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */function R(e,t){return e.some(function(e){var n=e.name;return e.enabled&&n===t})}/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */function F(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),i=0;i<t.length;i++){var r=t[i],o=r?""+r+n:e;if(void 0!==document.body.style[o])return o}return null}/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */function M(){return this.state.isDestroyed=!0,R(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[F("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */function W(e){var t=e.ownerDocument;return t?t.defaultView:window}/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */function B(){if(!this.state.eventsEnabled){var e,t,n,i;this.state=(e=this.reference,this.options,t=this.state,n=this.scheduleUpdate,// Resize event listener on window
t.updateBound=n,W(e).addEventListener("resize",t.updateBound,{passive:!0}),function e(t,n,i,r){var o="BODY"===t.nodeName,s=o?t.ownerDocument.defaultView:t;s.addEventListener(n,i,{passive:!0}),o||e(c(s.parentNode),n,i,r),r.push(s)}(i=c(e),"scroll",t.updateBound,t.scrollParents),t.scrollElement=i,t.eventsEnabled=!0,t)}}/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */function U(){if(this.state.eventsEnabled){var e,t;cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,// Remove resize event listener on window
W(e).removeEventListener("resize",t.updateBound),// Remove scroll event listener on scroll parents
t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),// Reset state
t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t)}}/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */function Q(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */function $(e,t){Object.keys(t).forEach(function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&Q(t[n])&&(i="px"),e.style[n]=t[n]+i})}var z=i&&/Firefox/i.test(navigator.userAgent);/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */function V(e,t,n){var i=P(e,function(e){return e.name===t}),r=!!i&&e.some(function(e){return e.name===n&&e.enabled&&e.order<i.order});if(!r){var o="`"+t+"`";console.warn("`"+n+"` modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return r}/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */var X=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Y=X.slice(3);/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */function K(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Y.indexOf(e),i=Y.slice(n+1).concat(Y.slice(0,n));return t?i.reverse():i}var G={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},J=function(){/**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */function e(t,n){var i=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};w(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},// make update() debounced, so that it only runs at most once-per-tick
this.update=o(this.update.bind(this)),// with {} we create a new object with the options inside it
this.options=T({},e.Defaults,r),// init state
this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},// get reference and popper elements (allow jQuery wrappers)
this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,// Deep merge modifiers options
this.options.modifiers={},Object.keys(T({},e.Defaults.modifiers,r.modifiers)).forEach(function(t){i.options.modifiers[t]=T({},e.Defaults.modifiers[t]||{},r.modifiers?r.modifiers[t]:{})}),// Refactoring modifiers' list (Object => Array)
this.modifiers=Object.keys(this.options.modifiers).map(function(e){return T({name:e},i.options.modifiers[e])})// sort the modifiers by order
.sort(function(e,t){return e.order-t.order}),// modifiers have the ability to execute arbitrary code when Popper.js get inited
// such code is executed in the same order of its modifier
// they could add new properties to their options configuration
// BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
this.modifiers.forEach(function(e){e.enabled&&s(e.onLoad)&&e.onLoad(i.reference,i.popper,i.options,e,i.state)}),// fire the first update to position the popper in the right place
this.update();var a=this.options.eventsEnabled;a&&this.enableEventListeners(),this.state.eventsEnabled=a}return(// We can't use class properties because they don't get listed in the
// class prototype and break stuff like Sinon stubs
x(e,[{key:"update",value:function(){return H.call(this)}},{key:"destroy",value:function(){return M.call(this)}},{key:"enableEventListeners",value:function(){return B.call(this)}},{key:"disableEventListeners",value:function(){return U.call(this)}}]),e)}();/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */J.Utils=("undefined"!=typeof window?window:e).PopperUtils,J.placements=X,J.Defaults={/**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */placement:"bottom",/**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */positionFixed:!1,/**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */eventsEnabled:!0,/**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */removeOnDestroy:!1,/**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */onCreate:function(){},/**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */onUpdate:function(){},/**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */modifiers:{/**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */shift:{/** @prop {number} order=100 - Index used to define the order of execution */order:100,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function(e){var t=e.placement,n=t.split("-")[0],i=t.split("-")[1];// if shift shiftvariation is specified, run the modifier
if(i){var r=e.offsets,o=r.reference,s=r.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",u={start:E({},l,o[l]),end:E({},l,o[l]+o[c]-s[c])};e.offsets.popper=T({},s,u[i])}return e}},/**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */offset:{/** @prop {number} order=200 - Index used to define the order of execution */order:200,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */function(e,t){var n,i,r,o,s,a=t.offset,l=e.placement,c=e.offsets,u=c.popper,f=c.reference,d=l.split("-")[0],h=void 0;return Q(+a)?h=[+a,0]:(n=[0,0],i=-1!==["right","left"].indexOf(d),o=(r=a.split(/(\+|\-)/).map(function(e){return e.trim()})).indexOf(P(r,function(e){return -1!==e.search(/,|\s/)})),r[o]&&-1===r[o].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."),s=/\s*,\s*|\s+/,// Loop trough the offsets arrays and execute the operations
(-1!==o?[r.slice(0,o).concat([r[o].split(s)[0]]),[r[o].split(s)[1]].concat(r.slice(o+1))]:[r]).map(function(e,t){// Most of the units rely on the orientation of the popper
var n=(1===t?!i:i)?"height":"width",r=!1;return e// This aggregates any `+` or `-` sign that aren't considered operators
// e.g.: 10 + +5 => [10, +, +5]
.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,r=!0,e):r?(e[e.length-1]+=t,r=!1,e):e.concat(t)},[])// Here we convert the string values into number values (in px)
.map(function(e){return(/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */function(e,t,n,i){// separate value from unit
var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+r[1],s=r[2];// If it's not a number it's an operator, I guess
if(!o)return e;if(0===s.indexOf("%")){var a=void 0;return C("%p"===s?n:i)[t]/100*o}return"vh"!==s&&"vw"!==s?o:("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o}(e,n,u,f))})}).forEach(function(e,t){e.forEach(function(i,r){Q(i)&&(n[t]+=i*("-"===e[r-1]?-1:1))})}),h=n),"left"===d?(u.top+=h[0],u.left-=h[1]):"right"===d?(u.top+=h[0],u.left+=h[1]):"top"===d?(u.left+=h[0],u.top-=h[1]):"bottom"===d&&(u.left+=h[0],u.top+=h[1]),e.popper=u,e},/** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */offset:0},/**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */preventOverflow:{/** @prop {number} order=300 - Index used to define the order of execution */order:300,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function(e,t){var n=t.boundariesElement||p(e.instance.popper);e.instance.reference===n&&(n=p(n));// NOTE: DOM access here
// resets the popper's position so that the document size can be calculated excluding
// the size of the popper element itself
var i=F("transform"),r=e.instance.popper.style,o=r.top,s=r.left,a=r[i];r.top="",r.left="",r[i]="";var l=A(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);// NOTE: DOM access here
// restores the original style properties after the offsets have been computed
r.top=o,r.left=s,r[i]=a,t.boundaries=l;var c=t.priority,u=e.offsets.popper,f={primary:function(e){var n=u[e];return u[e]<l[e]&&!t.escapeWithReference&&(n=Math.max(u[e],l[e])),E({},e,n)},secondary:function(e){var n="right"===e?"left":"top",i=u[n];return u[e]>l[e]&&!t.escapeWithReference&&(i=Math.min(u[n],l[e]-("right"===e?u.width:u.height))),E({},n,i)}};return c.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";u=T({},u,f[t](e))}),e.offsets.popper=u,e},/**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */priority:["left","right","top","bottom"],/**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */padding:5,/**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */boundariesElement:"scrollParent"},/**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */keepTogether:{/** @prop {number} order=400 - Index used to define the order of execution */order:400,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function(e){var t=e.offsets,n=t.popper,i=t.reference,r=e.placement.split("-")[0],o=Math.floor,s=-1!==["top","bottom"].indexOf(r),a=s?"right":"bottom",l=s?"left":"top";return n[a]<o(i[l])&&(e.offsets.popper[l]=o(i[l])-n[s?"width":"height"]),n[l]>o(i[a])&&(e.offsets.popper[l]=o(i[a])),e}},/**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */arrow:{/** @prop {number} order=500 - Index used to define the order of execution */order:500,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function(e,t){// arrow depends on keepTogether in order to work
if(!V(e.instance.modifiers,"arrow","keepTogether"))return e;var n,i=t.element;// if arrowElement is a string, suppose it's a CSS selector
if("string"==typeof i)// if arrowElement is not found, don't run the modifier
{if(!(i=e.instance.popper.querySelector(i)))return e}else // provided DOM node is child of its popper node
if(!e.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var r=e.placement.split("-")[0],o=e.offsets,s=o.popper,l=o.reference,c=-1!==["left","right"].indexOf(r),u=c?"height":"width",f=c?"Top":"Left",d=f.toLowerCase(),h=c?"bottom":"right",p=O(i)[u];l[h]-p<s[d]&&(e.offsets.popper[d]-=s[d]-(l[h]-p)),l[d]+p>s[h]&&(e.offsets.popper[d]+=l[d]+p-s[h]),e.offsets.popper=C(e.offsets.popper);// compute center of the popper
var g=l[d]+l[u]/2-p/2,m=a(e.instance.popper),v=parseFloat(m["margin"+f]),y=parseFloat(m["border"+f+"Width"]),b=g-e.offsets.popper[d]-v-y;return(// prevent arrowElement from being placed not contiguously to its popper
b=Math.max(Math.min(s[u]-p,b),0),e.arrowElement=i,e.offsets.arrow=(E(n={},d,Math.round(b)),E(n,c?"left":"top",""),n),e)},/** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */element:"[x-arrow]"},/**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */flip:{/** @prop {number} order=600 - Index used to define the order of execution */order:600,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function(e,t){// if `inner` modifier is enabled, we can't use the `flip` modifier
if(R(e.instance.modifiers,"inner")||e.flipped&&e.placement===e.originalPlacement)return e;var n=A(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),i=e.placement.split("-")[0],r=L(i),o=e.placement.split("-")[1]||"",s=[];switch(t.behavior){case G.FLIP:s=[i,r];break;case G.CLOCKWISE:s=K(i);break;case G.COUNTERCLOCKWISE:s=K(i,!0);break;default:s=t.behavior}return s.forEach(function(a,l){if(i!==a||s.length===l+1)return e;r=L(i=e.placement.split("-")[0]);var c,u=e.offsets.popper,f=e.offsets.reference,d=Math.floor,h="left"===i&&d(u.right)>d(f.left)||"right"===i&&d(u.left)<d(f.right)||"top"===i&&d(u.bottom)>d(f.top)||"bottom"===i&&d(u.top)<d(f.bottom),p=d(u.left)<d(n.left),g=d(u.right)>d(n.right),m=d(u.top)<d(n.top),v=d(u.bottom)>d(n.bottom),y="left"===i&&p||"right"===i&&g||"top"===i&&m||"bottom"===i&&v,b=-1!==["top","bottom"].indexOf(i),_=!!t.flipVariations&&(b&&"start"===o&&p||b&&"end"===o&&g||!b&&"start"===o&&m||!b&&"end"===o&&v),w=!!t.flipVariationsByContent&&(b&&"start"===o&&g||b&&"end"===o&&p||!b&&"start"===o&&v||!b&&"end"===o&&m),x=_||w;(h||y||x)&&(// this boolean to detect any flip loop
e.flipped=!0,(h||y)&&(i=s[l+1]),x&&(o="end"===(c=o)?"start":"start"===c?"end":c),e.placement=i+(o?"-"+o:""),// this object contains `position`, we want to preserve it along with
// any additional property we may add in the future
e.offsets.popper=T({},e.offsets.popper,I(e.instance.popper,e.offsets.reference,e.placement)),e=q(e.instance.modifiers,e,"flip"))}),e},/**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */behavior:"flip",/**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */padding:5,/**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */boundariesElement:"viewport",/**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */flipVariations:!1,/**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */flipVariationsByContent:!1},/**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */inner:{/** @prop {number} order=700 - Index used to define the order of execution */order:700,/** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */enabled:!1,/** @prop {ModifierFn} */fn:/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function(e){var t=e.placement,n=t.split("-")[0],i=e.offsets,r=i.popper,o=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return r[s?"left":"top"]=o[n]-(a?r[s?"width":"height"]:0),e.placement=L(t),e.offsets.popper=C(r),e}},/**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */hide:{/** @prop {number} order=800 - Index used to define the order of execution */order:800,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function(e){if(!V(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=P(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){// Avoid unnecessary DOM access if visibility hasn't changed
if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{// Avoid unnecessary DOM access if visibility hasn't changed
if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},/**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */computeStyle:{/** @prop {number} order=850 - Index used to define the order of execution */order:850,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function(e,t){var n,i,r,o,s,a,l,c,u,f,d,h,g=t.x,m=t.y,v=e.offsets.popper,y=P(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==y&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var b=void 0!==y?y:t.gpuAcceleration,_=p(e.instance.popper),w=S(_),x={position:v.position},E=(n=window.devicePixelRatio<2||!z,r=(i=e.offsets).popper,o=i.reference,s=Math.round,a=function(e){return e},l=s(o.width),c=s(r.width),u=-1!==["left","right"].indexOf(e.placement),f=-1!==e.placement.indexOf("-"),d=n?u||f||l%2==c%2?s:Math.floor:a,h=n?s:a,{left:d(l%2==1&&c%2==1&&!f&&n?r.left-1:r.left),top:h(r.top),bottom:h(r.bottom),right:d(r.right)}),C="bottom"===g?"top":"bottom",k="right"===m?"left":"right",D=F("transform"),A=void 0,N=void 0;N="bottom"===C?"HTML"===_.nodeName?-_.clientHeight+E.bottom:-w.height+E.bottom:E.top,A="right"===k?"HTML"===_.nodeName?-_.clientWidth+E.right:-w.width+E.right:E.left,b&&D?(x[D]="translate3d("+A+"px, "+N+"px, 0)",x[C]=0,x[k]=0,x.willChange="transform"):(x[C]=N*("bottom"===C?-1:1),x[k]=A*("right"===k?-1:1),x.willChange=C+", "+k);// Attributes
var j={"x-placement":e.placement};return(// Update `data` attributes, styles and arrowStyles
e.attributes=T({},j,e.attributes),e.styles=T({},x,e.styles),e.arrowStyles=T({},e.offsets.arrow,e.arrowStyles),e)},/**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */gpuAcceleration:!0,/**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */x:"bottom",/**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */y:"right"},/**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */applyStyle:{/** @prop {number} order=900 - Index used to define the order of execution */order:900,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */function(e){return(// any property present in `data.styles` will be applied to the popper,
// in this way we can make the 3rd party modifiers add custom styles to it
// Be aware, modifiers could override the properties defined in the previous
// lines of this modifier!
$(e.instance.popper,e.styles),// any property present in `data.attributes` will be applied to the popper,
// they will be set as HTML attributes of the element
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */function(e,t){Object.keys(t).forEach(function(n){!1!==t[n]?e.setAttribute(n,t[n]):e.removeAttribute(n)})}(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&$(e.arrowElement,e.arrowStyles),e)},/** @prop {Function} */onLoad:/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */function(e,t,n,i,r){// compute reference element offsets
var o=j(r,t,e,n.positionFixed),s=N(n.placement,o,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",s),// Apply `position` to popper before anything else because
// without the position applied we can't guarantee correct computations
$(t,{position:n.positionFixed?"fixed":"absolute"}),n},/**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */gpuAcceleration:void 0}}};var Z=J}),!function(e,t,n){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){var i;i=n[t],t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;var a={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do e+=~~(1e6*Math.random());while(document.getElementById(e))return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");if(!t||"#"===t){var n=e.getAttribute("href");t=n&&"#"!==n?n.trim():""}try{return document.querySelector(t)?t:null}catch(e){return null}},getTransitionDurationFromElement:function(e){if(!e)return 0;var n=t(e).css("transition-duration"),i=t(e).css("transition-delay"),r=parseFloat(n),o=parseFloat(i);return r||o?(n=n.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(n)+parseFloat(i))):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(e){t(e).trigger("transitionend")},supportsTransitionEnd:function(){return!0},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var r=n[i],o=t[i],s=o&&a.isElement(o)?"element":null==o?""+o:({}).toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(r).test(s))throw Error(e.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+r+'".')}},findShadowRoot:function(e){if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){var t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?a.findShadowRoot(e.parentNode):null},jQueryDetection:function(){if(void 0===t)throw TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};a.jQueryDetection(),t.fn.emulateTransitionEnd=function(e){var n=this,i=!1;return t(this).one(a.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||a.triggerTransitionEnd(n)},e),this},t.event.special[a.TRANSITION_END]={bindType:"transitionend",delegateType:"transitionend",handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}};var l="alert",c=t.fn[l],u=function(){function e(e){this._element=e}var n=e.prototype;return n.close=function(e){var t=this._element;e&&(t=this._getRootElement(e)),this._triggerCloseEvent(t).isDefaultPrevented()||this._removeElement(t)},n.dispose=function(){t.removeData(this._element,"bs.alert"),this._element=null},n._getRootElement=function(e){var n=a.getSelectorFromElement(e),i=!1;return n&&(i=document.querySelector(n)),i||(i=t(e).closest(".alert")[0]),i},n._triggerCloseEvent=function(e){var n=t.Event("close.bs.alert");return t(e).trigger(n),n},n._removeElement=function(e){var n=this;if(t(e).removeClass("show"),t(e).hasClass("fade")){var i=a.getTransitionDurationFromElement(e);t(e).one(a.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(i)}else this._destroyElement(e)},n._destroyElement=function(e){t(e).detach().trigger("closed.bs.alert").remove()},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),r=i.data("bs.alert");r||(r=new e(this),i.data("bs.alert",r)),"close"===n&&r[n](this)})},e._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},r(e,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),e}();t(document).on("click.bs.alert.data-api",'[data-dismiss="alert"]',u._handleDismiss(new u)),t.fn[l]=u._jQueryInterface,t.fn[l].Constructor=u,t.fn[l].noConflict=function(){return t.fn[l]=c,u._jQueryInterface};var f=t.fn.button,d=function(){function e(e){this._element=e}var n=e.prototype;return n.toggle=function(){var e=!0,n=!0,i=t(this._element).closest('[data-toggle="buttons"]')[0];if(i){var r=this._element.querySelector('input:not([type="hidden"])');if(r){if("radio"===r.type){if(r.checked&&this._element.classList.contains("active"))e=!1;else{var o=i.querySelector(".active");o&&t(o).removeClass("active")}}e&&("checkbox"!==r.type&&"radio"!==r.type||(r.checked=!this._element.classList.contains("active")),t(r).trigger("change")),r.focus(),n=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(n&&this._element.setAttribute("aria-pressed",!this._element.classList.contains("active")),e&&t(this._element).toggleClass("active"))},n.dispose=function(){t.removeData(this._element,"bs.button"),this._element=null},e._jQueryInterface=function(n){return this.each(function(){var i=t(this).data("bs.button");i||(i=new e(this),t(this).data("bs.button",i)),"toggle"===n&&i[n]()})},r(e,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),e}();t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(e){var n=e.target,i=n;if(t(n).hasClass("btn")||(n=t(n).closest(".btn")[0]),!n||n.hasAttribute("disabled")||n.classList.contains("disabled"))e.preventDefault();else{var r=n.querySelector('input:not([type="hidden"])');if(r&&(r.hasAttribute("disabled")||r.classList.contains("disabled")))return void e.preventDefault();"LABEL"===i.tagName&&r&&"checkbox"===r.type&&e.preventDefault(),d._jQueryInterface.call(t(n),"toggle")}}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){var n=t(e.target).closest(".btn")[0];t(n).toggleClass("focus",/^focus(in)?$/.test(e.type))}),t(window).on("load.bs.button.data-api",function(){for(var e=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),t=0,n=e.length;t<n;t++){var i=e[t],r=i.querySelector('input:not([type="hidden"])');r.checked||r.hasAttribute("checked")?i.classList.add("active"):i.classList.remove("active")}for(var o=0,s=(e=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;o<s;o++){var a=e[o];"true"===a.getAttribute("aria-pressed")?a.classList.add("active"):a.classList.remove("active")}}),t.fn.button=d._jQueryInterface,t.fn.button.Constructor=d,t.fn.button.noConflict=function(){return t.fn.button=f,d._jQueryInterface};var h="carousel",p=t.fn[h],g={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},m={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},v={TOUCH:"touch",PEN:"pen"},y=function(){function e(e,t){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._element=e,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=!!(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var n=e.prototype;return n.next=function(){this._isSliding||this._slide("next")},n.nextWhenVisible=function(){!document.hidden&&t(this._element).is(":visible")&&"hidden"!==t(this._element).css("visibility")&&this.next()},n.prev=function(){this._isSliding||this._slide("prev")},n.pause=function(e){e||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(a.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},n.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},n.to=function(e){var n=this;this._activeElement=this._element.querySelector(".active.carousel-item");var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0)){if(this._isSliding)t(this._element).one("slid.bs.carousel",function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var r=e>i?"next":"prev";this._slide(r,this._items[e])}}},n.dispose=function(){t(this._element).off(".bs.carousel"),t.removeData(this._element,"bs.carousel"),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},n._getConfig=function(e){return e=s(s({},g),e),a.typeCheckConfig(h,e,m),e},n._handleSwipe=function(){var e=Math.abs(this.touchDeltaX);if(!(e<=40)){var t=e/this.touchDeltaX;this.touchDeltaX=0,t>0&&this.prev(),t<0&&this.next()}},n._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on("keydown.bs.carousel",function(t){return e._keydown(t)}),"hover"===this._config.pause&&t(this._element).on("mouseenter.bs.carousel",function(t){return e.pause(t)}).on("mouseleave.bs.carousel",function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},n._addTouchEventListeners=function(){var e=this;if(this._touchSupported){var n=function(t){e._pointerEvent&&v[t.originalEvent.pointerType.toUpperCase()]?e.touchStartX=t.originalEvent.clientX:e._pointerEvent||(e.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){e._pointerEvent&&v[t.originalEvent.pointerType.toUpperCase()]&&(e.touchDeltaX=t.originalEvent.clientX-e.touchStartX),e._handleSwipe(),"hover"===e._config.pause&&(e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval))};t(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel",function(e){return e.preventDefault()}),this._pointerEvent?(t(this._element).on("pointerdown.bs.carousel",function(e){return n(e)}),t(this._element).on("pointerup.bs.carousel",function(e){return i(e)}),this._element.classList.add("pointer-event")):(t(this._element).on("touchstart.bs.carousel",function(e){return n(e)}),t(this._element).on("touchmove.bs.carousel",function(t){t.originalEvent.touches&&t.originalEvent.touches.length>1?e.touchDeltaX=0:e.touchDeltaX=t.originalEvent.touches[0].clientX-e.touchStartX}),t(this._element).on("touchend.bs.carousel",function(e){return i(e)}))}},n._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next()}},n._getItemIndex=function(e){return this._items=e&&e.parentNode?[].slice.call(e.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(e)},n._getItemByDirection=function(e,t){var n=this._getItemIndex(t),i=this._items.length-1;if(("prev"===e&&0===n||"next"===e&&n===i)&&!this._config.wrap)return t;var r=(n+("prev"===e?-1:1))%this._items.length;return -1===r?this._items[this._items.length-1]:this._items[r]},n._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),r=this._getItemIndex(this._element.querySelector(".active.carousel-item")),o=t.Event("slide.bs.carousel",{relatedTarget:e,direction:n,from:r,to:i});return t(this._element).trigger(o),o},n._setActiveIndicatorElement=function(e){if(this._indicatorsElement){var n=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));t(n).removeClass("active");var i=this._indicatorsElement.children[this._getItemIndex(e)];i&&t(i).addClass("active")}},n._slide=function(e,n){var i,r,o,s=this,l=this._element.querySelector(".active.carousel-item"),c=this._getItemIndex(l),u=n||l&&this._getItemByDirection(e,l),f=this._getItemIndex(u),d=!!this._interval;if("next"===e?(i="carousel-item-left",r="carousel-item-next",o="left"):(i="carousel-item-right",r="carousel-item-prev",o="right"),u&&t(u).hasClass("active"))this._isSliding=!1;else if(!this._triggerSlideEvent(u,o).isDefaultPrevented()&&l&&u){this._isSliding=!0,d&&this.pause(),this._setActiveIndicatorElement(u);var h=t.Event("slid.bs.carousel",{relatedTarget:u,direction:o,from:c,to:f});if(t(this._element).hasClass("slide")){t(u).addClass(r),a.reflow(u),t(l).addClass(i),t(u).addClass(i);var p=parseInt(u.getAttribute("data-interval"),10);p?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=p):this._config.interval=this._config.defaultInterval||this._config.interval;var g=a.getTransitionDurationFromElement(l);t(l).one(a.TRANSITION_END,function(){t(u).removeClass(i+" "+r).addClass("active"),t(l).removeClass("active "+r+" "+i),s._isSliding=!1,setTimeout(function(){return t(s._element).trigger(h)},0)}).emulateTransitionEnd(g)}else t(l).removeClass("active"),t(u).addClass("active"),this._isSliding=!1,t(this._element).trigger(h);d&&this.cycle()}},e._jQueryInterface=function(n){return this.each(function(){var i=t(this).data("bs.carousel"),r=s(s({},g),t(this).data());"object"==typeof n&&(r=s(s({},r),n));var o="string"==typeof n?n:r.slide;if(i||(i=new e(this,r),t(this).data("bs.carousel",i)),"number"==typeof n)i.to(n);else if("string"==typeof o){if(void 0===i[o])throw TypeError('No method named "'+o+'"');i[o]()}else r.interval&&r.ride&&(i.pause(),i.cycle())})},e._dataApiClickHandler=function(n){var i=a.getSelectorFromElement(this);if(i){var r=t(i)[0];if(r&&t(r).hasClass("carousel")){var o=s(s({},t(r).data()),t(this).data()),l=this.getAttribute("data-slide-to");l&&(o.interval=!1),e._jQueryInterface.call(t(r),o),l&&t(r).data("bs.carousel").to(l),n.preventDefault()}}},r(e,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return g}}]),e}();t(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",y._dataApiClickHandler),t(window).on("load.bs.carousel.data-api",function(){for(var e=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),n=0,i=e.length;n<i;n++){var r=t(e[n]);y._jQueryInterface.call(r,r.data())}}),t.fn[h]=y._jQueryInterface,t.fn[h].Constructor=y,t.fn[h].noConflict=function(){return t.fn[h]=p,y._jQueryInterface};var b="collapse",_=t.fn[b],w={toggle:!0,parent:""},x={toggle:"boolean",parent:"(string|element)"},E=function(){function e(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll('[data-toggle="collapse"]')),i=0,r=n.length;i<r;i++){var o=n[i],s=a.getSelectorFromElement(o),l=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&l.length>0&&(this._selector=s,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var n=e.prototype;return n.toggle=function(){t(this._element).hasClass("show")?this.hide():this.show()},n.show=function(){var n,i,r=this;if(!this._isTransitioning&&!t(this._element).hasClass("show")&&(this._parent&&0===(n=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e){return"string"==typeof r._config.parent?e.getAttribute("data-parent")===r._config.parent:e.classList.contains("collapse")})).length&&(n=null),!(n&&(i=t(n).not(this._selector).data("bs.collapse"))&&i._isTransitioning))){var o=t.Event("show.bs.collapse");if(t(this._element).trigger(o),!o.isDefaultPrevented()){n&&(e._jQueryInterface.call(t(n).not(this._selector),"hide"),i||t(n).data("bs.collapse",null));var s=this._getDimension();t(this._element).removeClass("collapse").addClass("collapsing"),this._element.style[s]=0,this._triggerArray.length&&t(this._triggerArray).removeClass("collapsed").attr("aria-expanded",!0),this.setTransitioning(!0);var l="scroll"+(s[0].toUpperCase()+s.slice(1)),c=a.getTransitionDurationFromElement(this._element);t(this._element).one(a.TRANSITION_END,function(){t(r._element).removeClass("collapsing").addClass("collapse show"),r._element.style[s]="",r.setTransitioning(!1),t(r._element).trigger("shown.bs.collapse")}).emulateTransitionEnd(c),this._element.style[s]=this._element[l]+"px"}}},n.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass("show")){var n=t.Event("hide.bs.collapse");if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",a.reflow(this._element),t(this._element).addClass("collapsing").removeClass("collapse show");var r=this._triggerArray.length;if(r>0)for(var o=0;o<r;o++){var s=this._triggerArray[o],l=a.getSelectorFromElement(s);null!==l&&(t([].slice.call(document.querySelectorAll(l))).hasClass("show")||t(s).addClass("collapsed").attr("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[i]="";var c=a.getTransitionDurationFromElement(this._element);t(this._element).one(a.TRANSITION_END,function(){e.setTransitioning(!1),t(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")}).emulateTransitionEnd(c)}}},n.setTransitioning=function(e){this._isTransitioning=e},n.dispose=function(){t.removeData(this._element,"bs.collapse"),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},n._getConfig=function(e){return(e=s(s({},w),e)).toggle=!!e.toggle,a.typeCheckConfig(b,e,x),e},n._getDimension=function(){return t(this._element).hasClass("width")?"width":"height"},n._getParent=function(){var n,i=this;a.isElement(this._config.parent)?(n=this._config.parent,void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=document.querySelector(this._config.parent);var r='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',o=[].slice.call(n.querySelectorAll(r));return t(o).each(function(t,n){i._addAriaAndCollapsedClass(e._getTargetFromElement(n),[n])}),n},n._addAriaAndCollapsedClass=function(e,n){var i=t(e).hasClass("show");n.length&&t(n).toggleClass("collapsed",!i).attr("aria-expanded",i)},e._getTargetFromElement=function(e){var t=a.getSelectorFromElement(e);return t?document.querySelector(t):null},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),r=i.data("bs.collapse"),o=s(s(s({},w),i.data()),"object"==typeof n&&n?n:{});if(!r&&o.toggle&&"string"==typeof n&&/show|hide/.test(n)&&(o.toggle=!1),r||(r=new e(this,o),i.data("bs.collapse",r)),"string"==typeof n){if(void 0===r[n])throw TypeError('No method named "'+n+'"');r[n]()}})},r(e,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return w}}]),e}();t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var n=t(this),i=a.getSelectorFromElement(this),r=[].slice.call(document.querySelectorAll(i));t(r).each(function(){var e=t(this),i=e.data("bs.collapse")?"toggle":n.data();E._jQueryInterface.call(e,i)})}),t.fn[b]=E._jQueryInterface,t.fn[b].Constructor=E,t.fn[b].noConflict=function(){return t.fn[b]=_,E._jQueryInterface};var T="dropdown",C=t.fn[T],S=RegExp("38|40|27"),k={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},D={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},A=function(){function e(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var i=e.prototype;return i.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass("disabled")){var n=t(this._menu).hasClass("show");e._clearMenus(),n||this.show(!0)}},i.show=function(i){if(void 0===i&&(i=!1),!(this._element.disabled||t(this._element).hasClass("disabled")||t(this._menu).hasClass("show"))){var r={relatedTarget:this._element},o=t.Event("show.bs.dropdown",r),s=e._getParentFromElement(this._element);if(t(s).trigger(o),!o.isDefaultPrevented()){if(!this._inNavbar&&i){if(void 0===n)throw TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var l=this._element;"parent"===this._config.reference?l=s:a.isElement(this._config.reference)&&(l=this._config.reference,void 0!==this._config.reference.jquery&&(l=this._config.reference[0])),"scrollParent"!==this._config.boundary&&t(s).addClass("position-static"),this._popper=new n(l,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===t(s).closest(".navbar-nav").length&&t(document.body).children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass("show"),t(s).toggleClass("show").trigger(t.Event("shown.bs.dropdown",r))}}},i.hide=function(){if(!this._element.disabled&&!t(this._element).hasClass("disabled")&&t(this._menu).hasClass("show")){var n={relatedTarget:this._element},i=t.Event("hide.bs.dropdown",n),r=e._getParentFromElement(this._element);t(r).trigger(i),i.isDefaultPrevented()||(this._popper&&this._popper.destroy(),t(this._menu).toggleClass("show"),t(r).toggleClass("show").trigger(t.Event("hidden.bs.dropdown",n)))}},i.dispose=function(){t.removeData(this._element,"bs.dropdown"),t(this._element).off(".bs.dropdown"),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},i.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},i._addEventListeners=function(){var e=this;t(this._element).on("click.bs.dropdown",function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},i._getConfig=function(e){return e=s(s(s({},this.constructor.Default),t(this._element).data()),e),a.typeCheckConfig(T,e,this.constructor.DefaultType),e},i._getMenuElement=function(){if(!this._menu){var t=e._getParentFromElement(this._element);t&&(this._menu=t.querySelector(".dropdown-menu"))}return this._menu},i._getPlacement=function(){var e=t(this._element.parentNode),n="bottom-start";return e.hasClass("dropup")?n=t(this._menu).hasClass("dropdown-menu-right")?"top-end":"top-start":e.hasClass("dropright")?n="right-start":e.hasClass("dropleft")?n="left-start":t(this._menu).hasClass("dropdown-menu-right")&&(n="bottom-end"),n},i._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},i._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=s(s({},t.offsets),e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},i._getPopperConfig=function(){var e={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(e.modifiers.applyStyle={enabled:!1}),s(s({},e),this._config.popperConfig)},e._jQueryInterface=function(n){return this.each(function(){var i=t(this).data("bs.dropdown");if(i||(i=new e(this,"object"==typeof n?n:null),t(this).data("bs.dropdown",i)),"string"==typeof n){if(void 0===i[n])throw TypeError('No method named "'+n+'"');i[n]()}})},e._clearMenus=function(n){if(!n||3!==n.which&&("keyup"!==n.type||9===n.which))for(var i=[].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')),r=0,o=i.length;r<o;r++){var s=e._getParentFromElement(i[r]),a=t(i[r]).data("bs.dropdown"),l={relatedTarget:i[r]};if(n&&"click"===n.type&&(l.clickEvent=n),a){var c=a._menu;if(t(s).hasClass("show")&&!(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"keyup"===n.type&&9===n.which)&&t.contains(s,n.target))){var u=t.Event("hide.bs.dropdown",l);t(s).trigger(u),u.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t(document.body).children().off("mouseover",null,t.noop),i[r].setAttribute("aria-expanded","false"),a._popper&&a._popper.destroy(),t(c).removeClass("show"),t(s).removeClass("show").trigger(t.Event("hidden.bs.dropdown",l)))}}}},e._getParentFromElement=function(e){var t,n=a.getSelectorFromElement(e);return n&&(t=document.querySelector(n)),t||e.parentNode},e._dataApiKeydownHandler=function(n){if(!(/input|textarea/i.test(n.target.tagName)?32===n.which||27!==n.which&&(40!==n.which&&38!==n.which||t(n.target).closest(".dropdown-menu").length):!S.test(n.which))&&!this.disabled&&!t(this).hasClass("disabled")){var i=e._getParentFromElement(this),r=t(i).hasClass("show");if(r||27!==n.which){if(n.preventDefault(),n.stopPropagation(),!r||r&&(27===n.which||32===n.which))return 27===n.which&&t(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"),void t(this).trigger("click");var o=[].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(e){return t(e).is(":visible")});if(0!==o.length){var s=o.indexOf(n.target);38===n.which&&s>0&&s--,40===n.which&&s<o.length-1&&s++,s<0&&(s=0),o[s].focus()}}}},r(e,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return k}},{key:"DefaultType",get:function(){return D}}]),e}();t(document).on("keydown.bs.dropdown.data-api",'[data-toggle="dropdown"]',A._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api",".dropdown-menu",A._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api",A._clearMenus).on("click.bs.dropdown.data-api",'[data-toggle="dropdown"]',function(e){e.preventDefault(),e.stopPropagation(),A._jQueryInterface.call(t(this),"toggle")}).on("click.bs.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}),t.fn[T]=A._jQueryInterface,t.fn[T].Constructor=A,t.fn[T].noConflict=function(){return t.fn[T]=C,A._jQueryInterface};var N=t.fn.modal,j={backdrop:!0,keyboard:!0,focus:!0,show:!0},O={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},L=function(){function e(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var n=e.prototype;return n.toggle=function(e){return this._isShown?this.hide():this.show(e)},n.show=function(e){var n=this;if(!this._isShown&&!this._isTransitioning){t(this._element).hasClass("fade")&&(this._isTransitioning=!0);var i=t.Event("show.bs.modal",{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on("click.dismiss.bs.modal",'[data-dismiss="modal"]',function(e){return n.hide(e)}),t(this._dialog).on("mousedown.dismiss.bs.modal",function(){t(n._element).one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},n.hide=function(e){var n=this;if(e&&e.preventDefault(),this._isShown&&!this._isTransitioning){var i=t.Event("hide.bs.modal");if(t(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var r=t(this._element).hasClass("fade");if(r&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),t(document).off("focusin.bs.modal"),t(this._element).removeClass("show"),t(this._element).off("click.dismiss.bs.modal"),t(this._dialog).off("mousedown.dismiss.bs.modal"),r){var o=a.getTransitionDurationFromElement(this._element);t(this._element).one(a.TRANSITION_END,function(e){return n._hideModal(e)}).emulateTransitionEnd(o)}else this._hideModal()}}},n.dispose=function(){[window,this._element,this._dialog].forEach(function(e){return t(e).off(".bs.modal")}),t(document).off("focusin.bs.modal"),t.removeData(this._element,"bs.modal"),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},n.handleUpdate=function(){this._adjustDialog()},n._getConfig=function(e){return e=s(s({},j),e),a.typeCheckConfig("modal",e,O),e},n._triggerBackdropTransition=function(){var e=this;if("static"===this._config.backdrop){var n=t.Event("hidePrevented.bs.modal");if(t(this._element).trigger(n),n.defaultPrevented)return;this._element.classList.add("modal-static");var i=a.getTransitionDurationFromElement(this._element);t(this._element).one(a.TRANSITION_END,function(){e._element.classList.remove("modal-static")}).emulateTransitionEnd(i),this._element.focus()}else this.hide()},n._showElement=function(e){var n=this,i=t(this._element).hasClass("fade"),r=this._dialog?this._dialog.querySelector(".modal-body"):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),t(this._dialog).hasClass("modal-dialog-scrollable")&&r?r.scrollTop=0:this._element.scrollTop=0,i&&a.reflow(this._element),t(this._element).addClass("show"),this._config.focus&&this._enforceFocus();var o=t.Event("shown.bs.modal",{relatedTarget:e}),s=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(o)};if(i){var l=a.getTransitionDurationFromElement(this._dialog);t(this._dialog).one(a.TRANSITION_END,s).emulateTransitionEnd(l)}else s()},n._enforceFocus=function(){var e=this;t(document).off("focusin.bs.modal").on("focusin.bs.modal",function(n){document!==n.target&&e._element!==n.target&&0===t(e._element).has(n.target).length&&e._element.focus()})},n._setEscapeEvent=function(){var e=this;this._isShown?t(this._element).on("keydown.dismiss.bs.modal",function(t){e._config.keyboard&&27===t.which?(t.preventDefault(),e.hide()):e._config.keyboard||27!==t.which||e._triggerBackdropTransition()}):this._isShown||t(this._element).off("keydown.dismiss.bs.modal")},n._setResizeEvent=function(){var e=this;this._isShown?t(window).on("resize.bs.modal",function(t){return e.handleUpdate(t)}):t(window).off("resize.bs.modal")},n._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass("modal-open"),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger("hidden.bs.modal")})},n._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},n._showBackdrop=function(e){var n=this,i=t(this._element).hasClass("fade")?"fade":"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",i&&this._backdrop.classList.add(i),t(this._backdrop).appendTo(document.body),t(this._element).on("click.dismiss.bs.modal",function(e){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:e.target===e.currentTarget&&n._triggerBackdropTransition()}),i&&a.reflow(this._backdrop),t(this._backdrop).addClass("show"),!e)return;if(!i)return void e();var r=a.getTransitionDurationFromElement(this._backdrop);t(this._backdrop).one(a.TRANSITION_END,e).emulateTransitionEnd(r)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass("show");var o=function(){n._removeBackdrop(),e&&e()};if(t(this._element).hasClass("fade")){var s=a.getTransitionDurationFromElement(this._backdrop);t(this._backdrop).one(a.TRANSITION_END,o).emulateTransitionEnd(s)}else o()}else e&&e()},n._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},n._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},n._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(e.left+e.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},n._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){var n=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),i=[].slice.call(document.querySelectorAll(".sticky-top"));t(n).each(function(n,i){var r=i.style.paddingRight,o=t(i).css("padding-right");t(i).data("padding-right",r).css("padding-right",parseFloat(o)+e._scrollbarWidth+"px")}),t(i).each(function(n,i){var r=i.style.marginRight,o=t(i).css("margin-right");t(i).data("margin-right",r).css("margin-right",parseFloat(o)-e._scrollbarWidth+"px")});var r=document.body.style.paddingRight,o=t(document.body).css("padding-right");t(document.body).data("padding-right",r).css("padding-right",parseFloat(o)+this._scrollbarWidth+"px")}t(document.body).addClass("modal-open")},n._resetScrollbar=function(){var e=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));t(e).each(function(e,n){var i=t(n).data("padding-right");t(n).removeData("padding-right"),n.style.paddingRight=i||""});var n=[].slice.call(document.querySelectorAll(".sticky-top"));t(n).each(function(e,n){var i=t(n).data("margin-right");void 0!==i&&t(n).css("margin-right",i).removeData("margin-right")});var i=t(document.body).data("padding-right");t(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},n._getScrollbarWidth=function(){var e=document.createElement("div");e.className="modal-scrollbar-measure",document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},e._jQueryInterface=function(n,i){return this.each(function(){var r=t(this).data("bs.modal"),o=s(s(s({},j),t(this).data()),"object"==typeof n&&n?n:{});if(r||(r=new e(this,o),t(this).data("bs.modal",r)),"string"==typeof n){if(void 0===r[n])throw TypeError('No method named "'+n+'"');r[n](i)}else o.show&&r.show(i)})},r(e,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return j}}]),e}();t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(e){var n,i=this,r=a.getSelectorFromElement(this);r&&(n=document.querySelector(r));var o=t(n).data("bs.modal")?"toggle":s(s({},t(n).data()),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var l=t(n).one("show.bs.modal",function(e){e.isDefaultPrevented()||l.one("hidden.bs.modal",function(){t(i).is(":visible")&&i.focus()})});L._jQueryInterface.call(t(n),o,this)}),t.fn.modal=L._jQueryInterface,t.fn.modal.Constructor=L,t.fn.modal.noConflict=function(){return t.fn.modal=N,L._jQueryInterface};var I=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],P=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,q=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function H(e,t,n){if(0===e.length)return e;if(n&&"function"==typeof n)return n(e);for(var i=(new window.DOMParser).parseFromString(e,"text/html"),r=Object.keys(t),o=[].slice.call(i.body.querySelectorAll("*")),s=0,a=o.length;s<a;s++)!function(e,n){var i=o[e],s=i.nodeName.toLowerCase();if(-1===r.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i);var a=[].slice.call(i.attributes),l=[].concat(t["*"]||[],t[s]||[]);a.forEach(function(e){(function(e,t){var n=e.nodeName.toLowerCase();if(-1!==t.indexOf(n))return -1===I.indexOf(n)||!!(e.nodeValue.match(P)||e.nodeValue.match(q));for(var i=t.filter(function(e){return e instanceof RegExp}),r=0,o=i.length;r<o;r++)if(n.match(i[r]))return!0;return!1})(e,l)||i.removeAttribute(e.nodeName)})}(s);return i.body.innerHTML}var R="tooltip",F=t.fn[R],M=RegExp("(^|\\s)bs-tooltip\\S+","g"),W=["sanitize","whiteList","sanitizeFn"],B={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},U={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Q={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},$={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},z=function(){function e(e,t){if(void 0===n)throw TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=e,this.config=this._getConfig(t),this.tip=null,this._setListeners()}var i=e.prototype;return i.enable=function(){this._isEnabled=!0},i.disable=function(){this._isEnabled=!1},i.toggleEnabled=function(){this._isEnabled=!this._isEnabled},i.toggle=function(e){if(this._isEnabled){if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass("show"))return void this._leave(null,this);this._enter(null,this)}}},i.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},i.show=function(){var e=this;if("none"===t(this.element).css("display"))throw Error("Please use show on visible elements");var i=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(i);var r=a.findShadowRoot(this.element),o=t.contains(null!==r?r:this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!o)return;var s=this.getTipElement(),l=a.getUID(this.constructor.NAME);s.setAttribute("id",l),this.element.setAttribute("aria-describedby",l),this.setContent(),this.config.animation&&t(s).addClass("fade");var c="function"==typeof this.config.placement?this.config.placement.call(this,s,this.element):this.config.placement,u=this._getAttachment(c);this.addAttachmentClass(u);var f=this._getContainer();t(s).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(s).appendTo(f),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,s,this._getPopperConfig(u)),t(s).addClass("show"),"ontouchstart"in document.documentElement&&t(document.body).children().on("mouseover",null,t.noop);var d=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),"out"===n&&e._leave(null,e)};if(t(this.tip).hasClass("fade")){var h=a.getTransitionDurationFromElement(this.tip);t(this.tip).one(a.TRANSITION_END,d).emulateTransitionEnd(h)}else d()}},i.hide=function(e){var n=this,i=this.getTipElement(),r=t.Event(this.constructor.Event.HIDE),o=function(){"show"!==n._hoverState&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};if(t(this.element).trigger(r),!r.isDefaultPrevented()){if(t(i).removeClass("show"),"ontouchstart"in document.documentElement&&t(document.body).children().off("mouseover",null,t.noop),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,t(this.tip).hasClass("fade")){var s=a.getTransitionDurationFromElement(i);t(i).one(a.TRANSITION_END,o).emulateTransitionEnd(s)}else o();this._hoverState=""}},i.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},i.isWithContent=function(){return!!this.getTitle()},i.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-tooltip-"+e)},i.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},i.setContent=function(){var e=this.getTipElement();this.setElementContent(t(e.querySelectorAll(".tooltip-inner")),this.getTitle()),t(e).removeClass("fade show")},i.setElementContent=function(e,n){"object"==typeof n&&(n.nodeType||n.jquery)?this.config.html?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):this.config.html?(this.config.sanitize&&(n=H(n,this.config.whiteList,this.config.sanitizeFn)),e.html(n)):e.text(n)},i.getTitle=function(){var e=this.element.getAttribute("data-original-title");return e||(e="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),e},i._getPopperConfig=function(e){var t=this;return s(s({},{placement:e,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){return t._handlePopperPlacementChange(e)}}),this.config.popperConfig)},i._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=s(s({},t.offsets),e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},i._getContainer=function(){return!1===this.config.container?document.body:a.isElement(this.config.container)?t(this.config.container):t(document).find(this.config.container)},i._getAttachment=function(e){return U[e.toUpperCase()]},i._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if("manual"!==n){var i="hover"===n?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,r="hover"===n?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(r,e.config.selector,function(t){return e._leave(t)})}}),this._hideModalHandler=function(){e.element&&e.hide()},t(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=s(s({},this.config),{},{trigger:"manual",selector:""}):this._fixTitle()},i._fixTitle=function(){var e=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==e)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},i._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?"focus":"hover"]=!0),t(n.getTipElement()).hasClass("show")||"show"===n._hoverState?n._hoverState="show":(clearTimeout(n._timeout),n._hoverState="show",n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){"show"===n._hoverState&&n.show()},n.config.delay.show):n.show())},i._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?"focus":"hover"]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState="out",n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){"out"===n._hoverState&&n.hide()},n.config.delay.hide):n.hide())},i._isWithActiveTrigger=function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1},i._getConfig=function(e){var n=t(this.element).data();return Object.keys(n).forEach(function(e){-1!==W.indexOf(e)&&delete n[e]}),"number"==typeof(e=s(s(s({},this.constructor.Default),n),"object"==typeof e&&e?e:{})).delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),a.typeCheckConfig(R,e,this.constructor.DefaultType),e.sanitize&&(e.template=H(e.template,e.whiteList,e.sanitizeFn)),e},i._getDelegateConfig=function(){var e={};if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t]);return e},i._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(M);null!==n&&n.length&&e.removeClass(n.join(""))},i._handlePopperPlacementChange=function(e){this.tip=e.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))},i._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass("fade"),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},e._jQueryInterface=function(n){return this.each(function(){var i=t(this).data("bs.tooltip"),r="object"==typeof n&&n;if((i||!/dispose|hide/.test(n))&&(i||(i=new e(this,r),t(this).data("bs.tooltip",i)),"string"==typeof n)){if(void 0===i[n])throw TypeError('No method named "'+n+'"');i[n]()}})},r(e,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return Q}},{key:"NAME",get:function(){return R}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return $}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return B}}]),e}();t.fn[R]=z._jQueryInterface,t.fn[R].Constructor=z,t.fn[R].noConflict=function(){return t.fn[R]=F,z._jQueryInterface};var V="popover",X=t.fn[V],Y=RegExp("(^|\\s)bs-popover\\S+","g"),K=s(s({},z.Default),{},{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),G=s(s({},z.DefaultType),{},{content:"(string|element|function)"}),J={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},Z=function(e){function n(){return e.apply(this,arguments)||this}n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e;var i=n.prototype;return i.isWithContent=function(){return this.getTitle()||this._getContent()},i.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-popover-"+e)},i.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},i.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(".popover-header"),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(e.find(".popover-body"),n),e.removeClass("fade show")},i._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},i._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(Y);null!==n&&n.length>0&&e.removeClass(n.join(""))},n._jQueryInterface=function(e){return this.each(function(){var i=t(this).data("bs.popover"),r="object"==typeof e?e:null;if((i||!/dispose|hide/.test(e))&&(i||(i=new n(this,r),t(this).data("bs.popover",i)),"string"==typeof e)){if(void 0===i[e])throw TypeError('No method named "'+e+'"');i[e]()}})},r(n,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return K}},{key:"NAME",get:function(){return V}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return J}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return G}}]),n}(z);t.fn[V]=Z._jQueryInterface,t.fn[V].Constructor=Z,t.fn[V].noConflict=function(){return t.fn[V]=X,Z._jQueryInterface};var ee="scrollspy",et=t.fn[ee],en={offset:10,method:"auto",target:""},ei={offset:"number",method:"string",target:"(string|element)"},er=function(){function e(e,n){var i=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(n),this._selector=this._config.target+" .nav-link,"+this._config.target+" .list-group-item,"+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on("scroll.bs.scrollspy",function(e){return i._process(e)}),this.refresh(),this._process()}var n=e.prototype;return n.refresh=function(){var e=this,n=this._scrollElement===this._scrollElement.window?"offset":"position",i="auto"===this._config.method?n:this._config.method,r="position"===i?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(e){var n,o=a.getSelectorFromElement(e);if(o&&(n=document.querySelector(o)),n){var s=n.getBoundingClientRect();if(s.width||s.height)return[t(n)[i]().top+r,o]}return null}).filter(function(e){return e}).sort(function(e,t){return e[0]-t[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},n.dispose=function(){t.removeData(this._element,"bs.scrollspy"),t(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},n._getConfig=function(e){if("string"!=typeof(e=s(s({},en),"object"==typeof e&&e?e:{})).target&&a.isElement(e.target)){var n=t(e.target).attr("id");n||(n=a.getUID(ee),t(e.target).attr("id",n)),e.target="#"+n}return a.typeCheckConfig(ee,e,ei),e},n._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},n._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},n._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},n._process=function(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;)this._activeTarget!==this._targets[r]&&e>=this._offsets[r]&&(void 0===this._offsets[r+1]||e<this._offsets[r+1])&&this._activate(this._targets[r])}},n._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),i=t([].slice.call(document.querySelectorAll(n.join(","))));i.hasClass("dropdown-item")?(i.closest(".dropdown").find(".dropdown-toggle").addClass("active"),i.addClass("active")):(i.addClass("active"),i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"),i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),t(this._scrollElement).trigger("activate.bs.scrollspy",{relatedTarget:e})},n._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(e){return e.classList.contains("active")}).forEach(function(e){return e.classList.remove("active")})},e._jQueryInterface=function(n){return this.each(function(){var i=t(this).data("bs.scrollspy");if(i||(i=new e(this,"object"==typeof n&&n),t(this).data("bs.scrollspy",i)),"string"==typeof n){if(void 0===i[n])throw TypeError('No method named "'+n+'"');i[n]()}})},r(e,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return en}}]),e}();t(window).on("load.bs.scrollspy.data-api",function(){for(var e=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),n=e.length;n--;){var i=t(e[n]);er._jQueryInterface.call(i,i.data())}}),t.fn[ee]=er._jQueryInterface,t.fn[ee].Constructor=er,t.fn[ee].noConflict=function(){return t.fn[ee]=et,er._jQueryInterface};var eo=t.fn.tab,es=function(){function e(e){this._element=e}var n=e.prototype;return n.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass("active")||t(this._element).hasClass("disabled"))){var n,i,r=t(this._element).closest(".nav, .list-group")[0],o=a.getSelectorFromElement(this._element);if(r){var s="UL"===r.nodeName||"OL"===r.nodeName?"> li > .active":".active";i=(i=t.makeArray(t(r).find(s)))[i.length-1]}var l=t.Event("hide.bs.tab",{relatedTarget:this._element}),c=t.Event("show.bs.tab",{relatedTarget:i});if(i&&t(i).trigger(l),t(this._element).trigger(c),!c.isDefaultPrevented()&&!l.isDefaultPrevented()){o&&(n=document.querySelector(o)),this._activate(this._element,r);var u=function(){var n=t.Event("hidden.bs.tab",{relatedTarget:e._element}),r=t.Event("shown.bs.tab",{relatedTarget:i});t(i).trigger(n),t(e._element).trigger(r)};n?this._activate(n,n.parentNode,u):u()}}},n.dispose=function(){t.removeData(this._element,"bs.tab"),this._element=null},n._activate=function(e,n,i){var r=this,o=(n&&("UL"===n.nodeName||"OL"===n.nodeName)?t(n).find("> li > .active"):t(n).children(".active"))[0],s=i&&o&&t(o).hasClass("fade"),l=function(){return r._transitionComplete(e,o,i)};if(o&&s){var c=a.getTransitionDurationFromElement(o);t(o).removeClass("show").one(a.TRANSITION_END,l).emulateTransitionEnd(c)}else l()},n._transitionComplete=function(e,n,i){if(n){t(n).removeClass("active");var r=t(n.parentNode).find("> .dropdown-menu .active")[0];r&&t(r).removeClass("active"),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(t(e).addClass("active"),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),a.reflow(e),e.classList.contains("fade")&&e.classList.add("show"),e.parentNode&&t(e.parentNode).hasClass("dropdown-menu")){var o=t(e).closest(".dropdown")[0];if(o){var s=[].slice.call(o.querySelectorAll(".dropdown-toggle"));t(s).addClass("active")}e.setAttribute("aria-expanded",!0)}i&&i()},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),r=i.data("bs.tab");if(r||(r=new e(this),i.data("bs.tab",r)),"string"==typeof n){if(void 0===r[n])throw TypeError('No method named "'+n+'"');r[n]()}})},r(e,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),e}();t(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',function(e){e.preventDefault(),es._jQueryInterface.call(t(this),"show")}),t.fn.tab=es._jQueryInterface,t.fn.tab.Constructor=es,t.fn.tab.noConflict=function(){return t.fn.tab=eo,es._jQueryInterface};var ea=t.fn.toast,el={animation:"boolean",autohide:"boolean",delay:"number"},ec={animation:!0,autohide:!0,delay:500},eu=function(){function e(e,t){this._element=e,this._config=this._getConfig(t),this._timeout=null,this._setListeners()}var n=e.prototype;return n.show=function(){var e=this,n=t.Event("show.bs.toast");if(t(this._element).trigger(n),!n.isDefaultPrevented()){this._config.animation&&this._element.classList.add("fade");var i=function(){e._element.classList.remove("showing"),e._element.classList.add("show"),t(e._element).trigger("shown.bs.toast"),e._config.autohide&&(e._timeout=setTimeout(function(){e.hide()},e._config.delay))};if(this._element.classList.remove("hide"),a.reflow(this._element),this._element.classList.add("showing"),this._config.animation){var r=a.getTransitionDurationFromElement(this._element);t(this._element).one(a.TRANSITION_END,i).emulateTransitionEnd(r)}else i()}},n.hide=function(){if(this._element.classList.contains("show")){var e=t.Event("hide.bs.toast");t(this._element).trigger(e),e.isDefaultPrevented()||this._close()}},n.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains("show")&&this._element.classList.remove("show"),t(this._element).off("click.dismiss.bs.toast"),t.removeData(this._element,"bs.toast"),this._element=null,this._config=null},n._getConfig=function(e){return e=s(s(s({},ec),t(this._element).data()),"object"==typeof e&&e?e:{}),a.typeCheckConfig("toast",e,this.constructor.DefaultType),e},n._setListeners=function(){var e=this;t(this._element).on("click.dismiss.bs.toast",'[data-dismiss="toast"]',function(){return e.hide()})},n._close=function(){var e=this,n=function(){e._element.classList.add("hide"),t(e._element).trigger("hidden.bs.toast")};if(this._element.classList.remove("show"),this._config.animation){var i=a.getTransitionDurationFromElement(this._element);t(this._element).one(a.TRANSITION_END,n).emulateTransitionEnd(i)}else n()},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),r=i.data("bs.toast");if(r||(r=new e(this,"object"==typeof n&&n),i.data("bs.toast",r)),"string"==typeof n){if(void 0===r[n])throw TypeError('No method named "'+n+'"');r[n](this)}})},r(e,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"DefaultType",get:function(){return el}},{key:"Default",get:function(){return ec}}]),e}();t.fn.toast=eu._jQueryInterface,t.fn.toast.Constructor=eu,t.fn.toast.noConflict=function(){return t.fn.toast=ea,eu._jQueryInterface},e.Alert=u,e.Button=d,e.Carousel=y,e.Collapse=E,e.Dropdown=A,e.Modal=L,e.Popover=Z,e.Scrollspy=er,e.Tab=es,e.Toast=eu,e.Tooltip=z,e.Util=a,Object.defineProperty(e,"__esModule",{value:!0})}({},i("6KOho"),i("kJWRP"));//# sourceMappingURL=index.3c344701.js.map

//# sourceMappingURL=index.3c344701.js.map
