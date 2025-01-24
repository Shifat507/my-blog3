import Link from "next/link";


const Home = () => {

    return (
        <div className="w-11/12 mx-auto text-center mt-20">
            <div>
                <h2 className="text-xl font-bold text-orange-400">-- A blog site portal --</h2>
                <h1 className="text-3xl font-bold">Your Daily Dose of Knowledge</h1>
                
            
                <p className="mt-4">Dive into a world of fresh perspectives and endless possibilities. Our blog is your go-to destination for trending topics, expert opinions, and thought-provoking insights. Whether you're looking to explore the latest in technology, lifestyle, business, or personal growth, we've got you covered. Each post is carefully curated to keep you informed, inspired, and ready to take on the world with new ideas. Stay curious, stay engaged, and let our content be your daily source of inspiration and knowledge.</p>

                <Link href='/blogs' className="btn btn-primary mt-16">See All Blogs</Link>
            </div>
        </div>
    );
};

export default Home;