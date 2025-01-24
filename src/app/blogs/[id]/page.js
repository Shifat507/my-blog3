import getPost from "@/lib/getPost";
import { notFound } from "next/navigation";


const page = async({params}) => {
    const {id} = params;

    if(id === "500"){
        notFound();
    }

    const post = await getPost(id)
    return (
        <div className="border border-green-500 p-5 mb-3 rounded-lg w-2/4 ms-5 mt-10">
            <h1 className="text-2xl">{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default page;