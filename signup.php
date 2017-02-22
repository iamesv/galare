<?php 
  session_start();
  
  require("connect.php");
  /*if(! $conn ) { 
    die('Could not connect: ' . mysqli_error()); // checks if the site successfully established a connection to db
  }*/
  if (isset($_POST['signup_btn'])) {

    
    
     
    
    $firstname = mysqli_real_escape_string($conn, $_POST['firstname']);
    $lastname = mysqli_real_escape_string($conn, $_POST['lastname']);
    $bday = mysqli_real_escape_string($conn, $_POST['bday']);
    $userid = mysqli_real_escape_string($conn, $_POST['userid']);
    $psw = mysqli_real_escape_string($conn, $_POST['psw']);
    $psw2 = mysqli_real_escape_string($conn, $_POST['psw2']);
    $sex = mysqli_real_escape_string($conn, $_POST['sex']);
    
    $userAvail = mysqli_query($conn, "SELECT username from `user` WHERE username='$userid'");

    
    
    
    if(mysqli_num_rows($userAvail) > 0){
      $_SESSION['error_msg'] = "- Username already exists.";
      
    }
    else{
      if ($psw == $psw2) {
      
        $psw= password_hash($psw, PASSWORD_DEFAULT); //hash password before storing for security purposes
        $sql = "INSERT INTO `user`(surname, firstname, birthday, username, password, sex, user_lvl)  VALUE( '$lastname', '$firstname', '$bday','$userid', '$psw', '$sex', '0')";
        mysqli_query($conn, $sql);
        $retval = mysqli_query($conn, $sql);
        
        /*if(! $retval ) {
          die('Could not enter data: ' . mysqli_error($conn));
        } */
        //retrieves user data after save
        $sql =  "SELECT * FROM `user` WHERE username='$userid' ";
        $query = mysqli_query($conn, $sql);
        $row=mysqli_fetch_array($query, MYSQLI_ASSOC);
    
        $_SESSION['userid'] = $row['user_id'];
        $_SESSION['logged'] = true;
        header("location: index.php"); //redirect to home page
          
      }
      else{
        $_SESSION['error_msg']  = "The two passwords do not match";
      }
      
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
  <link href="css/signupp.css" rel="stylesheet" />
  <link href="css/editprof.css" rel="stylesheet" />
  
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
			  <li><a href="index.php">HOME</a></li>
			  <li><a href="index.php">WHERE TO GO</a></li>
			  <li><a href="index.php">WHAT TO RIDE</a></li>
			  <li><a href="index.php">HOW MUCH</a></li>
			  <li><a href="#about">ABOUT US</a></li>
			  <li><a href="login.php"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
			  </ul>
            </div>
         </div>
        </div>
    </nav>


			<!-- Container (Signup section) -->
		<div class="container-fluid sign-up">
			
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12"></div>
				<div class="row">
					<h1 class="col-lg-4">SIGN UP</h1>
						<form id="form" role="form" method="post" action="">
							  <?php
							if (isset($_SESSION['error_msg'])) {
								echo "<div id='error_msg'>".$_SESSION['error_message']."</div>";
								unset($_SESSION['message']);
							  }
							  unset($_SESSION['error_msg']);
							?>  
			  <!-- First Line -->
			<div class=" form-group sign-up-content col-lg-7">
			 <div class="row">
				  <div class="col-sm-2 col-lg-2 col-md-2">
					<label for = "lastname">Last Name:</label>
				  </div>
				  <div class="col-sm-3 col-lg-3 col-md-3">
						  <div class = "form-group">
							 <input type = "text" class = "form-control" name="lastname" id = "lastname" placeholder = "Last Name" required="required" pattern="[a-zA-Z ]+" title="Lastname must only be in letters.">
						  </div>
				  </div>
				  <div class="col-sm-2 col-lg-2 col-md-2">
					<label for = "firstname">First Name:</label>
				  </div>
				  <div class="col-sm-3 col-lg-3 col-md-3">
						  <div class = "form-group">        
							<input type = "text" class = "form-control" name="firstname" id = "firstname" placeholder = "First Name" required="required" pattern="[a-zA-Z]+" title="Firstname must only be in letters.">
						  </div>
				  </div>
			</div>        
          <!-- Second Line-->
			<div class= "row">
			  <div class="col-sm-2 col-md-2 cold-lg-2">
				  <label for = "birthdate">Birthdate:</label>
			  </div>
			  <div class="col-sm-4 col-md-4 col-lg-4">
				  <div class = "form-group">
					<input type="date" name="bday" required>
				  </div>
			  </div>
            </div>
          <!-- 3rd Line-->
          <div class="row">   
              <div class="col-sm-2">
                <label for = "Username">Username:</label>
              </div>
              <div class="col-sm-3"> 
                <div class = "form-group">                         
                    <input type = "text" class = "form-control" name="userid" id = "username" pattern=".{4,}" title="Password must be at least 4 characters." placeholder ="Username" required>
                </div>
              </div>
          </div> 
          <!-- 4th Line-->
          <div class="row">
              <div class="col-sm-2 col-lg-2 col-md-2">
                <label for = "password">Password:</label>
              </div>
              <div class="col-sm-3 col-lg-3 col-md-3">
                <div class = "form-group">                          
                    <input type = "password" class = "form-control" name="psw" id = "password" pattern=".{6,}" title="Password must be at least 6 characters." placeholder ="Password" required>
                </div>
              </div>
              <div class="col-sm-2 col-lg-2 col-md-2">
                <label for = "conpass">Confirm Password:</label>
              </div>
              <div class="col-sm-3 col-lg-3 col-md-3">
                <div class = "form-group">                         
                     <input type = "password" class = "form-control" name="psw2" id = "conpass" placeholder ="Confirm Password" required>
                </div>
              </div> 
          </div>
          <!-- 5th -->
          <div class="row">
            <div class="col-sm-2">
              <label for = "sex">Sex:</label><br>
            </div>
            <div class="col-sm-2">
				<div class = "form-group">                         
					   <input type="radio" name="sex" value="Male" required><label for = "male">Male</label><br>
					   <input type="radio" name="sex" value="Female" required><label for = "female">Female</label>   
				</div>
            </div>
          </div>
           <!-- Button -->
		   <div class ="row">
				<input class="sign-up-btn"type="submit" value="Sign Up" name="signup_btn" required>
				<br />
				<br />
			</div>
          </form>	
		</div>
    </div>
    </div>
</div>

</body>
</html>
