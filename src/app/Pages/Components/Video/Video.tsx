import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';

function Video() {
    return (
        <>
            <h1 data-aos="fade-up" data-aos-delay="400" className="w-full h-auto my-4 text-center font-extrabold underline text-6xl md:text-5xl lg:text-6xl">
                We are on YOUTUBE
            </h1>
            <div data-aos="fade-up" data-aos-delay="400" className="App h-fit p-4 md:p-10">
                <div data-aos="fade-up" data-aos-delay="400" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Video one */}
                    <div data-aos="fade-up" data-aos-delay="400" className="h-64 md:h-96">
                        <iframe data-aos="fade-up" data-aos-delay="400"
                            title="youtube-video-1"
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/QGm2ENy9wIo?si=dZ2ZR5e_hH6O7Sb3"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    {/* Video two */}
                    <div data-aos="fade-up" data-aos-delay="400" className="h-64 md:h-96">
                        <iframe data-aos="fade-up" data-aos-delay="400"
                            title="youtube-video-2"
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/r0KqrhEEwpw?si=uMSNE6MzP8yO3G6X"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    {/* Video three */}
                    <div data-aos="fade-up" data-aos-delay="400" className="h-64 md:h-96">
                        <iframe data-aos="fade-up" data-aos-delay="400"
                            title="youtube-video-3"
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/qJdMtrC4IOw?si=d7x0T3WIQwWV96cd"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Video;
