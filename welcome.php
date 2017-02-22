<?php
	session_start();
	require('connect.php');
	
	if(!isset($_SESSION['logged'])){

		header('location: index.php');
	}

	$id = $_SESSION['userid'];
	$sql =  "SELECT * FROM `user` WHERE user_id='$id' ";
	$query = mysqli_query($conn, $sql);
	$row=mysqli_fetch_array($query, MYSQLI_ASSOC);
	
	if(isset($_GET['delpost'])){ 

    	$sql = 'DELETE FROM post WHERE post_id = '.$_GET['delpost'].'';
    	mysqli_query($conn, $sql);

    	header('Location: welcome.php?action=deleted');
    
	}	

	$_SESSION['firstname'] = $row['firstname'];
	$_SESSION['lastname'] = $row['surname'];
	$_SESSION['birthday'] = $row['birthday'];
	$_SESSION['username'] = $row['username'];
	$_SESSION['sex'] = $row['sex'];
	

	$name=strtoupper($_SESSION['firstname']." ".$_SESSION['lastname']); 



?>

<!DOCTYPE html>
<html lang="en">
<head>
	<title>GALARE</title>
	<meta name="viewport" content="width=device-width; initial-scale=1.0" />
	<link href="css/bootstrap.css" rel="stylesheet" />
	<link href="css/bootstrap-theme.css" rel="stylesheet" />
	<link href="css/customm.css" rel="stylesheet" />
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
						  <li role="presentation"><a role="menuitem" tabindex="-1" href="admin_panel.php">Admin Panel</a></li>
						  
						  <li role="presentation"><a role="menuitem" tabindex="-1" href="logout.php">Logout</a></li>
						</ul>
					</div>
				<div class="collapse navbar-collapse" id="myNavbar">
				  <ul class="nav navbar-nav navbar-right"> 
					<li><a href="welcome.php">HOME</a></li>
					<li><a href="where_to_go.php">WHERE TO GO</a></li>
					<li><a href="">WHAT TO DO</a></li>
					<li><a href="">HOW MUCH</a></li>
					<li><a href="aboutus.php">ABOUT US</a></li>
					<li><a href="addpost.php"><span class="glyphicon glyphicon-plus-sign"></span>CREATE</a></li>
				  </ul>
				 
				</div>
				</div>
			  </div>
			  </div>
			</nav>
				

		<div class="container-fluid homeForm">
		<div class="row profile">
			<div class="col-md-3 col-lg-3 col-sm-3">
				<div class="homeSidebar">
					<img src="images/user.png" class="img-responsive" alt="">
						<h5><?php 
							if ( isset($name)) {
							echo $name;
						}
						?></h5>
						<p>@<?php 
							if ( isset($_SESSION['username'])) {
							echo $_SESSION['username'];
						}
						?>
				</div>
				</div>
			<div class="col-md-9 col-lg-9 col-sm-9">
					<div class="postscontent">
					<h2 style="color: white;">BLOGS/POSTS</h2>
					</div>

					<?php 
						if(isset($_GET['action']) && $_GET['action'] == "added"){
							echo '<div class="row-md-8 postaction">Post successfully created!!!</div>';
						}
						else if(isset($_GET['action']) && $_GET['action'] == "deleted"){
							echo '<div class"row-md-8"><div class="post_action">Post successfully deleted!</div></div>';
						}
					?>
				<div class="homeContainer">				
					<?php
					try {
						$sql = "SELECT post_id, post_title, post_desc, post_date, username, post.user_id FROM post JOIN user ON post.user_id = user.user_id ORDER BY post_id DESC";
						$query = mysqli_query($conn, $sql);
						while($row = mysqli_fetch_array($query, MYSQLI_ASSOC)){
							
							echo '<div class="postFeed">';	
							echo /*Title*/'
								<div class = "col-md-12 "> 
									<h3><a href="viewpost.php?id='.$row['post_id'].'">'.$row['post_title'].'</a> </h3>
								</div>';
							
							echo /*Username-Date*/'
								<div class = "col-md-12" >
								<p><h6>['.$row['post_id'].']</h6>Posted by '.$row['username'].' on '.date('jS M Y H:i:s', strtotime($row['post_date'])).'</p>
								</div>'; 

							if($row['user_id'] == $_SESSION['userid']){
									echo '<h5>
									<a href="edit_post.php?id='.$row['post_id'].'"><span class="glyphicon glyphicon-pencil"></span>&nbsp;Edit</a>
									<a onclick = "return confirm(\'Are you sure you want to delete &quot;'.$row['post_title'].'&quot;\')" href="welcome.php?delpost='.$row['post_id'].'"><span class="glyphicon glyphicon-trash"></span>&nbsp;Delete</a>
										</h5>';
									}
								echo /*Picture*/ '
								<div class = "col-md-12"><img src="logo/logo.png" class="image-responsive" alt="image"></div>';
								echo /*Description*/'
								<div class = "col-md-12">
									<p>'.$row['post_desc'].'</p>
								</div>';				
								echo '<p><a href="viewpost.php?id='.$row['post_id'].'">Read More </a>';
							echo '</div>';

						}

					} catch(mysqli_sql_exception $e) {
						throw $e;
					}
				?>
				</div>
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