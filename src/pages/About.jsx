import React from "react";
import Section from "../components/common/Section";
import HeroRow from "../components/about/heroSection/HeroRow";
import WorkRow from "../components/about/workSection/WorkRow";
import TeamRow from "../components/about/teamSection/TeamRow";
import ReviewRow from "../components/about/reviewSection/ReviewRow";
import BrandRow from "../components/home/BrandRow";

function About() {
  return (
    <>
      <Section title="ABOUT PAGE" />
      <HeroRow />
      <WorkRow />
      <TeamRow />
      <ReviewRow />
      <BrandRow />
    </>
  );
}

export default About;
