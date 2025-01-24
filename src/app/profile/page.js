import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
const Profile = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    return (
        <div>
            {
                user ? <h1 className="text-3xl flex justify-center items-center mt-28 text-orange-400 font-semibold">Welcome to your profile</h1> :
                    <div>
                        <h1 className="text-3xl flex justify-center items-center mt-28 font-semibold">Please Sign Up for view this page</h1>
                        <div className="flex justify-center">
                            <RegisterLink className="bg-black text-white px-3 py-2 rounded-md mt-6">Sign up</RegisterLink>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Profile;