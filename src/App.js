import {Route} from "react-router-dom";
import s from './App.module.scss'
import About from './layout/about/about'
import Header from './layout/menu/menu';
import WelcomePage from "./layout/welcome_page/welcome_page";
import Useful from "./layout/useful/useful";
import Webinars from "./layout/webinars/webinars";
import DreamTeam from "./layout/dream_team/dream_team";
import Consulting from "./layout/consalting/consulting";
import PhotoGallery from "./layout/gallery/gallery";
import Footer from "./layout/footer/footer";
import BusinessTrainings from "./layout/business_trainings/business_trainings";
import TimeManagement from "./layout/business_trainings/time_management/time management";
import StressManagement from "./layout/business_trainings/stres_management/stress.management";
import ScrollTop from "./layout/common/scroll_top/scroll_top";
import SelfDevelopment from "./layout/business_trainings/self_devepment/self_development";
import Programs from "./layout/programs/programs";


const App = () => {
    return (
        <div className={s.app}>
            <Header/>
            <div className={s.appContent}>
                <Route exact path={'/'} render={() => <About/>}/>
                <Route path={'/trainings'} render={() => <BusinessTrainings name={'Business trainings'}/>}/>
                <Route path={'/programs'} render={() => <Programs name={'Open programs'}/>}/>
                <Route path={'/team'} render={() => <DreamTeam name={'Team'}/>}/>
                <Route path={'/consulting'} render={() => <Consulting name={'Consulting'}/>}/>
                <Route path={'/webinars'} render={() => <Webinars name={'Webinars'}/>}/>
                <Route path={'/useful'} render={() => <Useful name={'Useful'}/>}/>
                <Route path={'/gallery'} render={() => <PhotoGallery name={'Gallery'}/>}/>
                <Route path={'/time_management'} render={() => <TimeManagement name={'Time_management'}/>}/>
                <Route path={'/stress_management'} render={() => <StressManagement name={'Stress_management'}/>}/>
                <Route exact path={'/self_development'} render={() => <SelfDevelopment name={'Self_development'}/>}/>
                <Route path={'/welcome'} render={() => <WelcomePage/>}/>
                <Footer/>
                <ScrollTop/>
            </div>
        </div>
    );
};

export default App;