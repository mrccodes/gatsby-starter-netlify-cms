import PreviewCompatibleImage from "./PreviewCompatibleImage"
import React from 'react'

const MainPitch = ({title, description, imageData, alt}) => {
    const titleStyle = {marginLeft: "-80px", backgroundColor: "#fff", zIndex: 1, position: 'relative'}
    const textStyleMobile = {backgroundColor: '#fff'}
    return imageData ? (
        <>
            <div style={{marginBottom: '50px'}} className="desktop-only primary-mainpitch columns">
                <div className="column">
                <PreviewCompatibleImage
                    imageInfo={{
                        image: imageData,
                        alt: alt,
                    }}
                    />
                </div>
                <div style={{position: 'relative'}} className="column">
                    <div style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)'}} className="py-5">
                            <div className="tile">
                            <h1 style={titleStyle} className="title is-size-2 px-3 py-1">{title}</h1>
                            </div>
                            <div className="tile mt-3">
                            <h3 className="subtitle is-size-6">{description}</h3>
                            </div>
                    </div> 
                </div>
            </div>
            <div  className="mobile-only is-mobile primary-mainpitch column mb-7">
                <div className="content">
                    <div className="tile">
                    <h1 className="title">{title}</h1>
                    </div>
                    <div className="tile">
                    <h3 className="subtitle">{description}</h3>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <div className="content">
            <div className="tile">
            <h1 className="title">{title}</h1>
            </div>
            <div className="tile">
            <h3 className="subtitle">{description}</h3>
            </div>
        </div>
    )
}

export default MainPitch