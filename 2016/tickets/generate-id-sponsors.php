<?php
header("Content-type: text/plain; charset=utf-8"); 

$file = 'sponsors.csv';

$s =  file_get_contents($file);

echo '<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20001102//EN"    "http://www.w3.org/TR/2000/CR-SVG-20001102/DTD/svg-20001102.dtd" [
  <!ENTITY ns_graphs "http://ns.adobe.com/Graphs/1.0/">
  <!ENTITY ns_vars "http://ns.adobe.com/Variables/1.0/">
  <!ENTITY ns_imrep "http://ns.adobe.com/ImageReplacement/1.0/">
  <!ENTITY ns_custom "http://ns.adobe.com/GenericCustomNamespace/1.0/">
  <!ENTITY ns_flows "http://ns.adobe.com/Flows/1.0/">
<!ENTITY ns_extend "http://ns.adobe.com/Extensibility/1.0/">
]>
<svg>
<variableSets  xmlns="&ns_vars;">
  <variableSet  locked="none" varSetName="binding1">
    <variables>
      <variable  category="&ns_flows;" trait="textcontent" varName="FNAME"></variable>
      <variable  category="&ns_flows;" trait="textcontent" varName="LNAME"></variable>
      <variable  category="&ns_flows;" trait="textcontent" varName="FNAME2"></variable>
      <variable  category="&ns_flows;" trait="textcontent" varName="LNAME2"></variable>
    </variables>
    <v:sampleDataSets  xmlns="&ns_custom;" xmlns:v="&ns_vars;">';

$names = explode("\n", $s);
foreach ($names as $k => $v) {
    $name = explode(",", $v);
    $firstname = trim($name[0]);
    $lastname = trim($name[1]);
    
    echo '<v:sampleDataSet  dataSetName="'.$firstname.' '.$lastname.'">
    <FNAME>
      <p>'.$firstname.'</p>
    </FNAME>
    <LNAME>
      <p>'.$lastname.'</p>
    </LNAME>
    <FNAME2>
      <p>'.$firstname.'</p>
    </FNAME2>
    <LNAME2>
      <p>'.$lastname.'</p>
    </LNAME2>
  </v:sampleDataSet>';
}

echo '</v:sampleDataSets>
  </variableSet>
</variableSets>
</svg>';
?>