<!DOCTYPE html>
<html lang="en">
<head>
	<title>GALARE</title>
	<meta name="viewport" content="width=device-width; initial-scale=1.0" />
	<link href="css/bootstrap.css" rel="stylesheet" />
	<link href="css/bootstrap-theme.css" rel="stylesheet" />
	<link href="css/custom.css" rel="stylesheet" />
	<link href="css/wheretogo.css" rel="stylesheet" />
	<link href="css/profile.css" rel="stylesheet" />
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
					<div class="dropdown">
						<button class="btn hiNamebtn dropdown-toggle " type="button" id="menu1" data-toggle="dropdown">
						<?php 
							if ( isset($_SESSION['firstname'])) {
							echo "Hi, ".$_SESSION['firstname']."!";
						}
						?>
						<span class="caret "></span></button>
						<ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
						  <li role="presentation"><a role="menuitem" tabindex="-1" href="profile.php">My Profile</a></li>
						  <li role="presentation"><a role="menuitem" tabindex="-1" href="edit_prof.php">Edit Profile</a></li>
						  <li role="presentation" class="divider"></li>
						  <li role="presentation"><a role="menuitem" tabindex="-1" href="logout.php">Logout</a></li>
						</ul>
					</div>
					<div class="collapse navbar-collapse" id="myNavbar">
					  <ul class="nav navbar-nav navbar-right"> 
						<li><a href="welcome.php">HOME</a></li>
						<li><a href="where_to_go.php">WHERE TO GO</a></li>
						<li><a href="">WHAT TO RIDE</a></li>
						<li><a href="">HOW MUCH</a></li>
						<li><a href="aboutus.php">ABOUT US</a></li>
						<li><a href="addpost.php"><span class="glyphicon glyphicon-plus-sign"></span>CREATE</a></li>
					  </ul>
					 
					</div>
				</div>
			  </div>
			 </div>
			</nav>
			
		<div class="container-fluid profileForm">
			<div class="row profile">
				<div class="col-lg-12 wtg_container">
					<h3 style="font-size: 80px; letter-spacing: 10px;">EXPLORE MINDANAO</h3>

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