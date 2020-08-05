import React, { Component } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

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

var css_248z = "/* \n    Document   : style.css\n    Created on : Dec 26, 2019\n    Author     : Rajeev R. Gade\n    Description: Stylesheet for 360 viewer\n*/\nbody,\nhtml {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    font-family: sans-serif;\n}\n\nroot {\n    display: block;\n}\n\n.v360-main {\n    width: 100%;\n    height: 100%;\n    max-width: 1024px;\n    margin: 20px auto;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    align-content: stretch;\n}\n\n/* HEADER */\n\n.v360-header {\n    /* width: calc(100% - 20px); */\n    background-color: #000;\n    padding: 10px;\n    color: #FFFFFF;\n    font-size: 1.5em;\n    text-align: center;\n    font-weight: bold;\n    /* text-shadow: 1px 1px #000000; */\n    flex: 0 1 auto;\n}\n\n/* VIEWER */\n\n#productInsert {\n    background-color: #FFF;\n    width: 100%;\n    height: calc(100vh - 184px);\n    max-height: 768px;\n    position: relative;\n    overflow: hidden;\n}\n\n.v360-fullscreen #productInsert {\n    height: 100vh;\n    max-height: none;\n}\n\n#viewport-wrapper {\n    width: 100%;\n    height: calc(100% - 10px);\n    margin: 5px auto;\n    position: absolute;\n    left: 0;\n    transition: width 0.3s ease;\n}\n.v360-viewport {\n    background-color: #FFF;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    /* position: absolute; */\n    left: 0;\n    /* transition: width 0.3s ease; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#viewport-wrapper.wide {\n    width: 100%;\n}\n\n.v360-viewport iframe {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    /* left: 50%;\n    -webkit-transform: translateX(-50%) translateY(0);\n    -ms-transform: translateX(-50%) translateY(0);\n    transform: translateX(-50%) translateY(0);\n    transform-origin: center center; */\n}\n\n.v360-viewport img {\n    position: relative;\n}\n\n\n/* FULLSCREEN & MENU TOGGLE BUTTONS */\n\n.v360-fullscreen-toggle{\n    width: 30px;\n    height: 30px;\n    margin: 15px;\n    position: absolute;\n    /* color: #999;\n    fill: #999; */\n    float: right;\n    cursor: pointer;\n    top: 0;\n    right: 0;\n    z-index: 150;\n}\n\n.v360-fullscreen-toggle:hover {\n    fill: #000;\n}\n/* \n.v360-fullscreen-toggle div:last-child {\n    display: none;\n} */\n\n.v360-fullscreen {\n    z-index: 9999;\n    width: 100%;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    position: fixed;\n    top: 0;\n    left: 0;\n}\n\n.v360-fullscreen .v360-header,\n.v360-fullscreen #v360-menu-btns {\n    border-radius: 0;\n}\n\n.v360-fullscreen productInsert {\n    height: calc(100vh - 95px);\n    max-height: none;\n}\n\n.ui-accordion-header {\n    background-color: #B0BEC5;\n    outline: none;\n    line-height: 1.5em;\n    transition: all 0.3s ease;\n}\n\n.ui-accordion-header:hover,\n.ui-accordion-header.ui-state-active {\n    background-color: #607D8B;\n    color: #FFF;\n}\n\n/* MENU BUTTONS */\n\n#v360-menu-btns {\n    width: 100%;\n    padding: 5px 0;\n    text-align: center;\n    /* position: absolute; */\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    z-index: 150;\n}\n\n.light{\n    background-color: #fff !important;\n}\n\n.dark{\n    background-color: #000 !important;\n}\n\n.v360-menu-btns {\n    /* background-color: #999; */\n    width: auto;\n    min-height: 20px;\n    margin: 5px 5px;\n    padding: 5px 10px;\n    border-radius: 5px;\n    outline: none;\n    font-size: 1.3em;\n    text-align: center;\n    line-height: 1em;\n    cursor: pointer;\n    user-select: none;\n    position: relative;\n    display: inline-block;\n    opacity: 1;\n}\n/* \n.v360-btn-active{\n    background-color: #000;\n} */\n\n.light .v360-menu-btns {\n    color: #000;\n}\n\n.dark .v360-menu-btns {\n    color: #fff;\n}\n  \n/* .light .v360-btn-active{\n    color: #fff;\n} */\n\n.light .v360-menu-btns:hover {\n    color: #fff;\n    background-color: #000;\n}\n\n.dark .v360-menu-btns:hover {\n    color: #000;\n    background-color: #fff;\n}\n\n.v360-main {\n    filter: alpha(opacity=50);\n    /* opacity: 0.5; */\n    cursor: default;\n    /* pointer-events: none; */\n}\n\n#v360-image-container {\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    position: relative;\n}\n\n.v360-image-container {\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    position: relative;\n}\n\n.v360-product-box-shadow{\n    position: absolute;\n    /* z-index: 99; */\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    box-shadow: rgb(34, 34, 34) 0px 0px 100px inset;\n}\n\n.v360-fullscreen-toggle-btn i{\n    /* background-color: #fff; */\n    font-size: 20px;\n}\n.v360-spinner-grow{\n    display: inline-block;\n    width: 2rem;\n    height: 2rem;\n    vertical-align: text-bottom;\n    background-color: rgb(33, 37, 41);\n    border-radius: 50%;\n    opacity: 0;\n    -webkit-animation: spinner-grow .75s linear infinite;\n    animation: spinner-grow .75s linear infinite;\n}\n.v360-percentage-description{\n    margin-left: 2rem;\n}\n\n\n/* Tooltip */\n\n.tooltip {\n    position: relative;\n    display: inline-block;\n  }\n  \n  .tooltip .tooltiptext {\n    visibility: hidden;\n    width: 120px;\n    background-color: #555;\n    color: #fff;\n    text-align: center;\n    border-radius: 6px;\n    padding: 5px 0;\n    position: absolute;\n    z-index: 1;\n    bottom: 125%;\n    left: 50%;\n    margin-left: -60px;\n    opacity: 0;\n    transition: opacity 0.3s;\n  }\n  \n  .tooltip .tooltiptext::after {\n    content: \"\";\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: #555 transparent transparent transparent;\n  }\n  \n  .tooltip:hover .tooltiptext {\n    visibility: visible;\n    opacity: 1;\n  }\n  \n  .tooltip{\n    opacity: 1 !important;\n  }\n\n  /* .hotspot-button{\n      position: absolute;\n  } */";
styleInject(css_248z);

