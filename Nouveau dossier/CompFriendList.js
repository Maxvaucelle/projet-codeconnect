import { SlOptionsVertical } from "react-icons/sl";
import './_compFriendlist.scss';
function CompFriendList() {
    return(
 <div className="friendPage-person">
                <div className="friendPage-caract">
                    <img src=""/>
                    <p>Nom/prenom</p>
                    <p>Métier</p>

                </div>
  <div className="friendBar-options">
<a href=""><SlOptionsVertical/></a>
</div>

            </div>
    );
}

export default CompFriendList;