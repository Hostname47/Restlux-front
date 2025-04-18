import { UserType } from "../../../../features/global/types";
import "./styles.css";

function UserImage({ user }: { user: UserType }) {
  return (
    <div id="header-user-image">
      {/* For now the user does not have image, but later we will enable the user to upload an avatr or image */}
      <span className="character">{user.fullname.charAt(0)}</span>
    </div>
  );
}

export default UserImage;
