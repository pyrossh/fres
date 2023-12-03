import EmailIcon from "./icons/EmailIcon.tsx";
import GithubIcon from "./icons/GithubIcon.tsx";
import LinkedInIcon from "./icons/LinkedInIcon.tsx";

export default function SocialLinks() {
  return (
    <div class="flex hover:no-underline text-white child:mx-2  sm:child:ml-5">
      <a href="https://linkedin.com/in/pyrossh" title="My LinkedIn profile">
        <LinkedInIcon />
      </a>
      <a href="https://github.com/pyrossh" title="My GitHub profile">
        <GithubIcon />
      </a>
      <a href="mailto:pyros2097@gmail.com" title="My email">
        <EmailIcon />
      </a>
    </div>
  );
}
