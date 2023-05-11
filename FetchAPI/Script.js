let a = fetch("https://goweather.herokuapp.com/weather/china");
a.then((response) => {
    // console.log(value1.status);
    // console.log(value1.ok);
    // console.log(response.text());
    // console.log(Response.json()); //we can use only one time response.text() OR response.json()!
    // return value1.json(); //it is a promise
    return response.json()
}).then((value2) => {
    console.log(value2);
});

//this is real syntax of write fetch
//fetchAPI that means take the complete infomation of the api
//when we invoke any function need to define