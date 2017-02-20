Object.defineProperty(exports,"__esModule",{value:true});
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _iconedit=require('./iconedit.png');var _iconedit2=babelHelpers.interopRequireDefault(_iconedit);
var _arrowBack=require('./arrow-back.png');var _arrowBack2=babelHelpers.interopRequireDefault(_arrowBack);
var _styles=require('./styles');var _styles2=babelHelpers.interopRequireDefault(_styles);

var _reactNative=require('react-native');var











Header=function(_Component){babelHelpers.inherits(Header,_Component);
function Header(props){babelHelpers.classCallCheck(this,Header);var _this=babelHelpers.possibleConstructorReturn(this,(Header.__proto__||Object.getPrototypeOf(Header)).call(this,
props));

_this.state={
user:_this.props.data.user};return _this;

}babelHelpers.createClass(Header,[{key:'render',value:function render()


{var _this2=this;

return(



_react2.default.createElement(_reactNative.ToolbarAndroid,{
navIcon:_arrowBack2.default,
title:'Profile',
actions:toolBarActions,
style:_styles2.default.wrapper,
onActionSelected:function onActionSelected(){_this2.props.edit();}}));





}}]);return Header;}(_react.Component);exports.default=Header;



var toolBarActions=[
{title:'Edit',icon:_iconedit2.default,show:'always'}];