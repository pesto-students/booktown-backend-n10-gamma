# Project Name

The Booktown

## Architecture

This is a microservice architecture. There are four differet services running . 
Namely : 
1. Product-service
2. Filter-service
3. user-service
4. gateway : All the service are combined and run through gateway

## Installation

1. run yarn bootstrap to install all the necessary packages. We have used lerna to place all the service together in a package . 
2. you can run the individual serives by goind inside each service present in the package folder by using "yarn start"
3. Once the all the service are up you can run the gateway . All the running services should be placed inside gateway -> services array. 
4. Note gateway will crash if the mentioned service in the service array is note up.

## Usage

1. once the gateway is run it'll be connected to your frontend and you can use the application's complete functionality.
2. Note : All the services use .env file, you can create a .env file and give your port address in there or you can directly give it in the application. The port number of the 
api gateway should be same in the frontend as well, where you are defining the apollo client.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D



## Authors

1. Tejas Patil
2. Gagan Kumar Saluja
