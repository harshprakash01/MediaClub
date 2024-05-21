// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BentoGrid, BentoGridItem , BentoGridItemLarge} from '../HelperComponents/BentoGrid.jsx';

const Work = () => {
    return (
        < section className="">
            <>
                <div className="work-section mb-20" id={"work"} >
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

export default Work;