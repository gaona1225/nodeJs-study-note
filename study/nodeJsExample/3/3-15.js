const asyncFn = (callback) => {
    setTimeout(callback, 200);
}

var color = 'blue';

((color) => {
    asyncFn(() => {
        console.log('The color is ' + color);
    });
})(color);

color = 'green';