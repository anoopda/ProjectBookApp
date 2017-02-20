Object.defineProperty(exports,"__esModule",{value:true});
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');






var _UserProfile=require('./containers/userProfile/UserProfile');var _UserProfile2=babelHelpers.interopRequireDefault(_UserProfile);
var _LoginScreen=require('./containers/login/LoginScreen');var _LoginScreen2=babelHelpers.interopRequireDefault(_LoginScreen);
var _signUp=require('./containers/signup/signUp');var _signUp2=babelHelpers.interopRequireDefault(_signUp);var

Home=function(_Component){babelHelpers.inherits(Home,_Component);function Home(){babelHelpers.classCallCheck(this,Home);return babelHelpers.possibleConstructorReturn(this,(Home.__proto__||Object.getPrototypeOf(Home)).apply(this,arguments));}babelHelpers.createClass(Home,[{key:'render',value:function render()

{

return(

_react2.default.createElement(_reactNative.View,{style:{flex:1,backgroundColor:'#ffc299'}},
_react2.default.createElement(_signUp2.default,null)));



}}]);return Home;}(_react.Component);exports.default=Home;