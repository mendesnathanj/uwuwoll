import React from 'react';
import NavbarContainer from '../components/navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from "../utils/route_utils";
import { Switch, Route } from "react-router-dom";
import LoginFormContainer from "../components/session/login_form_container";
import SignupFormContainer from "../components/session/signup_form_container";
import AnimeIndexContainer from "./anime/anime_index_container";
import AnimePageContainer from './anime/anime_page_container';
import EpisodePageContainer from './episodes/episode_page_container';
import QueueContainer from './queue/queue_container';
import LandingPage from './splash/landing_page';


const App = () => {
  return (
    <div className='row app'>
      <NavbarContainer />
      <Switch>
        <ProtectedRoute path={`/anime/:animeId/episodes/:episodeId`} component={EpisodePageContainer} />
        <ProtectedRoute path={'/anime/:animeId'} component={AnimePageContainer} />
        <ProtectedRoute path='/queue' component={QueueContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/anime" component={AnimeIndexContainer} />
        <AuthRoute path='/' component={LandingPage} />
      </Switch>
    </div>
  );
}


export default App;
