import React, {Component} from 'react';

// import styles
import "style-loader!css-loader!sass-loader!./hero.scss";


class Hero extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <canvas></canvas>	
            </div>
        );
    }


    componentDidMount(){
        let canvas = document.querySelector("canvas");
        let c = canvas.getContext('2d'); //C = context

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let dx = (Math.random() - 0.5) * 12;
        let dy = (Math.random() - 0.5) * 12;
        let radius = Math.random() * 3 + 1;

        let mouse = {
            x: undefined,
            y: undefined
        }

        let maxRadius = 40;
        //let minRadius = 4;

        let colorArray = [
            '#222',
            'red',
            // '#DE5B49',
            // '#324D5C',
            // '#F0CA4D',
        ];

        window.addEventListener('mousemove', function(event) {
            mouse.x = event.x;
            mouse.y = event.y;
        })

        window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        init();
        })


        function Circle(x, y, dx, dy, radius) {

            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = Math.random() * 3 + 1;
            this.minRadius = radius;

            this.color = colorArray[Math.floor(Math.random() * colorArray.length)];


            this.draw = function() {

                c.beginPath();
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                c.fillStyle = this.color;
                c.fill();

            }

            this.update = function() {
                if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                    this.dx = -this.dx;
                }

                if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                    this.dy = -this.dy;
                }

                this.x += this.dx;
                this.y += this.dy;

                //Interactive 


                if(mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
                    mouse.y - this.y < 50 && mouse.y - this.y > - 50
                    ) {

                    if(this.radius < maxRadius) {
                        this.radius += 1;
                    } 

                }

                else if(this.radius > this.minRadius) {
                    this.radius -= 1;
                }

                this.draw();
            }

        }

        let circleArray = [];

        function init() {

            circleArray = [];

            for(let i = 0; i < 800; i++) {
                
                let x = Math.random() * (window.innerWidth - radius * 2) + radius;
                let y = Math.random() * (window.innerHeight - radius * 2) + radius;
                let dx = (Math.random() - 0.5) * 2;
                let dy = (Math.random() - 0.5) * 2;
                let radius = Math.random() * 3 + 1;

                circleArray.push(new Circle(x, y, dx, dy, radius));
        }

        }

        function animate() {

            requestAnimationFrame(animate);
            c.clearRect(0, 0, innerWidth, innerHeight);

            for(let i = 1; i < circleArray.length; i ++) {
                circleArray[i].update();
            }

            c.font = '40px Arial';
            c.fillStyle = '#F0B90C';
            c.fillText("C A N V A S  C I R C L E S  E F F E C T ", window.innerWidth/4.25, 150);

            c.beginPath();
            c.font = '15px Arial';
            c.fillStyle = '#edc23b';
            c.fillText("b y  J i n a m b o", window.innerWidth/2.1, 190);
        }

        init();
        animate();

    }


}


export default Hero;