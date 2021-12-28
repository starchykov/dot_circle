import s from './gallery.module.scss'
import Gallery from 'react-grid-gallery';
import {withNamespaces} from "react-i18next";
import {compose} from "redux";
import {connect} from "react-redux";
import {useCallback, useEffect} from "react";

const PhotoGallery = ({t, name, photos}) => {

    // Set document title wia hook effect
    useEffect(() => document.title = t('Gallery'));

    // Generate UUID key
    const uuid = useCallback((idx) => encodeURI(`${idx}`), [])

    let tagStyle = () => ({
        display: 'inline',
        padding: '0.2em 0.6em 0.3em',
        fontSize: '63%',
        fontWeight: 600,
        lineHeight: 1,
        color: 'white',
        background: 'rgb(239 127 26 / 78%)',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'baseline',
        borderRadius: '0.25em'
    });

    let data = photos.images.map((i, idx) => ({
        key: `${uuid(idx)}`,
        src: `${process.env.PUBLIC_URL}/gallery/${i.src}`,
        thumbnail: `${process.env.PUBLIC_URL}/gallery/thumbs/${i.thumbnail}`,
        thumbnailWidth: i.thumbnailWidth ?? 350,
        thumbnailHeight: i.thumbnailHeight ?? 250,
        tags: [{value: `${t(i.tags[0].value)}`, title: "Open programs"}],
        caption: i.caption ?? 'Some text'
    }));


    return (
        <div className={s.gallery}>
            <h1>{t(name)}</h1>
            <Gallery enableImageSelection={false} images={data} tagStyle={tagStyle()}/>
        </div>
    );
};

let mapStateToProps = (state) => ({photos: state.galleryReducer});

export default compose(withNamespaces(), connect(mapStateToProps, null))(PhotoGallery);