class React360Viewer extends Component {

    constructor() {
        super();
        //this.imageContainerRef = React.createRef();
        this.viewPercentageRef = React.createRef();
        this.canvas = null;
        this.ctx = null;
        this.isMobile = false;
        this.imageData = [];
        this.images = [];
        this.loadedImages = 0;
        this.viewerPercentage = null;
        this.currentImage = null;
        this.currentLeftPosition = this.currentTopPosition = 0;
        this.currentCanvasImage = null;
        this.centerX = 0;
        this.centerY = 0;
        this.movementStart = 0;
        this.movement = false;
        this.speedFactor = 13;
        this.activeImage = 1;
        this.stopAtEdges = false;

        this.state = {
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
        };

        //this.currentLeftPosition = this.currentLeftPosition.bind(this)
    }

    componentDidMount(){
        this.disableZoomin();

        this.viewerPercentage = this.viewPercentageRef.current;

        this.fetchData();
    }

    fetchData(){
        for(let i=1; i <= this.props.amount; i++){
            const imageIndex = (this.props.paddingIndex) ? this.lpad(i, "0", 2) : i;
            const fileName = this.props.fileName.replace('{index}', imageIndex);
            const filePath = `${this.props.imagePath}/${fileName}`;
            this.imageData.push(filePath);
        }

        this.preloadImages();
    }

    lpad(str, padString, length) {
        str = str.toString();
        while (str.length < length) str = padString + str;
        return str
    }

