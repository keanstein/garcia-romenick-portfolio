import profileImage from "../images/profile-pic.jpg"


export default function ProfileBanner(){
	return(
		<>
	<div id="about"  className="vh-100 profile-bg continer-fluid d-flex justify-content-center align-items-center ">
		<div className="container p-1 p-lg-0 d-flex justify-content-center align-items-center mt-5 flex-column color text-center">


			<div className="d-flex flex-lg-row flex-column flex-md-column w-100 container-lg " >

            <div className="col-12 col-lg-6" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <img  src={profileImage} className="rounded-circle img-fluid w-75 bordered p-lg-3 p-2 bg-light mb-5 mb-lg-0" alt="profile-pic"/>
            </div>

            <div className="col col-lg-6 ">
                
                
                <div className="d-flex flex-column w-100 ">
                    <div className="col text-dark ">
                        <h1 id="about-title" className="text-light font-weight-bolder display-4 text-left border-light border-bottom d-inline-block mb-3 mb-lg-4 h1-about pb-3">ABOUT ME</h1>
                    </div>
                    <div className="col w-100 text-dark p-0">
                        <p className="text-light font-weight-light text-justify">Are you looking for <strong className="text-darker font-weight-bold">a web developer who efficiently code websites and applications using modern HTML, CSS, and JavaScript?</strong></p>
                        <p className="text-light font-weight-light text-justify">I am <strong className="text-darker font-weight-bold">Romenick B. Garcia</strong>, designing and building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine and I am confident I would
                            be an excellent addition to your organization. In addition to my knowledge base, actively seek out new technologies and stay up-to-date on industry trends and advancements. This has allowed me to stay ahead of the curve and
                            deliver exceptional work to all of my employers, including those I've worked for on a project basis.</p>
                        <p className=" text-light text-left text-justify"><strong className="text-darker font-weight-bold">I am looking forward to work with you in the future!</strong></p>
                    </div>
                </div>
            </div>
        </div>
			</div>
	</div>

	
	</>
		);
}