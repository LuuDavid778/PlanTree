import TutorialTop from '../../Comps/Kozy/TutorialTop';
import TutorialMiddle01 from '../../Comps/Aksel/TutorialMiddle01';
import ProgressCircles from '../../Comps/Kozy/ProgressCircles';
import CustomButton from '../../Comps/Kozy/CustomButton';
import Link from 'next/link'
import Router from 'next/router';
import './app.css'
import HamburgerMenu from '../../Comps/David/hamburger_menu'
import { route } from 'next/dist/next-server/server/router';


const HamburgerMenuPage = () => <div>
    <HamburgerMenu></HamburgerMenu>
</div>

export default HamburgerMenuPage;