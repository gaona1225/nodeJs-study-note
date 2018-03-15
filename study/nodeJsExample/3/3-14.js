const asyncFn = (callback) => {
    setTimeout(callback, 200);
}

var color = 'blue';

asyncFn(() => {
    console.log('The color is ' + color);
});

color = 'green';