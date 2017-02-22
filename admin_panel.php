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
	<link href="css/bootstrap2.css" rel="stylesheet" />
	<link href="css/bootstrap-theme.css" rel="stylesheet" />
	<link href="css/custom.css" rel="stylesheet" />
	<link href="css/admin_panel2.css" rel="stylesheet" />
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	
</head>
<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">

			<nav class="navbar navbar-default">
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
						  <li role="presentation"><a role="menuitem" tabindex="-1" href="edit_prof.php">Admin Panel</a></li>
						  
						  <li role="presentation"><a role="menuitem" tabindex="-1" href="logout.php">Logout</a></li>
						</ul>
					</div>
				<div class="collapse navbar-collapse" id="myNavbar">
				  <ul class="nav navbar-nav navbar-right"> 
					<li><a href="welcome.php">HOME</a></li>
					<li><a href="">WHERE TO GO</a></li>
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
					
					<div class="container-fluid adminProfile">
						
							<div class="row adminTable">
						
							<h3>Dashboard</h3>
								<!-- Blogs -->
								<div class="col-lg-3">
								 <button type="button" class="btn btn-default btn-lg col-lg-12" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-list" aria-hidden="true"></span>&nbsp;Blogs</button>
								</button>
								<!-- Modal -->
								<?php
								if(isset($_GET['action']) && $_GET['action'] == "deleted"){
							echo '<div class"row-md-8"><div class="post_action">Post successfully deleted!</div></div>';
						}
						?>
									  <div class="modal fade" id="myModal" role="dialog">
										<div class="modal-dialog modal-lg">
										  <div class="modal-content">
											<div class="modal-header">
											  <button type="button" class="close" data-dismiss="modal">&times;</button>
											  <h4 class="modal-title">Blogs and Posts</h4>
											</div>
											<div class="modal-body">
											 <table class="table">
												<thead>
													<tr>
														<th>POST ID</th>
														<th>Username</th>
														<th>Action</th>
														
													</tr>
												</thead>
												<tbody>
													<tr>
														<th scope="row"><?php 
																if ( isset($_SESSION['post_id'])) {
																echo $_SESSION['post_id'];
															}
															?>
														</th>
														<td>@<?php 
															if ( isset($_SESSION['username'])) {
															echo $_SESSION['username'];
														}
														?>
														</td>
														<td>
														<a onclick = href="">&nbsp;View Post&nbsp;&nbsp;</a>
														
														<a onclick = href=""><span class="glyphicon glyphicon-trash"></span>&nbsp;Delete</a>
														</td>
													</tr>
												</tbody>
											  </table> 
											</div>
											<div class="modal-footer">
											  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
											</div>
										  </div>
										</div>
									  </div>
								</div>
								<!-- USERS -->
								<div class="col-lg-3">
								 <button type="button" class="btn btn-default btn-lg col-lg-12" data-toggle="modal" data-target="#myModal">
								 <span class="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp;Users</button>
								</button>
								<!-- User Modal -->
									  <div class="modal fade" id="myModal" role="dialog">
										<div class="modal-dialog modal-lg">
										  <div class="modal-content">
											<div class="modal-header">
											  <button type="button" class="close" data-dismiss="modal">&times;</button>
											  <h4 class="modal-title">Control Users</h4>
											</div>
											<div class="modal-body">
											  <table class="table">
												<thead>
													<tr>
														<th>#</th>
														<th>First Name</th>
														<th>Last Name</th>
														<th>Username</th>
														<th>Action</th>
														
													</tr>
												</thead>
												<tbody>
													<tr>
														<th scope="row">1</th>
														<td><?php 
																if ( isset($_SESSION['firstname'])) {
																echo $_SESSION['firstname'];
															}
															?>
														</td>
														<td><?php 
																if ( isset($_SESSION['lastname'])) {
																echo $_SESSION['lastname'];
															}
															?>
														</td>
														<td>@<?php 
															if ( isset($_SESSION['username'])) {
															echo $_SESSION['username'];
														}
														?>
														</td>
														<td>
														<a onclick = href="">&nbsp;View User&nbsp;&nbsp;</a>
														<a onclick = href=""><span class="glyphicon glyphicon-trash"></span>&nbsp;Delete</a>
														</td>
													</tr>
												</tbody>
											  </table>
											</div>
											<div class="modal-footer">
											  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
											</div>
										  </div>
										</div>
									  </div>
								</div>
								<!-- REPORTED POSTS -->
								<div class="col-lg-3">
								 <button type="button" class="btn btn-default btn-lg col-lg-12" data-toggle="modal" data-target="#myModal">
								 <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>&nbsp;Reported Posts</button>
								</button>
								<!-- Reported Posts Modal -->
									  <div class="modal fade" id="myModal" role="dialog">
										<div class="modal-dialog modal-lg">
										  <div class="modal-content">
											<div class="modal-header">
											  <button type="button" class="close" data-dismiss="modal">&times;</button>
											  <h4 class="modal-title">Reported Posts</h4>
											</div>
											<div class="modal-body">
											  <table class="table">
												<thead>
													<tr>
														<th>POST ID</th>
														<th>POST Title</th>
														<th>Reported by</th>
														<th>Action</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<th scope="row"><?php 
																if ( isset($_SESSION['post_id'])) {
																echo $_SESSION['post_id'];
															}
															?></th>
														<td>
														<?php 
																if ( isset($_SESSION['post_title'])) {
																echo $_SESSION['post_title'];
															}
															?>
														</td>
														<td><?php 
																if ( isset($_SESSION['firstname'])) {
																echo $_SESSION['firstname'];
															}
															?>
														</td>
														<td><?php 
																if ( isset($_SESSION['lastname'])) {
																echo $_SESSION['lastname'];
															}
															?>
														</td>
														<td>@<?php 
															if ( isset($_SESSION['username'])) {
															echo $_SESSION['username'];
														}
														?>
														</td>
														<td>
														<a onclick = href="">&nbsp;View Post&nbsp;&nbsp;</a>
														<a onclick = href=""><span class="glyphicon glyphicon-trash"></span>&nbsp;Delete</a>
														<a onclick = href=""><span class="glyphicon glyphicon-trash"></span>&nbsp;Dismiss</a>
														</td>
													</tr>
												</tbody>
											  </table>
											</div>
											<div class="modal-footer">
											  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
											</div>
										  </div>
										</div>
									  </div>
								</div>
								
								<!-- REPORTS AND STATS POSTS -->
								<div class="col-lg-3">
								 <button type="button" class="btn btn-default btn-lg col-lg-12" data-toggle="modal" data-target="#myModal">
								 <span class="glyphicon glyphicon-signal" aria-hidden="true"></span>&nbsp;Reported Posts</button>
								</button>
								<!-- Reports and Stats Modal -->
									  <div class="modal fade" id="myModal" role="dialog">
										<div class="modal-dialog modal-lg">
										  <div class="modal-content">
											<div class="modal-header">
											  <button type="button" class="close" data-dismiss="modal">&times;</button>
											  <h4 class="modal-title">Reports and Statistics</h4>
											</div>
											<div class="modal-body">
											  <!-- Insert Statistics -->
											</div>
											<div class="modal-footer">
											  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
											</div>
										  </div>
										</div>
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