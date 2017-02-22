<?php 
	
	// connect to database
	session_start();
	require("connect.php");
	if (isset($_POST['login_btn'])) {
		
		$userid = mysqli_real_escape_string($conn, $_POST['userid']);
		$psw = mysqli_real_escape_string($conn, $_POST['psw']);
		/*psw= md5($psw); */
		$sql = "SELECT * FROM `user` WHERE username='$userid'";
		$query = mysqli_query($conn, $sql);
		$row=mysqli_fetch_array($query, MYSQLI_ASSOC);
		
		$userAvail = mysqli_query($conn, "SELECT * from `user` WHERE username='$userid'");
		
		
		if (password_verify($psw, $row['password'])){ // checks if the entered password matches the hash
			
			$_SESSION['userid'] = $row['user_id'];
			$_SESSION['logged']  = true;
			header("location: welcome.php"); //redirect to home page
			
		}
		else if(mysqli_num_rows($userAvail) == 0){
			$_SESSION['message'] = "Account doesn't exist.";
			
		}
		else{
			$_SESSION['message'] = "Username/password combination incorrect";
		}
		
	}
?>


<!DOCTYPE html>
<html lang="en">
<head>
	<title>GALARE</title>
	<meta name="viewport" content="width=device-width; initial-scale=1.0" />
	<link href="css/bootstrap.css" rel="stylesheet" />
	<link href="css/bootstrap-theme.css" rel="stylesheet" />
	<link href="css/custom.css" rel="stylesheet" />
	<link href="css/login.css" rel="stylesheet" />
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	

	
</head>
<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">

			<nav class="navbar navbar-default navbar-fixed-top">
			  <div class="container">
			  <div class="row">
			   <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div class="navbar-header">
				  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>                        
				  </button>
				  <a class="navbar-brand" href="index.php">GALA.RE |</a>
					
				</div>
					<div class="Signup">
						<button class="btn hiNamebtn dropdown-toggle " type="button" id="menu1">
						<a href="signup.php">Sign Up</a>
						</button>
				<div class="collapse navbar-collapse" id="myNavbar">
				  <ul class="nav navbar-nav navbar-right">
					<li><a href="index.php">HOME</a></li>
					<li><a href="#">WHERE TO GO</a></li>
					<li><a href="#">WHAT TO RIDE</a></li>
					<li><a href="#">HOW MUCH</a></li>
					<li><a href="aboutus.php">ABOUT US</a></li>
				  </ul>
				 
				</div>
				</div>
			  </div>
			  </div>
			</nav>
				

<!-- Container (Log in section) -->
	<div class="container-fluid login">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<div class="row">
				<h1 class="col-lg-4 col-md-4 col-sm-4">LOGIN</h1>
				  <form action="login.php" method="post" class="form-horizontal">
				  <?php
						if (isset($_SESSION['message'])) {
								echo "<div id='error_msg'>".$_SESSION['message']."</div>";
								unset($_SESSION['message']);
							}
				  ?>	
					<div class="form-group col-lg-8 col-md-8 col-sm-8">
					  <label class="login-label col-sm-2" for="username">Username:</label>
					  <div class="col-sm-8">
						<p><input type="text" name="userid" class="form-control" id="User_Name" ></p>
					  </div>
					</div>
					<div class="form-group col-lg-8 col-md-8 col-sm-8">
					  <label class="login-label col-sm-2" for="password">Password:</label>
					  <div class="col-sm-8">
						 <p><input type="password" class="form-control" name="psw"></p>
					  </div>
					</div>
					
					<div class="form-group col-lg-8 col-md-8 col-sm-8">        
					  	 <input class= "login-btn"type="submit" value="LOGIN" name="login_btn">
					</div>
				  </form>
				</div>

			</div>	
		</div>	



				<footer class="container-fluid text-center">
				  <a href="#myPage" title="To Top">
					<span class="glyphicon glyphicon-chevron-up"></span>
				  </a>
				  <p>GALA.RE Made By <a href="http://www.w3schools.com" title="Visit GALA.RE">Team SCRUMMING </a>2016-2017</p>
				</footer>
		
</body>
</html>