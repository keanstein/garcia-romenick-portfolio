import ProfileBanner from "../components/ProfileBanner"
import WelcomeBanner from "../components/WelcomeBanner"
import AboutMe from "../components/History"


export default function Home() {
    return(
        <>
        <div class="container-fluid m-0 p-0">
            <WelcomeBanner />
            <ProfileBanner />
            <AboutMe />
        </div>
        </>
    );
}