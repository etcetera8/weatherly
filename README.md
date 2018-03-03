# Weatherly

[Live page](http://weatherly.surge.sh/)

This was a pair project that me and my partner built in the span of one week. We wanted to make an application with a very clean and welcoming UI in parallel to many weather apps that are filled with clutter and tend to have lots of adds running along the borders. Upon first visit the user is greeted with a welcome page where they are prompted to choose a location. The autocomplete feature is powered by a prefix trie node package created by myself. It's filled with a default 1000 cities. After initial visit the app stores the users location. We fetch to the api weather underground to display weather data for the selected location and our animation indicates that the app is loading the location while the user waits if they are connected to slower internet connection. We built this project in the span of a week and learned a ton about react lifecycles, making fetch calls, and testing react apps.

### The wireframe we built using Balsamiq to plan the UI

<img width="712" alt="screen shot 2018-01-08 at 10 07 39 pm" src="https://user-images.githubusercontent.com/22607072/34705848-abdaf1fc-f4c0-11e7-90ab-fcdd7f28f0f7.png">

### Final Component Images

#### Desktop 

<img width="1439" alt="screen shot 2018-03-01 at 3 50 51 pm" src="https://user-images.githubusercontent.com/22607072/36874249-6f623f7a-1d68-11e8-9e1b-c6614209ee4e.png">
<img width="1237" alt="screen shot 2018-01-08 at 10 42 59 pm" src="https://user-images.githubusercontent.com/22607072/34732300-1a6bfbb4-f522-11e7-94e2-8f514a64aad1.png">
<img width="1236" alt="screen shot 2018-01-08 at 10 43 52 pm" src="https://user-images.githubusercontent.com/22607072/34732312-299d8256-f522-11e7-9abb-19d372c40384.png">

#### Mobile
<img width="327" alt="screen shot 2018-01-08 at 10 45 52 pm" src="https://user-images.githubusercontent.com/22607072/34732345-40be4e7a-f522-11e7-87b5-2ec486afaff0.png">


To install the dependencies:

```
npm install
```

To fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080/webpack-dev-server/` to run your application.
* `http://localhost:8080/webpack-dev-server/test.html` to run your test suite in the browser.

Amy Russell && Parker Lindley 
