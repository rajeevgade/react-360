import React, { Component } from "react";

class I360Viewer extends Component {

    constructor() {
        super();
        //this.imageContainerRef = React.createRef();
        this.viewPercentageRef = React.createRef();
        this.canvas = null
        this.ctx = null
        this.isMobile = false
        this.imageData = []
        this.images = []
        this.amount = 0
        this.loadedImages = 0
        this.imagesLoaded = false
        this.viewerPercentage = null
        this.currentImage = null
        this.currentLeftPosition = this.currentTopPosition = 0
        this.currentCanvasImage = null
    }

    state = {
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
        lastX: 0,
        lastY: 0,
        currentCanvasImage: null,
        isFullScreen: false,
        viewPortElementWidth: null,
        movementStart: 0,
        movement: false,
        dragSpeed: 150,
        speedFactor: 13,
        activeImage: 1,
        stopAtEdges: false,
        centerX: 0,
        centerY: 0,
        panmode: false,
        currentLoop: 0,
        loopTimeoutId: 0,
        playing: false
    }

    componentDidMount(){
        this.viewerPercentage = this.viewPercentageRef.current

        this.fetchData()
    }

    fetchData(){
        for(let i=1; i <= this.props.amount; i++){
            const fileName = this.props.fileName.replace('{index}', i);
            const filePath = `${this.props.imagePath}/${fileName}`
            this.imageData.push(filePath)
        }

        this.preloadImages()
    }

    preloadImages() {
        if (this.imageData.length) {
            try {
                this.amount = this.imageData.length;
                this.imageData.forEach(src => {
                    this.addImage(src);
                });
            } catch (error) {
                console.error(`Something went wrong while loading images: ${error.message}`);
            }
        } else {
            console.log('No Images Found')
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
        const percentage = Math.round(this.loadedImages / this.amount * 100);
        this.loadedImages += 1;
        this.updatePercentageInLoader(percentage);
        if (this.loadedImages === this.amount) {
            this.onAllImagesLoaded(event);
        } else if (this.loadedImages === 1) {
            //this.onFirstImageLoaded(event);
            console.log('load first image')
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
        this.imagesLoaded = true
        this.initData()
    }

    initData(){
        console.log(this.imageContainerRef)
        this.canvas = this.imageContainerRef
        this.ctx = this.canvas.getContext('2d')
        console.log('initialize data here')

        this.checkMobile()
        this.loadInitialImage()
    }

    checkMobile(){
        this.isMobile = !!('ontouchstart' in window || navigator.msMaxTouchPoints);
    }

    loadInitialImage(){
        this.currentImage = this.imageData[0] 
        this.setImage()
    }

    setImage(cached = false){
        this.currentLeftPosition = this.currentTopPosition = 0
        
        if(!cached){
            this.currentCanvasImage = new Image()
            this.currentCanvasImage.crossOrigin='anonymous'
            this.currentCanvasImage.src = this.currentImage
            this.currentCanvasImage.onload = () => {
                let viewportElement = this.viewPortElementRef.getBoundingClientRect()
                this.canvas.width  = (this.isFullScreen) ? viewportElement.width : this.currentCanvasImage.width
                this.canvas.height = (this.isFullScreen) ? viewportElement.height : this.currentCanvasImage.height
                this.trackTransforms(this.ctx)
                this.redraw()
            }
            this.currentCanvasImage.onerror = () => {
                console.log('cannot load this image')
            }
        }else{
            this.currentCanvasImage = this.images[0]
            let viewportElement = this.viewPortElementRef.getBoundingClientRect()
            this.canvas.width  = (this.isFullScreen) ? viewportElement.width : this.currentCanvasImage.width
            this.canvas.height = (this.isFullScreen) ? viewportElement.height : this.currentCanvasImage.height
            this.trackTransforms(this.ctx)
            this.redraw()
        }
        
    }

    redraw(){
        try {
            let p1 = this.ctx.transformedPoint(0,0);
            let p2 = this.ctx.transformedPoint(this.canvas.width,this.canvas.height)
            let hRatio = this.canvas.width / this.currentCanvasImage.width
            let vRatio =  this.canvas.height / this.currentCanvasImage.height
            let ratio  = Math.min(hRatio, vRatio);
            let centerShift_x = (this.canvas.width - this.currentCanvasImage.width*ratio )/2
            let centerShift_y = (this.canvas.height - this.currentCanvasImage.height*ratio )/2
            this.ctx.clearRect(p1.x,p1.y,p2.x-p1.x,p2.y-p1.y);
            this.centerX = this.currentCanvasImage.width*ratio/2
            this.centerY = this.currentCanvasImage.height*ratio/2
            
            //center image
            this.ctx.drawImage(this.currentCanvasImage, this.currentLeftPosition, this.currentTopPosition, this.currentCanvasImage.width, this.currentCanvasImage.height,
                        centerShift_x,centerShift_y,this.currentCanvasImage.width*ratio, this.currentCanvasImage.height*ratio);  
            this.addHotspots()
        }
        catch(e){
            this.trackTransforms(this.ctx)
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
            }
            resolve(this.ctx)
        })
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.currentLeftPosition != prevState.currentLeftPosition){
            console.log('Left Position Changed')
        }
    }

    render() {
        
        return (
            <div>
                <div className="v360-viewer-container" ref="viewerContainer" id="identifier">

                    {!this.imagesLoaded ? 
                    <div className="v360-viewport">
                        <div className="v360-spinner-grow"></div>
                        <p ref={this.viewPercentageRef} className="v360-percentage-text"></p>
                    </div> : '' }

                    <div className="v360-viewport" ref={(inputEl) => {this.viewPortElementRef = inputEl}}>
                        <canvas 
                            className="v360-image-container" 
                            ref={(inputEl) => {this.imageContainerRef = inputEl}} 
                        ></canvas>
                        {this.props.boxShadow ? <div className="v360-product-box-shadow"></div> : ''}
                    </div>
                </div>
            </div>
            
        );
    }

}

export default I360Viewer;