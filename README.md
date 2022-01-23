#

![TheBookTown Logo](https://nidcap.org/wp-content/uploads/2021/03/book.png)

The BookTown is an E-Commerce platform designed specifically to sell , buy and rent books. It was build with keeping in mind the idea to help the users to buy cost effective books. We have also incorporated the idea to sell books .
We have enjoyed building this site and it was a great learning experience for us. Hope you enjoy it too. Cheers!!

<br/>

# Table of Contents

1. [Demo](#demo)
2. [Architecture](#architecture)
3. [Installation](#installation)
4. [Authors](#authors)
5. [License](#license)

# Demo
[Live Demo](https://the-book-town.herokuapp.com/)

# Architecture

This is a microservice architecture. There are four differet services running . 
Namely : 
1. Product-service
2. Filter-service
3. user-service
4. gateway : All the service are combined and run through gateway

# Installation
Install lerna package globally using **yarn install global lerna**

1. run **yarn bootstrap** to install all the necessary packages. We have used lerna to place all the service together in a package . 
2. you can run the individual serives by goind inside each service present in the package folder by using **yarn start**
3. Once the all the service are up you can run the gateway . All the running services should be placed inside gateway -> services array. 
4. Note gateway will crash if the mentioned service in the service array is note up.


# Authors

1. Tejas Patil
2. Gagan Kumar Saluja

# License
  MIT
