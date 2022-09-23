const Header = () => {
  return (
    <>
      <header className="relative -mt-52 xl:-mt-28 z-0 w-full h-screen">
        <video
          src="/assets/videos/home-video.mp4"
          autoPlay
          muted
          loop
          className="h-full w-full object-cover"
        >
          <source
            src={`/assets/videos/home-video.mp4#t=0.1`}
            type="video/mp4"
          />
        </video>

        <h1 className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-white uppercase z-10 mt-20 xl:mt-0 w-full px-4 xl:px-0">
          studio notion is a media and content business.
        </h1>
        <div className="h-full w-full bg-black opacity-40 absolute top-0 left-0 z-0"></div>
      </header>
    </>
  );
};

export default Header;
