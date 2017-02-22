<?php
	session_start();
	require('connect.php');
	
	if(!isset($_SESSION['logged'])){

		header('location: index.php');
	}

	if(isset($_POST["post_btn"])){
			//if form has been submitted process it

		$_POST = array_map( 'stripslashes', $_POST );

			//collect form data
			extract($_POST);

		//very basic validation
		if($_POST['postTitle'] ==''){
			$error[] = 'Please enter the title.';
		}

		if($_POST['postDesc'] ==''){
			$error[] = 'Please enter the description.';
		}

		/*if($_POST['postTranspo'] ==''){
			$error[] = 'Please enter the content.';
		}*/

			//print_r($_POST);
			

			

				$postTitle = mysqli_real_escape_string($conn, $_POST['postTitle']);
				$postDesc = mysqli_real_escape_string($conn, $_POST['postDesc']);
				$postTranspo = mysqli_real_escape_string($conn, $_POST['postTranspo']);
				$postBudget = mysqli_real_escape_string($conn, $_POST['postBudget']);
				$postImage = mysqli_real_escape_string($conn, $_POST['postImage']);
				$postFood = mysqli_real_escape_string($conn, $_POST['postFood']);
				$postTips = mysqli_real_escape_string($conn, $_POST['postTips']);
				$country = mysqli_real_escape_string($conn, $_POST['country']);
				$State = mysqli_real_escape_string($conn, $_POST['state']);
				$postDate = date('Y-m-d H:i:s');
				$userid = $_SESSION['userid'];


				//insert into database
				$sql = "INSERT INTO `galare`.`post` (`post_title`, `post_desc`, `post_locProv`, `post_locCity`, `post_budget`, `post_transpo`, `post_image`, `post_food`, `post_tips`, `post_date`, `user_id`) VALUES  ('$postTitle', '$postDesc', '$country', '$state', '$postBudget', '$postTranspo', '$postImage', '$postFood', '$postTips',  '$postDate', '$userid')";
				mysqli_query($conn, $sql);
			
				//redirect to index page
				header('Location: welcome.php?action=added');
				 

	}

	//check for any errors
	

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<title>GALARE | Create a Blog</title>
	<meta name="viewport" content="width=device-width; initial-scale=1.0" />
	<link href="css/bootstrap.css" rel="stylesheet" />
	<link href="css/bootstrap-theme.css" rel="stylesheet" />
	<link href="css/custom.css" rel="stylesheet" />
	<link href="css/editprof.css" rel="stylesheet" />
	<link href="css/createpost.css" rel="stylesheet" />
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/countries.js"></script>
	
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
						<button class="btn hiNamebtn dropdown-toggle " type="button" id="menu1" data-toggle="dropdown"><?php 
							if ( isset($_SESSION['firstname'])) {
							echo "Hi, ".$_SESSION['firstname']."!";
						}
						?>
						<span class="caret "></span></button>
						<ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
						  <li role="presentation"><a role="menuitem" tabindex="-1" href="profile.php">My Profile</a></li>
						  <li role="presentation"><a role="menuitem" tabindex="-1" href="edit
						  _prof.php">Edit Profile</a></li>
						  <li role="presentation" class="divider"></li>
						  <li role="presentation"><a role="menuitem" tabindex="-1" href="logout.php">Logout</a></li>
						</ul>
					</div>
				<div class="collapse navbar-collapse" id="myNavbar">
				  <ul class="nav navbar-nav navbar-right">
					<li><a href="welcome.php">HOME</a></li>
					<li><a href="">WHERE TO GO</a></li>
					<li><a href="">WHAT TO DO</a></li>
					<li><a href="">HOW MUCH</a></li>
					<li><a href="">ABOUT US</a></li>
				  </ul>
				 
				</div>
				</div>
			  </div>
			  </div>
			</nav>
				

		<div class="container-fluid profileForm">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<div class="row editForm">
			
				<h3>Create Blog</h3>
				  <form class="form-horizontal" method="post" action="addpost.php">
				  
					<div class="form-group">
					  <label class="control-label col-sm-2" for="postTitle">Title:</label>
					  <div class="col-sm-8">
						<input type="text" class="form-control" name = "postTitle" id="postTitle" pattern=".{5,15}" title="Title must only be 5-15 characters." required="required">
					  </div>
					</div>
			
					<div class="row form-group">
					  <label class="control-label col-sm-2"	><span class="glyphicon glyphicon-map-marker"></span> &nbsp; Country:</label>
					  <div class="col-sm-2 col-lg-2">
						<select class="btn" onchange="print_state('state',this.selectedIndex);" id="country" name ="country"></select>
						&nbsp;
					  </div>
					  <div class="col-sm-5">
							<select class ="btn" name ="state" id ="state"></select>
							<script language="javascript">print_country("country");</script><br />	 
					  </div>
					</div>
				   
				   <div class="form-group">
				    <label class="control-label col-sm-2" for="">Budget:</label>
					 <div class="col-sm-1">
						<select class=" btn " name="postBudget" required>
						  <option value="1000-2000">1000-2000</option>
						  <option value="2001-3000">2001-3000</option>
						  <option value="3001-4000">3001-4000</option>
						  <option value="4001-5000">4001-5000</option>
						  <option value="5001-6000">5001-6000</option>
						  <option value="6000+">6000+</option>
						</select>
					</div>
					<div class="form-group">
					 <label class="control-label col-sm-4 " for="">Transportation:</label>
						 <div class="col-sm-1">
							<select class=" btn " name="postTranspo">
							  <option value="Car">By Car</option>
							  <option value="Commute">Commute</option>
							</select>
						</div>
					</div>
					<div class="form-group">
					<label class="control-label col-sm-2" for="photos">Add Photos:</label>
						 <div class="col-sm-2">
						<fieldset class="btn">
							<input type="file" name="postImage" id="picture" />
						</fieldset>
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-sm-2" for="activities">Activities:</label>
						<div class="col-lg-4">
						<label class="checkbox-inline"><input type="checkbox" value="">Swimming</label>
						<label class="checkbox-inline"><input type="checkbox" value="">Hiking</label>
						<label class="checkbox-inline"><input type="checkbox" value="">Foodtrip</label>
						<label class="checkbox-inline"><input type="checkbox" value="">Others</label>
						</div>
					</div>
					<div class="form-group">
					  <label class="control-label col-sm-2" for="fname">Description:</label>
					  <div class="col-sm-8">
						<textarea class="col-sm-12" name='postDesc' cols="50" maxlength="300" required="required"></textarea>
					  </div>
					</div>
					
					<div class="form-group">
					  <label class="control-label col-sm-2" for="fname">Food:</label>
					  <div class="col-sm-8">
						<textarea name='postFood' class="col-sm-12" cols="50" placeholder="Optional" minlength="1" maxlength="1500" required="required"></textarea>
					  </div>
					</div>
					
					<div class="form-group">
					  <label class="control-label col-sm-2" for="fname">Tips/Suggestions:</label>
					  <div class="col-sm-8">
						<textarea class="col-sm-12" name='postTips' cols="50" placeholder="Optional" maxlength="1500" required="required"></textarea>
					  </div>></textarea>
					  </div>
					</div>				
					<div class="form-group">        
					  <div class=" col-sm-12">
						<input type="submit" name="post_btn" class="btn btn-default" value="Post">
						<button class="btn btn-default"><a href="welcome.php">Cancel</a></button>
					  </div>
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