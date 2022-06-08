import React from "react";
import "../bootstrap.css";
import {SocialMediaIconsReact} from 'social-media-icons-react';

export default function Footer() {
  return (
    <div className="social-med">

      <SocialMediaIconsReact icon="twitter"url="https://www.instagram.com/petner.in/" />        
      <SocialMediaIconsReact icon="linkedin" url="https://www.linkedin.com/in/shivansh-kalra-a40118225/" />
      <SocialMediaIconsReact icon="mail" url="shivanshkalra796@gmail.com" />

      <footer id="footer">
        <p>© Copyright petner</p>
      </footer>
    </div>
  );
}
