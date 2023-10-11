import profilePhoto from "../../assets/Profile-photo.jpg";
import arrowIcon from "../../assets/Arrow.svg";
import "./Introduction.css";

export const Introduction = () => {
  return (
    <div className="introduction-container">
      <div className="introduction-wrapper">
        <div className="photo-wrapper">
          <img
            src={profilePhoto}
            className="profile-photo"
            alt="Photo of Anna Robertsson, Frontend Developer"
          />
        </div>
        <div className="heading-wrapper">
          <h3>Hi, I&apos;m Anna Robertsson</h3>
          <h1>Frontend Developer</h1>
        </div>
        <div className="presentation-wrapper">
          <p>
            Anna is an exceptional developer known for her innovative solutions
            and exceptional coding abilities. She creates user-friendly
            applications and solves complex issues with ease. Her drive for
            excellence makes her a valuable asset to any project and a standout
            in the technology field.
          </p>
        </div>
        <img
          src={arrowIcon}
          className="arrow-icon"
          alt="Icon of an arrow pointing down"
        />
      </div>
    </div>
  );
};
