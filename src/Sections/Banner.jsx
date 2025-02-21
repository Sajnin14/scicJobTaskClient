
const Banner = () => {
    return (
        <div>
            <div
                className="hero"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/CK6Jdx7/overhead-view-businesswoman-working-computer-office-place-your-text-ideal-blog-flat-lay-white-backgr.jpg)",
                    height: "475px",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Task Hub</h1>
                        <p className="mb-5">
                            TaskHub sounds like a task management platform where users can create, organize, and track tasks efficiently. It could be designed for individuals, teams, or businesses to enhance productivity and collaboration.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;