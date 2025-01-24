import getAllPost from "@/lib/getAllPost";
import Link from "next/link";

const Blogs = async() => {
    // const blogs = [
    //     {
    //         "userId": 1,
    //         "id": 1,
    //         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //         "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    //     },
    //     {
    //         "userId": 1,
    //         "id": 2,
    //         "title": "qui est esse",
    //         "body": "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
    //     },
    //     {
    //         "userId": 1,
    //         "id": 3,
    //         "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    //         "body": "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
    //     },
    //     {
    //         "userId": 1,
    //         "id": 4,
    //         "title": "eum et est occaecati",
    //         "body": "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
    //     }
    // ]

    const blogs = await getAllPost();
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-3xl font-bold">All Blogs:</h1>
            <div className=" grid grid-cols-3 gap-5">
                {
                    blogs.map(blog => <div key={blog.id} className="card bg-base-100 w-96 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{blog.title}</h2>

                            <div className="card-actions justify-end">
                                <Link href={`/blogs/${blog.id}`} className="btn btn-primary">See Details</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blogs;