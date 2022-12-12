import PreviewCompatibleImage from "./PreviewCompatibleImage"
import React from 'react'

const MainPitch = ({title, description, imageData, alt}) => {
    const titleStyle = {marginLeft: "-80px", backgroundColor: "#fff", zIndex: 1, position: 'relative'}
    const textStyleMobile = {backgroundColor: '#fff'}
    return (
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
                            <h1 style={titleStyle} className="title px-4 py-1">{title}</h1>
                            </div>
                            <div className="tile mt-3">
                            <h3 className="subtitle is-size-5">{description}</h3>
                            </div>
                    </div> 
                </div>
            </div>
            <div style={{position: 'relative'}} className="mobile-only is-mobile primary-mainpitch columns mb-7">
                <div className="column">
                <PreviewCompatibleImage
                    imageInfo={{
                        image: imageData,
                        alt: alt,
                    }}
                    />

                    <div className="py-5" style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)'}}>
                            <div className="tile">
                            <h1 style={textStyleMobile} className="title is-size-5 mx-6 px-4 py-1 text-blur">{title}</h1>
                            </div>
                            <div className="tile mt-3">
                            <h3 style={textStyleMobile} className="subtitle px-4 py-1 mx-6 is-size-6 text-blur">{description}</h3>
                            </div>
                    </div> 

                </div>
            </div>
        </>
    )
}

export default MainPitch