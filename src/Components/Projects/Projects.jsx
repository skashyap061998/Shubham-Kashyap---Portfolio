import { ProjectDiv } from "../../Styles/ProjectsStyles";
import { Project } from "./Project";

import { useState } from "react";
export function Projects() {
  const data = [
    {
      title: "eBay",
      desc: "Buy or sell (goods) through the eBay website.",
      features: ["Landing page", "Signin&Signup", "User Authentication"],
      responsibility: [
        "Built the Registration page.",
        "Created the U.S e-commerce website which allows us to buy or sell anything",
        "Designed the Home page",
      ],
      url: ["eBay1.png", "eBay2.png", "eBay3.png", "ebay4.png"],
      skills: [
        {
          url: "../../../Logos/css.png",
          title: "CSS",
        },
        {
          url: "../../../Logos/html.png",
          title: "HTML",
        },
        {
          url: "../../../Logos/javascript.png",
          title: "JavaScript",
        },
      ],
      code: "https://github.com/skashyap061998/eBay-clone",
      demo: "https://lighthearted-boba-40e862.netlify.app/",
    },
    {
      title: "ShopBop",
      desc: "Shopbop is a US online fashion apparel and accessories shop opened in 1999.",
      features: ["Product page"],
      responsibility: [
        "Built the Products page",

        "Designed the Pagination of Product page",
      ],
      url: [
        "shopbop1.jpeg",
        "shopbop2.jpeg",
        "shopbop3.jpeg",
        "shopbop4.png",
      ],
      skills: [
        {
          url: "../../../Logos/css.png",
          title: "CSS",
        },
        {
          url: "../../../Logos/html.png",
          title: "HTML",
        },
        {
          url: "../../../Logos/javascript.png",
          title: "JavaScript",
        },
        {
          url: "../../../Logos/react.png",
          title: "ReactJS",
        },
      ],
      code: "https://github.com/skashyap061998/Shopbop-Clone-Project",
      demo: "https://shopbop-clone-project.netlify.app/",
    },
  ];
  return (
    <ProjectDiv>
      <h1>Projects</h1>
      <div className="projects">
        <Project data={data[0]} />
        <Project data={data[1]} />
      </div>
    </ProjectDiv>
  );
}