    preloadImages() {
        if (this.imageData.length) {
            try {
                //this.props.amount = this.imageData.length;
                this.imageData.forEach(src => {
                    this.addImage(src);
                });
            } catch (error) {
                console.error(`Something went wrong while loading images: ${error.message}`);
            }
        } else {
            console.log('No Images Found');
        }
    }

    addImage(resultSrc){
        const image = new Image();
        image.src = resultSrc;
        //image.crossOrigin='anonymous'
        image.onload = this.onImageLoad.bind(this);
        image.onerror = this.onImageLoad.bind(this);
        this.images.push(image);
    }

    onImageLoad(event) {
        const percentage = Math.round(this.loadedImages / this.props.amount * 100);
        this.loadedImages += 1;
        this.updatePercentageInLoader(percentage);
        if (this.loadedImages === this.props.amount) {
            this.onAllImagesLoaded(event);
        } else if (this.loadedImages === 1) {
            //this.onFirstImageLoaded(event);
            console.log('load first image');
        }
    }

    updatePercentageInLoader(percentage) {
        /* if (this.loader) {
            this.loader.style.width = percentage + '%';
        }
        if (this.view360Icon) {
            this.view360Icon.innerText = percentage + '%';
        } */
        //console.log(percentage)
        this.viewerPercentage.innerHTML = percentage + '%';
        //console.log(percentage + '%')
    }

    onAllImagesLoaded(e){
        this.setState({ imagesLoaded: true });
        
        this.initData();
    }

    initData(){
        console.log(this.imageContainerRef);
        this.canvas = this.imageContainerRef;
        this.ctx = this.canvas.getContext('2d');
        console.log('initialize data here');

        this.attachEvents();

        this.checkMobile();
        this.loadInitialImage();

        this.setState({ playing: this.props.autoplay });
    }

    attachEvents(){
        if(this.state.panmode){
            this.bindPanModeEvents();
        }else {
            this.bind360ModeEvents();
        }
    }

