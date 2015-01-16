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
        <nav class="nav-main">
            <a href="#about" class="nav-link">about</a>
            <a href="#support" class="nav-link">support</a>
            <a href="#why" class="nav-link">why</a>
            <a href="#connect" class="nav-link">connect</a>
        </nav>
        <div class="header-main">
            <div class="wrapper">
                <div class="logo">
                    <?php include("includes/GP-logo-full.php"); ?>
                </div>
                <h1 class="heading-main">
                    Jonathan Bartley
                    <span class="small">Streatham constituency</span>
                </h1>
            </div>
        </div>
        <article class="article article-intro" id="about">
            <div class="wrapper">
                <h2 class="heading-article">Jonathan Bartley</h2>
                <div class="article-text">
                <p class="standfirst">Jonathan is a community activist who has lived in the local area all his life.</p>
                    <p>He has been a governor of two local schools and a member of the board of local community forum Streatham Action for three years. He is chair of one the local safer neighbourhood ward panels that sets the priorities for local policing. He has successfully secured more funding for a local school, a commitment for proper access for all at Streatham train station and fought to get a new, improved local police base.</p>
                    <p>Jonathan is standing in his first general election after challenging David Cameron in 2010 over his policies regarding disabled children. Channel 4 ran a fact-check after the incident and found Jonathan to be right and the prime minister wrong.</p>
                    <p>Jonathan has written for national newspapers including the Guardian and Independent and written several books on ethics and politics. He has also raised over £1 million for charitable work in the developing world.</p>
                </div>
                <div class="article-image">
                    <img src="/images/jonathan_bartley.jpg" alt="Jonathan Bartley" />
                </div>
            </div>
        </article>

        <aside class="section-support" id="support">
            <div class="wrapper">
                <h2 class="heading-section">
                    Support the campaign
                </h2>
                <a href="donate" class="link-cta">
                    <span class="text">Donate <span class="small">to the campaign</span></span>
                    <span class="icon">
                        <?php include("includes/cta-icon-donate.php"); ?>
                    </span>
                </a>
                <a href="join" class="link-cta">
                    <span class="text">Join <span class="small">the Green Party</span></span>
                    <span class="icon">
                        <?php include("includes/cta-icon-join.php"); ?>
                    </span>
                </a>
                <a href="leaflet" class="link-cta">
                    <span class="text">Leaflet <span class="small">in your area</span></span>
                    <span class="icon">
                        <?php include("includes/cta-icon-leaflet.php"); ?>
                    </span>
                </a>
            </div>
        </aside>

        <section id="priorities" class="section-priorities">
            <div class="wrapper">
                <div class="content">
                    <h2 class="heading-section">Jonathan’s priorities for Streatham</h2>
                    <h3 class="sub-heading">Action to tackle the housing crisis</h3>
                    <p>We need to get tougher with developers, build more social housing, introduce rent controls, and promote new housing models so everyone can get secure and affordable accommodation. Decisive action must be taken to stop local people being driven out by the property speculation and rising prices which are fueled by the big three parties.</p>
                    <h3 class="sub-heading">Fair wages for all</h3>
                    <p>Greens have successfully lobbied in Lambeth to get a Living Wage for council employees. London is one of the richest cities in the world but this wealth isn’t being shared equally. Local people need jobs they can build a life on, with fair pay and job security.</p>
                    <h3 class="sub-heading">Bringing the railways back into public hands</h3>
                    <p>Passengers need the transport service they deserve, at a price they can afford, which everyone can use. Local people are not getting a fair ride.  The time has come to stop the empty promises from local politicians and improve local transport links.</p>
                    <h3 class="sub-heading">Protection of local public services</h3>
                    <p>Our public services from health care and education, through to street cleaning and rubbish collection must remain accountable and run for the benefit of our community, not for profit. Both Labour and the Conservatives want to continue to privatise and contract out vital services.</p>
                    <h3 class="sub-heading">Clean air and greener streets</h3>
                    <p>The whole community benefits when streets are reclaimed for pedestrians and cyclists, areas are “greened” and the local area becomes a safer, more pleasant place to live. Lambeth is now the deadliest area in London, with more traffic fatalities than anywhere else, and over 100 deaths a year linked to polluted air. This must end.</p>
                    <p>Do you agree with Jonathan’s priorities for Streatham? <a href="#conenct">Let him know</a></p>
                </div>
            </div>
        </section>

        <section class="section-feeds tabs">
            <div class="wrapper">
                <nav class="nav-tabs">
                    <ul>
                        <li><a href="#streatham">Streatham Green News</a></li>
                        <li><a href="#lambeth">Lambeth Green News</a></li>
                        <li><a href="#twitter">Jonathan’s Twitter</a></li>
                    </ul>
                </nav>
                <div class="">
                    <div id="streatham" class="tab-content">
                        <!-- Streatham news feed -->
                        <?php include("rss2html-streathamnews.php"); ?>
                        <!-- end Streatham news feed -->
                    </div>

                    <div id="lambeth" class="tab-content">
                        <!-- Lambeth news feed -->
                        <?php include("rss2html-lambethgreennews.php"); ?>
                        <!-- end Lambeth news feed -->
                    </div>

                    <div id="twitter" class="tab-content">
                        <!-- Twitter Feed -->
                        <a class="twitter-timeline" href="https://twitter.com/jon_bartley" data-widget-id="554697710960648192">Tweets by @jon_bartley</a>
                        <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
                        <!-- end twitter feed -->
                    </div>
                </div>
            </div>
        </section>

        <article id="why" class="article article-why">
            <div class="wrapper">
                <h2 class="heading-article">Why vote Green in Streatham constituency?</h2>
                <section class="body-text">
                    <p>The Green Party is set to challenge Labour locally at the general election after beating both the Lib Dems and Conservatives right across Lambeth in both the European elections and Local elections in May last year.</p>
                    <p>The Greens are now in second place in Lambeth so there is no risk of letting in either the Conservatives or Lib Dems.</p>
                    <p>Since May, the Green Party has experienced a further surge in popularity nationally, meaning that London could get its first Green MP right here in Lambeth!</p>
                    <p>The Green Party is now the most popular party locally when it comes to policies. A survey of over 1,500 local people by the independent website voteforpolicies.org revealed that more people favoured the Green Party’s policies than any other party.</p>
                </section>
                <section class="survey-data">
                    <h3 class="sub-heading">Steatham policy survey results</h3>
                    <a href="#">View figure as a table</a>
                    <p>Take the survey yourself at <a href="http//www.voteforpolicies.org" class="">www.voteforpolicies.org</a></p>
                    <a href="#" rel="external">Find out more about what the Green Party stand for</a>
                </section>
            </div>
        </article>

        <section id="connect" class="section-connect">
            <div class="wrapper">
                <a href="twitter" class="link-sm">
                    <span class="text">Twitter</span>
                    <span class="icon">
                        <?php include("includes/sm-icon-twitter.php"); ?>
                    </span>
                </a>
                <a href="fb" class="link-sm">
                    <span class="text">Facebook</span>
                    <span class="icon">
                        <?php include("includes/sm-icon-fb.php"); ?>
                    </span>
                </a>
                <a href="email" class="link-sm">
                    <span class="text">Email</span>
                    <span class="icon">
                        <?php include("includes/sm-icon-email.php"); ?>
                    </span>
                </a>
                <a href="https://www.youtube.com/channel/UCWAkdD1ox4r1PFAX0S31GCw" class="link-sm">
                    <span class="text">You Tube</span>
                    <span class="icon">
                        <?php include("includes/sm-icon-youtube.php"); ?>
                    </span>
                </a>
            </div>
        </section>

    </div>
    <script data-main="src/scripts/config" src="src/scripts/libs/require.js"></script>
</body>
</html>