import React from 'react';

import { scale, rows } from '../constants';

const colors = ['#36ce31', '#a7f21d', '#f1f11d','#f0aa1d','#FF0000'];

const num2Color = (num) => colors[num-1]; 

const rect = (props) => {
    const {ctx, x, y, color} = props;
    ctx.fillStyle=num2Color(color);
    ctx.fillRect(x*scale, y*scale, scale, scale); 
}

const idx2Pixel = (idx) =>{
    const x = Math.floor(idx / rows)
    const y = idx % rows
    return {x,y}
    
}

export class Canvas extends React.Component {
    componentDidMount() {
        this.updateCanvas(this.props);
    }
    componentDidUpdate() {
        this.updateCanvas(this.props);
    }
    updateCanvas(props) {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0,0, 300, 300);
        // draw children “components”

        props.pixels.map((color, idx) => {
          const {x ,y} = idx2Pixel(idx)
          rect({x ,y , color, ctx});
        })
    }
    render() {
         const { w , h } = this.props
         return (
             <div>
               <canvas 
                 style={{border: 'red 2px solid'}} 
                 ref="canvas" width={w} height={h}/>
             </div>
         );
    }
}

