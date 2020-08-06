import React, { Component } from 'react';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var button = function button(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "v360-menu-btns",
    onClick: props.clicked
  }, /*#__PURE__*/React.createElement("i", {
    className: props.icon
  }), props.text);
};

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/* \r\n    Document   : style.css\r\n    Created on : Dec 26, 2019\r\n    Author     : Rajeev R. Gade\r\n    Description: Stylesheet for 360 viewer\r\n*/\r\nbody,\r\nhtml {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    font-family: sans-serif;\r\n}\r\n\r\nroot {\r\n    display: block;\r\n}\r\n\r\n.v360-main {\r\n    width: 100%;\r\n    height: 100%;\r\n    max-width: 1024px;\r\n    margin: 20px auto;\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: stretch;\r\n    align-content: stretch;\r\n}\r\n\r\n/* HEADER */\r\n\r\n.v360-header {\r\n    /* width: calc(100% - 20px); */\r\n    background-color: #000;\r\n    padding: 10px;\r\n    color: #FFFFFF;\r\n    font-size: 1.5em;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    /* text-shadow: 1px 1px #000000; */\r\n    flex: 0 1 auto;\r\n}\r\n\r\n/* VIEWER */\r\n\r\n#productInsert {\r\n    background-color: #FFF;\r\n    width: 100%;\r\n    height: calc(100vh - 184px);\r\n    max-height: 768px;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.v360-fullscreen #productInsert {\r\n    height: 100vh;\r\n    max-height: none;\r\n}\r\n\r\n#viewport-wrapper {\r\n    width: 100%;\r\n    height: calc(100% - 10px);\r\n    margin: 5px auto;\r\n    position: absolute;\r\n    left: 0;\r\n    transition: width 0.3s ease;\r\n}\r\n.v360-viewport {\r\n    background-color: #FFF;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    /* position: absolute; */\r\n    left: 0;\r\n    /* transition: width 0.3s ease; */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#viewport-wrapper.wide {\r\n    width: 100%;\r\n}\r\n\r\n.v360-viewport iframe {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    /* left: 50%;\r\n    -webkit-transform: translateX(-50%) translateY(0);\r\n    -ms-transform: translateX(-50%) translateY(0);\r\n    transform: translateX(-50%) translateY(0);\r\n    transform-origin: center center; */\r\n}\r\n\r\n.v360-viewport img {\r\n    position: relative;\r\n}\r\n\r\n\r\n/* FULLSCREEN & MENU TOGGLE BUTTONS */\r\n\r\n.v360-fullscreen-toggle{\r\n    width: 30px;\r\n    height: 30px;\r\n    margin: 15px;\r\n    position: absolute;\r\n    /* color: #999;\r\n    fill: #999; */\r\n    float: right;\r\n    cursor: pointer;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: 150;\r\n}\r\n\r\n.v360-fullscreen-toggle:hover {\r\n    fill: #000;\r\n}\r\n/* \r\n.v360-fullscreen-toggle div:last-child {\r\n    display: none;\r\n} */\r\n\r\n.v360-fullscreen {\r\n    z-index: 9999;\r\n    width: 100%;\r\n    max-width: none;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.v360-fullscreen .v360-header,\r\n.v360-fullscreen #v360-menu-btns {\r\n    border-radius: 0;\r\n}\r\n\r\n.v360-fullscreen productInsert {\r\n    height: calc(100vh - 95px);\r\n    max-height: none;\r\n}\r\n\r\n.ui-accordion-header {\r\n    background-color: #B0BEC5;\r\n    outline: none;\r\n    line-height: 1.5em;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.ui-accordion-header:hover,\r\n.ui-accordion-header.ui-state-active {\r\n    background-color: #607D8B;\r\n    color: #FFF;\r\n}\r\n\r\n/* MENU BUTTONS */\r\n\r\n#v360-menu-btns {\r\n    width: 100%;\r\n    padding: 5px 0;\r\n    text-align: center;\r\n    /* position: absolute; */\r\n    bottom: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    z-index: 150;\r\n}\r\n\r\n.light{\r\n    background-color: #fff !important;\r\n}\r\n\r\n.dark{\r\n    background-color: #000 !important;\r\n}\r\n\r\n.v360-menu-btns {\r\n    /* background-color: #999; */\r\n    width: auto;\r\n    min-height: 20px;\r\n    margin: 5px 5px;\r\n    padding: 5px 10px;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    font-size: 1.3em;\r\n    text-align: center;\r\n    line-height: 1em;\r\n    cursor: pointer;\r\n    user-select: none;\r\n    position: relative;\r\n    display: inline-block;\r\n    opacity: 1;\r\n}\r\n/* \r\n.v360-btn-active{\r\n    background-color: #000;\r\n} */\r\n\r\n.light .v360-menu-btns {\r\n    color: #000;\r\n}\r\n\r\n.dark .v360-menu-btns {\r\n    color: #fff;\r\n}\r\n  \r\n/* .light .v360-btn-active{\r\n    color: #fff;\r\n} */\r\n\r\n.light .v360-menu-btns:hover {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.dark .v360-menu-btns:hover {\r\n    color: #000;\r\n    background-color: #fff;\r\n}\r\n\r\n.v360-main {\r\n    filter: alpha(opacity=50);\r\n    /* opacity: 0.5; */\r\n    cursor: default;\r\n    /* pointer-events: none; */\r\n}\r\n\r\n#v360-image-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    position: relative;\r\n}\r\n\r\n.v360-image-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    position: relative;\r\n}\r\n\r\n.v360-product-box-shadow{\r\n    position: absolute;\r\n    /* z-index: 99; */\r\n    top: 0px;\r\n    left: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    box-shadow: rgb(34, 34, 34) 0px 0px 100px inset;\r\n}\r\n\r\n.v360-fullscreen-toggle-btn i{\r\n    /* background-color: #fff; */\r\n    font-size: 20px;\r\n}\r\n.v360-spinner-grow{\r\n    display: inline-block;\r\n    width: 2rem;\r\n    height: 2rem;\r\n    vertical-align: text-bottom;\r\n    background-color: rgb(33, 37, 41);\r\n    border-radius: 50%;\r\n    opacity: 0;\r\n    -webkit-animation: spinner-grow .75s linear infinite;\r\n    animation: spinner-grow .75s linear infinite;\r\n}\r\n.v360-percentage-description{\r\n    margin-left: 2rem;\r\n}\r\n\r\n\r\n/* Tooltip */\r\n\r\n.tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n  }\r\n  \r\n  .tooltip .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n  }\r\n  \r\n  .tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n  \r\n  .tooltip{\r\n    opacity: 1 !important;\r\n  }\r\n\r\n  /* .hotspot-button{\r\n      position: absolute;\r\n  } */";
styleInject(css_248z);

var React360Viewer = /*#__PURE__*/function (_Component) {
  _inherits(React360Viewer, _Component);

  var _super = _createSuper(React360Viewer);

  function React360Viewer() {
    var _this;

    _classCallCheck(this, React360Viewer);

    _this = _super.call(this); //this.imageContainerRef = React.createRef();

    _defineProperty(_assertThisInitialized(_this), "startDragging", function (evt) {
      _this.dragging = true;
      document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';

      _this.setLastPositions(evt);

      _this.dragStart = _this.ctx.transformedPoint(_this.state.lastX, _this.state.lastY);
    });

    _defineProperty(_assertThisInitialized(_this), "doDragging", function (evt) {
      _this.setLastPositions(evt);

      if (_this.dragStart) {
        var pt = _this.ctx.transformedPoint(_this.state.lastX, _this.state.lastY);

        _this.ctx.translate(pt.x - _this.dragStart.x, pt.y - _this.dragStart.y); //redraw();


        _this.redraw();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "stopDragging", function (evt) {
      _this.dragging = false;
      _this.dragStart = null;
    });

    _defineProperty(_assertThisInitialized(_this), "prev", function (e) {
      //console.log(this.currentLeftPosition)

      /* this.setState({
          currentLeftPosition: 10
      }) */
      //this.currentLeftPosition = 10
      _this.props.spinReverse ? _this.turnRight() : _this.turnLeft();
    });

    _defineProperty(_assertThisInitialized(_this), "next", function (e) {
      _this.props.spinReverse ? _this.turnLeft() : _this.turnRight();
    });

    _defineProperty(_assertThisInitialized(_this), "resetPosition", function () {
      _this.currentScale = 1;
      _this.activeImage = 1;

      _this.setImage(true);
    });

    _defineProperty(_assertThisInitialized(_this), "zoomImage", function (evt) {
      _this.setState({
        lastX: evt.offsetX || evt.pageX - _this.canvas.offsetLeft,
        lastY: evt.offsetY || evt.pageY - _this.canvas.offsetTop
      });

      var delta = evt.wheelDelta ? evt.wheelDelta / 40 : evt.deltaY ? -evt.deltaY : 0;
      if (delta) _this.zoom(delta); //return evt.preventDefault() && false;
    });

    _defineProperty(_assertThisInitialized(_this), "zoomIn", function (evt) {
      _this.setState({
        lastX: _this.centerX,
        lastY: _this.centerY
      });

      _this.lastY = _this.centerY;

      _this.zoom(2);
    });

    _defineProperty(_assertThisInitialized(_this), "zoomOut", function (evt) {
      _this.setState({
        lastX: _this.centerX,
        lastY: _this.centerY
      });

      _this.zoom(-2);
    });

    _defineProperty(_assertThisInitialized(_this), "startMoving", function (evt) {
      _this.movement = true;
      _this.movementStart = evt.pageX;
      _this.viewPortElementRef.style.cursor = 'grabbing';
    });

    _defineProperty(_assertThisInitialized(_this), "doMoving", function (evt) {
      if (_this.movement) {
        _this.onMove(evt.clientX);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "stopMoving", function (evt) {
      _this.movement = false;
      _this.movementStart = 0;
      _this.viewPortElementRef.style.cursor = 'grab';
    });

    _defineProperty(_assertThisInitialized(_this), "play", function (e) {
      _this.setState({
        loopTimeoutId: window.setInterval(function () {
          return _this.loopImages();
        }, 100)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "togglePlay", function (e) {
      _this.setState({
        playing: !_this.state.playing
      });
    });

    _defineProperty(_assertThisInitialized(_this), "togglePanMode", function (e) {
      _this.setState({
        panmode: !_this.state.panmode
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleFullScreen", function (e) {
      _this.setState({
        isFullScreen: !_this.state.isFullScreen
      });
    });

    _this.viewPercentageRef = /*#__PURE__*/React.createRef();
    _this.canvas = null;
    _this.ctx = null;
    _this.isMobile = false;
    _this.imageData = [];
    _this.images = [];
    _this.loadedImages = 0;
    _this.viewerPercentage = null;
    _this.currentImage = null;
    _this.currentLeftPosition = _this.currentTopPosition = 0;
    _this.currentCanvasImage = null;
    _this.centerX = 0;
    _this.centerY = 0;
    _this.movementStart = 0;
    _this.movement = false;
    _this.speedFactor = 13;
    _this.activeImage = 1;
    _this.stopAtEdges = false;
    _this.state = {
      lastX: 0,
      lastY: 0,
      minScale: 0.5,
      maxScale: 4,
      scale: 0.2,
      customOffset: 10,
      currentScale: 1.0,
      currentTopPosition: 0,
      currentLeftPosition: 0,
      selectMenuOption: 1,
      currentImage: null,
      dragging: false,
      canvas: null,
      ctx: null,
      dragStart: null,
      currentCanvasImage: null,
      isFullScreen: false,
      viewPortElementWidth: null,
      movementStart: 0,
      movement: false,
      dragSpeed: 150,
      speedFactor: 13,
      activeImage: 1,
      stopAtEdges: false,
      panmode: false,
      currentLoop: 0,
      loopTimeoutId: 0,
      playing: false,
      imagesLoaded: false
    }; //this.currentLeftPosition = this.currentLeftPosition.bind(this)

    return _this;
  }

  _createClass(React360Viewer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.disableZoomin();
      this.viewerPercentage = this.viewPercentageRef.current;
      this.fetchData();
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      for (var i = 1; i <= this.props.amount; i++) {
        var imageIndex = this.props.paddingIndex ? this.lpad(i, "0", 2) : i;
        var fileName = this.props.fileName.replace('{index}', imageIndex);
        var filePath = "".concat(this.props.imagePath, "/").concat(fileName);
        this.imageData.push(filePath);
      }

      this.preloadImages();
    }
  }, {
    key: "lpad",
    value: function lpad(str, padString, length) {
      str = str.toString();

      while (str.length < length) {
        str = padString + str;
      }

      return str;
    }
  }, {
    key: "preloadImages",
    value: function preloadImages() {
      var _this2 = this;

      if (this.imageData.length) {
        try {
          //this.props.amount = this.imageData.length;
          this.imageData.forEach(function (src) {
            _this2.addImage(src);
          });
        } catch (error) {
          console.error("Something went wrong while loading images: ".concat(error.message));
        }
      } else {
        console.log('No Images Found');
      }
    }
  }, {
    key: "addImage",
    value: function addImage(resultSrc) {
      var image = new Image();
      image.src = resultSrc; //image.crossOrigin='anonymous'

      image.onload = this.onImageLoad.bind(this);
      image.onerror = this.onImageLoad.bind(this);
      this.images.push(image);
    }
  }, {
    key: "onImageLoad",
    value: function onImageLoad(event) {
      var percentage = Math.round(this.loadedImages / this.props.amount * 100);
      this.loadedImages += 1;
      this.updatePercentageInLoader(percentage);

      if (this.loadedImages === this.props.amount) {
        this.onAllImagesLoaded(event);
      } else if (this.loadedImages === 1) {
        //this.onFirstImageLoaded(event);
        console.log('load first image');
      }
    }
  }, {
    key: "updatePercentageInLoader",
    value: function updatePercentageInLoader(percentage) {
      /* if (this.loader) {
          this.loader.style.width = percentage + '%';
      }
      if (this.view360Icon) {
          this.view360Icon.innerText = percentage + '%';
      } */
      //console.log(percentage)
      this.viewerPercentage.innerHTML = percentage + '%'; //console.log(percentage + '%')
    }
  }, {
    key: "onAllImagesLoaded",
    value: function onAllImagesLoaded(e) {
      this.setState({
        imagesLoaded: true
      });
      this.initData();
    }
  }, {
    key: "initData",
    value: function initData() {
      //console.log(this.imageContainerRef)
      this.canvas = this.imageContainerRef;
      this.ctx = this.canvas.getContext('2d'); //console.log('initialize data here')

      this.attachEvents();
      this.checkMobile();
      this.loadInitialImage();
      this.setState({
        playing: this.props.autoplay
      });
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      if (this.state.panmode) {
        this.bindPanModeEvents();
      } else {
        this.bind360ModeEvents();
      }
    }
  }, {
    key: "bindPanModeEvents",
    value: function bindPanModeEvents() {
      this.viewPortElementRef.removeEventListener('touchend', this.touchEnd);
      this.viewPortElementRef.removeEventListener('touchstart', this.touchStart);
      this.viewPortElementRef.removeEventListener('touchmove', this.touchMove);
      this.viewPortElementRef.addEventListener('touchend', this.stopDragging);
      this.viewPortElementRef.addEventListener('touchstart', this.startDragging);
      this.viewPortElementRef.addEventListener('touchmove', this.doDragging);
      this.viewPortElementRef.removeEventListener('mouseup', this.stopMoving);
      this.viewPortElementRef.removeEventListener('mousedown', this.startMoving);
      this.viewPortElementRef.removeEventListener('mousemove', this.doMoving);
      this.viewPortElementRef.addEventListener('mouseup', this.stopDragging);
      this.viewPortElementRef.addEventListener('mousedown', this.startDragging);
      this.viewPortElementRef.addEventListener('mousemove', this.doDragging);
    }
  }, {
    key: "bind360ModeEvents",
    value: function bind360ModeEvents() {
      this.viewPortElementRef.removeEventListener('touchend', this.stopDragging);
      this.viewPortElementRef.removeEventListener('touchstart', this.startDragging);
      this.viewPortElementRef.removeEventListener('touchmove', this.doDragging);
      this.viewPortElementRef.addEventListener('touchend', this.touchEnd);
      this.viewPortElementRef.addEventListener('touchstart', this.touchStart);
      this.viewPortElementRef.addEventListener('touchmove', this.touchMove);
      this.viewPortElementRef.removeEventListener('mouseup', this.stopDragging);
      this.viewPortElementRef.removeEventListener('mousedown', this.startDragging);
      this.viewPortElementRef.removeEventListener('mousemove', this.doDragging);
      this.viewPortElementRef.addEventListener('mouseup', this.stopMoving);
      this.viewPortElementRef.addEventListener('mousedown', this.startMoving);
      this.viewPortElementRef.addEventListener('mousemove', this.doMoving);
    }
  }, {
    key: "setLastPositions",
    value: function setLastPositions(evt) {
      if (this.isMobile) {
        this.setState({
          lastX: evt.touches[0].offsetX || evt.touches[0].pageX - this.canvas.offsetLeft,
          lastY: evt.touches[0].offsetY || evt.touches[0].pageY - this.canvas.offsetTop
        });
      } else {
        this.setState({
          lastX: evt.offsetX || evt.pageX - this.canvas.offsetLeft,
          lastY: evt.offsetY || evt.pageY - this.canvas.offsetTop
        });
      }
    }
  }, {
    key: "checkMobile",
    value: function checkMobile() {
      this.isMobile = !!('ontouchstart' in window || navigator.msMaxTouchPoints);
    }
  }, {
    key: "loadInitialImage",
    value: function loadInitialImage() {
      this.currentImage = this.imageData[0];
      this.setImage();
    }
  }, {
    key: "setImage",
    value: function setImage() {
      var _this3 = this;

      var cached = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.currentLeftPosition = this.currentTopPosition = 0;

      if (!cached) {
        this.currentCanvasImage = new Image();
        this.currentCanvasImage.crossOrigin = 'anonymous';
        this.currentCanvasImage.src = this.currentImage;

        this.currentCanvasImage.onload = function () {
          var viewportElement = _this3.viewPortElementRef.getBoundingClientRect();

          _this3.canvas.width = _this3.state.isFullScreen ? viewportElement.width : _this3.currentCanvasImage.width;
          _this3.canvas.height = _this3.state.isFullScreen ? viewportElement.height : _this3.currentCanvasImage.height;

          _this3.trackTransforms(_this3.ctx);

          _this3.redraw();
        };

        this.currentCanvasImage.onerror = function () {
          console.log('cannot load this image');
        };
      } else {
        this.currentCanvasImage = this.images[0];
        var viewportElement = this.viewPortElementRef.getBoundingClientRect();
        this.canvas.width = this.state.isFullScreen ? viewportElement.width : this.currentCanvasImage.width;
        this.canvas.height = this.state.isFullScreen ? viewportElement.height : this.currentCanvasImage.height;
        this.trackTransforms(this.ctx);
        this.redraw();
      }
    }
  }, {
    key: "redraw",
    value: function redraw() {
      try {
        var p1 = this.ctx.transformedPoint(0, 0);
        var p2 = this.ctx.transformedPoint(this.canvas.width, this.canvas.height);
        var hRatio = this.canvas.width / this.currentCanvasImage.width;
        var vRatio = this.canvas.height / this.currentCanvasImage.height;
        var ratio = Math.min(hRatio, vRatio);
        var centerShift_x = (this.canvas.width - this.currentCanvasImage.width * ratio) / 2;
        var centerShift_y = (this.canvas.height - this.currentCanvasImage.height * ratio) / 2;
        this.ctx.clearRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);
        this.centerX = this.currentCanvasImage.width * ratio / 2;
        this.centerY = this.currentCanvasImage.height * ratio / 2; //center image

        this.ctx.drawImage(this.currentCanvasImage, this.currentLeftPosition, this.currentTopPosition, this.currentCanvasImage.width, this.currentCanvasImage.height, centerShift_x, centerShift_y, this.currentCanvasImage.width * ratio, this.currentCanvasImage.height * ratio); //this.addHotspots()
      } catch (e) {
        this.trackTransforms(this.ctx);
      }
    }
  }, {
    key: "trackTransforms",
    value: function trackTransforms(ctx) {
      var _this4 = this;

      return new Promise(function (resolve) {
        var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        var xform = svg.createSVGMatrix();

        _this4.ctx.getTransform = function () {
          return xform;
        };

        var savedTransforms = [];
        var save = ctx.save;

        _this4.ctx.save = function () {
          savedTransforms.push(xform.translate(0, 0));
          return save.call(_this4.ctx);
        };

        var restore = ctx.restore;

        _this4.ctx.restore = function () {
          xform = savedTransforms.pop();
          return restore.call(_this4.ctx);
        };

        var scale = _this4.ctx.scale;

        _this4.ctx.scale = function (sx, sy) {
          xform = xform.scaleNonUniform(sx, sy);
          return scale.call(_this4.ctx, sx, sy);
        };

        var rotate = _this4.ctx.rotate;

        _this4.ctx.rotate = function (radians) {
          xform = xform.rotate(radians * 180 / Math.PI);
          return rotate.call(_this4.ctx, radians);
        };

        var translate = _this4.ctx.translate;

        _this4.ctx.translate = function (dx, dy) {
          xform = xform.translate(dx, dy);
          return translate.call(_this4.ctx, dx, dy);
        };

        var transform = _this4.ctx.transform;

        _this4.ctx.transform = function (a, b, c, d, e, f) {
          var m2 = svg.createSVGMatrix();
          m2.a = a;
          m2.b = b;
          m2.c = c;
          m2.d = d;
          m2.e = e;
          m2.f = f;
          xform = xform.multiply(m2);
          return transform.call(_this4.ctx, a, b, c, d, e, f);
        };

        var setTransform = _this4.ctx.setTransform;

        _this4.ctx.setTransform = function (a, b, c, d, e, f) {
          xform.a = a;
          xform.b = b;
          xform.c = c;
          xform.d = d;
          xform.e = e;
          xform.f = f;
          return setTransform.call(_this4.ctx, a, b, c, d, e, f);
        };

        var pt = svg.createSVGPoint();

        _this4.ctx.transformedPoint = function (x, y) {
          pt.x = x;
          pt.y = y;
          return pt.matrixTransform(xform.inverse());
        };

        resolve(_this4.ctx);
      });
    }
  }, {
    key: "turnLeft",
    value: function turnLeft() {
      this.moveActiveIndexDown(1);
    }
  }, {
    key: "turnRight",
    value: function turnRight() {
      this.moveActiveIndexUp(1);
    }
  }, {
    key: "moveActiveIndexUp",
    value: function moveActiveIndexUp(itemsSkipped) {
      if (this.stopAtEdges) {
        if (this.activeImage + itemsSkipped >= this.props.amount) {
          this.activeImage = this.props.amount;
        } else {
          this.activeImage += itemsSkipped;
        }
      } else {
        this.activeImage = (this.activeImage + itemsSkipped) % this.props.amount || this.props.amount;
      }

      this.update();
    }
  }, {
    key: "moveActiveIndexDown",
    value: function moveActiveIndexDown(itemsSkipped) {
      if (this.stopAtEdges) {
        if (this.activeImage - itemsSkipped <= 1) {
          this.activeImage = 1;
        } else {
          this.activeImage -= itemsSkipped;
        }
      } else {
        if (this.activeImage - itemsSkipped < 1) {
          this.activeImage = this.props.amount + (this.activeImage - itemsSkipped);
        } else {
          this.activeImage -= itemsSkipped;
        }
      }

      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      var image = this.images[this.activeImage - 1];
      this.currentCanvasImage = image;
      this.redraw();
    }
  }, {
    key: "zoom",
    value: function zoom(clicks) {
      //console.log(this.lastX + ' - ' + this.lastY)
      var factor = Math.pow(1.01, clicks); //console.log(factor)

      if (factor > 1) {
        this.currentScale += factor;
      } else {
        if (this.currentScale - factor > 1) this.currentScale -= factor;else this.currentScale = 1;
      }

      if (this.currentScale > 1) {
        var pt = this.ctx.transformedPoint(this.state.lastX, this.state.lastY);
        this.ctx.translate(pt.x, pt.y); //console.log(this.currentScale)

        this.ctx.scale(factor, factor);
        this.ctx.translate(-pt.x, -pt.y);
        this.redraw();
      }
    }
  }, {
    key: "disableZoomin",
    value: function disableZoomin() {
      document.addEventListener("gesturestart", function (e) {
        e.preventDefault();
        document.body.style.zoom = 0.99;
      });
      document.addEventListener("gesturechange", function (e) {
        e.preventDefault();
        document.body.style.zoom = 0.99;
      });
      document.addEventListener("gestureend", function (e) {
        e.preventDefault();
        document.body.style.zoom = 1;
      });
    }
  }, {
    key: "onMove",
    value: function onMove(pageX) {
      if (pageX - this.movementStart >= this.speedFactor) {
        var itemsSkippedRight = Math.floor((pageX - this.movementStart) / this.speedFactor) || 1;
        this.movementStart = pageX;

        if (this.props.spinReverse) {
          this.moveActiveIndexDown(itemsSkippedRight);
        } else {
          this.moveActiveIndexUp(itemsSkippedRight);
        }

        this.redraw();
      } else if (this.movementStart - pageX >= this.speedFactor) {
        var itemsSkippedLeft = Math.floor((this.movementStart - pageX) / this.speedFactor) || 1;
        this.movementStart = pageX;

        if (this.props.spinReverse) {
          this.moveActiveIndexUp(itemsSkippedLeft);
        } else {
          this.moveActiveIndexDown(itemsSkippedLeft);
        }

        this.redraw();
      }
    }
  }, {
    key: "onSpin",
    value: function onSpin() {
      if (this.state.playing || this.state.loopTimeoutId) {
        this.stop();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.activeImage === 1) {
        this.setState({
          currentLoop: 0
        });
      }

      this.setState({
        playing: false
      });
      window.clearTimeout(this.state.loopTimeoutId);
    }
  }, {
    key: "loopImages",
    value: function loopImages() {
      var loop = this.props.loop ? this.props.loop : 1;

      if (this.activeImage === 1) {
        if (this.state.currentLoop === loop) {
          this.stop();
        } else {
          this.setState({
            currentLoop: this.state.currentLoop + 1
          });
          this.next();
        }
      } else {
        this.next();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.currentLeftPosition !== prevState.currentLeftPosition) {
        console.log('Left Position Changed');
      }

      if (this.state.panmode !== prevState.panmode) {
        this.attachEvents();
      }

      if (this.state.playing !== prevState.playing) {
        if (!this.state.playing) {
          this.stop();
        } else {
          this.play();
        }
      }

      if (this.state.isFullScreen !== prevState.isFullScreen) {
        if (!this.state.isFullScreen) {
          //exit full screen
          this.viewerContainerRef.classList.remove('v360-main');
          this.viewerContainerRef.classList.remove('v360-fullscreen');
        } else {
          //enter full screen
          this.viewerContainerRef.classList.add('v360-main');
          this.viewerContainerRef.classList.add('v360-fullscreen');
        }

        this.setImage();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "v360-viewer-container",
        ref: function ref(inputEl) {
          _this5.viewerContainerRef = inputEl;
        },
        id: "identifier",
        onWheel: function onWheel(e) {
          return _this5.zoomImage(e);
        }
      }, !this.state.imagesLoaded ? /*#__PURE__*/React.createElement("div", {
        className: "v360-viewport"
      }, /*#__PURE__*/React.createElement("div", {
        className: "v360-spinner-grow"
      }), /*#__PURE__*/React.createElement("p", {
        ref: this.viewPercentageRef,
        className: "v360-percentage-text"
      })) : '', /*#__PURE__*/React.createElement("div", {
        className: "v360-viewport",
        ref: function ref(inputEl) {
          _this5.viewPortElementRef = inputEl;
        }
      }, /*#__PURE__*/React.createElement("canvas", {
        className: "v360-image-container",
        ref: function ref(inputEl) {
          _this5.imageContainerRef = inputEl;
        }
      }), this.props.boxShadow ? /*#__PURE__*/React.createElement("div", {
        className: "v360-product-box-shadow"
      }) : ''), /*#__PURE__*/React.createElement("abbr", {
        title: "Fullscreen Toggle"
      }, /*#__PURE__*/React.createElement("div", {
        className: "v360-fullscreen-toggle text-center",
        onClick: this.toggleFullScreen
      }, /*#__PURE__*/React.createElement("div", {
        className: this.props.buttonClass === 'dark' ? 'v360-fullscreen-toggle-btn text-light' : 'v360-fullscreen-toggle-btn text-dark'
      }, /*#__PURE__*/React.createElement("i", {
        className: !this.state.isFullScreen ? 'fas fa-expand text-lg' : 'fas fa-compress text-lg'
      })))), /*#__PURE__*/React.createElement("div", {
        id: "v360-menu-btns",
        className: this.props.buttonClass
      }, /*#__PURE__*/React.createElement("div", {
        className: "v360-navigate-btns"
      }, /*#__PURE__*/React.createElement(button, {
        clicked: this.togglePlay,
        icon: this.state.playing ? 'fa fa-pause' : 'fa fa-play'
      }), /*#__PURE__*/React.createElement(button, {
        clicked: this.zoomIn,
        icon: "fa fa-search-plus"
      }), /*#__PURE__*/React.createElement(button, {
        clicked: this.zoomOut,
        icon: "fa fa-search-minus"
      }), this.state.panmode ? /*#__PURE__*/React.createElement(button, {
        clicked: this.togglePanMode,
        text: "360\xB0"
      }) : /*#__PURE__*/React.createElement(button, {
        clicked: this.togglePanMode,
        icon: "fa fa-hand-paper"
      }), /*#__PURE__*/React.createElement(button, {
        clicked: this.prev,
        icon: "fa fa-chevron-left"
      }), /*#__PURE__*/React.createElement(button, {
        clicked: this.next,
        icon: "fa fa-chevron-right"
      }), /*#__PURE__*/React.createElement(button, {
        clicked: this.resetPosition,
        icon: "fa fa-sync"
      })))));
    }
  }]);

  return React360Viewer;
}(Component);

export default React360Viewer;
