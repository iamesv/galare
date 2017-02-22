<?php
  session_start();
  if(isset($_SESSION['logged']) && $_SESSION['logged'] == true){

    header('location: welcome.php');
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
	<link href="css/index.css" rel="stylesheet" />
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	
</head>
<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">

			<nav class="navbar navbar-default navbar-fixed-top">
			  <div class="container">
			   <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div class="navbar-header">
				  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>                        
				  </button>
				  <a class="navbar-brand" href="index.php">GALA.RE</a>
				</div>
				<div class="collapse navbar-collapse" id="myNavbar">
				  <ul class="nav navbar-nav navbar-right">
					<li><a href="#home">HOME</a></li>
					<li><a href="#where_to_go">WHERE TO GO</a></li>
					<li><a href="#what_to_ride">WHAT TO RIDE</a></li>
					<li><a href="#how_much">HOW MUCH</a></li>
					<li><a href="#about">ABOUT US</a></li>
					<li><a href="signup.php"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
					<li><a href="login.php"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
				  </ul>
				  
				</div>
				</div>
			  </div>
			</nav>
			
				<!-- Container (EXPLORE PH) -->
				<div id="home" class = "col-lg-12 col-sm-12 box1 box">
						<a href="#">EXPLORE PHILIPPINES WITH GALA.RE</a>
						<br />
						<br />
						<p>"The world is now yours for the taking."</p>
				</div>
				<!-- Container (WHERE TO GO) -->
				<div id="where_to_go" class ="col-lg-12 col-md-12 col-xs-12 col-sm-12 box2 box ">
						<img src="../images/map3.png" class="image-responsive col-lg-4 col-md-4 col-sm-4 col-xs-4"/>
						<div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
							<a href="#">GALARE PHILIPPINES</a>
							<br /><br />
							<p>"We will take you to all places that you've been dreaming of."</p>
							<br /><br /><br />
							<a href="#">ROADTRIP AROUND LUZON</a>
							<br /><br />
							<p>"Less hassle routes. Cheapest expenses are revealed."</p>
							<br /><br /><br />
							<a href="#">WITNESS THE WONDERS OF VISAYAS</a>
							<br /><br />
							<p>"Take a peek from the best islands around the country."</p>
							<br /><br /><br />
							<a href="#">GO BEYOND SOUTH</a>
							<br /><br />
							<p>"Experience extravagant activities from the South city."</p>
							<br /><br /><br />
						</div>
				</div>
				<!-- Container (WHAT TO RIDE) -->
				<div id="what_to_ride" class = "col-lg-12 col-sm-12 box3 box">
						
						<a href="#">LOOKING FOR AN ALTERNATIVE WAY?</a>
						<br />
						<br />
						<p>"Browse for the easiest and cheapest way for your adventure."</p>
						
						<br /><br /><br /><br />
					<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12">
					<div id="myCarousel" class="carousel slide text-center" data-ride="carousel">
					<!-- Indicators -->
						<ol class="carousel-indicators">
						  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
						  <li data-target="#myCarousel" data-slide-to="1"></li>
						  <li data-target="#myCarousel" data-slide-to="2"></li>
						  <li data-target="#myCarousel" data-slide-to="3"></li>
						</ol>

						<!-- Wrapper for slides -->
						<div class="carousel-inner" role="listbox">
						  <div class="item active">
							<h4>"Pagod less, enjoy more! Here are some tips from our trip."<br><span>Damiie Gregorio, @damiiebear</span></h4>
						  </div>
						  <div class="item">
							<h4>"Sobrang worth it ng pagod all throughout the tour!! Thank you for these alternative routes I found here at GALA.RE."<br><span>Ian Del Carmen, @iandelcarmen</span></h4>
						  </div>
						  <div class="item">
							<h4>"Great options are shared here by the users! Very helpful to my next trips."<br><span>Joshua Flores, @floresjosh</span></h4>
						  </div>
						  <div class="item">
							<h4>"We've got the most amazing trip. Thanks for the help!"<br><span>Emman Vergara, @iamesv</span></h4>
						  </div>
						</div>
				    </div>
				    </div>
				    </div>
				</div>
				<!-- Container (PROMOTION) -->
				<div class ="col-lg-12 col-md-12 col-xs-12 col-sm-12 box box-promo ">
						<a href="#">GALA.RE PHILIPPINES</a>
						<br /><br />
						<p>"Promoting Philippine Tourist Spots."</p>
				</div>
				<!-- Container (HOW MUCH) -->
				<div id="how_much" class = "col-lg-12 col-sm-12 box4 box-invert">
						<h1 class="col-lg-3 col-md-3 col-sm-12">AFFORDABLE TRIPS</h1>
						<p class="col-lg-9 col-md-9 col-sm-12">"Let's not forget about our wallets when planning for a trip"</p>
				</div>
				
				<div id="about" class=" col-lg-12 col-md-12 col-xs-12 col-sm-12 box5 text-center">
				  <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
					  <h1><span data-shadow-text="GALA.RE">GALA.RE</span></h1> 
					  <p>Promoting the next in line tourist spots of the 7 Wonders of the World around the Philippines.</p>
					  <h2>CREATE. DISCOVER. EXPLORE. EXPAND.</h2>
					   <br /><br /><br /><br /><br />
				  </div>
				  <div class="row">
					  <div class="col-lg-12 col-md-12 col-sm-12 ">
					  <p class="col-lg-3 col-md-12 col-sm-12 col-xs-12 box5-content ">Connecting people through adventures and trips.</p>
					  <p class="col-lg-3 col-md-12 col-sm-12 col-xs-12 box5-content ">Changing people's perspective on traveling.</p>
					  <p class="col-lg-3 col-md-12 col-sm-12 col-xs-12 box5-content ">Helping travelers to plan their dream escapade.</p>
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