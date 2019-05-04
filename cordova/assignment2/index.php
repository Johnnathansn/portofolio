<!DOCTYPE html>
<html lang="en">
<head>
    <title>Assignment 1</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <!-- jquery css -->
    <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
    <!-- main css -->
    <link rel="stylesheet" href="css/base.css" />

    <!-- starter script -->
    <script src="app.init.js"></script>

</head>
<body>

    <!-- Input page -->
    <div data-role="page" id="page1">

        <div data-role="header">
            <h1>Welcome to the Questions</h1>
        </div><!-- /header -->

        <div role="main" class="ui-content">



            <form id="form1">
                <div class="ui-field-contain">
                    <a href="#page2" class="ui-btn ui-btn-inline">stats</a>
                    <fieldset data-role="controlgroup" data-type="horizontal" data-mini="true">
                        <legend>How do you feel today?</legend>
                            <input name="c" id="sad" value="sad" checked="checked" type="radio">
                            <label for="sad">sad</label>
                            <input name="c" id="ok" value="ok" type="radio">
                            <label for="ok">ok</label>
                            <input name="c" id="happy" value="happy" type="radio">
                            <label for="happy">happy</label>
                    </fieldset>

                    <br />
                    <fieldset data-role="controlgroup" data-type="horizontal" data-mini="true">
                        <legend>How many days you want off?</legend>
                            <input name="b" id="2" value="2" checked="checked" type="radio">
                            <label for="2">2</label>
                            <input name="b" id="3" value="3" type="radio">
                            <label for="3">3</label>
                            <input name="b" id="every" value="every" type="radio">
                            <label for="every">Every day</label>
                    </fieldset>

                    <button class="ui-btn" id="form1Sub" type="submit">Send</button>
                    <p></p>
                </div>
            </form>





        </div><!-- /content -->

        <div data-role="footer">
            <h4>Johnnathan Santiago Nogueira</h4>
        </div><!-- /footer -->


    </div><!-- /page -->

    <!-- Stats page -->
    <div data-role="page" id="page2">

        <div data-role="header">
            <h1>Statistics</h1>
        </div><!-- /header -->

        <div role="main" class="ui-content">


            <a href="#page1" class="ui-btn ui-btn-inline">vote</a>
            <form action="store.php" method="post" data-ajax="false">
                <div class="ui-field-contain">
                    <p id="test">Charts for the questions</p>
                    <canvas id="piechart1" width="200" height="200"></canvas>
                    <canvas id="piechart2" width="200" height="200"></canvas>
                </div>
            </form>


        </div><!-- /content -->

        <div data-role="footer">
            <h4>Johnnathan Santiago Nogueira</h4>
        </div><!-- /footer -->


    </div><!-- /page -->

</body>
</html>
