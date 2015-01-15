<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

    <script type="text/javascript" src="src/scripts/modernizr.js"></script>
    <link rel="stylesheet" href="src/styles/css/global.css">

</head>
<body>
    <a href="#maincontent" class="skip">Skip to content</a>
    <div class="wrapper">
        <nav class="nav-main">
            <a href="#about" class="nav-link">about</a>
            <a href="#support" class="nav-link">support</a>
            <a href="#why" class="nav-link">why</a>
            <a href="#connect" class="nav-link">connect</a>
        </nav>
        <article class="intro" id="about">
            <h1 class="page-heading">Jonathan Bartley</h1>
            <div class="article-text">
            </div>
            <div class="article-image">
            </div>
        </article>

        <aside class="support" id="support">
            <a href="donate" class="link-cta">Donate</a>
            <a href="join" class="link-cta">Join</a>
            <a href="leaflet" class="link-cta">Leaflet</a>
        </aside>

        <section class="section-feeds tabs">
            <nav class="nav-tabs">
                <a href="#streatham">streatham</a>
                <a href="#lambeth">lambeth</a>
                <a href="#twitter">twitter</a>
            </nav>
            <div class="tabs-content">
                <div id="streatham">
                    <!-- Streatham news feed -->
                    <?php include("rss2html-streathamnews.php"); ?>
                    <!-- end Streatham news feed -->
                </div>

                <div id="lambeth">
                    <!-- Lambeth news feed -->
                    <?php include("rss2html-lambethgreennews.php"); ?>
                    <!-- end Lambeth news feed -->
                </div>

                <div id="twitter">
                    <!-- Twitter Feed -->
                    <a class="twitter-timeline" href="https://twitter.com/jon_bartley" data-widget-id="554697710960648192">Tweets by @jon_bartley</a>
                    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
                    <!-- end twitter feed -->
                </div>
            </div>
        </section>

        <section id="connect">
            <a href="fb" class="link-sm">Facebook</a>
            <a href="fb" class="link-sm">Twitter</a>
            <a href="fb" class="link-sm">Email</a>
            <a href="fb" class="link-sm">You Tube</a>
        </section>

        <!-- Contact and Social Media -->
        <a href="https://www.youtube.com/channel/UCWAkdD1ox4r1PFAX0S31GCw">Youtube</a>

    </div>
    <script data-main="src/scripts/config" src="src/scripts/libs/require.js"></script>
</body>
</html>