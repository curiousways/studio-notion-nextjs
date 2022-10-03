import ImgLink from "./ImgLink";

import img1 from "../../public/assets/images/home/service_artist_services.jpg";
import img2 from "../../public/assets/images/home/service_content_production.jpg";
import img3 from "../../public/assets/images/home/service_creative_strategies.jpg";
import img4 from "../../public/assets/images/home/service_live_events.jpg";
import img5 from "../../public/assets/images/home/service_notion_magazine.jpg";
import img6 from "../../public/assets/images/home/service_social_media.jpg";

const ImageNav = () => {
  return (
    <div className="mt-10">
      {/* Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3">
        <ImgLink image={img1} text="Artist Services" link="/artist-services/" />
        <ImgLink
          image={img2}
          text="Content Creative &amp; Production"
          link="/content-production/"
        />
        <ImgLink
          image={img3}
          text="Creative Strategies"
          link="/creative-strategies/"
        />
        <ImgLink image={img4} text="Live Events" link="/live-events/" />
        <ImgLink image={img5} text="Notion Print &amp; Digital" link="/notion-magazine/" />
        <ImgLink image={img6} text="Social Media" link="/social-media/" />
      </div>
    </div>
  );
};

export default ImageNav;
