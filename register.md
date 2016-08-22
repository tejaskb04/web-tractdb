---
layout: base/bar-sidebar-none
title: "Register"
title_bar: "Register"
title_secondary: "Enter Information Below"

angular_includes:
  - "{{ site.baseurl }}/app/registerApp.js"
---

<div ng-app="registerApp" ng-controller = "registerController">
    <div class = "container">
        <div class="wrapper">
		        <form ng-submit="submitRegisterForm()" id="registerForm" name="registerForm" class="form-signin">       
		            <h3 class="form-signin-heading">Please Register</h3>
			        <hr class="colorgraph"><br>
			        <input type="email" class="form-control" name="account" placeholder="Email" autofocus="" required="" pattern=".{5,}" oninvalid="this.setCustomValidity('You need to type a valid email address in the format a@b.c')" onchange = "this.setCustomValidity('')" maxlength="100" ng-model="viewModel.account" /><br/>
			        <input type="password" class="form-control" name="password" placeholder="Password" required="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" oninvalid="this.setCustomValidity('Your password must contain at least one uppercase, one lowercase, and one number or special character, and must be between 8 and 24 characters in length.')" onchange="this.setCustomValidity('')" maxlength="24" ng-model="viewModel.password" /><br/>  
                    <input type="password" class="form-control" name="confirmPassword" placeholder="Confirm Password" required="" onchange="if ($('input[name=password]').val() !== $(this).val()) this.setCustomValidity('Password and Confirm Password do not match.'); else this.setCustomValidity('');" maxlength="24" ng-model="viewModel.confirmPassword" /><br/>  
                    <p class = "tac">By clicking on "Register", I agree to the <a href = "/tac">Terms and Conditions</a></p>
                    <button class="btn btn-small" name="Cancel" value="Cancel">Cancel</button> 
                    <button class="btn btn-small btn-primary" name="Register" value="Register" type="submit">Register</button><br/><br/>
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
        .tac {
            font-size: 10px;
        }
	</style>
	
    <!-- <div class="container-fluid">
    <section class="container">
		<div class="container-page">				
			<div class="col-md-6">
				<h3 class="dark-grey">Registration</h3>
				<div class="form-group col-lg-12">
					<label>Username</label>
					<input type="" name="" class="form-control" id="" value="">
				</div>
				<div class="form-group col-lg-6">
					<label>Password</label>
					<input type="password" name="" class="form-control" id="" value="">
				</div>
				<div class="form-group col-lg-6">
					<label>Repeat Password</label>
					<input type="password" name="" class="form-control" id="" value="">
				</div>			
				<div class="form-group col-lg-6">
					<label>Email Address</label>
					<input type="" name="" class="form-control" id="" value="">
				</div>
				<div class="form-group col-lg-6">
					<label>Repeat Email Address</label>
					<input type="" name="" class="form-control" id="" value="">
				</div>			
				<div class="col-sm-6">
					<input type="checkbox" class="checkbox" />Sigh up for our newsletter
				</div>
				<div class="col-sm-6">
					<input type="checkbox" class="checkbox" />Send notifications to this email
				</div>				
			</div>
			<div class="col-md-6">
				<h3 class="dark-grey">Terms and Conditions</h3>
				<p>
					By clicking on "Register" you agree to The Company's' Terms and Conditions
				</p>
				<button type="submit" class="btn btn-primary">Register</button>
			</div>
		</div>
	</section>
</div> -->
</div>
