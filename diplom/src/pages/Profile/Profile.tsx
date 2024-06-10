import "./Profile.css";
import SBPR from "../../components/SideBar/SBPR";
import ContentProfileHeader from "../../components/Content/ProfileContent/ContentProfileHeader";
import StudentsList from "../../side/StudentsList";

const Profile = () => {
    return (
        <div className="profile">
          <SBPR />
          <div className="profile--content">
            <ContentProfileHeader />
        
            <StudentsList />
          </div>
        </div>
    )
}

export default Profile;