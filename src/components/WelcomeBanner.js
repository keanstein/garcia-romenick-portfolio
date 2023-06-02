import { TypeAnimation } from 'react-type-animation';

export default function ProfileBanner(){

	return(
	<div id='welcome' class="vh-75 bg-dark shadow continer-fluid d-flex justify-content-center align-items-center ">
		<div class="container ">
		  	<div class="text-light container d-flex justify-content-left align-items-left mt-5 flex-column color">
		  		<p class="display-6">Hello, welcome to my web portfolio,</p>
		  		<h1 class="display-2 font-weight-bold text-warning">I am Romenick B. Garcia</h1>

		  		<h1>
		  		<span>
					<TypeAnimation
				      sequence={[
				        'Software Engineer ', // Types 'One'
				        1000, // Waits 1s
				        'MERN Stack Web Developer ', // Deletes 'One' and types 'Two'
				        2000, // Waits 2s
				        'Dynamic • Proficient • Innovative ', // Types 'Three' without deleting 'Two'
				        1000
				      ]}
				      wrapper="span"
				      cursor={true}
				      repeat={Infinity}
				      style={{ fontSize: '1em', display: 'inline-block' }}
				      deletionSpeed={120}
				    />
		  		</span>
					
				</h1>
			</div>
		</div>
	</div>
		);
}