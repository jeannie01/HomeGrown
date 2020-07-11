import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

//initializes firebase
firebase.initializeApp({
	apiKey: "AIzaSyDRiQUIqJjSIDV9Yjf9SxMBAgsFiX6M4pw", //taken from Firebase developer console
	authDomain: "homegrown-6c720.firebaseapp.com", //taken from Firebase developer console
});

class Login extends Component {
	uiConfig = {
		signInFlow: "popup", //shows up as popup
		signInOptions: [
			//all authentications we are using (those enabled on Firebase website )
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.FacebookAuthProvider.PROVIDER_ID,
			firebase.auth.GithubAuthProvider.PROVIDER_ID,
			firebase.auth.EmailAuthProvider.PROVIDER_ID,
		],
		callbacks: {
			//what happens when sign in is a success (want it to return/do nothing)
			signInSuccessWithAuthResult: () => false,
		},
	};

	logout = () => {
		this.props.logsOut();
		firebase.auth().signOut(); //close Firebase;
	};

	componentDidMount = () => {
		//runs when app is first ran
		firebase.auth().onAuthStateChanged((user) => {
			this.props.logsIn(user); //executes when user logins
		});
	};

	render() {
		return (
			<div className="login">
				{this.props.isSignedIn ? (
					<div>
						<div>Signed In!</div>
						<button onClick={this.logout}>Sign out!</button>
						<h1>Welcome {firebase.auth().currentUser.displayName}</h1>{" "}
						{/* firebase.auth().currentUser is an object*/}
						<img
							alt="profile picture"
							src={firebase.auth().currentUser.photoURL}
						/>
					</div>
				) : (
					<div>
						<h1>Home Grown Login Page</h1>
						<StyledFirebaseAuth
							uiConfig={this.uiConfig}
							firebaseAuth={firebase.auth()}
						/>
					</div>
				)}
			</div>
		);
	}
}

export default Login;