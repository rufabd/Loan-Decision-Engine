# Loan Decision Engine
<hr>
This web application was built for deciding about the possible maximum offer 
The purpose of the web application is to decide the possible maximum amount to be offered according to the pre-defined requirements and limits. The decision depends <br>
on the personal code, amount, period and credit score which is calculated according to the last three data fields which are entered by user. <br>
There are following cases for the result of the loan request: <br>
- `Request Approved 1`: The approved amount is more than requested for the requested period but is less than maximum possible offer (which is €10000). <br>
- `Request Approved 2`: The approved amount is more than requested and maximum possible amount (€10000), so €10000 is approved. <br>
- `Request Approved 3`: The approved amount is less than requested amount for the requested period which is more than minimum possible amount (€2000). <br>
- `Request Approved 4`: The approved amount minimum possible amount with the period change, so period is tried to be as close as possible to the requested period for the <br>
suitable amount. <br>
- `Request Rejected`: The all possible ways have been considered, but it is impossible to approve the request under current conditions. <br>
- `Debt`: The customer with entered personal code has ongoing debt, so request can't be approved. <br> <br>

The application would normally connect to external registries for collecting customer data according to the provided personal code but as it is developed just for demo <br>
purposes. So this application uses some dummy data for the 4 possible types of customers like below and they can be used for testing purpose: <br> <br>
- 49002010965 - debt
- 49002010976 - segment 1 (credit_modifier = 100)
- 49002010987 - segment 2 (credit_modifier = 300)
- 49002010998 - segment 3 (credit_modifier = 1000)

