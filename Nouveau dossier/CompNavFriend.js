import './friend/_compNavFriend.scss';
import { SlOptionsVertical } from "react-icons/sl";
function CompNavFriend() {
    return (
      <div className="CompNavFriend">
  <div className="person">
            <div className="photo">
              <img
                src=""
                
              />
            </div>
            <div className="name">
              <p>Antoine</p>
            </div>
            <div className="options">
                {/* image à changer dans react icons */}
              <a href=""><SlOptionsVertical/></a>
            </div>
          </div>
      </div>
    );
  }
  
  export default CompNavFriend;