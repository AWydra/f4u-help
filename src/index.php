<?php
  $page = '../';
?>

<!DOCTYPE html>
<html dir="ltr" lang="en-US">
  <head>
    <?php include($page . 'head.php'); ?>

    <meta name="description" content="" />
    <link rel="stylesheet" href="css/style.css" />

    <!-- Document Title
    ============================================= -->
    <title>FastCast4u &#124; NEW INTERNET RADIO MOBILE APP FOR ANDROID</title>
  </head>

  <body class="stretched">
    <?php
include($page . 'menu.php');
?>

    <!-- Document Wrapper
============================================= -->
    <div id="wrapper" class="clearfix">
      <section id="title" class="mt-5">
        <div class="container clearfix">
          <div class="heading-block center col-12" style="margin: 0 auto;">
            <h1>Lorem ipsum dolor sit amet</h1>
            <span class="divcenter mt-3"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit
              praesentium</span
            >
          </div>
          <div class="clear"></div>
        </div>
      </section>

      <section id="sort-content">
        <div class="content-wrap pt-4">
          <div class="container clearfix">
            <div class="divcenter offset-md-2 col-12 col-lg-8 mt-4 mb-5 p-0">
              <div class="input-group input-group-lg">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search sth"
                  id="article-search"
                />
              </div>
            </div>
            <ul class="portfolio-filter mb-0 clearfix">
              <li class="activeFilter">
                <a href="#" data-sort="*">Show All</a>
              </li>
              <li><a href="#" data-sort=".cat-1">Category 1</a></li>
              <li>
                <a href="#" data-sort=".cat-2">Category 2</a>
              </li>
              <li><a href="#" data-sort=".cat-3">Category 3</a></li>
              <li><a href="#" data-sort=".cat-4">Category 4</a></li>
              <li><a href="#" data-sort=".cat-5">Category 5</a></li>
            </ul>
            <div class="clear"></div>
            <div id="sort" class="help row clearfix">
              <article
                class="help__article col-12 col-md-6 col-lg-4  cat-1"
                data-title="Lorem ipsum dolor"
              >
                <a href="path/to/article" class="help__link">
                  <div class="help__icon-container">
                    <i class="help__icon icon-line-microphone"></i>
                  </div>
                  <div class="help__title">
                    <h3 class="help__heading h3">Category 1</h3>
                    <hr class="help__underscore" />
                    <p class="help__description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      recusandae vel ipsum officiis similique adipisci velit
                    </p>
                  </div>
                </a>
              </article>
              <article
                class="help__article col-12 col-md-6 col-lg-4 cat-2"
                data-title="sit amet consectetur"
              >
                <a href="path/to/article" class="help__link">
                  <div class="help__icon-container">
                    <i class="help__icon icon-line-microphone"></i>
                  </div>
                  <div class="help__title">
                    <h3 class="help__heading h3">Category 2</h3>
                    <hr class="help__underscore" />
                    <p class="help__description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      recusandae vel ipsum officiis similique adipisci velit
                    </p>
                  </div>
                </a>
              </article>
              <article
                class="help__article col-12 col-md-6 col-lg-4 cat-3"
                data-title="adipisicing elit laudantium"
              >
                <a href="path/to/article" class="help__link">
                  <div class="help__icon-container">
                    <i class="help__icon icon-line-microphone"></i>
                  </div>
                  <div class="help__title">
                    <h3 class="help__heading h3">Category 3</h3>
                    <hr class="help__underscore" />
                    <p class="help__description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      recusandae vel ipsum officiis similique adipisci velit
                    </p>
                  </div>
                </a>
              </article>
              <article
                class="help__article col-12 col-md-6 col-lg-4 cat-3"
                data-title="quod error perspiciatis"
              >
                <a href="path/to/article" class="help__link">
                  <div class="help__icon-container">
                    <i class="help__icon icon-line-microphone"></i>
                  </div>
                  <div class="help__title">
                    <h3 class="help__heading h3">Category 4</h3>
                    <hr class="help__underscore" />
                    <p class="help__description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      recusandae vel ipsum officiis similique adipisci velit
                    </p>
                  </div>
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer
    ============================================= -->
      <footer id="footer" class="dark">
        <?php
        include($page . 'footer.php');
        ?>
      </footer>
      <!-- #footer end -->
    </div>
    <!-- #wrapper end -->
  </body>
</html>
