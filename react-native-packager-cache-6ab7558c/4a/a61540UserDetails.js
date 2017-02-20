Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');







var _styles=require('./styles');var _styles2=babelHelpers.interopRequireDefault(_styles);var

UserDetails=function(_Component){babelHelpers.inherits(UserDetails,_Component);

function UserDetails(props){babelHelpers.classCallCheck(this,UserDetails);var _this=babelHelpers.possibleConstructorReturn(this,(UserDetails.__proto__||Object.getPrototypeOf(UserDetails)).call(this,
props));
_this.state=_this.props.data;return _this;
}babelHelpers.createClass(UserDetails,[{key:'render',value:function render()


{
return(



_react2.default.createElement(_reactNative.View,{style:{flex:2,backgroundColor:'#ffe0cc',paddingLeft:20,paddingRight:20}},
_react2.default.createElement(_reactNative.Text,{style:_styles2.default.UserInfo},'User Info'),

_react2.default.createElement(_reactNative.Text,{style:(_styles2.default.details,_styles2.default.detailsCaption)},'Email'),
_react2.default.createElement(_reactNative.Text,{style:_styles2.default.details},this.state.email),

_react2.default.createElement(_reactNative.Text,{style:(_styles2.default.children,_styles2.default.detailsCaption)},'Phoneno'),
_react2.default.createElement(_reactNative.Text,{style:_styles2.default.details},this.state.phoneNo),

_react2.default.createElement(_reactNative.Text,{style:(_styles2.default.children,_styles2.default.detailsCaption)},'Date of Birth'),
_react2.default.createElement(_reactNative.Text,{style:_styles2.default.details},this.state.dob)));





}}]);return UserDetails;}(_react.Component);exports.default=UserDetails;