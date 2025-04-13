<?php

// $WEEK = "<h1>Week NRWEEK</h1>";

$LISTDATES = array("Feb 1","Feb 8","Feb 15","Feb 21","March 1","March 8","March 15","March 21","April 1","April 8","April 15","April 21");

$NRWEEKS = count($LISTDATES);

// $DATE = "<h2>DATE</h2>";

$LISTTOPICS= array("Installation","Html","Css","Javascript 1","","","","","","","","","");

// $TOPIC ="<h3>TOPIC</h3";

$LISTDESCRIPTIONS=array("We install software","We make our first Html","We style pages with Css","Get started on Javascript ","","","","","","","","","");
$firstNames = array("Edward", "Sarah", "Kat", "Charlie", "Luke", "Bennet");
$lastNames = array("Johnson", "Smith", "Brown", "Ford", "Miller", "Wilson");
$ages = array(25, 30, 22, 35, 28, 40);
$NROWS = 6; 
$NRCOLS = 3;
?>

<html>
<head>

</head>
<body>

<!-- <?php echo "NRWEEKS=".$NRWEEKS."<br>"; ?> -->

<?php for ( $i=0; $i < $NRWEEKS; $i++){ ?>
<div>
	<h1>Week <?= $i+1 ?> <h1>
	<h2>Date: <?= $LISTDATES[$i] ?> </h2>
	<h3>Topic: <?= $LISTTOPICS[$i]  ?></h3>
	<h4>Description: " <?= $LISTDESCRIPTIONS[$i] ?> "</h4>
</div>
<?php	}?>
<h1>Dynamic Table with <?php echo $NROWS; ?> Rows and <?php echo $NRCOLS; ?> Columns</h1>

<table>
    <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
    </tr>
    
    <?php
    // Loop to generate rows
    for ($i = 0; $i < $NROWS; $i++) {
        echo "<tr>";
        echo "<td>{$firstNames[$i]}</td>";
        echo "<td>{$lastNames[$i]}</td>";
        echo "<td>{$ages[$i]}</td>";
        echo "</tr>";
    }
    ?>
</table>
	
</body>
</html>