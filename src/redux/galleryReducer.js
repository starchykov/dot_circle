// Define initial state data
const initialState = {
    images: [
        {
            src: `business_2.jpg`,
            thumbnail: `business_2.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_3.jpg`,
            thumbnail: `business_3.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_4.jpg`,
            thumbnail: `business_4.jpg`,
            thumbnailWidth: 400,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_5.jpg`,
            thumbnail: `business_5.jpg`,
            thumbnailWidth: 400,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_6.jpg`,
            thumbnail: `business_6.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_7.jpg`,
            thumbnail: `business_7.jpg`,
            thumbnailWidth: 400,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_8.jpg`,
            thumbnail: `business_8.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_9.jpg`,
            thumbnail: `business_9.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_10.jpg`,
            thumbnail: `business_10.jpg`,
            thumbnailWidth: 200,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_11.jpg`,
            thumbnail: `business_11.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_12.jpg`,
            thumbnail: `business_12.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_13.jpg`,
            thumbnail: `business_13.jpg`,
            thumbnailWidth: 200,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_14.jpg`,
            thumbnail: `business_14.jpg`,
            thumbnailWidth: 200,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_15.jpg`,
            thumbnail: `business_15.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_15.jpg`,
            thumbnail: `business_15.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_17.jpg`,
            thumbnail: `business_17.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_18.jpg`,
            thumbnail: `business_18.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_19.jpg`,
            thumbnail: `business_19.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_20.jpg`,
            thumbnail: `business_20.jpg`,
            thumbnailWidth: 210,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_21.jpg`,
            thumbnail: `business_21.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_22.jpg`,
            thumbnail: `business_22.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_23.jpg`,
            thumbnail: `business_23.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_24.jpg`,
            thumbnail: `business_24.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_25.jpg`,
            thumbnail: `business_25.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_26.jpg`,
            thumbnail: `business_26.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_27.jpg`,
            thumbnail: `business_27.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_28.jpg`,
            thumbnail: `business_28.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_29.jpg`,
            thumbnail: `business_29.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_30.jpg`,
            thumbnail: `business_30.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_31.jpg`,
            thumbnail: `business_31.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_32.jpg`,
            thumbnail: `business_32.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_33.jpg`,
            thumbnail: `business_33.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_34.jpg`,
            thumbnail: `business_34.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_35.jpg`,
            thumbnail: `business_35.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_36.jpg`,
            thumbnail: `business_36.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },
        {
            src: `business_37.jpg`,
            thumbnail: `business_37.jpg`,
            tags: [{value: `Business trainings`, title: "Business trainings"}],
            caption: ""
        },

        {
            src: `open_1.jpg`,
            thumbnail: `open_1.jpg`,
            thumbnailWidth: 400,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_2.jpg`,
            thumbnail: `open_2.jpg`,
            thumbnailWidth: 200,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_3.jpg`,
            thumbnail: `open_3.jpg`,
            thumbnailWidth: 200,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_4.jpg`,
            thumbnail: `open_4.jpg`,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_5.jpg`,
            thumbnail: `open_5.jpg`,
            thumbnailWidth: 200,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_6.jpg`,
            thumbnail: `open_6.jpg`,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_7.jpg`,
            thumbnail: `open_7.jpg`,
            thumbnailWidth: 200,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_8.jpg`,
            thumbnail: `open_8.jpg`,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_9.jpg`,
            thumbnail: `open_9.jpg`,
            thumbnailWidth: 200,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_10.jpg`,
            thumbnail: `open_10.jpg`,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_11.jpg`,
            thumbnail: `open_11.jpg`,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_12.jpg`,
            thumbnail: `open_12.jpg`,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_13.jpg`,
            thumbnail: `open_13.jpg`,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_14.jpg`,
            thumbnail: `open_14.jpg`,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_15.jpg`,
            thumbnail: `open_15.jpg`,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_15.jpg`,
            thumbnail: `open_15.jpg`,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_17.jpg`,
            thumbnail: `open_17.jpg`,
            thumbnailWidth: 200,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_18.jpg`,
            thumbnail: `open_18.jpg`,
            thumbnailWidth: 200,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_19.jpg`,
            thumbnail: `open_19.jpg`,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_20.jpg`,
            thumbnail: `open_20.jpg`,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_21.jpg`,
            thumbnail: `open_21.jpg`,
            thumbnailWidth: 200,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_22.jpg`,
            thumbnail: `open_22.jpg`,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_23.jpg`,
            thumbnail: `open_23.jpg`,
            thumbnailWidth: 200,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_24.jpg`,
            thumbnail: `open_24.jpg`,
            thumbnailWidth: 200,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_25.jpg`,
            thumbnail: `open_25.jpg`,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_26.jpg`,
            thumbnail: `open_26.jpg`,
            thumbnailWidth: 200,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_27.jpg`,
            thumbnail: `open_27.jpg`,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_28.jpg`,
            thumbnail: `open_28.jpg`,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
        {
            src: `open_29.jpg`,
            thumbnail: `open_29.jpg`,
            thumbnailWidth: 400,
            tags: [{value: `Open programs`, title: "Open programs"}],
            caption: ""
        },
    ]
}

const galleryReducer = (state = initialState, action) => {
    console.log(action);
    return state;
}

export default galleryReducer;