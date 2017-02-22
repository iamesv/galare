<?php 
	session_start();
	
	require("connect.php");
	/*if(! $conn ) { 
		die('Could not connect: ' . mysqli_error()); // checks if the site successfully established a connection to db
	}*/

	

	if(!isset($_SESSION['logged'])){

		header('location: login.php');
	}

	if (isset($_POST['save_btn'])) {

		$errors = array();
		if(isset($_POST['user_name'])){
        //the user name exists
        	if(!ctype_alnum($_POST['user_name'])){
            $errors[] = 'The username can only contain letters and digits.';
        	}

        	if(strlen($_POST['user_name']) > 30){
            $errors[] = 'The username cannot be longer than 30 characters.';
        	}
    	}
    	else
    	{
        	$errors[] = 'The username field must not be empty.';
    	}
     
     
   		if(isset($_POST['user_pass']))
    	{
        	if($_POST['user_pass'] != $_POST['user_pass_check']){
            $errors[] = 'The two passwords did not match.';
        	}
    	}else{
       		 $errors[] = 'The password field cannot be empty.';
    	}

    	$id = $_SESSION['userid'];
		$firstname = mysqli_real_escape_string($conn, $_POST['firstname']);
		$lastname = mysqli_real_escape_string($conn, $_POST['lastname']);
		$bday = mysqli_real_escape_string($conn, $_POST['bday']);
		$sex = mysqli_real_escape_string($conn, $_POST['sex']);
		
	
				$sql = "UPDATE `user`
				SET firstname = '$firstname', surname = '$lastname', birthday = '$bday', sex = '$sex'
				WHERE user_id = '$id'";
				//echo $sql;
				mysqli_query($conn, $sql);
				
				$sql =  "SELECT firstname, surname, birthday, sex FROM `user` WHERE user_id ='$id' ";
				//echo $sql;
				$query = mysqli_query($conn, $sql);
				$row=mysqli_fetch_array($query, MYSQLI_ASSOC);
	
				$_SESSION['firstname'] = $row['firstname'];
				$_SESSION['lastname'] = $row['surname'];
				$_SESSION['birthday'] = $row['birthday'];
				$_SESSION['sex'] = $row['sex'];
				header("location: profile.php"); //redirect to home page
					
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
	<link href="css/editprof.css" rel="stylesheet" />
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
						  <li role="presentation"><a role="menuitem" tabindex="-1" href="profile.php">My Profile<a href="profile.php" class="name">
						
						</a></a></li>
						  <li role="presentation"><a role="menuitem" tabindex="-1" href="edit_prof.php">My Settings</a></li>
						  <li role="presentation" class="divider"></li>
						  <li role="presentation"><a role="menuitem" tabindex="-1" href="logout.php">Logout</a></li>
						</ul>
					</div>
				<div class="collapse navbar-collapse" id="myNavbar">
				  <ul class="nav navbar-nav navbar-right">
					<li><a href="welcome.php">HOME</a></li>
					<li><a href="#">WHERE TO GO</a></li>
					<li><a href="#">WHAT TO RIDE</a></li>
					<li><a href="#">HOW MUCH</a></li>
					<li><a href="#">ABOUT US</a></li>
					<li><a href="addpost.php"><span class="glyphicon glyphicon-plus-sign"></span>CREATE</a></li>
				  </ul>
				 
				</div>
				</div>
			  </div>
			  </div>
			</nav>-->
				

		<div class="container-fluid profileForm">
			<div class="row editForm">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>
				<h3>Edit Profile</h3>
				  <form class="form-horizontal" method="POST" action="edit_prof.php">
					<div class="row">
						<div class="form-group">
						  <label class="control-label col-sm-2 col-md-2 col-lg-2" for="lastname">Lastname:</label>
							  <div class="col-sm-3 col-md-3 col-lg-3">
								<input type="text" value="<?php echo $_SESSION['lastname']; ?>" name="lastname" pattern="[a-zA-Z ]+" title="Surname must only be in letters." required="required" > </input>
							  </div>
						  <label class="control-label col-sm-2 col-md-2 col-lg-2" for="firstname">Firstname:</label>
							  <div class="col-sm-3 col-md-3 col-lg-3">
								<input type="text" class="form-control" id="fname" placeholder="First Name" name="firstname" value="<?php echo $_SESSION['firstname']; ?>" pattern="[a-zA-Z]+" title="Firstname must only be in letters." required="required">
							  </div>
						</div>
					</div>

					<div class="row">
						<div class="form-group"> 
						   <label class="control-label col-sm-2 col-md-2 col-lg-2" for="bdate">Birthdate:</label>
						   <div class="col-sm-3 col-md-3 col-lg-3">
							 <input type="date" name="bday" value="<?php echo $_SESSION['birthday']; ?>" required="required"></input>
						   </div>
							<label class="control-label col-sm-2 col-md-2 col-lg-2" for="sex">Sex:</label>
						  <div class="col-sm-1">
							<input type="radio" name="sex" value="Male" required="required"><p>Male</p></input>
							</div>
							<div class="col-sm-1">
							<input type="radio" name="sex" value="Female" required="required"> <p>Female</p></input>
							<br />
							<br />
							</div>
						</div>
					<div class="form-group">        
					  <div class=" col-sm-12">
						<button type="submit" class="btn btn-default" name="save_btn">Save</button>
						<button type="submit" class="btn btn-default">Cancel</button>
					  </div>
					</div>
				  </form>
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