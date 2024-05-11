for(let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
}