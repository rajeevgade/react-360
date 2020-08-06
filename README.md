# react-360-view
- A Simple and Beautiful 360&deg; Product Viewer built on React

### [Click here for Vue version](https://github.com/rajeevgade/vue-360)

## Demo

![Preview](https://www.techsolate.com/vue-360-viewer/demo.gif)

[Demo](https://react-360.vercel.app/) | [Documentation](https://rajeevgade.github.io/react-360)

[Example](https://github.com/rajeevgade/react-360/blob/master/src/App.js)

## Features

- 360&deg; View
- Zoom
- Pan
- Autoplay (Loops)
- Full Screen Mode
- Spin Direction
- Image Caching
- Mobile Responsive (Under works)
- Touch Events (Under works)


## Installation
```
npm install react-360-view
```

## Config

```
import ThreeSixty from 'react-360-view'
```

## Example

```
<ThreeSixty
    amount={36}
    imagePath="https://scaleflex.cloudimg.io/width/600/q35/https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/demo/chair-360-36"
    fileName="chair_{index}.jpg?v1"
/>
```
### Adding a Header
```
<div class="v360-header text-light bg-dark">
    <span class="v360-header-title">36 Images - Autoplay (1 loop) - Reverse Spin</span>
    <span class="v360-header-description"></span>
</div>
```

### Icons
- The icons used in the demo are from fontawesome. Add the following in your header to display the icons.
```
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet" type="text/css">
```

## Props

| Name | Type | Description | Required | Default Value |
| --- | --- | --- | --- | --- |
| amount | Number | Number of images | Yes |
| imagePath | String | Path to your image | Yes |
| fileName | String | File name format | Yes |
| spinReverse | Boolean | Reverse Spin | Optional | false |
| autoplay | Number | Autoplay your images | Optional | 24 |
| loop | Number | Number of loops you want to autoplay | Optional | 1 |
| boxShadow | Boolean | Apply Box Shadow Background | Optional | false |
| buttonClass | String | Apply Styling to Buttons | Optional (light/dark) | light |
| paddingIndex | Boolean | Apply Leading Zero to Image Index | Optional | false |

## Buttons 

(In order from left to right)

- Play/Pause
- Zoom In
- Zoom Out
- Pan / 360&deg; Mode
- Move Left
- Move Right
- Reset Position


## Roadmap

- Hotspots
- Lazyloading
- Custom CSS Classes
- Custom Buttons
- And a few more ...

## Credits

- [vue](https://reactjs.org/)
- [core-js](https://github.com/zloirock/core-js)
- [Cloud Image](https://www.cloudimage.io/)
