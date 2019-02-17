<?php

require_once 'vendor/autoload.php';

function addBoltExtensions(\Twig_Environment &$env, $config) {
  $env->addExtension(new \Bolt\TwigExtensions\BoltCore());
  $env->addExtension(new \Bolt\TwigExtensions\BoltExtras());

  $env->addGlobal('enable_json_schema_validation', true); 
}
