import React from "react";
import { Helmet } from "react-helmet";

// const metaDecorator = require("../../data/metaDecorator.json");
const metaDecorator = {
    hostname: "https://medlangfanatic.com"
}

const MetaDecorator = ({ title, description, imageUrl, imageAlt }) => (
    <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={metaDecorator.hostname + imageUrl} />
        <meta
            property="og:url"
            content={metaDecorator.hostname + window.location.pathname + window.location.search}
        />
    </Helmet>
);


export default MetaDecorator;