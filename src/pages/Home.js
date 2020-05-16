import React from "react";
import { Button } from "antd";
//import Alpaca from '../imgs/alpaca-logo.png';
import { useHistory, Link } from "react-router-dom";

const Home = () => {
	
	let history = useHistory();
	return (
		<div>
		<header className="home">
			<div className="header">
				{/* NAVBAR */}
				<nav className="bar">
				<div className="title">
					<h1 className="userDashHeaderFont" >Team&nbsp;Reels</h1>
				</div>
					<div className="links">
					<Link to="/login">Sign in</Link>
					<Link to="/about">About us</Link>
					
					<div className="navStart">
						<Button size="medium"
							className="adding-button"
							onClick={
								(e) => {
									e.preventDefault();
									history.push("/register");
								}
							}>
							GET STARTED 
						</Button>
					</div>
				</div>
				</nav>
			<div className="text">
				<div className="reel-logo">
					<h1 className="h1">Practice your speaking skills with your team,<h1 className="text-red">no matter where you are.</h1></h1>
					<img src="https://cdn5.vectorstock.com/i/1000x1000/93/44/film-reel-flat-icon-vector-7989344.jpg" alt="film reel"/> 
				</div>
				
				<div className="arrow-down">
					<h2>See how it works</h2>
					<img src="https://img.icons8.com/plasticine/2x/down.png" alt="arrow down"/>
				</div>
				
				<div className="text-blobs">
					<div className="blob1">
						<h1>Join or create an organization</h1>
						<h2>You can start your own, or join an already existing organization.</h2>
					</div>
					<div className="blob2">
						<h1>Team up with others</h1>
						<h2>Team up with coworkers or classmates, and leave feedback on eachothers videos!</h2>
					</div>
					<div className="blob3">
						<h1>Create prompts for others to answer</h1>
						<h2>Channel leaders can create prompts for other teammates to answer and practice their speaking skills.</h2>
					</div>
					<div className="blob4">
						<h1>Improve your speaking skills!</h1>
						<h2>With TeamReels, you can answer prompts created by channel leaders every week, and get better through critical feedback and repitition!</h2>
					</div>
				</div>
				<div className="footNote">
					<h1>Ready to get started?</h1>
					<h2>We are ready for you to join the TeamReels community, click the button and get started now!</h2>
					<div className="start">
					<Button size="large"
						// icon="caret-right"
						className="adding-button"
						onClick={
							(e) => {
								e.preventDefault();
								history.push("/register");
							}
						}>
						GET STARTED 
					</Button>
				</div>
				</div>
				
			</div>
			
		</div>	
		</header>
		</div>
	)
}

export default Home; 