Object.defineProperty(exports,"__esModule",{value:true});
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _styles=require('./styles');var _styles2=babelHelpers.interopRequireDefault(_styles);
var _download=require('./download.jpg');var _download2=babelHelpers.interopRequireDefault(_download);
var _Header=require('../../Components/Header/Header');var _Header2=babelHelpers.interopRequireDefault(_Header);
var _UserDetails=require('../../Components/UserDetails/UserDetails');var _UserDetails2=babelHelpers.interopRequireDefault(_UserDetails);
var _UserProfileInput=require('../../Components/UserProfileInput/UserProfileInput');var _UserProfileInput2=babelHelpers.interopRequireDefault(_UserProfileInput);


var _reactNative=require('react-native');var









UserProfile=function(_Component){babelHelpers.inherits(UserProfile,_Component);

function UserProfile(props){babelHelpers.classCallCheck(this,UserProfile);var _this=babelHelpers.possibleConstructorReturn(this,(UserProfile.__proto__||Object.getPrototypeOf(UserProfile)).call(this,
props));
var count=0;
_this.state={

email:"anoopda@qburst,com",
phoneNo:"0471-2742218",
dob:"12 March 1994",
status:false,
user:"Anoop D Anil"};

_this.save=_this.save.bind(_this);
_this.check=_this.check.bind(_this);return _this;

}babelHelpers.createClass(UserProfile,[{key:'edit',value:function edit()

{
this.setState({status:true});
}},{key:'save',value:function save(

emailData,phoneNoData,dobDate){

this.setState({email:emailData,phoneNo:phoneNoData,dob:dobDate,status:false});

}},{key:'check',value:function check()


{

if(!this.state.status){
return _react2.default.createElement(_UserDetails2.default,{data:this.state});
}else


{

return _react2.default.createElement(_UserProfileInput2.default,{save:this.save.bind(this)});

}

}},{key:'render',value:function render()

{
return(

_react2.default.createElement(_reactNative.ScrollView,{style:_styles2.default.mainWrapper},
_react2.default.createElement(_Header2.default,{edit:this.edit.bind(this),data:this.state}),
_react2.default.createElement(_reactNative.View,{style:_styles2.default.profileWrapper},
_react2.default.createElement(_reactNative.View,{style:_styles2.default.profileImageWrapper},
_react2.default.createElement(_reactNative.Image,{source:_download2.default,style:_styles2.default.profileImage,blurRadius:1}))),



this.check()));



}}]);return UserProfile;}(_react.Component);exports.default=UserProfile;