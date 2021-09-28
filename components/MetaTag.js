export default function MetaTag({
    description = "Love Akatsuki organisation? Here, you can find all Akatsuki members information, Nagato, Obito Uchiha, Yahiko, Itachi Uchiha, Sasuke Uchiha ...",
    title = "Akatsuki",
    image = "img/icons/icon512.png",
    imageAlt = "Akatsuki",
    url = "https://akatsuki.vercel.app",
}) {
    const pathImage = `https://akatsuki.vercel.app/${image}`;

    return (
        <>
            <meta name="description" content={description} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@boumediene_anas" />
            <meta name="twitter:creator" content="@boumediene_anas" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={pathImage} />
            <meta name="twitter:image:alt" content={imageAlt} />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="Akatsuki" />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={pathImage} />
            <meta property="og:image:alt" content={imageAlt} />
            <meta property="og:image:width" content="500" />
            <meta property="og:image:height" content="500" />
        </>
    );
}