    bindPanModeEvents(){
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
    
    bind360ModeEvents(){
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

    startDragging = (evt) => {
        this.dragging = true;
        document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
        this.setLastPositions(evt);
        
        this.dragStart = this.ctx.transformedPoint(this.state.lastX,this.state.lastY);
    }

    setLastPositions(evt){
        if(this.isMobile){
            this.setState({ 
                lastX: evt.touches[0].offsetX || (evt.touches[0].pageX - this.canvas.offsetLeft),
                lastY: evt.touches[0].offsetY || (evt.touches[0].pageY - this.canvas.offsetTop)
            });
        }else {
            this.setState({ 
                lastX: evt.offsetX || (evt.pageX - this.canvas.offsetLeft),
                lastY: evt.offsetY || (evt.pageY - this.canvas.offsetTop) 
            });
        }
    }

    doDragging = (evt) => {
        
        this.setLastPositions(evt);
        
        if (this.dragStart){
            let pt = this.ctx.transformedPoint(this.state.lastX,this.state.lastY);
            this.ctx.translate(pt.x-this.dragStart.x,pt.y-this.dragStart.y);
            //redraw();
            this.redraw();
        }
    }

    stopDragging = (evt) => {
        this.dragging = false;
        this.dragStart = null;
    }

    checkMobile(){
        this.isMobile = !!('ontouchstart' in window || navigator.msMaxTouchPoints);
    }

    loadInitialImage(){
        this.currentImage = this.imageData[0]; 
        this.setImage();
    }

    setImage(cached = false){
        this.currentLeftPosition = this.currentTopPosition = 0;
        
        if(!cached){
            this.currentCanvasImage = new Image();
            this.currentCanvasImage.crossOrigin='anonymous';
            this.currentCanvasImage.src = this.currentImage;
            this.currentCanvasImage.onload = () => {
                let viewportElement = this.viewPortElementRef.getBoundingClientRect();
                this.canvas.width  = (this.state.isFullScreen) ? viewportElement.width : this.currentCanvasImage.width;
                this.canvas.height = (this.state.isFullScreen) ? viewportElement.height : this.currentCanvasImage.height;
                this.trackTransforms(this.ctx);
                this.redraw();
            };
            this.currentCanvasImage.onerror = () => {
                console.log('cannot load this image');
            };
        }else {
            this.currentCanvasImage = this.images[0];
            let viewportElement = this.viewPortElementRef.getBoundingClientRect();
            this.canvas.width  = (this.state.isFullScreen) ? viewportElement.width : this.currentCanvasImage.width;
            this.canvas.height = (this.state.isFullScreen) ? viewportElement.height : this.currentCanvasImage.height;
            this.trackTransforms(this.ctx);
            this.redraw();
        }
        
    }

    redraw(){
        try {
            let p1 = this.ctx.transformedPoint(0,0);
            let p2 = this.ctx.transformedPoint(this.canvas.width,this.canvas.height);
            let hRatio = this.canvas.width / this.currentCanvasImage.width;
            let vRatio =  this.canvas.height / this.currentCanvasImage.height;
            let ratio  = Math.min(hRatio, vRatio);
            let centerShift_x = (this.canvas.width - this.currentCanvasImage.width*ratio )/2;
            let centerShift_y = (this.canvas.height - this.currentCanvasImage.height*ratio )/2;
            this.ctx.clearRect(p1.x,p1.y,p2.x-p1.x,p2.y-p1.y);
            this.centerX = this.currentCanvasImage.width*ratio/2;
            this.centerY = this.currentCanvasImage.height*ratio/2;
            
            //center image
            this.ctx.drawImage(this.currentCanvasImage, this.currentLeftPosition, this.currentTopPosition, this.currentCanvasImage.width, this.currentCanvasImage.height,
                        centerShift_x,centerShift_y,this.currentCanvasImage.width*ratio, this.currentCanvasImage.height*ratio);  
            //this.addHotspots()
        }
        catch(e){
            this.trackTransforms(this.ctx);
        }
    }

    trackTransforms(ctx){
        return new Promise(resolve => {
            var svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
            var xform = svg.createSVGMatrix();
            this.ctx.getTransform = function(){ return xform; };
            
            var savedTransforms = [];
            var save = ctx.save;
            this.ctx.save = () => {
                savedTransforms.push(xform.translate(0,0));
                return save.call(this.ctx);
            };
            var restore = ctx.restore;
            this.ctx.restore = () => {
                xform = savedTransforms.pop();
                return restore.call(this.ctx);
            };
            var scale = this.ctx.scale;
            this.ctx.scale = (sx,sy) => {
                xform = xform.scaleNonUniform(sx,sy);
                return scale.call(this.ctx,sx,sy);
            };
            var rotate = this.ctx.rotate;
            this.ctx.rotate = (radians) => {
                xform = xform.rotate(radians*180/Math.PI);
                return rotate.call(this.ctx,radians);
            };
            var translate = this.ctx.translate;
            this.ctx.translate = (dx,dy) => {
                xform = xform.translate(dx,dy);
                return translate.call(this.ctx,dx,dy);
            };
            var transform = this.ctx.transform;
            this.ctx.transform = (a,b,c,d,e,f) => {
                var m2 = svg.createSVGMatrix();
                m2.a=a; m2.b=b; m2.c=c; m2.d=d; m2.e=e; m2.f=f;
                xform = xform.multiply(m2);
                return transform.call(this.ctx,a,b,c,d,e,f);
            };
            var setTransform = this.ctx.setTransform;
            this.ctx.setTransform = (a,b,c,d,e,f) => {
                xform.a = a;
                xform.b = b;
                xform.c = c;
                xform.d = d;
                xform.e = e;
                xform.f = f;
                return setTransform.call(this.ctx,a,b,c,d,e,f);
            };
            var pt  = svg.createSVGPoint();
            this.ctx.transformedPoint = (x,y) => {
                pt.x=x; pt.y=y;
                return pt.matrixTransform(xform.inverse());
            };
            resolve(this.ctx);
        })
        
    }

    prev = (e) => {
        //console.log(this.currentLeftPosition)
        /* this.setState({
            currentLeftPosition: 10
        }) */
        //this.currentLeftPosition = 10
        (this.props.spinReverse) ? this.turnRight() : this.turnLeft();
    }

    next = (e) => {
        (this.props.spinReverse) ? this.turnLeft() : this.turnRight();
    }

    resetPosition = () => {
        this.currentScale = 1;
        this.activeImage = 1;
        this.setImage(true);
    }

    turnLeft(){
        this.moveActiveIndexDown(1);
    }

    turnRight(){
        this.moveActiveIndexUp(1);
    }

    moveActiveIndexUp(itemsSkipped) {
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

    moveActiveIndexDown(itemsSkipped) {
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

    update() {
        const image = this.images[this.activeImage - 1];
        this.currentCanvasImage = image;
        this.redraw();
    }

    zoomImage = (evt) => {
        this.setState({ 
            lastX: evt.offsetX || (evt.pageX - this.canvas.offsetLeft),
            lastY: evt.offsetY || (evt.pageY - this.canvas.offsetTop)
        });
        
        var delta = evt.wheelDelta ? evt.wheelDelta/40 : evt.deltaY ? -evt.deltaY : 0;
        
        if (delta) this.zoom(delta);
        //return evt.preventDefault() && false;
            
    }

    zoomIn = (evt) => {
        this.setState({ 
            lastX: this.centerX,
            lastY: this.centerY
        });
        this.lastY = this.centerY;
        this.zoom(2);
    }
    zoomOut = (evt) => {
        this.setState({ 
            lastX: this.centerX,
            lastY: this.centerY
        });
        this.zoom(-2);
    }

    zoom(clicks){
        //console.log(this.lastX + ' - ' + this.lastY)
        let factor = Math.pow(1.01,clicks);
        //console.log(factor)
        if(factor > 1){
            this.currentScale += factor;
        }else {
            if(this.currentScale-factor > 1)
                this.currentScale -= factor;
            else
                this.currentScale = 1;
        }
        
        if(this.currentScale > 1){
            let pt = this.ctx.transformedPoint(this.state.lastX,this.state.lastY);
            this.ctx.translate(pt.x,pt.y);
            
            //console.log(this.currentScale)
            this.ctx.scale(factor,factor);
            this.ctx.translate(-pt.x,-pt.y);
            this.redraw();
        }
    }

    disableZoomin(){
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


    onMove(pageX){
        if (pageX - this.movementStart >= this.speedFactor) {
            let itemsSkippedRight = Math.floor((pageX - this.movementStart) / this.speedFactor) || 1;
            
            this.movementStart = pageX;
            if (this.props.spinReverse) {
                this.moveActiveIndexDown(itemsSkippedRight);
            } else {
                this.moveActiveIndexUp(itemsSkippedRight);
            }
            this.redraw();
        } else if (this.movementStart - pageX >= this.speedFactor) {
            let itemsSkippedLeft = Math.floor((this.movementStart - pageX) / this.speedFactor) || 1;
            
            this.movementStart = pageX;
            if (this.props.spinReverse) {
                this.moveActiveIndexUp(itemsSkippedLeft);
            } else {
                this.moveActiveIndexDown(itemsSkippedLeft);
            }
            this.redraw();
        }
    }

    startMoving = (evt) => {
        this.movement = true;
        this.movementStart = evt.pageX;
        this.viewPortElementRef.style.cursor = 'grabbing';
    }

    doMoving = (evt) => {
        if(this.movement){
            this.onMove(evt.clientX);
        }
    }

    stopMoving = (evt) => {
        this.movement = false;
        this.movementStart = 0;
        this.viewPortElementRef.style.cursor = 'grab';
    }

    play = (e) => {
        this.setState({
            loopTimeoutId: window.setInterval(() => this.loopImages(), 100)
        });
    }

    onSpin() {
        if (this.state.playing || this.state.loopTimeoutId) {
            this.stop();
        }
    }

    stop() {
        if(this.activeImage === 1){
            this.setState({ currentLoop: 0 });
        }
        this.setState({ playing: false });
        window.clearTimeout(this.state.loopTimeoutId);
    }

    loopImages() {
        let loop = (this.props.loop) ? this.props.loop : 1;

        if(this.activeImage === 1){
            if(this.state.currentLoop === loop){
                this.stop();
            }
            else {
                this.setState({ currentLoop: this.state.currentLoop + 1 });
                
                this.next();
            }
        }
        else {
            this.next();
        }
    }

    togglePlay = (e) => {
        this.setState({ playing: !this.state.playing });
    }

    togglePanMode = (e) => {
        this.setState({ panmode: !this.state.panmode });
    }

    toggleFullScreen = (e) => {
        this.setState({ isFullScreen: !this.state.isFullScreen });
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.currentLeftPosition !== prevState.currentLeftPosition){
            console.log('Left Position Changed');
        }

        if(this.state.panmode !== prevState.panmode){
            this.attachEvents();
        }

        if(this.state.playing !== prevState.playing){
            if(!this.state.playing){
                this.stop();
            }else {
                this.play();
            }
        }

        if(this.state.isFullScreen !== prevState.isFullScreen){
            if(!this.state.isFullScreen){
                //exit full screen
                this.viewerContainerRef.classList.remove('v360-main');
                this.viewerContainerRef.classList.remove('v360-fullscreen');
            }else {
                //enter full screen
                this.viewerContainerRef.classList.add('v360-main');
                this.viewerContainerRef.classList.add('v360-fullscreen');
                
            }
            this.setImage();
        }
    }

    render() {
        
        return (
            <div>
                <div className="v360-viewer-container" ref={(inputEl) => {this.viewerContainerRef = inputEl;}} id="identifier" onWheel={(e) => this.zoomImage(e)}>

                    {!this.state.imagesLoaded ? 
                    <div className="v360-viewport">
                        <div className="v360-spinner-grow"></div>
                        <p ref={this.viewPercentageRef} className="v360-percentage-text"></p>
                    </div> : '' }

                    <div className="v360-viewport" ref={(inputEl) => {this.viewPortElementRef = inputEl;}}>
                        <canvas 
                            className="v360-image-container" 
                            ref={(inputEl) => {this.imageContainerRef = inputEl;}} 
                        ></canvas>
                        {this.props.boxShadow ? <div className="v360-product-box-shadow"></div> : ''}
                    </div>

                    <abbr title="Fullscreen Toggle">
                        <div class="v360-fullscreen-toggle text-center" onClick={this.toggleFullScreen}>
                            <div className={this.props.buttonClass === 'dark' ? 'v360-fullscreen-toggle-btn text-light' : 'v360-fullscreen-toggle-btn text-dark'}>
                                <i className={!this.state.isFullScreen ? 'fas fa-expand text-lg' : 'fas fa-compress text-lg'}></i>
                            </div>
                        </div>
                    </abbr>
                    
                    <div id="v360-menu-btns" className={this.props.buttonClass}>
                        <div className="v360-navigate-btns">
                            <Button 
                                clicked={this.togglePlay} 
                                icon={this.state.playing ? 'fa fa-pause' : 'fa fa-play'} 
                            />
                            <Button 
                                clicked={this.zoomIn} 
                                icon="fa fa-search-plus" 
                            />
                            <Button 
                                clicked={this.zoomOut} 
                                icon="fa fa-search-minus" 
                            />

                            {this.state.panmode ? <Button clicked={this.togglePanMode} text="360&deg;"/> : <Button clicked={this.togglePanMode} icon="fa fa-hand-paper"/>}

                            <Button 
                                clicked={this.prev} 
                                icon="fa fa-chevron-left" 
                            />
                            <Button 
                                clicked={this.next} 
                                icon="fa fa-chevron-right" 
                            />
                            <Button 
                                clicked={this.resetPosition} 
                                icon="fa fa-sync" 
                            />
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }

}

export default React360Viewer;
//# sourceMappingURL=index.js.map
