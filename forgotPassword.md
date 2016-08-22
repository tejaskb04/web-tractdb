---
layout: base/bar-sidebar-none
title: "Forgot Password?"
title_bar: "Forgot Password?"
title_secondary: "Type your Email and Click Submit"

angular_includes:
  - "{{ site.baseurl }}/app/forgotPasswordApp.js"
---
<div ng-app="forgotPasswordApp" ng-controller = "forgotPasswordController">
    <div class = "container">
        <div class="wrapper">
		        <form ng-submit="submitForgotPasswordForm()" id="forgotPasswordForm" name="forgotPasswordForm" class="form-signin">       
			        <input type="email" class="form-control" name="account" placeholder="Email" autofocus="" required="" pattern=".{5,}" oninvalid="this.setCustomValidity('You need to type a valid email address in the format a@b.c')" onchange = "this.setCustomValidity('')" maxlength="100" ng-model="viewModel.account" /><br/>
                    <button class="btn btn-small btn-primary" name="forgotPassword" value="forgotPassword" type="submit">Submit</button><br/><br/>
                    <p><a href = "/login">If you're already signed up, login now!</a></p>
		        </form>	
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