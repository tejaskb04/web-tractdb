---
layout: base/bar-sidebar-none
title: "Login"
title_bar: "Login"
title_secondary: ""

angular_includes:
  - "{{ site.baseurl }}/app/loginApp.js"
---

<div ng-app="loginApp" ng-controller="loginController">
    <div class = "container">
        <div class="wrapper">
		        <form ng-submit="submitLoginForm()" id="loginForm" name="loginForm" class="form-signin">       
		            <h3 class="form-signin-heading">Please Sign In</h3>
			        <hr class="colorgraph"><br>
			        <input type="email" class="form-control" name="account" placeholder="Email" autofocus="" required="" pattern=".{5,}" oninvalid="this.setCustomValidity('You need to type a valid email address in the format a@b.c')" onchange = "this.setCustomValidity('')" maxlength="100" ng-model="viewModel.account" /><br/>
			        <input type="password" class="form-control" name="password" placeholder="Password" required="" maxlength="24" ng-model="viewModel.password" /><br/>  
                    <button class="btn btn-small" name="Cancel" value="Cancel">Cancel</button> 
                    <button class="btn btn-small btn-primary" name="Login" value="Login" type="submit">Login</button><br/><br/>
                    <p><a href = "/register">If you're a new user, register now!</a></p>
                    <p><a href = "/forgotPassword">Forgot Password?</a></p>
                </form>
                <!-- for debugging purposes
                 <pre style = "width: 1000px">
		            {{ "viewModel" | angular }}
		        </pre> -->
        </div>
    </div>
    <style> 
	    .wrapper {    
                margin-top: 20px;
                margin-bottom: 20px;
            }
            form {
                width: 320px;
                margin: 0 auto;
            }
        .btn-small {
            width:80px !important; 
            display: inline !important;
        }
	</style>
</div>
