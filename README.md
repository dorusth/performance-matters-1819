# Project 1 @cmda-minor-web · 2018-2019

## githus repos web performance

For this project i have optimized the load times of my web-app-from-scratch project.


<!-- Add a link to your live demo in GitHub Pages 🌐-->
## Code
[Repo](https://performance-matters-1819.herokuapp.com/)|[Repo](https://github.com/dorusth/performance-matters-1819/)

<!-- ☝️ replace this description with a description of your own work -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->
![app](readme-img/app.png)

<!-- Maybe a table of contents here? 📚 -->
## table of contents
- [Installation](#Installation)
- [Features](#performance improvements)

<!-- How about a section that describes how to install this project? 🤓 -->
## Installation
This project works with: node, express, handlebars and compression.
Clone the repo with:
```bash
$ git clone https://github.com/dorusth/performance-matters-1819.git
```
to use the app use
```bash
$ npm install
$ npm start
```
and open "http://localhost:8080/"

<!-- ...but how does one use this project? What are its features 🤔 -->
## performance improvements
![audit 1](readme-img/audit1.png)
<details>
<summary>Compression</summary>
![compression audit](readme-img/audit2.png)
Using the compression package i reduced the file size of the javascript and css.
![pre-compression size](readme-img/size1.png)

![compression size](readme-img/size2.png)
</details>

<details>
<summary>Image optimisation</summary>
![image optimisation audit](readme-img/audit3.png)
I've stored the images locally and optimized them for better loading times.

![image optimisation audit](readme-img/audit4.png)
After that i added webp format images for further optimisation when supported
</details>

<details>
<summary>Service Worker</summary>
![image optimisation audit](readme-img/audit5.png)
I've Added a service worker for caching the main page and styling and it increased performance

![image optimisation audit](readme-img/audit5.png)
After running an audit without clearing cache the performance reduced on the TTFB.
</details>


## to-do
- [x] File Compression
- [x] Image optimisation
- [ ] Minify files
- [ ] Reduce TTFB


[MIT](LICENCE) © [Dorus ten Haaf](https://dorustenhaaf.com)
