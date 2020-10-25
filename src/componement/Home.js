import React, { Component } from 'react';
import Navbar from 'D:/Users/aliso/Desktop/mon-cv/src/componement/Navbar';
import Profile from 'D:/Users/aliso/Desktop/mon-cv/src/componement/profil';
import About from 'D:/Users/aliso/Desktop/mon-cv/src/componement/about';
import Atouts from 'D:/Users/aliso/Desktop/mon-cv/src/componement/skill';
import Experiences from 'D:/Users/aliso/Desktop/mon-cv/src/componement/experience';
import Educations from 'D:/Users/aliso/Desktop/mon-cv/src/componement/eductaions';
import Portfolios from 'D:/Users/aliso/Desktop/mon-cv/src/componement/portfolios';

export default class Home extends Component {
	render() {
		return (
			<section>
				<Navbar />
				<div className='container'>
					<div className='row'>
						<div className='col s12 m3'>
							<Profile />
						</div>
						<div className='col s12 m9'>
							<About />
							<Atouts />
							<Experiences />
							<Educations />
							<Portfolios />
						</div>
					</div>
				</div>
			</section>
		);
	}
}
