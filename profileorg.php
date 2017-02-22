<?php 
	session_start();
	require('connect.php');

	if(!isset($_SESSION['logged'])){

		header('location: index.php');
	}

	$name=strtoupper($_SESSION['firstname']." ".$_SESSION['lastname']); 


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
	<link href="css/profiletest.css" rel="stylesheet" />
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
					<li><a href="">ABOUT US</a></li>
					<li><a href="addpost.php"><span class="glyphicon glyphicon-plus-sign"></span>CREATE</a></li>
				  </ul>
				 
				</div>
				</div>
			  </div>
			  </div>
			</nav>
			
				<!-- User Header Profile -->
				<div class = "col-lg-12 col-sm-12 header-brand box">
						<div class="profile-pic">
							<img src="images/user.png" class="img-responsive" alt="" />
						</div>
						<br />
						<div class="row col-lg-12 profile-name">
						<a href="edit_prof.php"><?php 
							if ( isset($name)) {
							echo $name;
						}
						?></a>
						<p>@<?php 
							if ( isset($_SESSION['username'])) {
							echo $_SESSION['username'];
						}
						?></p>
						<p><?php 
							if ( isset($_SESSION['sex'])) {
							echo $_SESSION['sex'];
						}
						?> | <?php 
							if ( isset($_SESSION['birthday'])) {
							echo $_SESSION['birthday'];
						}
						?></p>
						</div>
				</div>
				<!-- Blogs -->
				<div class="col-lg-12 posted-blogs">
				<h1>MY BLOGS</h1>
				<?php
			try {
				$sql = "SELECT post_id, post_title, post_desc, post_date, username, post.user_id FROM post JOIN user ON post.user_id = user.user_id ORDER BY post_id DESC";
				$query = mysqli_query($conn, $sql);
				while($row = mysqli_fetch_array($query, MYSQLI_ASSOC)){
					
				if($row['user_id'] == $_SESSION['userid']){
					
						
						echo'<div class="row col-lg-5 blog-contents">';
						echo /*Picture*/ '
						<img src="images/visayas.jpg" class="image-responsive" />';
							
							echo'<h2>'.$row['post_title'].'</h2>';
							
							echo'<p>'.date('jS M Y H:i:s', strtotime($row['post_date'])).' | '.$row['username'].'</p>';
							echo'<a href="viewpost.php?id='.$row['post_id'].'">READ MORE</a>';
							echo'<br /><br />
						</div>';
						
						
						
					echo'</div>';
				echo'</div>';
								}
				}

			} catch(mysqli_sql_exception $e) {
			    throw $e;
			}

		?>
</body>
</html>