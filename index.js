'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JWPlayer = function (_Component) {
  _inherits(JWPlayer, _Component);

  function JWPlayer() {
    _classCallCheck(this, JWPlayer);

    return _possibleConstructorReturn(this, (JWPlayer.__proto__ || Object.getPrototypeOf(JWPlayer)).apply(this, arguments));
  }

  _createClass(JWPlayer, [{
    key: 'render',
    value: function () {
      function render() {
        return _react2['default'].createElement(
          'div',
          { style: this.props.wrapperStyle },
          _react2['default'].createElement('iframe', _extends({ src: this.props.src }, this.props.iframeStyle))
        );
      }

      return render;
    }()
  }]);

  return JWPlayer;
}(_react.Component);

exports['default'] = JWPlayer;


JWPlayer.defaultProps = {
  wrapperStyle: {
    position: 'relative',
    paddingBottom: '56.25%',
    overflow: 'hidden'
  },
  iframeStyle: {
    width: '100%',
    height: '100%',
    frameBorder: '0',
    scrolling: 'auto',
    style: {
      position: 'absolute'
    },
    allowFullScreen: true
  }
};
