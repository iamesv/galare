<?php 
session_start();
require('connect.php'); 


if(!isset($_SESSION['logged'])){
	header('Location: index.php');

}

	//for if-else statement $var['user_id']
	$sql = "SELECT user_id FROM post WHERE user_id = '$_SESSION[userid]'";

	$query = mysqli_query($conn, $sql);
	$var = mysqli_fetch_array($query, MYSQLI_ASSOC);

if(isset($_GET['id'])){

	$id = $_GET['id'];

	//Select post content
	$sql = "SELECT post_desc, post_id, post_title, post_locCity, post_locProv, post_budget, post_transpo, post_image, post_food, post_tips, post_date FROM `post` WHERE post_id = '$id'";
	$query = mysqli_query($conn, $sql);
	$post = mysqli_fetch_array($query, MYSQLI_ASSOC); 

	//Select the post creator
	$sql = "SELECT username, post.user_id FROM post JOIN user ON post.user_id = user.user_id ORDER BY post_id DESC";
	$query = mysqli_query($conn, $sql);
	$row = mysqli_fetch_array($query, MYSQLI_ASSOC); 

	//print_r($row);
	
} else if($row['post_id'] == '' || !isset($_GET['id']) || $var['user_id'] != $_SESSION['userid']){
	header('Location: index.php');
	
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
	<link href="css/post_view2.css" rel="stylesheet" />
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
					<li><a href="#">WHERE TO GO</a></li>
					<li><a href="#">WHAT TO DO</a></li>
					<li><a href="#">HOW MUCH</a></li>
					<li><a href="php/aboutus.php">ABOUT US</a></li>
					<li><a href="addpost.php"><span class="glyphicon glyphicon-plus-sign"></span>CREATE</a></li>
				  </ul>
				</div>
			  </div>
		     </div>
			</nav> 
		
		<?php
			echo 
			'<div class="container-fluid postView">
			<div class="row profile postViewContent">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				
					<div class="row postViewTitle">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<h3 style="color: white;">'.$post['post_title'].'</h3>
						</div>
					</div>

					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<img src="images/boracay.jpg" class="img-responsive" alt="Responsive image">
						</div>
					</div>
				
					<div class="row">
						<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<h4><span class="glyphicon glyphicon-map-marker"></span>&nbsp '.$post['post_locCity'].', '.$post['post_locProv'].'</h4>
						</div>
					
					</div>
				
					<div class="row">
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
							<h4><span class="glyphicon glyphicon-piggy-bank"></span>&nbspBudget: P'.$post['post_budget'].'</h4>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
							<h4><span class="glyphicon glyphicon-road"></span>&nbspTransportation: '.$post['post_transpo'].'</h4>
						</div>
					</div>
					<br />
					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<hr class="style1" /><h3>ABOUT THE PLACE</h3>
							<p>'.$post['post_desc'].'</p>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<hr class="style1" /><h3><span class="glyphicon glyphicon-cutlery"></span>&nbsp WHERE/WHAT TO EAT</h3>
							'.$post['post_food'].'
						</div>
					</div>
					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<hr class="style1" /><h3><span class="glyphicon glyphicon-pushpin"></span>&nbsp TIPS AND SUGGESTIONS</h3>
							'.$post['post_tips'].'
						</div>
					</div>
					<div class="row">
						<div class = "row-md-8" >
							<p><h6>['.$post['post_id'].']</h6>Posted by '.$row['username'].' on '.date('jS M Y H:i:s', strtotime($post['post_date'])).'</p>
						</div>
					</div>
				</div>
			</div>
		</div>';
	
		?>


		<footer class="container-fluid text-center">
		  <a href="#myPage" title="To Top">
			<span class="glyphicon glyphicon-chevron-up"></span>
		  </a>
		  <p>GALA.RE Made By <a href="http://www.w3schools.com" title="Visit GALA.RE">Team SCRUMMING </a>2016-2017</p>
		</footer>
			
</body>
</html>