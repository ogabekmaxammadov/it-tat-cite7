import React, { useEffect, useState } from "react";

import "../../App.css";
import Hero from "./hero/Hero";
import WhyChoosUs from "./whychoosus/WhyChoosUs";
import Courses from "./courses/Courses";
import Covorking from "./cowerking/Covorking";
import EducationFormat from "./educationformating/EducationFormat";
import Feedback from "./feedback/Feedback";
import WhereWeAre from "./whereweare/WhereWeAre";
import Registration from "./registration/Registration";
import Faq from "./faq/Faq";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading";

const BoshSahifa = () => {
  let Navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Bosh sahifa";

    const timer = setTimeout(() => setLoading(false), 1000);
    window.scrollTo(0, 0); // Sahifa ochilganda yuqoridan boshlanadi
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="boshSahifa">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Hero />
          <WhyChoosUs />
          <Courses />
          <Covorking />
          <EducationFormat />
          <Feedback />
          <WhereWeAre />
          <Registration />
          <Faq />
        </div>
      )}
    </div>
  );
};

export default BoshSahifa;
