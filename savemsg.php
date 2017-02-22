<?php
	session_start();
	require('connect.php');
	
	if(!isset($_SESSION['logged'])){

		header('location: index.php');
	}

	$id = $_SESSION['userid'];
	$sql =  "SELECT firstname, surname, birthday, sex, username FROM `user` WHERE user_id='$id' ";
	$query = mysqli_query($conn, $sql);
	$row=mysqli_fetch_array($query, MYSQLI_ASSOC);
	
	$_SESSION['firstname'] = $row['firstname'];
	$_SESSION['lastname'] = $row['surname'];
	$_SESSION['birthday'] = $row['birthday'];
	$_SESSION['username'] = $row['username'];
	$_SESSION['sex'] = $row['sex'];
	
?>

<!DOCTYPE>
<html>
<head>
	<title>GALA.RE | Sign Up</title>
	<link href="css/registeredStyle.css" rel="stylesheet" type="text/css" />
	<link href="css/stylesHome.css" rel="stylesheet" type="text/css" />
	<link href="css/welcome.css" rel="stylesheet" type="text/css" />
	
</head>
<body>
	<div id="header">
		<a href="index.php"><img src="logo/logo.png" /></a>
			<ul class="profile-wrapper">
			<li>
				<!-- user profile -->
				<div class="profile">
					<img src="" />
					<a href="profile.php" class="name">
					<?php 
							if ( isset($_SESSION['firstname'])) {
							echo "Hi, ".$_SESSION['firstname']."!";
						}
						?></a>
					
					<!-- dropdown menu -->
					<ul class="menu">
						<li><a href="edit_prof.php">EDIT PROFILE</a></li>
						<li><a href="#">SETTINGS</a></li>
						<li><a href="logout.php">LOGOUT</a></li>
					</ul>
				</div>
			</li>
		</ul>
			<div id="menu">
				<a href="index.php">HOME</a>
				<a href="#">LOCATION</a>
				<a href="#">BUDGET</a>
				<a href="#">TRANSPORTATION</a>
				<a href="aboutus.php">ABOUT US</a>
		</div>
	</div>
	<div id="signup">
	<img id="check" src="images/check.png" width="50px">
	<h3>Saved Successfully!</h3>
	
	<a id="k" href="profile.php">OK</a>
	</div>
	
</body>
</html>