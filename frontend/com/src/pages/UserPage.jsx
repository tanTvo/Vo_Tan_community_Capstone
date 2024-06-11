import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost";

const UserPage = () => {
    return <>
    
    <UserHeader/>
    <UserPost likes={1200} replies={481} postImg="/post1.png " postTitle="Join us today and lets save humanity"/>
    <UserPost likes={1200} replies={481} postImg="/post2.png " postTitle="Join us today and lets save humanity"/>
    <UserPost likes={10} replies={481} postImg="/post3.png " postTitle="Join us today and lets save humanity"/>
    <UserPost likes={200} replies={481}  postTitle="Join us today and lets save humanity"/>
    </>
};





export default UserPage;