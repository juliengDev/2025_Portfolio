import React, { useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactGA from "react-ga4";

import { navBar, mainBody, about, repos, leadership, skills, getInTouch, experiences, data, blog } from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import RecentProject from "./components/home/RecentProject.jsx";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import { Blog } from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";

import Experience from "./components/home/Experience";
import AllProject from "./components/home/AllProject.jsx";
import ScrollToTop from "./components/ui/ScrollToTop.jsx";

const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
        jobTitle={mainBody.title}
      />
      {about.show && <AboutMe heading={about.heading} message={about.message} link={about.imageLink} imgSize={about.imageSize} resume={about.resume} />}
      {repos.show && <RecentProject heading={repos.heading} username={repos.gitHubUsername} length={repos.reposLength} specfic={repos.specificRepos} />}
      {data.show && <AllProject heading={data.heading} projects={data.projects} />}
      {blog.show && <Blog />}
      {experiences.show && <Experience experiences={experiences} />}
      {leadership.show && <Leadership heading={leadership.heading} message={leadership.message} img={leadership.images} imageSize={leadership.imageSize} />}
      {skills.show && <Skills heading={skills.heading} hardSkills={skills.hardSkills} softSkills={skills.softSkills} />}
    </>
  );
});

const App = () => {
  useEffect(() => {
    if (TRACKING_ID) {
      ReactGA.initialize(TRACKING_ID);
      ReactGA.send({ hitType: "pageview", page: "/landingpage", title: "Landing Page" });
    }
  }, []);

  const titleRef = useRef();
  const navbarMenuRef = useRef();

  React.useEffect(() => {
    const { pathname } = window.location;
    if (!pathname.endsWith("/")) {
      window.location.replace(`${pathname}/`);
    }
  }, []);

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
      basename={"/"}
    >
      <ScrollToTop />
      {navBar.show && <Navbar ref={titleRef} navbarMenuRef={navbarMenuRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
        <Route path="/blog" exact element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
      <Footer>{getInTouch.show && <GetInTouch heading={getInTouch.heading} message={getInTouch.message} email={getInTouch.email} />}</Footer>
    </BrowserRouter>
  );
};

export default App;
