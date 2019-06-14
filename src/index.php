<?php
  $page = '../';
?>

<!DOCTYPE html>
<html dir="ltr" lang="en-US">

<head>
  <?php include($page . 'head.php'); ?>

  <meta name="description" content="" />
  <link rel="stylesheet" href="resources/css/style.css" />

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
          <span class="divcenter mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit
            praesentium</span>
        </div>
        <div class="clear"></div>
      </div>
    </section>

    <section id="sort-content">
      <div class="content-wrap pt-4">
        <div class="container clearfix">
          <div class="divcenter offset-md-2 col-12 col-lg-8 mt-4 mb-5 p-0">
            <div class="input-group input-group-lg">
              <input type="text" class="form-control" placeholder="Search sth" id="article-search" />
            </div>
          </div>
          <ul class="category portfolio-filter mb-0 clearfix">
            <!-- Categories -->
          </ul>
          <div class="clear"></div>
          <div id="sort" class="help row clearfix">
            <!-- Magic happens here -->
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

  <script src="resources/js/main.js"></script>
</body>

</html>