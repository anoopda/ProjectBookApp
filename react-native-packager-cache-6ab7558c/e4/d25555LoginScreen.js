Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');





var _reactNativeButton=require('react-native-button');var _reactNativeButton2=babelHelpers.interopRequireDefault(_reactNativeButton);
var _styles=require('./styles');var _styles2=babelHelpers.interopRequireDefault(_styles);

var LoginScreen=_react2.default.createClass({displayName:'LoginScreen',
signIn:function signIn(){
console.log("login");
},

render:function render(){
return(
_react2.default.createElement(_reactNative.View,{style:{flex:1}},

_react2.default.createElement(_reactNative.View,{style:_styles2.default.logoWrapper},
_react2.default.createElement(_reactNative.Text,{style:_styles2.default.logo},'Picture Book')),


_react2.default.createElement(_reactNative.View,{style:_styles2.default.bodyWrapper},

_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNative.TextInput,{
placeholder:'username'}),

_react2.default.createElement(_reactNative.TextInput,{placeholder:'password'}),
_react2.default.createElement(_reactNativeButton2.default,{
onPress:this.signIn,
style:_styles2.default.defaultButton},'Login')),



_react2.default.createElement(_reactNative.View,{style:_styles2.default.signUpWrapper},
_react2.default.createElement(_reactNative.Text,{style:_styles2.default.register},'Register'),
_react2.default.createElement(_reactNative.Text,{style:_styles2.default.forgotPassword},'Forgot Password')))));






}});exports.default=


LoginScreen;