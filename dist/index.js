"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var react_native_1 = require("react-native");
var react_native_svg_1 = require("react-native-svg");
var ReactDOMServer = require("react-dom/server");
var avatar_1 = require("./avatar");
var options_1 = require("./options");
var AvatarComponent = /** @class */ (function (_super) {
    __extends(AvatarComponent, _super);
    function AvatarComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.optionContext = new options_1.OptionContext(options_1.allOptions);
        return _this;
    }
    AvatarComponent.prototype.getChildContext = function () {
        return { optionContext: this.optionContext };
    };
    AvatarComponent.prototype.UNSAFE_componentWillMount = function () {
        this.updateOptionContext(this.props);
    };
    AvatarComponent.prototype.componentWillReceiveProps = function (nextProps) {
        this.updateOptionContext(nextProps);
    };
    AvatarComponent.prototype.render = function () {
        var _a = this.props, avatarStyle = _a.avatarStyle, style = _a.style, backgroundColor = _a.backgroundColor;
        return React.createElement(avatar_1.default, { avatarStyle: avatarStyle, backgroundColor: backgroundColor, style: style });
    };
    AvatarComponent.prototype.updateOptionContext = function (props) {
        var data = {};
        for (var _i = 0, allOptions_1 = options_1.allOptions; _i < allOptions_1.length; _i++) {
            var option = allOptions_1[_i];
            var value = props[option.key];
            if (!value) {
                continue;
            }
            data[option.key] = value;
        }
        this.optionContext.setData(data);
    };
    AvatarComponent.childContextTypes = {
        optionContext: PropTypes.instanceOf(options_1.OptionContext)
    };
    return AvatarComponent;
}(React.Component));
// class Piece extends React.Component<Props> {
//   static childContextTypes = {
//     optionContext: PropTypes.instanceOf(OptionContext)
//   }
//   private optionContext: OptionContext = new OptionContext(allOptions)
//   getChildContext () {
//     return { optionContext: this.optionContext }
//   }
//   constructor (props: Props) {
//     super(props)
//     this.updateOptionContext(this.props)
//   }
//   componentWillReceiveProps (nextProps: Props) {
//     this.updateOptionContext(nextProps)
//   }
//   render () {
//     const { avatarStyle, style, pieceType, pieceSize, viewBox } = this.props
//     return <PieceComponent avatarStyle={avatarStyle as AvatarStyle} style={style} pieceType={pieceType} pieceSize={pieceSize} viewBox={viewBox}/>
//   }
//   private updateOptionContext (props: Props) {
//     const data: { [index: string]: string } = {}
//     for (const option of allOptions) {
//       const value = props[option.key]
//       if (!value) {
//         continue
//       }
//       data[option.key] = value
//     }
//     this.optionContext.setData(data)
//   }
// }
exports.AvatarReactNativeSvg = function (_a) {
    var size = _a.size, childProps = __rest(_a, ["size"]);
    return (React.createElement(react_native_svg_1.SvgXml, { xml: ReactDOMServer.renderToString(React.createElement(AvatarComponent, __assign({ style: {
                width: react_native_1.PixelRatio.getPixelSizeForLayoutSize(size),
                height: react_native_1.PixelRatio.getPixelSizeForLayoutSize(size),
            } }, childProps))), width: size, height: size }));
};
