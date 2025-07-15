import {FaGithub, FaLinkedin} from "react-icons/fa";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://github.com/aragonani">
          <FaGithub size={20}/>
        </a>
        <a href="https://www.linkedin.com/in/animesh-sinha-2544281ba/">
          <FaLinkedin  size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;
