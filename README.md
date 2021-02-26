# micro-frontend-app
This is reference implementation of Micro-frontend Architeture. This is achieved using Run-Time Integration between app which was achieved with help of Webpack Module Federation. I have addressed various concerns like 
	- Handling Shared Modules/Dependencies
	- Implementing Centralized container app to render required Apps based on user-interaction 
	- Handling CSS across various App by using CSS Scoping
	- Implementing Routing & Enabling Route Integration B/w Container and MF Apps
	- Improving Load Times through various Optimization Techniques
	- Handling Authentication & communicating Auth State to various Apps

![Alt text](./.idea/1.png?raw=true "OverView")

Please note I have used mono-repo but we could seperate our apps into seperate repos, it will have no effect on our App. 
Also these App are configured to run in both Isolation and Integrated manner. 

