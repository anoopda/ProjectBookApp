Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');





var _styles=require('./styles');var _styles2=babelHelpers.interopRequireDefault(_styles);
var _reactNativeButton=require('react-native-button');var _reactNativeButton2=babelHelpers.interopRequireDefault(_reactNativeButton);var


SignUp=function(_Component){babelHelpers.inherits(SignUp,_Component);function SignUp(){babelHelpers.classCallCheck(this,SignUp);return babelHelpers.possibleConstructorReturn(this,(SignUp.__proto__||Object.getPrototypeOf(SignUp)).apply(this,arguments));}babelHelpers.createClass(SignUp,[{key:'render',value:function render()

{
return(

_react2.default.createElement(_reactNative.View,{style:{flex:1}},

_react2.default.createElement(_reactNative.View,{style:_styles2.default.logoWrapper},
_react2.default.createElement(_reactNative.Text,{style:_styles2.default.logo},'Picture Book')),



_react2.default.createElement(_reactNative.View,{style:_styles2.default.bodyWrapper},
_react2.default.createElement(_reactNative.TextInput,{placeholder:'First Name',style:_styles2.default.input}),
_react2.default.createElement(_reactNative.TextInput,{placeholder:'Last Name',style:_styles2.default.input}),
_react2.default.createElement(_reactNative.TextInput,{placeholder:'Password',style:_styles2.default.input}),
_react2.default.createElement(_reactNative.TextInput,{placeholder:'Password',style:_styles2.default.input}),
_react2.default.createElement(_reactNativeButton2.default,{
style:_styles2.default.defaultButton},'Login'))));




}}]);return SignUp;}(_react.Component);exports.default=SignUp;