# micro-frontend-app

This is reference implementation of Micro-frontend Architeture. This is achieved using Run-Time Integration between app which was achieved with help of Webpack Module Federation. I have addressed various concerns like 
	- Handling Shared Modules/Dependencies 
	- Implementing Centralized container app to render required Apps based on user-interaction 
	- Handling CSS across various App by using CSS Scoping 
	- Implementing Routing & Enabling Route Integration B/w Container and MF Apps 
	- Improving Load Times through various Optimization Techniques 
	- Handling Authentication & communicating Auth State to various Apps

![Overview](https://github.com/AbhishekGautam01/micro-frontend/blob/develop/.idea/1.PNG?raw=true)

Please note I have used mono-repo but we could seperate our apps into seperate repos, it will have no effect on our App.
Also these App are configured to run in both Isolation and Integrated manner.

#Installation & Usage
1. git clone https://github.com/AbhishekGautam01/micro-frontend.git or download zip
2. cd micro-frontend

## Setting Up Dashboard MFApp
1. cd ./dashboard/
2. npm install 
3. npm run start 
4. Navigate to http://localhost:8083/ 

![Dashboard-ss](https://github.com/AbhishekGautam01/micro-frontend/blob/develop/.idea/Dashboard.PNG?raw=true)

## Setting Up Marketing MFApp
1. cd ./marketing/
2. npm install 
3. npm run start 
4. Navigate to http://localhost:8083/ 

![Marketing-ss](https://github.com/AbhishekGautam01/micro-frontend/blob/develop/.idea/Marketing.PNG?raw=true)

## Setting Up Auth MFApp
1. cd ./auth/
2. npm install 
3. npm run start 
4. Navigate to http://localhost:8082/auth/signup or http://localhost:8082/auth/signin

![Auth-ss](https://github.com/AbhishekGautam01/micro-frontend/blob/develop/.idea/Auth.PNG?raw=true)

## Setting Up Container 
1. cd ./container/
2. npm install 
3. npm run start 
4. Navigate to http://localhost:8080
+ This would load all the above micro-frontend apps inside the container 


