# Loan Decision Engine

## Project Description
This web application was built for deciding about the possible maximum offer 
The purpose of the web application is to decide the possible maximum amount to be offered according to the pre-defined requirements and limits. The decision depends
on the personal code, amount, period and credit score which is calculated according to the last three data fields which are entered by user. <br> <br>
There are following cases for the result of the loan request: <br>
- `Request Approved 1`: The approved amount is more than requested for the requested period but is less than maximum possible offer (which is €10000). <br><br>
- `Request Approved 2`: The approved amount is more than requested and maximum possible amount (€10000), so €10000 is approved. <br><br>
- `Request Approved 3`: The approved amount is less than requested amount for the requested period which is more than minimum possible amount (€2000). <br><br>
- `Request Approved 4`: The approved amount minimum possible amount with the period change, so period is tried to be as close as possible to the requested period for the 
suitable amount. <br><br>
- `Request Rejected`: The all possible ways have been considered, but it is impossible to approve the request under current conditions. <br><br>
- `Debt`: The customer with entered personal code has ongoing debt, so request can't be approved. <br> <br>

The application would normally connect to external registries for collecting customer data according to the provided personal code but as it is developed just for demo 
purposes. So this application uses some dummy data for the 4 possible types of customers like below and they can be used for testing purpose: <br> <br>
- 49002010965 - debt <br>
- 49002010976 - segment 1 (credit_modifier = 100) <br>
- 49002010987 - segment 2 (credit_modifier = 300) <br>
- 49002010998 - segment 3 (credit_modifier = 1000) <br><br>

<hr>

## Tech stack and setup of the project
The project was developed by using Java(Spring Boot framework) on the back-end and JavaScript(React front-end library) on the client-side. <br><br>
For setting up and running the project the following steps can be followed:<br><br>
- Clone the project to your local machine. <br>
- It would be very comfortable to open the front-end project in separate IDE window (VS Code for React projects is my favourite, for backend code Intellij IDE is preferable). <br><br>
- Once both parts are opened (main project folder and front-end project folder), you need to go to front-end project and run "npm install" command for installing all dependencies. <br><br>
- After these steps you are ready to go. First of all, you can run run Spring project by simply clicking on green play button (for Intellij IDE). Once the back-end project is running, you can run command of "npm start" on the front-end project. <br><br>
- Now, when you open address of "http://localhost:3000" on the browser, you should be able to see the application. Here, "3000" is the default React port, but it can be something different for you. 

<hr>

## Process
Till the final decision, the engine is going through the process which is described below in the chart: <br><br>
![Flow](https://user-images.githubusercontent.com/72948977/228193744-b2a0cb98-f910-4c29-b774-1d75cef7bd9c.png)

