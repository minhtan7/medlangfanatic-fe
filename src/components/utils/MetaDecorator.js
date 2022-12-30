import React from "react";
import { Helmet } from "react-helmet-async";


// const metaDecorator = require("../../data/metaDecorator.json");
const metaDecorator = {
    hostname: "https://medlangfanatic.com"
}

const MetaDecorator = ({ title, description, imageUrl, imageAlt }) => (
    <Helmet>
        <title>{title}</title>
        <meta property="og:type" content="website" />
        <link rel='canonical' href={metaDecorator.hostname + window.location.pathname + window.location.search} />
        <meta
            property="og:url"
            content={metaDecorator.hostname + window.location.pathname + window.location.search}
        />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={metaDecorator.hostname + imageUrl} />
        <meta property="og:description" content={description} />
        {/* <meta property="description" content={description} /> */}
        {/* <meta property="og:description" content={description} /> */}

    </Helmet>
);


export default MetaDecorator;