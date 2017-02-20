Object.defineProperty(exports,"__esModule",{value:true});
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);

var _reactNative=require('react-native');






var _styles=require('./styles');var _styles2=babelHelpers.interopRequireDefault(_styles);var

UserProfileInput=function(_Component){babelHelpers.inherits(UserProfileInput,_Component);

function UserProfileInput(props){babelHelpers.classCallCheck(this,UserProfileInput);var _this=babelHelpers.possibleConstructorReturn(this,(UserProfileInput.__proto__||Object.getPrototypeOf(UserProfileInput)).call(this,
props));

_this.state={
name:'',
emailtext:'',
PhoneNotext:'',
dobtext:''};return _this;

}babelHelpers.createClass(UserProfileInput,[{key:'render',value:function render()



{var _this2=this;

return(

_react2.default.createElement(_reactNative.View,{style:_styles2.default.inputWrapper},



_react2.default.createElement(_reactNative.TextInput,{style:_styles2.default.inputFields,placeholder:'Enter your Email',onChangeText:function onChangeText(text){return _this2.setState({emailtext:text});}}),


_react2.default.createElement(_reactNative.TextInput,{style:_styles2.default.inputFields,placeholder:'Enter your PhoneNo',onChangeText:function onChangeText(text){return _this2.setState({PhoneNotext:text});}}),



_react2.default.createElement(_reactNative.TextInput,{style:_styles2.default.inputFields,placeholder:'Enter your Date of birth',onChangeText:function onChangeText(text){return _this2.setState({dobtext:text});}}),



_react2.default.createElement(_reactNative.Button,{
title:'Save Changes',
color:'#ff4500',
onPress:function onPress(){_this2.props.save(_this2.state.emailtext,_this2.state.PhoneNotext,_this2.state.dobtext);},
style:_styles2.default.savebtn})));








}}]);return UserProfileInput;}(_react.Component);exports.default=UserProfileInput;