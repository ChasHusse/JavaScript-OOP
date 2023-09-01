console.log("COLOR START")



let bodyBackgroundColor = document.querySelector("body")

function Colors(r, g, b){
    this.r = r
    this.g = g
    this.b = b
}

Colors.prototype.rgb = function (){
    return `rgb(${this.r}, ${this.g}, ${this.b})`
}

Colors.prototype.hex = function (){
    let r = this.r.toString(16)
    let g = this.g.toString(16)
    let b = this.b.toString(16)

    if (r.length === 1) r = '0' + r
    if (g.length === 1) g = '0' + g
    if (b.length === 1) b = '0' + b

    return `#${r}${g}${b}`
}

Colors.prototype.rgba = function(a) {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${a})`;
}



let colorOrange = new Colors(255, 165, 0);

console.log(`rgb: ${colorOrange.rgb()}. hex: ${colorOrange.hex()}. rgba: ${colorOrange.rgba(1)}.`)

bodyBackgroundColor.style.backgroundColor = colorOrange.rgb();

console.log("COLOR END")

