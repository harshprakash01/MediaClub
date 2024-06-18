// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BentoGrid, BentoGridItem , BentoGridItemLarge} from '../HelperComponents/BentoGrid.jsx';
const isPhone = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android/i.test(userAgent) || /iPhone|iPod/.test(userAgent);
};
const Work1 = () => {
    return (
        < section className="">
            <>
                <div className="work-section  mb-15" id={"work"} >
                    <h1 className=" text-center heading-font" >
                        WORK
                    </h1>
                   <div className="work-container">
                       <BentoGrid className="custom-grid-class ">
                           <BentoGridItem
                               className="custom-item-class box-glow"
                               title="Sonabyss Trailer"
                               description="This is the description for item 1."
                               link="https://www.youtube.com/embed/ZTmF2v59CtI?si=7JjN9lZAEmcuJvOL"
                           />
                           <BentoGridItem
                               className="custom-item-class box-glow"
                               title="Sonabyss 2"
                               description="This is the description for item 2."
                               header={<div>Header Content</div>}
                               icon={<div>Icon Content</div>}
                           />
                           <BentoGridItem
                               className="custom-item-class box-glow"
                               title="Shristi Trailer"
                               description="This is the description for item 1."
                               header={<div>Header Content</div>}
                               icon={<div>Icon Content</div>}
                           />
                           <BentoGridItem
                               className="custom-item-class box-glow"
                               title="Shristi Aftermovie"
                               description="This is the description for item 1."
                               header={<div>Header Content</div>}
                               icon={<div>Icon Content</div>}

                           />
                           <BentoGridItemLarge
                               className="custom-item-class box-glow"
                               title="Nerist Promotional Video"
                               description="This is the description for item 1."
                               header={<div>Header Content</div>}
                               icon={<div>Icon Content</div>}
                           />

                       </BentoGrid>
                   </div>
                </div>
            </>
        </section>
    );
};



const Work2 = () => {
    return (
        <section className="work-section mb-20" id="work">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-5xl font-bold heading-font">WORK</h1>
            </div>
            <div className="work-container max-w-7xl mx-auto px-4 md:px-0">
                <BentoGrid className="custom-grid-class grid-cols-1 md:grid-cols-3 gap-4">
                    <BentoGridItem
                        className="custom-item-class box-glow"
                        title="Sonabyss Trailer"
                        description="This is the description for item 1."
                        link="https://www.youtube.com/embed/ZTmF2v59CtI?si=7JjN9lZAEmcuJvOL"
                    />
                    <BentoGridItem
                        className="custom-item-class box-glow"
                        title="Sonabyss 2"
                        description="This is the description for item 2."
                        header={<div>Header Content</div>}
                        icon={<div>Icon Content</div>}
                    />
                    <BentoGridItem
                        className="custom-item-class box-glow"
                        title="Shristi Trailer"
                        description="This is the description for item 1."
                        header={<div>Header Content</div>}
                        icon={<div>Icon Content</div>}
                    />
                    <BentoGridItem
                        className="custom-item-class box-glow"
                        title="Shristi Aftermovie"
                        description="This is the description for item 1."
                        header={<div>Header Content</div>}
                        icon={<div>Icon Content</div>}
                    />
                    <BentoGridItemLarge
                        className="custom-item-class box-glow md:col-span-2"
                        title="Nerist Promotional Video"
                        description="This is the description for item 1."
                        header={<div>Header Content</div>}
                        icon={<div>Icon Content</div>}
                    />
                </BentoGrid>
            </div>
        </section>
    );
};

const Work = () => {
    return isPhone() ? <Work2 /> : <Work1 />;
};


export default Work;