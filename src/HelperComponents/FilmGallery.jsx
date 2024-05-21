import React from 'react';

const VideoGallery = () => {
    const videos = [
        { id: 'zH3ZohGnjcg', title: 'Kumru Ballad', src: 'http://i1.ytimg.com/vi/zH3ZohGnjcg/mqdefault.jpg', platform: 'youtube' },
        { id: '26890275', title: 'Kumru Orchestral', src: 'https://secure-b.vimeocdn.com/ts/178/010/178010767_295.jpg', platform: 'vimeo' },
        { id: 'paG__3FBLzI', title: 'Mesopotamia', src: 'http://i1.ytimg.com/vi/paG__3FBLzI/mqdefault.jpg', platform: 'youtube' },
        { id: 'OF9fneQ50Us', title: 'Kreutzer', src: 'http://i1.ytimg.com/vi/OF9fneQ50Us/mqdefault.jpg', platform: 'youtube' },
        { id: '1swsXJuclGM', title: 'Bodrum', src: 'http://i1.ytimg.com/vi/1swsXJuclGM/mqdefault.jpg', platform: 'youtube' },
        { id: 'WQ3Gf9PLUO8', title: 'Mesopotamia', src: 'http://i1.ytimg.com/vi/WQ3Gf9PLUO8/mqdefault.jpg', platform: 'youtube' },
        { id: '7533229', title: 'Symhpony in Red', src: 'https://secure-b.vimeocdn.com/ts/326/392/32639200_295.jpg', platform: 'vimeo' },
        { id: 'bYy1yKqspYs', title: 'Paganini Jazz', src: 'http://i1.ytimg.com/vi/bYy1yKqspYs/mqdefault.jpg', platform: 'youtube' },
        { id: '02bxAzWn0JM', title: 'Piano Concerto No.3', src: 'http://i1.ytimg.com/vi/02bxAzWn0JM/mqdefault.jpg', platform: 'youtube' },
        { id: 'uj158c_4e0M', title: 'Rhapsody in Blue', src: 'http://i1.ytimg.com/vi/uj158c_4e0M/mqdefault.jpg', platform: 'youtube' },
        { id: 'kIxech_-msA', title: 'Concerto G-Dur', src: 'http://i1.ytimg.com/vi/kIxech_-msA/mqdefault.jpg', platform: 'youtube' },
        { id: '_ZSefvtdYiY', title: 'Paganini Variations', src: 'http://i1.ytimg.com/vi/_ZSefvtdYiY/mqdefault.jpg', platform: 'youtube' }
    ];

    const getVideoUrl = (id, platform) => {
        switch (platform) {
            case 'youtube':
                return `//www.youtube.com/embed/${id}`;
            case 'vimeo':
                return `//player.vimeo.com/video/${id}`;
            default:
                return '';
        }
    };

    return (
        <section className="second clearfix">
            <header>
                <h1>The Video Gallery</h1>
            </header>
            {videos.map(video => (
                <article className="video" key={video.id}>
                    <figure>
                        <a className="fancybox fancybox.iframe" href={getVideoUrl(video.id, video.platform)}>
                            <img className="videoThumb" src={video.src} alt={video.title} />
                        </a>
                    </figure>
                    <h2 className="videoTitle">{video.title}</h2>
                </article>
            ))}
        </section>
    );
};

export default VideoGallery;
