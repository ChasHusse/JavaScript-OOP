class Color {
    constructor(r, g, b){
        this.r = r
        this.g = g
        this.b = b
    };

    rgb(){
        console.log(`rgb(${this.r}, ${this.g}, ${this.b})`)
    };

    hex(){
        const rgbToHex = (r, g, b) => '#' + [r, g, b]
        .map(x => x.toString(16).padStart(2, '0')).join('')
        
        console.log("hex: " + rgbToHex(this.r, this.g, this.b));
    };

    rgba(alpha){
        console.log(`rgba(${this.r}, ${this.g}, ${this.b}, ${alpha})`)
    };
};

let colorOrange = new Color(255, 165, 0);
colorOrange.rgb();
colorOrange.hex();
colorOrange.rgba(50);
