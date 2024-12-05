<template>
    <head>
        <style class="vjs-styles-defaults">
            .video-js {
                width: 300px;
                height: 150px;
            }

            .vjs-fluid {
                padding-top: 56.25%
            }
        </style>
            
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>远方123研发费管理系统</title>
        <link href="css/chunk-060b3753.dcebabeb.css" rel="prefetch">
        <link href="css/chunk-064a4ea7.d99e8974.css" rel="prefetch">
        <link href="css/chunk-0b5ee7d1.12750fb1.css" rel="prefetch">
        <link href="css/chunk-14ed4c06.597338f1.css" rel="prefetch">
        <link href="css/chunk-1e01d1e6.e51f43c9.css" rel="prefetch">
        <link href="css/chunk-1fd5122a.52ac6a3b.css" rel="prefetch">
        <link href="css/chunk-20835115.33681eb1.css" rel="prefetch">
        <link href="css/chunk-22ebfbdb.d37b8578.css" rel="prefetch">
        <link href="css/chunk-2b8b5e00.b94664cc.css" rel="prefetch">
        <link href="css/chunk-2d849a73.677920fb.css" rel="prefetch">
        <link href="css/chunk-2e1e50b5.fb6496cf.css" rel="prefetch">
        <link href="css/chunk-34a870d3.0bcc73d1.css" rel="prefetch">
        <link href="css/chunk-35306bcc.9345a36b.css" rel="prefetch">
        <link href="css/chunk-374b0f6d.d002de8c.css" rel="prefetch">
        <link href="css/chunk-383ea68e.5df2a125.css" rel="prefetch">
        <link href="css/chunk-3a2e9e92.946ba0dc.css" rel="prefetch">
        <link href="css/chunk-3c99fe7e.d9c5bcbe.css" rel="prefetch">
        <link href="css/chunk-40fa7071.ac501283.css" rel="prefetch">
        <link href="css/chunk-46e08786.d0c0edd5.css" rel="prefetch">
        <link href="css/chunk-470a352a.8328f706.css" rel="prefetch">
        <link href="css/chunk-4c6ac16c.aba35e35.css" rel="prefetch">
        <link href="css/chunk-4e5a165a.aa909df8.css" rel="prefetch">
        <link href="css/chunk-5175a88e.d7577f09.css" rel="prefetch">
        <link href="css/chunk-51b0769c.49f3dc67.css" rel="prefetch">
        <link href="css/chunk-56f34c2e.00540fdb.css" rel="prefetch">
        <link href="css/chunk-57bed610.98e539b8.css" rel="prefetch">
        <link href="css/chunk-584b4b04.c01b946a.css" rel="prefetch">
        <link href="css/chunk-5cca770c.9cc6c808.css" rel="prefetch">
        <link href="css/chunk-5eee8dd4.dcebabeb.css" rel="prefetch">
        <link href="css/chunk-5fdc0e4e.400547d4.css" rel="prefetch">
        <link href="css/chunk-60a779cc.c5326d0e.css" rel="prefetch">
        <link href="css/chunk-63317549.049b3ce7.css" rel="prefetch">
        <link href="css/chunk-65e7582e.b6e220dc.css" rel="prefetch">
        <link href="css/chunk-715884a6.eea09577.css" rel="prefetch">
        <link href="css/chunk-717039a4.5b9c02c7.css" rel="prefetch">
        <link href="css/chunk-72f59dd9.efe5000c.css" rel="prefetch">
        <link href="css/chunk-76921f80.653ab334.css" rel="prefetch">
        <link href="css/chunk-7c9d4cdf.d910792d.css" rel="prefetch">
        <link href="css/chunk-82182fec.8caaa7c2.css" rel="prefetch">
        <link href="css/chunk-87e93d54.0d0bd10a.css" rel="prefetch">
        <link href="css/chunk-94fde722.705a8f91.css" rel="prefetch">
        <link href="css/chunk-a928a528.2a9a77af.css" rel="prefetch">
        <link href="css/chunk-ab226582.8f152aa8.css" rel="prefetch">
        <link href="css/chunk-ae483cf8.ea7e2af5.css" rel="prefetch">
        <link href="css/chunk-b3f0c51a.b0d697be.css" rel="prefetch">
        <link href="css/chunk-cdafb4ae.e093d0f9.css" rel="prefetch">
        <link href="css/chunk-d029415c.e24250ce.css" rel="prefetch">
        <link href="css/chunk-da9c3a32.78478cd7.css" rel="prefetch">
        <link href="css/chunk-dc7f548a.89d8a3b9.css" rel="prefetch">
        <link href="css/chunk-ffcf197a.1957c308.css" rel="prefetch">

        <link href="js/chunk-060b3753.bf1e56fe.js" rel="prefetch">
        <link href="js/chunk-064a4ea7.eb687bed.js" rel="prefetch">
        <link href="js/chunk-0b5ee7d1.e473f805.js" rel="prefetch">
        <link href="js/chunk-14ed4c06.46a9d2a4.js" rel="prefetch">
        <link href="js/chunk-1e01d1e6.8ce9e3cb.js" rel="prefetch">
        <link href="js/chunk-1fd5122a.9b9d204b.js" rel="prefetch">
        <link href="js/chunk-20835115.ba19d05b.js" rel="prefetch">
        <link href="js/chunk-22ebfbdb.458a8d76.js" rel="prefetch">
        <link href="js/chunk-2b8b5e00.79523f12.js" rel="prefetch">
        <link href="js/chunk-2d0a2d56.f20dfe8a.js" rel="prefetch">
        <link href="js/chunk-2d0aa9a8.12b8e286.js" rel="prefetch">
        <link href="js/chunk-2d0ab32b.fc57991c.js" rel="prefetch">
        <link href="js/chunk-2d0ab422.4e300f02.js" rel="prefetch">
        <link href="js/chunk-2d0ab43a.bac7ed77.js" rel="prefetch">
        <link href="js/chunk-2d0ab496.47b32a14.js" rel="prefetch">
        <link href="js/chunk-2d0ab8cb.5e5119c9.js" rel="prefetch">
        <link href="js/chunk-2d0ac380.a7a7d397.js" rel="prefetch">
        <link href="js/chunk-2d0b1623.8d2c36ee.js" rel="prefetch">
        <link href="js/chunk-2d0b1c45.e0f2264a.js" rel="prefetch">
        <link href="js/chunk-2d0b2709.a53f250f.js" rel="prefetch">
        <link href="js/chunk-2d0b37ef.c1c9c6a4.js" rel="prefetch">
        <link href="js/chunk-2d0b5d38.3c225c93.js" rel="prefetch">
        <link href="js/chunk-2d0b6006.fe9d9a97.js" rel="prefetch">
        <link href="js/chunk-2d0b8dd4.255306be.js" rel="prefetch">
        <link href="js/chunk-2d0b9227.ae2510c0.js" rel="prefetch">
        <link href="js/chunk-2d0ba115.94e9443a.js" rel="prefetch">
        <link href="js/chunk-2d0ba8b6.96b27762.js" rel="prefetch">
        <link href="js/chunk-2d0bd636.5b370ad7.js" rel="prefetch">
        <link href="js/chunk-2d0c0853.c72b7ff2.js" rel="prefetch">
        <link href="js/chunk-2d0c08f0.8db41fc4.js" rel="prefetch">
        <link href="js/chunk-2d0c0e50.d770a23b.js" rel="prefetch">
        <link href="js/chunk-2d0c0e72.be4bce59.js" rel="prefetch">
        <link href="js/chunk-2d0c264c.969ad848.js" rel="prefetch">
        <link href="js/chunk-2d0c4e41.e69ca102.js" rel="prefetch">
        <link href="js/chunk-2d0cb6a9.ed4ba148.js" rel="prefetch">
        <link href="js/chunk-2d0cbaa7.181ce646.js" rel="prefetch">
        <link href="js/chunk-2d0cbaa8.0a41d9b7.js" rel="prefetch">
        <link href="js/chunk-2d0cbf31.faa31c0e.js" rel="prefetch">
        <link href="js/chunk-2d0cc7f3.efdb76bf.js" rel="prefetch">
        <link href="js/chunk-2d0cc929.903348ec.js" rel="prefetch">
        <link href="js/chunk-2d0ce80f.022f2ccf.js" rel="prefetch">
        <link href="js/chunk-2d0cf17e.38704262.js" rel="prefetch">
        <link href="js/chunk-2d0cf723.9c48677c.js" rel="prefetch">
        <link href="js/chunk-2d0cf75e.ed30b3fd.js" rel="prefetch">
        <link href="js/chunk-2d0cfa97.fd107688.js" rel="prefetch">
        <link href="js/chunk-2d0d0019.cbaca3b2.js" rel="prefetch">
        <link href="js/chunk-2d0d2bdc.7bc6813d.js" rel="prefetch">
        <link href="js/chunk-2d0d3342.d8c9fb55.js" rel="prefetch">
        <link href="js/chunk-2d0d3ddb.4a02b69d.js" rel="prefetch">
        <link href="js/chunk-2d0d4419.b85510a4.js" rel="prefetch">
        <link href="js/chunk-2d0d5cdb.7033b8ec.js" rel="prefetch">
        <link href="js/chunk-2d0d604a.0fa8bab3.js" rel="prefetch">
        <link href="js/chunk-2d0d63b4.a4a75252.js" rel="prefetch">
        <link href="js/chunk-2d0d69cf.2b11933e.js" rel="prefetch">
        <link href="js/chunk-2d0d6d32.9f26653c.js" rel="prefetch">
        <link href="js/chunk-2d0d79bc.ce2eb441.js" rel="prefetch">
        <link href="js/chunk-2d0d834d.c4cae604.js" rel="prefetch">
        <link href="js/chunk-2d0db852.67643f61.js" rel="prefetch">
        <link href="js/chunk-2d0dd054.eb58de6e.js" rel="prefetch">
        <link href="js/chunk-2d0dd7cf.d77dd979.js" rel="prefetch">
        <link href="js/chunk-2d0dd7d1.d09cd146.js" rel="prefetch">
        <link href="js/chunk-2d0dd7f5.c8349668.js" rel="prefetch">
        <link href="js/chunk-2d0de172.923ee57e.js" rel="prefetch">
        <link href="js/chunk-2d0de192.0329080e.js" rel="prefetch">
        <link href="js/chunk-2d0dee77.62ec24b7.js" rel="prefetch">
        <link href="js/chunk-2d0e1bc2.f30fb80c.js" rel="prefetch">
        <link href="js/chunk-2d0e255f.58e38476.js" rel="prefetch">
        <link href="js/chunk-2d0e50b0.e4fb06e1.js" rel="prefetch">
        <link href="js/chunk-2d0e50d8.641eedcd.js" rel="prefetch">
        <link href="js/chunk-2d0e5736.8518f56d.js" rel="prefetch">
        <link href="js/chunk-2d0e615d.e51ca079.js" rel="prefetch">
        <link href="js/chunk-2d0e6318.d3c295d1.js" rel="prefetch">
        <link href="js/chunk-2d0e6515.08ed8630.js" rel="prefetch">
        <link href="js/chunk-2d0e8ff3.80d302a0.js" rel="prefetch">
        <link href="js/chunk-2d0ea0c6.42fcc307.js" rel="prefetch">
        <link href="js/chunk-2d0f0c6d.db3fcfd9.js" rel="prefetch">
        <link href="js/chunk-2d207b97.8ad9f6c2.js" rel="prefetch">
        <link href="js/chunk-2d207cfd.3ef27581.js" rel="prefetch">
        <link href="js/chunk-2d210fdf.8386f123.js" rel="prefetch">
        <link href="js/chunk-2d212b85.a6cd13cd.js" rel="prefetch">
        <link href="js/chunk-2d212f6a.155fa6f3.js" rel="prefetch">
        <link href="js/chunk-2d2138ab.335809a1.js" rel="prefetch">
        <link href="js/chunk-2d215d0e.ec4aee50.js" rel="prefetch">
        <link href="js/chunk-2d2176ad.ec41abe6.js" rel="prefetch">
        <link href="js/chunk-2d217704.997c1b0f.js" rel="prefetch">
        <link href="js/chunk-2d217753.373d91bd.js" rel="prefetch">
        <link href="js/chunk-2d217776.1965c2a0.js" rel="prefetch">
        <link href="js/chunk-2d21839b.2eebef5b.js" rel="prefetch">
        <link href="js/chunk-2d21a442.65233afb.js" rel="prefetch">
        <link href="js/chunk-2d221a41.5b87e8fd.js" rel="prefetch">
        <link href="js/chunk-2d222356.d1da1946.js" rel="prefetch">
        <link href="js/chunk-2d2223c7.7a768470.js" rel="prefetch">
        <link href="js/chunk-2d222506.6be28946.js" rel="prefetch">
        <link href="js/chunk-2d225490.22e33498.js" rel="prefetch">
        <link href="js/chunk-2d226368.fb6fcd8f.js" rel="prefetch">
        <link href="js/chunk-2d228e22.d026bffb.js" rel="prefetch">
        <link href="js/chunk-2d2290af.94fb3d46.js" rel="prefetch">
        <link href="js/chunk-2d229204.3dc5bb69.js" rel="prefetch">
        <link href="js/chunk-2d2297bc.fbfb5956.js" rel="prefetch">
        <link href="js/chunk-2d229d59.00c37793.js" rel="prefetch">
        <link href="js/chunk-2d22c55a.50fabc2e.js" rel="prefetch">
        <link href="js/chunk-2d22c6f3.ac237768.js" rel="prefetch">
        <link href="js/chunk-2d22ce38.0f5fa5d2.js" rel="prefetch">
        <link href="js/chunk-2d22d57e.050620be.js" rel="prefetch">
        <link href="js/chunk-2d22dd2b.c2c45716.js" rel="prefetch">
        <link href="js/chunk-2d230302.778fc53d.js" rel="prefetch">
        <link href="js/chunk-2d230a73.3771b841.js" rel="prefetch">
        <link href="js/chunk-2d237d12.bf1b86ea.js" rel="prefetch">
        <link href="js/chunk-2d2384d5.114ea85f.js" rel="prefetch">
        <link href="js/chunk-2d849a73.f6cb034f.js" rel="prefetch">
        <link href="js/chunk-2e1e50b5.1b29665e.js" rel="prefetch">
        <link href="js/chunk-34a870d3.850ab38f.js" rel="prefetch">
        <link href="js/chunk-35306bcc.15a05212.js" rel="prefetch">
        <link href="js/chunk-374b0f6d.0a997707.js" rel="prefetch">
        <link href="js/chunk-383ea68e.1f94d2b9.js" rel="prefetch">
        <link href="js/chunk-3a2e9e92.94abd796.js" rel="prefetch">
        <link href="js/chunk-3c99fe7e.f66cd913.js" rel="prefetch">
        <link href="js/chunk-40fa7071.e11d96a6.js" rel="prefetch">
        <link href="js/chunk-46e08786.cbca66bc.js" rel="prefetch">
        <link href="js/chunk-470a352a.3693b3b5.js" rel="prefetch">
        <link href="js/chunk-4c6ac16c.a808c208.js" rel="prefetch">
        <link href="js/chunk-4e5a165a.cb5a73f5.js" rel="prefetch">
        <link href="js/chunk-5175a88e.10eab0b8.js" rel="prefetch">
        <link href="js/chunk-51b0769c.eaf108b7.js" rel="prefetch">
        <link href="js/chunk-56f34c2e.48ff5c53.js" rel="prefetch">
        <link href="js/chunk-57bed610.b4f00077.js" rel="prefetch">
        <link href="js/chunk-584b4b04.12a321fd.js" rel="prefetch">
        <link href="js/chunk-5cca770c.695e8948.js" rel="prefetch">
        <link href="js/chunk-5eee8dd4.b0052c31.js" rel="prefetch">
        <link href="js/chunk-5fdc0e4e.8ba0dfcb.js" rel="prefetch">
        <link href="js/chunk-60a779cc.b548c981.js" rel="prefetch">
        <link href="js/chunk-63317549.1b6fa7a6.js" rel="prefetch">
        <link href="js/chunk-65e7582e.28473c75.js" rel="prefetch">
        <link href="js/chunk-715884a6.ba36d847.js" rel="prefetch">
        <link href="js/chunk-717039a4.938dc458.js" rel="prefetch">
        <link href="js/chunk-72f59dd9.c9d64ffb.js" rel="prefetch">
        <link href="js/chunk-747c125d.91d27567.js" rel="prefetch">
        <link href="js/chunk-748bca8e.8e1ccc95.js" rel="prefetch">
        <link href="js/chunk-74917723.da104337.js" rel="prefetch">
        <link href="js/chunk-749fbbb2.16b06119.js" rel="prefetch">
        <link href="js/chunk-74b01e81.732fe947.js" rel="prefetch">
        <link href="js/chunk-74b59552.fe9cd7c3.js" rel="prefetch">
        <link href="js/chunk-74bdecff.bb4e16d9.js" rel="prefetch">
        <link href="js/chunk-74d23c83.9d0281ef.js" rel="prefetch">
        <link href="js/chunk-76921f80.c196b79e.js" rel="prefetch">
        <link href="js/chunk-77143a39.008c698a.js" rel="prefetch">
        <link href="js/chunk-7c9d4cdf.f6713c27.js" rel="prefetch">
        <link href="js/chunk-82182fec.b33d378f.js" rel="prefetch">
        <link href="js/chunk-87e93d54.31d4ee89.js" rel="prefetch">
        <link href="js/chunk-94fde722.6a8d44f1.js" rel="prefetch">
        <link href="js/chunk-a928a528.6e7ecc7e.js" rel="prefetch">
        <link href="js/chunk-ab226582.e46ac2c9.js" rel="prefetch">
        <link href="js/chunk-ae483cf8.01892eee.js" rel="prefetch">
        <link href="js/chunk-b3f0c51a.098876ae.js" rel="prefetch">
        <link href="js/chunk-cdafb4ae.0ed86d5f.js" rel="prefetch">
        <link href="js/chunk-d029415c.21a6f5be.js" rel="prefetch">
        <link href="js/chunk-da9c3a32.36bcb7ba.js" rel="prefetch">
        <link href="js/chunk-dc7f548a.70638098.js" rel="prefetch">
        <link href="js/chunk-ffcf197a.c3163784.js" rel="prefetch">

        <link href="css/app.8055c78b.css" rel="preload" as="style">
        <link href="css/chunk-vendors.88acf63e.css" rel="preload" as="style">
        <link href="js/app.1d057589.js" rel="preload" as="script">
        <link href="js/chunk-vendors.5d8815b5.js" rel="preload" as="script">
        <link href="css/chunk-vendors.88acf63e.css" rel="stylesheet">
        <link href="css/app.8055c78b.css" rel="stylesheet">
        <style>/*!
            * FullCalendar v3.9.0
            */
            .fc {
            direction: ltr;
            text-align: left;
            }

            .fc-rtl {
            text-align: right;
            }

            body .fc {
            /* extra precedence to overcome jqui */
            font-size: 1em;
            }

            /* Colors
            --------------------------------------------------------------------------------------------------*/
            .fc-highlight {
            /* when user is selecting cells */
            background: #bce8f1;
            opacity: .3;
            }

            .fc-bgevent {
            /* default look for background events */
            background: #8fdf82;
            opacity: .3;
            }

            .fc-nonbusiness {
            /* default look for non-business-hours areas */
            /* will inherit .fc-bgevent's styles */
            background: #d7d7d7;
            }

            /* Buttons (styled <button> tags, normalized to work cross-browser)
            --------------------------------------------------------------------------------------------------*/
            .fc button {
            /* force height to include the border and padding */
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            /* dimensions */
            margin: 0;
            height: 2.1em;
            padding: 0 .6em;
            /* text & cursor */
            font-size: 1em;
            /* normalize */
            white-space: nowrap;
            cursor: pointer;
            }

            /* Firefox has an annoying inner border */
            .fc button::-moz-focus-inner {
            margin: 0;
            padding: 0;
            }

            .fc-state-default {
            /* non-theme */
            border: 1px solid;
            }

            .fc-state-default.fc-corner-left {
            /* non-theme */
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            }

            .fc-state-default.fc-corner-right {
            /* non-theme */
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            }

            /* icons in buttons */
            .fc button .fc-icon {
            /* non-theme */
            position: relative;
            top: -0.05em;
            /* seems to be a good adjustment across browsers */
            margin: 0 .2em;
            vertical-align: middle;
            }

            /*
                button states
                borrowed from twitter bootstrap (http://twitter.github.com/bootstrap/)
            */
            .fc-state-default {
            background-color: #f5f5f5;
            background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6);
            background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6));
            background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);
            background-image: -o-linear-gradient(top, #ffffff, #e6e6e6);
            background-image: linear-gradient(to bottom, #ffffff, #e6e6e6);
            background-repeat: repeat-x;
            border-color: #e6e6e6 #e6e6e6 #bfbfbf;
            border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
            color: #333;
            text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
            }

            .fc-state-hover,
            .fc-state-down,
            .fc-state-active,
            .fc-state-disabled {
            color: #333333;
            background-color: #e6e6e6;
            }

            .fc-state-hover {
            color: #333333;
            text-decoration: none;
            background-position: 0 -15px;
            -webkit-transition: background-position 0.1s linear;
            -moz-transition: background-position 0.1s linear;
            -o-transition: background-position 0.1s linear;
            transition: background-position 0.1s linear;
            }

            .fc-state-down,
            .fc-state-active {
            background-color: #cccccc;
            background-image: none;
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);
            }

            .fc-state-disabled {
            cursor: default;
            background-image: none;
            opacity: 0.65;
            box-shadow: none;
            }

            /* Buttons Groups
            --------------------------------------------------------------------------------------------------*/
            .fc-button-group {
            display: inline-block;
            }

            /*
            every button that is not first in a button group should scootch over one pixel and cover the
            previous button's border...
            */
            .fc .fc-button-group>* {
            /* extra precedence b/c buttons have margin set to zero */
            float: left;
            margin: 0 0 0 -1px;
            }

            .fc .fc-button-group> :first-child {
            /* same */
            margin-left: 0;
            }

            /* Popover
            --------------------------------------------------------------------------------------------------*/
            .fc-popover {
            position: absolute;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
            }

            .fc-popover .fc-header {
            /* TODO: be more consistent with fc-head/fc-body */
            padding: 2px 4px;
            }

            .fc-popover .fc-header .fc-title {
            margin: 0 2px;
            }

            .fc-popover .fc-header .fc-close {
            cursor: pointer;
            }

            .fc-ltr .fc-popover .fc-header .fc-title,
            .fc-rtl .fc-popover .fc-header .fc-close {
            float: left;
            }

            .fc-rtl .fc-popover .fc-header .fc-title,
            .fc-ltr .fc-popover .fc-header .fc-close {
            float: right;
            }

            /* Misc Reusable Components
            --------------------------------------------------------------------------------------------------*/
            .fc-divider {
            border-style: solid;
            border-width: 1px;
            }

            hr.fc-divider {
            height: 0;
            margin: 0;
            padding: 0 0 2px;
            /* height is unreliable across browsers, so use padding */
            border-width: 1px 0;
            }

            .fc-clear {
            clear: both;
            }

            .fc-bg,
            .fc-bgevent-skeleton,
            .fc-highlight-skeleton,
            .fc-helper-skeleton {
            /* these element should always cling to top-left/right corners */
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            }

            .fc-bg {
            bottom: 0;
            /* strech bg to bottom edge */
            }

            .fc-bg table {
            height: 100%;
            /* strech bg to bottom edge */
            }

            /* Tables
            --------------------------------------------------------------------------------------------------*/
            .fc table {
            width: 100%;
            box-sizing: border-box;
            /* fix scrollbar issue in firefox */
            table-layout: fixed;
            border-collapse: collapse;
            border-spacing: 0;
            font-size: 1em;
            /* normalize cross-browser */
            }

            .fc th {
            text-align: center;
            }

            .fc th,
            .fc td {
            border-style: solid;
            border-width: 1px;
            padding: 0;
            vertical-align: top;
            }

            .fc td.fc-today {
            border-style: double;
            /* overcome neighboring borders */
            }

            /* Internal Nav Links
            --------------------------------------------------------------------------------------------------*/
            a[data-goto] {
            cursor: pointer;
            }

            a[data-goto]:hover {
            text-decoration: underline;
            }

            /* Fake Table Rows
            --------------------------------------------------------------------------------------------------*/
            .fc .fc-row {
            /* extra precedence to overcome themes w/ .ui-widget-content forcing a 1px border */
            /* no visible border by default. but make available if need be (scrollbar width compensation) */
            border-style: solid;
            border-width: 0;
            }

            .fc-row table {
            /* don't put left/right border on anything within a fake row.
                the outer tbody will worry about this */
            border-left: 0 hidden transparent;
            border-right: 0 hidden transparent;
            /* no bottom borders on rows */
            border-bottom: 0 hidden transparent;
            }

            .fc-row:first-child table {
            border-top: 0 hidden transparent;
            /* no top border on first row */
            }

            /* Day Row (used within the header and the DayGrid)
            --------------------------------------------------------------------------------------------------*/
            .fc-row {
            position: relative;
            }

            .fc-row .fc-bg {
            z-index: 1;
            }

            /* highlighting cells & background event skeleton */
            .fc-row .fc-bgevent-skeleton,
            .fc-row .fc-highlight-skeleton {
            bottom: 0;
            /* stretch skeleton to bottom of row */
            }

            .fc-row .fc-bgevent-skeleton table,
            .fc-row .fc-highlight-skeleton table {
            height: 100%;
            /* stretch skeleton to bottom of row */
            }

            .fc-row .fc-highlight-skeleton td,
            .fc-row .fc-bgevent-skeleton td {
            border-color: transparent;
            }

            .fc-row .fc-bgevent-skeleton {
            z-index: 2;
            }

            .fc-row .fc-highlight-skeleton {
            z-index: 3;
            }

            /*
            row content (which contains day/week numbers and events) as well as "helper" (which contains
            temporary rendered events).
            */
            .fc-row .fc-content-skeleton {
            position: relative;
            z-index: 4;
            padding-bottom: 2px;
            /* matches the space above the events */
            }

            .fc-row .fc-helper-skeleton {
            z-index: 5;
            }

            .fc .fc-row .fc-content-skeleton table,
            .fc .fc-row .fc-content-skeleton td,
            .fc .fc-row .fc-helper-skeleton td {
            /* see-through to the background below */
            /* extra precedence to prevent theme-provided backgrounds */
            background: none;
            /* in case <td>s are globally styled */
            border-color: transparent;
            }

            .fc-row .fc-content-skeleton td,
            .fc-row .fc-helper-skeleton td {
            /* don't put a border between events and/or the day number */
            border-bottom: 0;
            }

            .fc-row .fc-content-skeleton tbody td,
            .fc-row .fc-helper-skeleton tbody td {
            /* don't put a border between event cells */
            border-top: 0;
            }

            /* Scrolling Container
            --------------------------------------------------------------------------------------------------*/
            .fc-scroller {
            -webkit-overflow-scrolling: touch;
            }

            /* TODO: move to agenda/basic */
            .fc-scroller>.fc-day-grid,
            .fc-scroller>.fc-time-grid {
            position: relative;
            /* re-scope all positions */
            width: 100%;
            /* hack to force re-sizing this inner element when scrollbars appear/disappear */
            }

            /* Global Event Styles
            --------------------------------------------------------------------------------------------------*/
            .fc-event {
            position: relative;
            /* for resize handle and other inner positioning */
            display: block;
            /* make the <a> tag block */
            font-size: .85em;
            line-height: 1.3;
            border-radius: 3px;
            border: 1px solid #3a87ad;
            /* default BORDER color */
            }

            .fc-event,
            .fc-event-dot {
            background-color: #3a87ad;
            /* default BACKGROUND color */
            }

            .fc-event,
            .fc-event:hover {
            color: #fff;
            /* default TEXT color */
            text-decoration: none;
            /* if <a> has an href */
            }

            .fc-event[href],
            .fc-event.fc-draggable {
            cursor: pointer;
            /* give events with links and draggable events a hand mouse pointer */
            }

            .fc-not-allowed,
            .fc-not-allowed .fc-event {
            /* to override an event's custom cursor */
            cursor: not-allowed;
            }

            .fc-event .fc-bg {
            /* the generic .fc-bg already does position */
            z-index: 1;
            background: #fff;
            opacity: .25;
            }

            .fc-event .fc-content {
            position: relative;
            z-index: 2;
            }

            /* resizer (cursor AND touch devices) */
            .fc-event .fc-resizer {
            position: absolute;
            z-index: 4;
            }

            /* resizer (touch devices) */
            .fc-event .fc-resizer {
            display: none;
            }

            .fc-event.fc-allow-mouse-resize .fc-resizer,
            .fc-event.fc-selected .fc-resizer {
            /* only show when hovering or selected (with touch) */
            display: block;
            }

            /* hit area */
            .fc-event.fc-selected .fc-resizer:before {
            /* 40x40 touch area */
            content: "";
            position: absolute;
            z-index: 9999;
            /* user of this util can scope within a lower z-index */
            top: 50%;
            left: 50%;
            width: 40px;
            height: 40px;
            margin-left: -20px;
            margin-top: -20px;
            }

            /* Event Selection (only for touch devices)
            --------------------------------------------------------------------------------------------------*/
            .fc-event.fc-selected {
            z-index: 9999 !important;
            /* overcomes inline z-index */
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            }

            .fc-event.fc-selected.fc-dragging {
            box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);
            }

            /* Horizontal Events
            --------------------------------------------------------------------------------------------------*/
            /* bigger touch area when selected */
            .fc-h-event.fc-selected:before {
            content: "";
            position: absolute;
            z-index: 3;
            /* below resizers */
            top: -10px;
            bottom: -10px;
            left: 0;
            right: 0;
            }

            /* events that are continuing to/from another week. kill rounded corners and butt up against edge */
            .fc-ltr .fc-h-event.fc-not-start,
            .fc-rtl .fc-h-event.fc-not-end {
            margin-left: 0;
            border-left-width: 0;
            padding-left: 1px;
            /* replace the border with padding */
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            }

            .fc-ltr .fc-h-event.fc-not-end,
            .fc-rtl .fc-h-event.fc-not-start {
            margin-right: 0;
            border-right-width: 0;
            padding-right: 1px;
            /* replace the border with padding */
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            }

            /* resizer (cursor AND touch devices) */
            /* left resizer  */
            .fc-ltr .fc-h-event .fc-start-resizer,
            .fc-rtl .fc-h-event .fc-end-resizer {
            cursor: w-resize;
            left: -1px;
            /* overcome border */
            }

            /* right resizer */
            .fc-ltr .fc-h-event .fc-end-resizer,
            .fc-rtl .fc-h-event .fc-start-resizer {
            cursor: e-resize;
            right: -1px;
            /* overcome border */
            }

            /* resizer (mouse devices) */
            .fc-h-event.fc-allow-mouse-resize .fc-resizer {
            width: 7px;
            top: -1px;
            /* overcome top border */
            bottom: -1px;
            /* overcome bottom border */
            }

            /* resizer (touch devices) */
            .fc-h-event.fc-selected .fc-resizer {
            /* 8x8 little dot */
            border-radius: 4px;
            border-width: 1px;
            width: 6px;
            height: 6px;
            border-style: solid;
            border-color: inherit;
            background: #fff;
            /* vertically center */
            top: 50%;
            margin-top: -4px;
            }

            /* left resizer  */
            .fc-ltr .fc-h-event.fc-selected .fc-start-resizer,
            .fc-rtl .fc-h-event.fc-selected .fc-end-resizer {
            margin-left: -4px;
            /* centers the 8x8 dot on the left edge */
            }

            /* right resizer */
            .fc-ltr .fc-h-event.fc-selected .fc-end-resizer,
            .fc-rtl .fc-h-event.fc-selected .fc-start-resizer {
            margin-right: -4px;
            /* centers the 8x8 dot on the right edge */
            }

            /* DayGrid events
            ----------------------------------------------------------------------------------------------------
            We use the full "fc-day-grid-event" class instead of using descendants because the event won't
            be a descendant of the grid when it is being dragged.
            */
            .fc-day-grid-event {
            margin: 1px 2px 0;
            /* spacing between events and edges */
            padding: 0 1px;
            }

            tr:first-child>td>.fc-day-grid-event {
            margin-top: 2px;
            /* a little bit more space before the first event */
            }

            .fc-day-grid-event.fc-selected:after {
            content: "";
            position: absolute;
            z-index: 1;
            /* same z-index as fc-bg, behind text */
            /* overcome the borders */
            top: -1px;
            right: -1px;
            bottom: -1px;
            left: -1px;
            /* darkening effect */
            background: #000;
            opacity: .25;
            }

            .fc-day-grid-event .fc-content {
            /* force events to be one-line tall */
            white-space: nowrap;
            overflow: hidden;
            }

            .fc-day-grid-event .fc-time {
            font-weight: bold;
            }

            /* resizer (cursor devices) */
            /* left resizer  */
            .fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer,
            .fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer {
            margin-left: -2px;
            /* to the day cell's edge */
            }

            /* right resizer */
            .fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer,
            .fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer {
            margin-right: -2px;
            /* to the day cell's edge */
            }

            /* Event Limiting
            --------------------------------------------------------------------------------------------------*/
            /* "more" link that represents hidden events */
            a.fc-more {
            margin: 1px 3px;
            font-size: .85em;
            cursor: pointer;
            text-decoration: none;
            }

            a.fc-more:hover {
            text-decoration: underline;
            }

            .fc-limited {
            /* rows and cells that are hidden because of a "more" link */
            display: none;
            }

            /* popover that appears when "more" link is clicked */
            .fc-day-grid .fc-row {
            z-index: 1;
            /* make the "more" popover one higher than this */
            }

            .fc-more-popover {
            z-index: 2;
            width: 220px;
            }

            .fc-more-popover .fc-event-container {
            padding: 10px;
            }

            /* Now Indicator
            --------------------------------------------------------------------------------------------------*/
            .fc-now-indicator {
            position: absolute;
            border: 0 solid red;
            }

            /* Utilities
            --------------------------------------------------------------------------------------------------*/
            .fc-unselectable {
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
            -webkit-tap-highlight-color: transparent;
            }

            /*
            TODO: more distinction between this file and common.css
            */
            /* Colors
            --------------------------------------------------------------------------------------------------*/
            .fc-unthemed th,
            .fc-unthemed td,
            .fc-unthemed thead,
            .fc-unthemed tbody,
            .fc-unthemed .fc-divider,
            .fc-unthemed .fc-row,
            .fc-unthemed .fc-content,
            .fc-unthemed .fc-popover,
            .fc-unthemed .fc-list-view,
            .fc-unthemed .fc-list-heading td {
            border-color: #ddd;
            }

            .fc-unthemed .fc-popover {
            background-color: #fff;
            }

            .fc-unthemed .fc-divider,
            .fc-unthemed .fc-popover .fc-header,
            .fc-unthemed .fc-list-heading td {
            background: #eee;
            }

            .fc-unthemed .fc-popover .fc-header .fc-close {
            color: #666;
            }

            .fc-unthemed td.fc-today {
            background: #fcf8e3;
            }

            .fc-unthemed .fc-disabled-day {
            background: #d7d7d7;
            opacity: .3;
            }

            /* Icons (inline elements with styled text that mock arrow icons)
            --------------------------------------------------------------------------------------------------*/
            .fc-icon {
            display: inline-block;
            height: 1em;
            line-height: 1em;
            font-size: 1em;
            text-align: center;
            overflow: hidden;
            font-family: "Courier New", Courier, monospace;
            /* don't allow browser text-selection */
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            }

            /*
            Acceptable font-family overrides for individual icons:
                "Arial", sans-serif
                "Times New Roman", serif
            NOTE: use percentage font sizes or else old IE chokes
            */
            .fc-icon:after {
            position: relative;
            }

            .fc-icon-left-single-arrow:after {
            content: "\2039";
            font-weight: bold;
            font-size: 200%;
            top: -7%;
            }

            .fc-icon-right-single-arrow:after {
            content: "\203A";
            font-weight: bold;
            font-size: 200%;
            top: -7%;
            }

            .fc-icon-left-double-arrow:after {
            content: "\AB";
            font-size: 160%;
            top: -7%;
            }

            .fc-icon-right-double-arrow:after {
            content: "\BB";
            font-size: 160%;
            top: -7%;
            }

            .fc-icon-left-triangle:after {
            content: "\25C4";
            font-size: 125%;
            top: 3%;
            }

            .fc-icon-right-triangle:after {
            content: "\25BA";
            font-size: 125%;
            top: 3%;
            }

            .fc-icon-down-triangle:after {
            content: "\25BC";
            font-size: 125%;
            top: 2%;
            }

            .fc-icon-x:after {
            content: "\D7";
            font-size: 200%;
            top: 6%;
            }

            /* Popover
            --------------------------------------------------------------------------------------------------*/
            .fc-unthemed .fc-popover {
            border-width: 1px;
            border-style: solid;
            }

            .fc-unthemed .fc-popover .fc-header .fc-close {
            font-size: .9em;
            margin-top: 2px;
            }

            /* List View
            --------------------------------------------------------------------------------------------------*/
            .fc-unthemed .fc-list-item:hover td {
            background-color: #f5f5f5;
            }

            /* Colors
            --------------------------------------------------------------------------------------------------*/
            .ui-widget .fc-disabled-day {
            background-image: none;
            }

            /* Popover
            --------------------------------------------------------------------------------------------------*/
            .fc-popover>.ui-widget-header+.ui-widget-content {
            border-top: 0;
            /* where they meet, let the header have the border */
            }

            /* Global Event Styles
            --------------------------------------------------------------------------------------------------*/
            .ui-widget .fc-event {
            /* overpower jqui's styles on <a> tags. TODO: more DRY */
            color: #fff;
            /* default TEXT color */
            text-decoration: none;
            /* if <a> has an href */
            /* undo ui-widget-header bold */
            font-weight: normal;
            }

            /* TimeGrid axis running down the side (for both the all-day area and the slot area)
            --------------------------------------------------------------------------------------------------*/
            .ui-widget td.fc-axis {
            font-weight: normal;
            /* overcome bold */
            }

            /* TimeGrid Slats (lines that run horizontally)
            --------------------------------------------------------------------------------------------------*/
            .fc-time-grid .fc-slats .ui-widget-content {
            background: none;
            /* see through to fc-bg */
            }

            .fc.fc-bootstrap3 a {
            text-decoration: none;
            }

            .fc.fc-bootstrap3 a[data-goto]:hover {
            text-decoration: underline;
            }

            .fc-bootstrap3 hr.fc-divider {
            border-color: inherit;
            }

            .fc-bootstrap3 .fc-today.alert {
            border-radius: 0;
            }

            /* Popover
            --------------------------------------------------------------------------------------------------*/
            .fc-bootstrap3 .fc-popover .panel-body {
            padding: 0;
            }

            /* TimeGrid Slats (lines that run horizontally)
            --------------------------------------------------------------------------------------------------*/
            .fc-bootstrap3 .fc-time-grid .fc-slats table {
            /* some themes have background color. see through to slats */
            background: none;
            }

            .fc.fc-bootstrap4 a {
            text-decoration: none;
            }

            .fc.fc-bootstrap4 a[data-goto]:hover {
            text-decoration: underline;
            }

            .fc-bootstrap4 hr.fc-divider {
            border-color: inherit;
            }

            .fc-bootstrap4 .fc-today.alert {
            border-radius: 0;
            }

            .fc-bootstrap4 a.fc-event:not([href]):not([tabindex]) {
            color: #fff;
            }

            .fc-bootstrap4 .fc-popover.card {
            position: absolute;
            }

            /* Popover
            --------------------------------------------------------------------------------------------------*/
            .fc-bootstrap4 .fc-popover .card-body {
            padding: 0;
            }

            /* TimeGrid Slats (lines that run horizontally)
            --------------------------------------------------------------------------------------------------*/
            .fc-bootstrap4 .fc-time-grid .fc-slats table {
            /* some themes have background color. see through to slats */
            background: none;
            }

            /* Toolbar
            --------------------------------------------------------------------------------------------------*/
            .fc-toolbar {
            text-align: center;
            }

            .fc-toolbar.fc-header-toolbar {
            margin-bottom: 1em;
            }

            .fc-toolbar.fc-footer-toolbar {
            margin-top: 1em;
            }

            .fc-toolbar .fc-left {
            float: left;
            }

            .fc-toolbar .fc-right {
            float: right;
            }

            .fc-toolbar .fc-center {
            display: inline-block;
            }

            /* the things within each left/right/center section */
            .fc .fc-toolbar>*>* {
            /* extra precedence to override button border margins */
            float: left;
            margin-left: .75em;
            }

            /* the first thing within each left/center/right section */
            .fc .fc-toolbar>*> :first-child {
            /* extra precedence to override button border margins */
            margin-left: 0;
            }

            /* title text */
            .fc-toolbar h2 {
            margin: 0;
            }

            /* button layering (for border precedence) */
            .fc-toolbar button {
            position: relative;
            }

            .fc-toolbar .fc-state-hover,
            .fc-toolbar .ui-state-hover {
            z-index: 2;
            }

            .fc-toolbar .fc-state-down {
            z-index: 3;
            }

            .fc-toolbar .fc-state-active,
            .fc-toolbar .ui-state-active {
            z-index: 4;
            }

            .fc-toolbar button:focus {
            z-index: 5;
            }

            /* View Structure
            --------------------------------------------------------------------------------------------------*/
            /* undo twitter bootstrap's box-sizing rules. normalizes positioning techniques */
            /* don't do this for the toolbar because we'll want bootstrap to style those buttons as some pt */
            .fc-view-container *,
            .fc-view-container *:before,
            .fc-view-container *:after {
            -webkit-box-sizing: content-box;
            -moz-box-sizing: content-box;
            box-sizing: content-box;
            }

            .fc-view,
            .fc-view>table {
            /* so dragged elements can be above the view's main element */
            position: relative;
            z-index: 1;
            }

            /* BasicView
            --------------------------------------------------------------------------------------------------*/
            /* day row structure */
            .fc-basicWeek-view .fc-content-skeleton,
            .fc-basicDay-view .fc-content-skeleton {
            /* there may be week numbers in these views, so no padding-top */
            padding-bottom: 1em;
            /* ensure a space at bottom of cell for user selecting/clicking */
            }

            .fc-basic-view .fc-body .fc-row {
            min-height: 4em;
            /* ensure that all rows are at least this tall */
            }

            /* a "rigid" row will take up a constant amount of height because content-skeleton is absolute */
            .fc-row.fc-rigid {
            overflow: hidden;
            }

            .fc-row.fc-rigid .fc-content-skeleton {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            }

            /* week and day number styling */
            .fc-day-top.fc-other-month {
            opacity: 0.3;
            }

            .fc-basic-view .fc-week-number,
            .fc-basic-view .fc-day-number {
            padding: 2px;
            }

            .fc-basic-view th.fc-week-number,
            .fc-basic-view th.fc-day-number {
            padding: 0 2px;
            /* column headers can't have as much v space */
            }

            .fc-ltr .fc-basic-view .fc-day-top .fc-day-number {
            float: right;
            }

            .fc-rtl .fc-basic-view .fc-day-top .fc-day-number {
            float: left;
            }

            .fc-ltr .fc-basic-view .fc-day-top .fc-week-number {
            float: left;
            border-radius: 0 0 3px 0;
            }

            .fc-rtl .fc-basic-view .fc-day-top .fc-week-number {
            float: right;
            border-radius: 0 0 0 3px;
            }

            .fc-basic-view .fc-day-top .fc-week-number {
            min-width: 1.5em;
            text-align: center;
            background-color: #f2f2f2;
            color: #808080;
            }

            /* when week/day number have own column */
            .fc-basic-view td.fc-week-number {
            text-align: center;
            }

            .fc-basic-view td.fc-week-number>* {
            /* work around the way we do column resizing and ensure a minimum width */
            display: inline-block;
            min-width: 1.25em;
            }

            /* AgendaView all-day area
            --------------------------------------------------------------------------------------------------*/
            .fc-agenda-view .fc-day-grid {
            position: relative;
            z-index: 2;
            /* so the "more.." popover will be over the time grid */
            }

            .fc-agenda-view .fc-day-grid .fc-row {
            min-height: 3em;
            /* all-day section will never get shorter than this */
            }

            .fc-agenda-view .fc-day-grid .fc-row .fc-content-skeleton {
            padding-bottom: 1em;
            /* give space underneath events for clicking/selecting days */
            }

            /* TimeGrid axis running down the side (for both the all-day area and the slot area)
            --------------------------------------------------------------------------------------------------*/
            .fc .fc-axis {
            /* .fc to overcome default cell styles */
            vertical-align: middle;
            padding: 0 4px;
            white-space: nowrap;
            }

            .fc-ltr .fc-axis {
            text-align: right;
            }

            .fc-rtl .fc-axis {
            text-align: left;
            }

            /* TimeGrid Structure
            --------------------------------------------------------------------------------------------------*/
            .fc-time-grid-container,
            .fc-time-grid {
            /* so slats/bg/content/etc positions get scoped within here */
            position: relative;
            z-index: 1;
            }

            .fc-time-grid {
            min-height: 100%;
            /* so if height setting is 'auto', .fc-bg stretches to fill height */
            }

            .fc-time-grid table {
            /* don't put outer borders on slats/bg/content/etc */
            border: 0 hidden transparent;
            }

            .fc-time-grid>.fc-bg {
            z-index: 1;
            }

            .fc-time-grid .fc-slats,
            .fc-time-grid>hr {
            /* the <hr> AgendaView injects when grid is shorter than scroller */
            position: relative;
            z-index: 2;
            }

            .fc-time-grid .fc-content-col {
            position: relative;
            /* because now-indicator lives directly inside */
            }

            .fc-time-grid .fc-content-skeleton {
            position: absolute;
            z-index: 3;
            top: 0;
            left: 0;
            right: 0;
            }

            /* divs within a cell within the fc-content-skeleton */
            .fc-time-grid .fc-business-container {
            position: relative;
            z-index: 1;
            }

            .fc-time-grid .fc-bgevent-container {
            position: relative;
            z-index: 2;
            }

            .fc-time-grid .fc-highlight-container {
            position: relative;
            z-index: 3;
            }

            .fc-time-grid .fc-event-container {
            position: relative;
            z-index: 4;
            }

            .fc-time-grid .fc-now-indicator-line {
            z-index: 5;
            }

            .fc-time-grid .fc-helper-container {
            /* also is fc-event-container */
            position: relative;
            z-index: 6;
            }

            /* TimeGrid Slats (lines that run horizontally)
            --------------------------------------------------------------------------------------------------*/
            .fc-time-grid .fc-slats td {
            height: 1.5em;
            border-bottom: 0;
            /* each cell is responsible for its top border */
            }

            .fc-time-grid .fc-slats .fc-minor td {
            border-top-style: dotted;
            }

            /* TimeGrid Highlighting Slots
            --------------------------------------------------------------------------------------------------*/
            .fc-time-grid .fc-highlight-container {
            /* a div within a cell within the fc-highlight-skeleton */
            position: relative;
            /* scopes the left/right of the fc-highlight to be in the column */
            }

            .fc-time-grid .fc-highlight {
            position: absolute;
            left: 0;
            right: 0;
            /* top and bottom will be in by JS */
            }

            /* TimeGrid Event Containment
            --------------------------------------------------------------------------------------------------*/
            .fc-ltr .fc-time-grid .fc-event-container {
            /* space on the sides of events for LTR (default) */
            margin: 0 2.5% 0 2px;
            }

            .fc-rtl .fc-time-grid .fc-event-container {
            /* space on the sides of events for RTL */
            margin: 0 2px 0 2.5%;
            }

            .fc-time-grid .fc-event,
            .fc-time-grid .fc-bgevent {
            position: absolute;
            z-index: 1;
            /* scope inner z-index's */
            }

            .fc-time-grid .fc-bgevent {
            /* background events always span full width */
            left: 0;
            right: 0;
            }

            /* Generic Vertical Event
            --------------------------------------------------------------------------------------------------*/
            .fc-v-event.fc-not-start {
            /* events that are continuing from another day */
            /* replace space made by the top border with padding */
            border-top-width: 0;
            padding-top: 1px;
            /* remove top rounded corners */
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            }

            .fc-v-event.fc-not-end {
            /* replace space made by the top border with padding */
            border-bottom-width: 0;
            padding-bottom: 1px;
            /* remove bottom rounded corners */
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            }

            /* TimeGrid Event Styling
            ----------------------------------------------------------------------------------------------------
            We use the full "fc-time-grid-event" class instead of using descendants because the event won't
            be a descendant of the grid when it is being dragged.
            */
            .fc-time-grid-event {
            overflow: hidden;
            /* don't let the bg flow over rounded corners */
            }

            .fc-time-grid-event.fc-selected {
            /* need to allow touch resizers to extend outside event's bounding box */
            /* common fc-selected styles hide the fc-bg, so don't need this anyway */
            overflow: visible;
            }

            .fc-time-grid-event.fc-selected .fc-bg {
            display: none;
            /* hide semi-white background, to appear darker */
            }

            .fc-time-grid-event .fc-content {
            overflow: hidden;
            /* for when .fc-selected */
            }

            .fc-time-grid-event .fc-time,
            .fc-time-grid-event .fc-title {
            padding: 0 1px;
            }

            .fc-time-grid-event .fc-time {
            font-size: .85em;
            white-space: nowrap;
            }

            /* short mode, where time and title are on the same line */
            .fc-time-grid-event.fc-short .fc-content {
            /* don't wrap to second line (now that contents will be inline) */
            white-space: nowrap;
            }

            .fc-time-grid-event.fc-short .fc-time,
            .fc-time-grid-event.fc-short .fc-title {
            /* put the time and title on the same line */
            display: inline-block;
            vertical-align: top;
            }

            .fc-time-grid-event.fc-short .fc-time span {
            display: none;
            /* don't display the full time text... */
            }

            .fc-time-grid-event.fc-short .fc-time:before {
            content: attr(data-start);
            /* ...instead, display only the start time */
            }

            .fc-time-grid-event.fc-short .fc-time:after {
            content: "\A0-\A0";
            /* seperate with a dash, wrapped in nbsp's */
            }

            .fc-time-grid-event.fc-short .fc-title {
            font-size: .85em;
            /* make the title text the same size as the time */
            padding: 0;
            /* undo padding from above */
            }

            /* resizer (cursor device) */
            .fc-time-grid-event.fc-allow-mouse-resize .fc-resizer {
            left: 0;
            right: 0;
            bottom: 0;
            height: 8px;
            overflow: hidden;
            line-height: 8px;
            font-size: 11px;
            font-family: monospace;
            text-align: center;
            cursor: s-resize;
            }

            .fc-time-grid-event.fc-allow-mouse-resize .fc-resizer:after {
            content: "=";
            }

            /* resizer (touch device) */
            .fc-time-grid-event.fc-selected .fc-resizer {
            /* 10x10 dot */
            border-radius: 5px;
            border-width: 1px;
            width: 8px;
            height: 8px;
            border-style: solid;
            border-color: inherit;
            background: #fff;
            /* horizontally center */
            left: 50%;
            margin-left: -5px;
            /* center on the bottom edge */
            bottom: -5px;
            }

            /* Now Indicator
            --------------------------------------------------------------------------------------------------*/
            .fc-time-grid .fc-now-indicator-line {
            border-top-width: 1px;
            left: 0;
            right: 0;
            }

            /* arrow on axis */
            .fc-time-grid .fc-now-indicator-arrow {
            margin-top: -5px;
            /* vertically center on top coordinate */
            }

            .fc-ltr .fc-time-grid .fc-now-indicator-arrow {
            left: 0;
            /* triangle pointing right... */
            border-width: 5px 0 5px 6px;
            border-top-color: transparent;
            border-bottom-color: transparent;
            }

            .fc-rtl .fc-time-grid .fc-now-indicator-arrow {
            right: 0;
            /* triangle pointing left... */
            border-width: 5px 6px 5px 0;
            border-top-color: transparent;
            border-bottom-color: transparent;
            }

            /* List View
            --------------------------------------------------------------------------------------------------*/
            /* possibly reusable */
            .fc-event-dot {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 5px;
            }

            /* view wrapper */
            .fc-rtl .fc-list-view {
            direction: rtl;
            /* unlike core views, leverage browser RTL */
            }

            .fc-list-view {
            border-width: 1px;
            border-style: solid;
            }

            /* table resets */
            .fc .fc-list-table {
            table-layout: auto;
            /* for shrinkwrapping cell content */
            }

            .fc-list-table td {
            border-width: 1px 0 0;
            padding: 8px 14px;
            }

            .fc-list-table tr:first-child td {
            border-top-width: 0;
            }

            /* day headings with the list */
            .fc-list-heading {
            border-bottom-width: 1px;
            }

            .fc-list-heading td {
            font-weight: bold;
            }

            .fc-ltr .fc-list-heading-main {
            float: left;
            }

            .fc-ltr .fc-list-heading-alt {
            float: right;
            }

            .fc-rtl .fc-list-heading-main {
            float: right;
            }

            .fc-rtl .fc-list-heading-alt {
            float: left;
            }

            /* event list items */
            .fc-list-item.fc-has-url {
            cursor: pointer;
            /* whole row will be clickable */
            }

            .fc-list-item-marker,
            .fc-list-item-time {
            white-space: nowrap;
            width: 1px;
            }

            /* make the dot closer to the event title */
            .fc-ltr .fc-list-item-marker {
            padding-right: 0;
            }

            .fc-rtl .fc-list-item-marker {
            padding-left: 0;
            }

            .fc-list-item-title a {
            /* every event title cell has an <a> tag */
            text-decoration: none;
            color: inherit;
            }

            .fc-list-item-title a[href]:hover {
            /* hover effect only on titles with hrefs */
            text-decoration: underline;
            }

            /* message when no events */
            .fc-list-empty-wrap2 {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            }

            .fc-list-empty-wrap1 {
            width: 100%;
            height: 100%;
            display: table;
            }

            .fc-list-empty {
            display: table-cell;
            vertical-align: middle;
            text-align: center;
            }

            .fc-unthemed .fc-list-empty {
            /* theme will provide own background */
            background-color: #eee;
            }
            </style><style>
            </style><style type="text/css">.distpicker-address-wrapper{color:#9caebf}.distpicker-address-wrapper select{padding:.5rem .75rem;height:40px;font-size:1rem;line-height:1.25;color:#464a4c;background-color:#fff;background-image:none;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,0.15);border-radius:.25rem;-webkit-transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;-o-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s}.distpicker-address-wrapper select option{font-weight:normal;display:block;white-space:pre;min-height:1.2em;padding:0px 2px 1px}.distpicker-address-wrapper ul{margin:0;padding:0}.distpicker-address-wrapper ul li{list-style:none}.distpicker-address-wrapper .address-header{background-color:#fff}.distpicker-address-wrapper .address-header ul{display:flex;justify-content:space-around;align-items:stretch}.distpicker-address-wrapper .address-header ul li{display:inline-block;padding:10px 10px 7px}.distpicker-address-wrapper .address-header ul li.active{border-bottom:#52697f solid 3px;color:#52697f}.distpicker-address-wrapper .address-container{background-color:#fff}.distpicker-address-wrapper .address-container ul{height:100%;overflow:auto}.distpicker-address-wrapper .address-container ul li{padding:8px 10px;border-top:1px solid #f6f6f6}.distpicker-address-wrapper .address-container ul li.active{color:#52697f}.disabled-color{background:#f8f8f8}
            </style><link rel="stylesheet" type="text/css" href="css/chunk-72f59dd9.efe5000c.css"><script charset="utf-8" src="js/chunk-72f59dd9.c9d64ffb.js"></script><style type="text/css">
            .vue-cropper[data-v-8ed66ddc] {
            position: relative;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            direction: ltr;
            touch-action: none;
            text-align: left;
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC");
            }
            .cropper-box[data-v-8ed66ddc],
            .cropper-box-canvas[data-v-8ed66ddc],
            .cropper-drag-box[data-v-8ed66ddc],
            .cropper-crop-box[data-v-8ed66ddc],
            .cropper-face[data-v-8ed66ddc] {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            user-select: none;
            }
            .cropper-box-canvas img[data-v-8ed66ddc] {
            position: relative;
            text-align: left;
            user-select: none;
            transform: none;
            max-width: none;
            max-height: none;
            }
            .cropper-box[data-v-8ed66ddc] {
            overflow: hidden;
            }
            .cropper-move[data-v-8ed66ddc] {
            cursor: move;
            }
            .cropper-crop[data-v-8ed66ddc] {
            cursor: crosshair;
            }
            .cropper-modal[data-v-8ed66ddc] {
            background: rgba(0, 0, 0, 0.5);
            }
            .cropper-crop-box[data-v-8ed66ddc] {
            /*border: 2px solid #39f;*/
            }
            .cropper-view-box[data-v-8ed66ddc] {
            display: block;
            overflow: hidden;
            width: 100%;
            height: 100%;
            outline: 1px solid #39f;
            outline-color: rgba(51, 153, 255, 0.75);
            user-select: none;
            }
            .cropper-view-box img[data-v-8ed66ddc] {
            user-select: none;
            text-align: left;
            max-width: none;
            max-height: none;
            }
            .cropper-face[data-v-8ed66ddc] {
            top: 0;
            left: 0;
            background-color: #fff;
            opacity: 0.1;
            }
            .crop-info[data-v-8ed66ddc] {
            position: absolute;
            left: 0px;
            min-width: 65px;
            text-align: center;
            color: white;
            line-height: 20px;
            background-color: rgba(0, 0, 0, 0.8);
            font-size: 12px;
            }
            .crop-line[data-v-8ed66ddc] {
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            opacity: 0.1;
            }
            .line-w[data-v-8ed66ddc] {
            top: -3px;
            left: 0;
            height: 5px;
            cursor: n-resize;
            }
            .line-a[data-v-8ed66ddc] {
            top: 0;
            left: -3px;
            width: 5px;
            cursor: w-resize;
            }
            .line-s[data-v-8ed66ddc] {
            bottom: -3px;
            left: 0;
            height: 5px;
            cursor: s-resize;
            }
            .line-d[data-v-8ed66ddc] {
            top: 0;
            right: -3px;
            width: 5px;
            cursor: e-resize;
            }
            .crop-point[data-v-8ed66ddc] {
            position: absolute;
            width: 8px;
            height: 8px;
            opacity: 0.75;
            background-color: #39f;
            border-radius: 100%;
            }
            .point1[data-v-8ed66ddc] {
            top: -4px;
            left: -4px;
            cursor: nw-resize;
            }
            .point2[data-v-8ed66ddc] {
            top: -5px;
            left: 50%;
            margin-left: -3px;
            cursor: n-resize;
            }
            .point3[data-v-8ed66ddc] {
            top: -4px;
            right: -4px;
            cursor: ne-resize;
            }
            .point4[data-v-8ed66ddc] {
            top: 50%;
            left: -4px;
            margin-top: -3px;
            cursor: w-resize;
            }
            .point5[data-v-8ed66ddc] {
            top: 50%;
            right: -4px;
            margin-top: -3px;
            cursor: e-resize;
            }
            .point6[data-v-8ed66ddc] {
            bottom: -5px;
            left: -4px;
            cursor: sw-resize;
            }
            .point7[data-v-8ed66ddc] {
            bottom: -5px;
            left: 50%;
            margin-left: -3px;
            cursor: s-resize;
            }
            .point8[data-v-8ed66ddc] {
            bottom: -5px;
            right: -4px;
            cursor: se-resize;
            }
            @media screen and (max-width: 500px) {
            .crop-point[data-v-8ed66ddc] {
                position: absolute;
                width: 20px;
                height: 20px;
                opacity: 0.45;
                background-color: #39f;
                border-radius: 100%;
            }
            .point1[data-v-8ed66ddc] {
                top: -10px;
                left: -10px;
            }
            .point2[data-v-8ed66ddc],
            .point4[data-v-8ed66ddc],
            .point5[data-v-8ed66ddc],
            .point7[data-v-8ed66ddc] {
                display: none;
            }
            .point3[data-v-8ed66ddc] {
                top: -10px;
                right: -10px;
            }
            .point4[data-v-8ed66ddc] {
                top: 0;
                left: 0;
            }
            .point6[data-v-8ed66ddc] {
                bottom: -10px;
                left: -10px;
            }
            .point8[data-v-8ed66ddc] {
                bottom: -10px;
                right: -10px;
            }
            }
        </style>
    </head>
    <body>
        <noscript>
            <strong>
                We're sorry but platform-vue doesn't work properly without JavaScript enabled. Please enable it to continue.
            </strong>
        </noscript>
        
        <div data-v-c466b63c="" data-v-76a88ffc="" class="layout">
            <div data-v-1a259ece="" data-v-c466b63c="" class="layout-container"><!---->
                <div data-v-1a259ece="" class="header-wrap">
                    <div data-v-1a259ece="" class="suck-top">
                        <div data-v-1a259ece="" class="info-wrap">
                            <div data-v-1a259ece="" class="info">
                                <div data-v-1a259ece="" class="title">
                                    <span data-v-1a259ece="" class="text router-link-active">
                                        远方123研发费管理系统
                                    </span>
                                    <span data-v-1a259ece="">
                                        <div data-v-1a259ece="" class="el-divider el-divider--vertical"><!----></div>
                                        <span data-v-1a259ece="" class="companyName"> 深圳远方创新数据咨询有限公司</span>
                                    </span>
                                </div>

                                <div data-v-1a259ece="" class="right-info">
                                    <div data-v-1a259ece="" class="el-dropdown">
                                        <span data-v-1a259ece="" class="el-dropdown-link pointer el-dropdown-selfdefine" aria-haspopup="list" aria-controls="dropdown-menu-9697" role="button" tabindex="0">
                                            <img data-v-1a259ece="" src="img/avatar.73e91683.png" alt="" class="avatar">
                                            <span data-v-1a259ece="">吴佳</span>
                                        </span>
                                        
                                        <ul data-v-1a259ece="" class="el-dropdown-menu el-popper" id="dropdown-menu-9697" style="display: none;">
                                            <li data-v-1a259ece="" tabindex="-1" class="el-dropdown-menu__item"><!---->
                                                <span data-v-1a259ece="">个人信息</span>
                                            </li>
                                        
                                            <li data-v-1a259ece="" tabindex="-1" class="el-dropdown-menu__item"><!---->
                                                <span data-v-1a259ece="">修改密码</span>
                                            </li>
                                            
                                            <li data-v-1a259ece="" tabindex="-1" class="el-dropdown-menu__item"><!---->
                                                <span data-v-1a259ece="">我的企业</span>
                                            </li>
                                        </ul>
                                    </div>
                            
                                    <div data-v-1a259ece="" class="el-divider el-divider--vertical"><!----></div>
                                        <span data-v-1a259ece="" class="font-14">企业管理员</span>
                                        <span data-v-1a259ece="" class="item">
                                            <i data-v-1a259ece="" class="iconxitongguanli"></i> 
                                            界面设置 
                                        </span>
                                        <div data-v-1a259ece="" class="el-divider el-divider--vertical"><!----></div>
                                        <span data-v-1a259ece="" class="item logout">
                                            <i data-v-1a259ece="" class="el-icon-switch-button"></i>退出 
                                        </span>
                                        <span data-v-1a259ece="" class="item">
                                            <div data-v-1a259ece="" class="el-badge">
                                                <i data-v-1a259ece="" class="el-icon-bell"></i>
                                                通知消息 
                                                <sup class="el-badge__content is-fixed" style="">4</sup>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div data-v-1a259ece="" class="header skinHead0">
                                <div data-v-1a259ece="" class="menu">
                                    <ul data-v-1a259ece="" role="menubar" class="el-menu--horizontal el-menu" style="background-color: rgb(14, 43, 85);">
                                        <li data-v-1a259ece="" role="menuitem" tabindex="0" class="el-menu-item is-active" style="color: rgb(28, 129, 227); border-bottom-color: rgb(255, 255, 255); background-color: rgb(14, 43, 85);">
                                            <span data-v-1a259ece="" class="item-nav">
                                                <i data-v-1a259ece="" class="coloricon el-icon-s-home"></i> 首页 
                                            </span>
                                        </li>

                                        <li data-v-1a259ece="" role="menuitem" tabindex="0" class="el-menu-item" style="color: rgb(28, 129, 227); border-bottom-color: transparent; background-color: rgb(14, 43, 85);">
                                            <span data-v-1a259ece="" class="item-nav">
                                                <i data-v-1a259ece="" class="coloricon iconbianji"></i> 待办事项 
                                            </span>
                                        </li>
                                        
                                        <li data-v-1a259ece="" role="menuitem" tabindex="0" class="el-menu-item" style="color: rgb(28, 129, 227); border-bottom-color: transparent; background-color: rgb(14, 43, 85);">
                                            <span data-v-1a259ece="" class="item-nav">
                                                <i data-v-1a259ece="" class="coloricon iconfuzhi"></i> 基础信息维护 
                                            </span>
                                        </li>
                                        
                                        <li data-v-1a259ece="" role="menuitem" tabindex="0" class="el-menu-item" style="color: rgb(28, 129, 227); border-bottom-color: transparent; background-color: rgb(14, 43, 85);">
                                            <span data-v-1a259ece="" class="item-nav">
                                                <i data-v-1a259ece="" class="coloricon el-icon-s-data"></i> 研发项目管理 
                                            </span>
                                        </li>
                                        
                                        <li data-v-1a259ece="" role="menuitem" tabindex="0" class="el-menu-item" style="color: rgb(28, 129, 227); border-bottom-color: transparent; background-color: rgb(14, 43, 85);">
                                            <span data-v-1a259ece="" class="item-nav">
                                                <i data-v-1a259ece="" class="coloricon iconshujuku1">
                                                </i> 
                                                研发费用管理 
                                            </span>
                                        </li>
                                        
                                        <li data-v-1a259ece="" role="menuitem" tabindex="0" class="el-menu-item" style="color: rgb(28, 129, 227); border-bottom-color: transparent; background-color: rgb(14, 43, 85);">
                                            <span data-v-1a259ece="" class="item-nav">
                                                <i data-v-1a259ece="" class="coloricon iconjishuchengguo"></i> 成果及成果转化 
                                            </span>
                                        </li>
                                        
                                        <li data-v-1a259ece="" role="menuitem" tabindex="0" class="el-menu-item" style="color: rgb(28, 129, 227); border-bottom-color: transparent; background-color: rgb(14, 43, 85);">
                                            <span data-v-1a259ece="" class="item-nav">
                                                <i data-v-1a259ece="" class="coloricon el-icon-s-goods"></i> 
                                                高新技术产品(服务)及收入 
                                            </span>
                                        </li>
                                        
                                        <li data-v-1a259ece="" role="menuitem" tabindex="0" class="el-menu-item" style="color: rgb(28, 129, 227); border-bottom-color: transparent; background-color: rgb(14, 43, 85);">
                                            <span data-v-1a259ece="" class="item-nav">
                                                <i data-v-1a259ece="" class="coloricon iconfenxi"></i> 
                                                报表查询 
                                            </span>
                                        </li>
                                        
                                        <li data-v-1a259ece="" role="menuitem" tabindex="0" class="el-menu-item" style="color: rgb(28, 129, 227); border-bottom-color: transparent; background-color: rgb(14, 43, 85);">
                                            <span data-v-1a259ece="" class="item-nav">
                                                <i data-v-1a259ece="" class="coloricon el-icon-s-check"></i> 
                                                运营管理 
                                            </span>
                                        </li>
                                    </ul>
                                </div><!---->
                            </div>
                        </div>
                    </div>
                    
                    <main data-v-1a259ece="" class="el-main main" id="mainMenu">
                        <div data-v-0c0d23e9="" data-v-1a259ece="">
                            <div data-v-0c0d23e9="" class="search">
                                <form data-v-0c0d23e9="" class="el-form demo-form-inline">
                                    <div data-v-0c0d23e9="" class="el-row" style="margin-left: -1px; margin-right: -1px;">
                                        <div data-v-0c0d23e9="" class="el-col el-col-24" style="padding-left: 1px; padding-right: 1px;">
                                            <div data-v-0c0d23e9="" class="el-row">
                                                <div data-v-0c0d23e9="" class="el-col el-col-6">
                                                    <div data-v-0c0d23e9="" role="radiogroup" class="el-radio-group">
                                                        <label data-v-0c0d23e9="" role="radio" aria-checked="true" tabindex="0" class="el-radio-button is-active">
                                                            <input type="radio" tabindex="-1" autocomplete="off" class="el-radio-button__orig-radio" value="今年">
                                                            <span class="el-radio-button__inner">今年</span>
                                                        </label>
                                                        
                                                        <label data-v-0c0d23e9="" role="radio" tabindex="-1" class="el-radio-button">
                                                            <input type="radio" tabindex="-1" autocomplete="off" class="el-radio-button__orig-radio" value="上一年">
                                                            <span class="el-radio-button__inner">上一年</span>
                                                        </label>
                                                        
                                                        <label data-v-0c0d23e9="" role="radio" tabindex="-1" class="el-radio-button">
                                                            <input type="radio" tabindex="-1" autocomplete="off" class="el-radio-button__orig-radio" value="前三年">
                                                            <span class="el-radio-button__inner">前三年</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            
                                                <div data-v-0c0d23e9="" class="add-inp el-col el-col-8">
                                                    <div data-v-0c0d23e9="" class="el-form-item el-form-item--small">
                                                        <label class="el-form-item__label" style="width: 60px;">日期</label>
                                                        <div class="el-form-item__content" style="margin-left: 60px;">
                                                            <div data-v-0c0d23e9="" class="el-date-editor el-input el-input--small el-input--prefix el-input--suffix el-date-editor--month" style="width: 45%;"><!---->
                                                                <input type="text" autocomplete="off" name="" placeholder="开始日期" class="el-input__inner">
                                                                <span class="el-input__prefix">
                                                                    <i class="el-input__icon el-icon-date"></i><!---->
                                                                </span>
                                                                
                                                                <span class="el-input__suffix">
                                                                    <span class="el-input__suffix-inner">
                                                                        <i class="el-input__icon"></i><!----><!----><!----><!---->
                                                                    </span><!---->
                                                                </span><!----><!---->
                                                            </div>
                                                            
                                                            <span data-v-0c0d23e9="" class="at">至</span>
                                                            <div data-v-0c0d23e9="" class="el-date-editor el-input el-input--small el-input--prefix el-input--suffix el-date-editor--month" style="width: 45%;"><!---->
                                                                <input type="text" autocomplete="off" name="" placeholder="结束日期" class="el-input__inner">
                                                                <span class="el-input__prefix">
                                                                    <i class="el-input__icon el-icon-date"></i><!---->
                                                                </span>
                                                                
                                                                <span class="el-input__suffix">
                                                                    <span class="el-input__suffix-inner">
                                                                        <i class="el-input__icon"></i><!----><!----><!----><!---->
                                                                    </span><!---->
                                                                </span><!----><!---->
                                                            </div><!---->
                                                        </div>
                                                    </div>
                                                </div>
                                                    
                                                <div data-v-0c0d23e9="" class="el-col el-col-8">
                                                    <button data-v-0c0d23e9="" type="button" class="el-button el-button--primary el-button--small"><!---->
                                                        <i class="el-icon-search"></i>
                                                        <span>查询</span>
                                                    </button><!---->
                                                    
                                                    <button data-v-0c0d23e9="" type="button" class="el-button el-button--default el-button--small"><!---->
                                                        <i class="el-icon-refresh-right"></i>
                                                        <span>重置</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                                
                            <div data-v-0c0d23e9="" href="javascript:void(0)" class="img-wrap1" style="float: right;">
                                <img data-v-0c0d23e9="" src="img/play006.845f7f2c.png" class="img-icon">
                            </div>
                            
                            <span data-v-0c0d23e9="">
                                <div data-v-0c0d23e9="" class="num-div">
                                    <div data-v-0c0d23e9="" class="el-row" style="margin-left: -10px; margin-right: -10px;">
                                        <div data-v-0c0d23e9="" class="el-col el-col-5" style="padding-left: 10px; padding-right: 10px;">
                                            <div data-v-0c0d23e9="" class="txt-wrap border-r">
                                                <img data-v-0c0d23e9="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAvCAYAAAB+OePrAAADT0lEQVRYhdWZz2sTQRTHP7tJ80sSmyqtgj0pagW1Iohgeyj4B5Se/NVLUfEgerFFD6JeFFoPCgrSiwfb0ksRBG+WXip4sKgI1UIPgiBejP0hjTZNViadjTHZTfbHpMYPDOmUfTPfvJn38mZWo4iu9iWzEwKGgF4gSW35DjwB+oHVqbeJssmCNtMPApdqLM4kKedKA1etHtBtDHvlZyeg1bh1yrnO2X0LO5FN8nPajUs8Ys7RZGceLNqHdYudJ+sKXUbyfSAFGLKZGIpbSs4VcuOEYL1FshV6vUWynci6imQr/ovAsfzFGR6Pt8olaVE8X+b8iWXXRmUih8fjQthroFmVMr9YLXd3PQnERmStqx7X2FVBDN5YySeNgZuxQn9+Lutq/F17AwV7P1SObsPn6H7tJbaeHLgVq9jfSGxF/is6jXL3b3gyj23S8s0NNfPkig4zcfgQg08RWAxCWodwX4hIDtbOhkaBSWAieKhyglcuUoh7vgUmk7Bq4bDMqkFm/c9Tsj2oNqZSka8SMNYMPwKuzKLGyQbI8jN7LXIaGHUssjRPvpzKkPqWs3xWbPXZGMxH1/uFjb5NJ9fdUFWlkci7PAKMAAdkrVmIICV5Uuw7U6ACBoDbxcM4zpPHuqw9IpZ4brsygSbCk++BMfymoKUAjKgu5v7w0CwVfYl8tnU9mmtEI3Ddl0ghbnpzzQSa9AmxnkWKRG2VBxUjwrHHs8jZjas3jnvOkx8bQa+WtB3mySoc9Jwn0xtXmuzwnCef7lEk4atcnbDtBk94/u2O5nx4M22gP/r117+MNtvBlj0vWnLNq2UJYQ1jfwDjiK2/Pnv2ZOtP+OLqbqyIqEbuQtjp0+88e3LfildL10x6Fnl4GUKKToMVEFeEE7q82BR0uLGO5aBj0eWU1SO5lMfAgtbVvnQPuOxyugJai062293WNtoDGEer2iwAbeKrBWWRqXl9sRTLguN7MhHJu/VKkVzMRSFQ9DUVbx/W3sTvuLledsCQdF4e13WM1eFdjiPu3q8oEHhXCnR4xnGOId8NnikKRLekpH1/adWgukwQx9Gd0qsifThBPCeeF3Zlx1mBquW2QpT/PaIeFGlVFG6iWBBHIxkQM8ALkQcB+2QG/AYfO93rv2Bx/QAAAABJRU5ErkJggg==" alt="" class="im img-size padding-l-40">
                                                <span data-v-0c0d23e9="" class="txt-name">研发项目</span>
                                                <span data-v-0c0d23e9="" class="txt-num">1</span>
                                            </div>
                                        </div>
                                        
                                        <div data-v-0c0d23e9="" class="el-col el-col-5" style="padding-left: 10px; padding-right: 10px;">
                                            <div data-v-0c0d23e9="" class="txt-wrap border-r">
                                                <img data-v-0c0d23e9="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAEdElEQVRogeWZW4gbVRzGfzOZXHfT7e52tdX6YBT0qV76IsoKFUEQH8qqEKx9cGmLlGpF7HYtSpUiyK59cKEPVqF4qVa8oSD2waWoqyiloC9ecCvFLXbrarfZbHb2kpyRk5zEbJJJZpJJiPhBmMnMme98+c//dk40irDl5rn8lwAwCjwM9NAazAJvAvuA5VPfr6k6qWFzfQR4vEWC8+hWc5rAcK3Bus317erYD2gt+vSrOXc6+ZV2wvPuMeGExCPk53LkmnauYoujJ6LXNsnvF3fFk44HOxZ+9ETUD3wI3FevMi9h5yqVsLNdRONS+F1N1OEaboRf2Saas3AdnBIjBxeY/CVT14TX3+hj6LlIXc8Ww43FvYHlDY0bi3fkT4aeb9xijcKNxetyq3YQ3lb4XwjvaqIO1/jPpsPWB5zDdNhvVR9Yl/B2SIcttfiCDmei8FMEzoUgYYCpQ1hAVxr863QMAcnxDhlPiWpcboRrDsbYCv60F8a7YbkCixRvBkC/32Apd+kCMAa8CFyuxOkmq1Rfvdrg2zUwHIPPeiqLtkEY2A9MAtsqDWmaq8jQeq8PTja2VuoF3gI2qQV0IWI9Ff71qRUu/S2y5z9G4NdwhVe6Xkds9bulHgIk8dP5C02pnOeDOdEeQ1r8oTylpxa/Y4ufOR8ciIFoTjNxBBgHLnpO/8m6XBZpEtYCz0pqo2jbrRZqOqYUPNH8jmYQeKbYVaRXbigZFMufzPwpysql36+xtvvfHCeLi23Km7HQlqqXcW0ud187nwtwq0+HYNkwqXNAUxbfAxxWm52OcfU1OgdHCwsjXtkA39lke98DKbSzwg199h2LJ4OIeJmsdwwVoCPq+JsdR98Veqz4+18zgovTgkXTIhTOmXkqZPNwykL7XWRzmHWV8wDQ/hDoLy8jHgyAb9Wtmwy1lgyr3uA6O5IXxjp6lOvIMbFDw6ndU+fExpMfLye2xoNRmVpnbXKU/vYKrIB1u0HmiPM8afTPw7wFpgWdq3xwo3SVLtUPJFTUOsWdwBdyLzsU1gbGjnVODt7Az2VW+yaN7wkT0pB5LYJ1q8/xBHnh6a86S4U3VIC+VJv/gUXT+mhXPPkIF8R84e60QB9bwrfXzFpbbA+4El0DyUYLkGyE0uq437g3BfksM6syiA5iMIDYU54eGsBUo6VCqjsA3Aa8S5CVrODZnE9a9xhk3oggHgs20BRXxA9elfzTQDw9Ed1Bwno1e0VavnkVdNxbaoP36dVMepsqWv5H9IGn9MYtSZmdjnnJWQGS/7J0lZT6FTIXn22U1dic9FnrdYHugc0XLAhpEC4EiDTMIVS1TKtG/XBxb1I3RK7ieQJZ8veuqpqyNZmWJ1pRd1ipyaobmdcj++jRHm2Eo6TJGlUGhpKFhFmtV3E96SbfbkAWpKc8oHtJ1YoCPMmuNXadtqmthnqWzZfUv83HS2+0Yrf2uGrMZAcq36oTyHFyvHyuTLREKyxeDNnEDQB3A5vlml/t18hAk0F3Bvhc5umqO1nAP2TuIp0+0Ix/AAAAAElFTkSuQmCC" alt="" class="im img-size padding-l-20">
                                                <span data-v-0c0d23e9="" class="txt-name">科技成果</span>
                                                <span data-v-0c0d23e9="" class="txt-num">0</span>
                                            </div>
                                        </div>
                                        
                                        <div data-v-0c0d23e9="" class="el-col el-col-4" style="padding-left: 10px; padding-right: 10px;">
                                            <div data-v-0c0d23e9="" class="txt-wrap border-r">
                                                <img data-v-0c0d23e9="" src="data:image/png;base64,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" alt="" class="im img-size padding-l-20">
                                                <span data-v-0c0d23e9="" class="txt-name">成果转化</span>
                                                <span data-v-0c0d23e9="" class="txt-num">0</span>
                                            </div>    
                                        </div>
                                        
                                        <div data-v-0c0d23e9="" class="el-col el-col-5" style="padding-left: 10px; padding-right: 10px;">
                                            <div data-v-0c0d23e9="" class="txt-wrap border-r">
                                                <img data-v-0c0d23e9="" src="data:image/png;base64,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" alt="" class="im img-size padding-l-20"><span data-v-0c0d23e9="" class="txt-name">高新产品(服务)</span><span data-v-0c0d23e9="" class="txt-num">0</span></div></div><div data-v-0c0d23e9="" class="el-col el-col-5" style="padding-left: 10px; padding-right: 10px;"><div data-v-0c0d23e9="" class="txt-wrap"><img data-v-0c0d23e9="" src="data:image/png;base64,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" alt="" class="im img-size padding-l-20">
                                                <span data-v-0c0d23e9="" class="txt-name">知识产权</span>
                                                <span data-v-0c0d23e9="" class="txt-num">0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div data-v-0c0d23e9="" class="el-dialog__wrapper" style="display: none;">
                                    <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog" style="margin-top: 15vh;">
                                        <div class="el-dialog__header">
                                            <span class="el-dialog__title"></span>
                                            <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                                <i class="el-dialog__close el-icon el-icon-close"></i>
                                            </button>
                                        </div><!----><!---->
                                    </div>
                                </div>
                            
                                <div data-v-0c0d23e9="" class="chart-wrap el-row">
                                    <div data-v-0c0d23e9="" class="chartOdd el-col el-col-12">
                                        <div data-v-0c0d23e9="" id="echarts_pie2" class="echarts-pie" _echarts_instance_="ec_1733149395598" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;">
                                            <div style="position: relative; width: 446px; height: 228px; padding: 0px; margin: 0px; border-width: 0px;">
                                                <canvas data-zr-dom-id="zr_0" width="446" height="228" style="position: absolute; left: 0px; top: 0px; width: 446px; height: 228px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;">
                                                </canvas>
                                            </div>
                                            
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div data-v-0c0d23e9="" class="chartEven el-col el-col-12">
                                        <div data-v-0c0d23e9="" id="echarts_pie3" class="echarts-pie" _echarts_instance_="ec_1733149395597" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;">
                                            <div style="position: relative; width: 437px; height: 228px; padding: 0px; margin: 0px; border-width: 0px;">
                                                <canvas data-zr-dom-id="zr_0" width="437" height="228" style="position: absolute; left: 0px; top: 0px; width: 437px; height: 228px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;">
                                                </canvas>
                                            </div>
                                            
                                            <div></div>
                                        </div>
                                    </div>
                                    
                                    <div data-v-0c0d23e9="" class="chartOdd el-col el-col-12">
                                        <div data-v-0c0d23e9="" id="echarts_pie4" class="echarts-pie" _echarts_instance_="ec_1733149395599" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;">
                                            <div style="position: relative; width: 446px; height: 228px; padding: 0px; margin: 0px; border-width: 0px;">
                                                <canvas data-zr-dom-id="zr_0" width="446" height="228" style="position: absolute; left: 0px; top: 0px; width: 446px; height: 228px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;">
                                                </canvas>
                                            </div>
                                            
                                            <div></div>
                                        </div>
                                    </div>
                                    
                                    <div data-v-0c0d23e9="" class="chartEven el-col el-col-12">
                                        <div data-v-0c0d23e9="" id="echarts_pie" class="echarts-pie" _echarts_instance_="ec_1733149395596" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;">
                                            <div style="position: relative; width: 437px; height: 228px; padding: 0px; margin: 0px; border-width: 0px;">
                                                <canvas data-zr-dom-id="zr_0" width="437" height="228" style="position: absolute; left: 0px; top: 0px; width: 437px; height: 228px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;">
                                                </canvas>
                                            </div>
                                            
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div data-v-0c0d23e9="" class="footerTip">
                                    <p data-v-0c0d23e9="" class="red"> 温馨提示：为了达到最好的显示和操作效果，建议使用360安全浏览器（极速模式） </p>
                                    <p data-v-0c0d23e9="" class="footerTipBottom"><!----><!----><!----></p>
                                    <p data-v-0c0d23e9="" class="footerTipBottom">
                                        <span data-v-0c0d23e9="" class="margin-l-20"> 全国营销与客服热线：020-83622163 </span>
                                        <span data-v-0c0d23e9="" class="margin-l-20">技术支持：深圳远方创新数据咨询有限公司</span>
                                        <a data-v-0c0d23e9="" target="view_window" href="http://erp.3hmis.com/CRM/CustomerServiceForMobile/CustomerCommonProblem.aspx?CorpId=6d47773c-4e28-44b5-8d6d-88bae74620e3&amp;UserId=6c77a9baec2d4b4696fdd6850947efac&amp;IsManager=1&amp;UnitId=RHT20066092&amp;CustomerName=深圳远方创新数据咨询有限公司&amp;UserName=test&amp;MobilePhoneNumber=13533622405" class="margin-l-20" style="color: red;">问题反馈或意见</a>
                                    </p>
                                </div>
                            </span><!---->
                        </div>
                    </main>
                
                    <div data-v-dd35c38a="" data-v-1a259ece="" class="side"><!---->
                        <div data-v-dd35c38a="" class="unfoldWrap">
                            <span data-v-dd35c38a="">显示</span>
                        </div>
                    </div>
                    
                    <div data-v-1a259ece="" class="el-dialog__wrapper" style="display: none;">
                        <div role="dialog" aria-modal="true" aria-label="选择" class="el-dialog" style="margin-top: 15vh; width: 700px;">
                            <div class="el-dialog__header">
                                <span class="el-dialog__title">选择</span>
                                <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                    <i class="el-dialog__close el-icon el-icon-close"></i>
                                </button>
                            </div><!----><!---->
                        </div>
                    </div>
                
                    <div data-v-1a259ece="" class="el-dialog__wrapper" style="display: none;">
                        <div role="dialog" aria-modal="true" aria-label="设置" class="el-dialog" style="margin-top: 15vh; width: 500px;">
                            <div class="el-dialog__header">
                                <span class="el-dialog__title">设置</span>
                                <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                    <i class="el-dialog__close el-icon el-icon-close"></i>
                                </button>
                            </div><!----><!---->
                        </div>
                    </div>
                </div>
            
            <div data-v-a790033a="" data-v-c466b63c="">
                <div data-v-a790033a="" class="el-dialog__wrapper" style="display: none;">
                    <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog" style="margin-top: 15vh; width: 40%;">
                        <div class="el-dialog__header">
                            <span class="el-dialog__title"></span>
                            <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                <i class="el-dialog__close el-icon el-icon-close"></i>
                            </button>
                        </div><!---->
                        
                        <div class="el-dialog__footer">
                            <div data-v-a790033a="" class="dialog-footer">
                                <button data-v-a790033a="" type="button" class="el-button el-button--default el-button--small"><!----><!---->
                                    <span>取 消</span>
                                </button>
                                
                                <button data-v-a790033a="" type="button" class="el-button el-button--primary el-button--small"><!----><!---->
                                    <span>确 定</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div data-v-b5d09a56="" data-v-c466b63c="" class="el-dialog__wrapper" style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog" style="margin-top: 15vh;">
                    <div class="el-dialog__header">
                        <span class="el-dialog__title"></span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                            <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div><!----><!---->
                </div>
            </div>
            
            <div data-v-260607aa="" data-v-c466b63c="" class="el-dialog__wrapper" style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog" style="margin-top: 15vh; width: 900px;">
                    <div class="el-dialog__header">
                        <span class="el-dialog__title"></span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                            <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div><!----><!---->
                </div>
            </div>
        </div>
        
        <script src="js/chunk-vendors.5d8815b5.js"></script>
        <script src="js/app.1d057589.js"></script>
    </body>
</template>


<script  lang="ts">

export default {
    name: 'Console',
    components: {

    },
    methods: {

    },
    mounted() {
        
    },
};

</script>

<style scoped>
.header-wrap[data-v-1a259ece] {
    height: 100px;
}

.suck-top[data-v-1a259ece] {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    padding-right: calc(100vw - 100%);
    z-index: 99;
}

.info-wrap[data-v-1a259ece] {
    height: 54px;
    background: #4c91ce;
    background-size: 100% 100%;
}

.info[data-v-1a259ece] {
    width: 100%;
    padding: 0 5%;
    position: relative;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.title[data-v-1a259ece] {
    line-height: 54px;
    color: #fff;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 3px;
}

.title .text[data-v-1a259ece] {
    cursor: pointer;
}

.el-divider--vertical {
    display: inline-block;
    width: 1px;
    height: 1em;
    margin: 0 8px;
    vertical-align: middle;
    position: relative;
}

.el-divider {
    background-color: #dcdfe6;
    /* position: relative; */
}

.companyName[data-v-1a259ece] {
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1px;
    margin-left: 5px;
}

.right-info[data-v-1a259ece] {
    color: #fff;
    top: 13px;
    right: 13%;
}

.right-info {
    position: absolute;
    /* top: 20px; */
    /* right: 5%; */
    /* z-index: 100; */
    /* color: #6c6c6c; */
}

.right-info[data-v-1a259ece] .el-dropdown {
    color: #fff;
}

.el-dropdown {
    display: inline-block;
    position: relative;
    /* color: #606266; */
    font-size: 14px;
}

.pointer[data-v-1a259ece] {
    cursor: pointer;
}

.right-info .avatar[data-v-1a259ece] {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    margin: 0 5px;
    border-radius: 30px;
}

img {
    border: 0;
}

img {
    overflow-clip-margin: content-box;
    overflow: clip;
}

.el-dropdown-menu {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 10px 0;
    margin: 5px 0;
    background-color: #fff;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    /* -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1); */
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
}

 ul {
    list-style: none;
}

ul {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    unicode-bidi: isolate;
}

.el-dropdown-menu__item {
    list-style: none;
    line-height: 36px;
    margin: 0;
    color: #606266;
    outline: 0;
}

.el-dropdown-menu__item, .el-menu-item {
    font-size: 14px;
    padding: 0 20px;
    cursor: pointer;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
}

.el-dropdown-menu__item {
    list-style: none;
    line-height: 36px;
    margin: 0;
    color: #606266;
    outline: 0;
}

.el-dropdown-menu__item, .el-menu-item {
    font-size: 14px;
    padding: 0 20px;
    cursor: pointer;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
}

.el-divider--vertical {
    display: inline-block;
    width: 1px;
    height: 1em;
    margin: 0 8px;
    vertical-align: middle;
    position: relative;
}

.el-divider {
    background-color: #dcdfe6;
    /* position: relative; */
}

.font-14[data-v-1a259ece] {
    font-size: 14px;
}

.right-info .item[data-v-1a259ece] {
    margin-left: 10px;
    font-size: 14px;
}

.right-info .item {
    /* margin-left: 30px; */
    cursor: pointer;
}

.iconfont, [class*=" icon"], [class^=icon] {
    font-family: iconfont !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.iconxitongguanli:before {
    content: "\e66b";
}

.el-divider--vertical {
    display: inline-block;
    width: 1px;
    height: 1em;
    margin: 0 8px;
    vertical-align: middle;
    position: relative;
}

.el-divider {
    background-color: #dcdfe6;
    /* position: relative; */
}

.right-info .item[data-v-1a259ece] {
    margin-left: 10px;
    font-size: 14px;
}

.right-info .item {
    /* margin-left: 30px; */
    cursor: pointer;
}

.right-info .logout i {
    margin-right: 2px;
    font-weight: 600;
}

[class^=el-icon-] {
    font-family: element-icons !important;
    speak: none;
    font-style: normal;
    /* font-weight: 400; */
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.el-icon-switch-button:before {
    content: "\e71b";
}

.right-info .item[data-v-1a259ece] {
    margin-left: 10px;
    font-size: 14px;
}

.right-info .item {
    /* margin-left: 30px; */
    cursor: pointer;
}

.el-badge {
    position: relative;
    vertical-align: middle;
    display: inline-block;
}

[class^=el-icon-] {
    font-family: element-icons !important;
    speak: none;
    font-style: normal;
    /* font-weight: 400; */
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.el-badge__content.is-fixed {
    position: absolute;
    top: 0;
    right: 10px;
    /* -webkit-transform: translateY(-50%) translateX(100%); */
    transform: translateY(-50%) translateX(100%);
}

.el-badge__content {
    border-radius: 10px;
    color: #fff;
    display: inline-block;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    text-align: center;
    white-space: nowrap;
    border: 1px solid #fff;
}

.el-badge__content, .el-progress.is-exception .el-progress-bar__inner {
    background-color: #f56c6c;
}

sup {
    vertical-align: text-top;
}

.header[data-v-1a259ece] {
    width: 100%;
    height: 50px;
    z-index: 100;
    background-size: 100% 42px;
}

.skinHead0[data-v-1a259ece] {
    background-color: #fff;
}

.menu[data-v-1a259ece] {
    width: 120%;
    height: 60px;
}

.menu[data-v-1a259ece] .el-menu.el-menu--horizontal {
    border: none;
    background-color: transparent !important;
}

.menu[data-v-1a259ece] .el-menu, .menu[data-v-1a259ece] .el-menu-item {
    padding: 0;
    position: static;
}

ul {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    unicode-bidi: isolate;
}

.el-menu:before {
    display: table;
    content: "";
}

.menu[data-v-1a259ece] .el-menu-item.is-active {
    background: #f4f7fa !important;
    color: #ec882f !important;
    font-weight: 700;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 50px;
}

.menu[data-v-1a259ece] .el-menu--horizontal>.el-menu-item, .menu[data-v-1a259ece] .el-menu--horizontal>.el-submenu .el-submenu__title {
    /* height: 50px; */
    line-height: 47px;
    margin: 0 15px;
    text-align: center;
    font-size: 16px;
}

.menu[data-v-1a259ece] .el-menu--horizontal>.el-menu-item, .menu[data-v-1a259ece] .el-menu.el-menu--horizontal {
    border: none;
    /* background-color: transparent !important; */
}

.menu[data-v-1a259ece] .el-menu .el-menu-item {
    float: left;
}

.menu[data-v-1a259ece] .el-menu-item {
    padding: 0;
    position: static;
}

.el-menu-item {
    /* font-size: 14px; */
    /* padding: 0 20px; */
    cursor: pointer;
}

li {
    display: list-item;
    unicode-bidi: isolate;
}

.item-nav[data-v-1a259ece] {
    display: inline-block;
    padding: 0 7px;
    min-width: 95px;
    position: relative;
    vertical-align: middle;
}

.el-menu-item.is-active i {
    color: inherit;
}

.el-menu-item * {
    vertical-align: middle;
}

.el-icon-s-home:before {
    content: "\e7b9";
}

.main[data-v-1a259ece] {
    max-width: 1900px;
    /* padding-right: 20px; */
    margin: 0 auto;
    padding: 0 20px;
    overflow: hidden;
}

.el-main {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    /* overflow: auto; */
}

main {
    unicode-bidi: isolate;
}

.search[data-v-0c0d23e9] {
    width: 90%;
    height: 60px;
    float: left;
    line-height: 55px;
    margin: 0 auto;
    margin-bottom: 10px;
    margin-top: 15px;
    border-radius: 10px;
    padding-top: 0;
    background-color: #fff;
    /* -webkit-box-shadow: 0 8px 12px 0 rgba(0, 0, 0, .08); */
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, .08);
}

.search[data-v-0c0d23e9], .ul-form[data-v-0c0d23e9], .ul-search[data-v-0c0d23e9], [data-v-0c0d23e9] .create {
    padding: 0;
}

form {
    display: block;
    unicode-bidi: isolate;
}

.el-row[data-v-0c0d23e9], .el-row[data-v-0c0d23e9]:last-child {
    margin-bottom: 0;
}

.el-row {
    position: relative;
}

.el-row:before {
    display: table;
}

.search .el-col {
    text-align: right;
}

.el-col-24 {
    width: 100%;
}

[class*=el-col-] {
    float: left;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.el-row[data-v-0c0d23e9], .el-row[data-v-0c0d23e9]:last-child {
    margin-bottom: 0;
}

.el-row {
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.search .el-col {
    text-align: right;
}

.el-col-6 {
    width: 25%;
}

[class*=el-col-] {
    float: left;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.el-radio-group {
    font-size: 0;
}

.el-radio-button__inner, .el-radio-group {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
}

.el-radio-button {
    position: relative;
    display: inline-block;
    outline: 0;
}

label {
    cursor: default;
}

.el-radio-button__orig-radio {
    opacity: 0;
    outline: 0;
    position: absolute;
    z-index: -1;
}

button, input, select, textarea {
    font-size: 100%;
}

input {
    margin: 0;
    padding: 0;
}

input[type="radio" i] {
    background-color: initial;
    cursor: default;
    appearance: auto;
    box-sizing: border-box;
    border: initial;
}

[data-v-0c0d23e9] .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    border-radius: 5px;
    border: none;
    background-color: #85c2f9;
    color: #fff;
    margin-right: 10px;
    font-size: 12px;
}

.el-radio-button__inner {
    background: #fff;
    /* border: 1px solid #dcdfe6; */
    font-weight: 500;
    /* border-left: 0; */
    /* color: #606266; */
    -webkit-appearance: none;
    text-align: center;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    cursor: pointer;
    /* -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1); */
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    padding: 12px 20px;
    /* font-size: 14px; */
    /* border-radius: 0; */
}

.el-radio-button__inner, .el-radio-group {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
}

.el-radio-button__inner, .el-submenu__title {
    /* -webkit-box-sizing: border-box; */
    position: relative;
    white-space: nowrap;
}

.el-radio-button {
    position: relative;
    display: inline-block;
    outline: 0;
}

label {
    cursor: default;
}

.el-radio-button__orig-radio {
    opacity: 0;
    outline: 0;
    position: absolute;
    z-index: -1;
}

button, input, select, textarea {
    font-size: 100%;
}

[data-v-0c0d23e9] .el-radio-button .el-radio-button__inner {
    border-radius: 5px;
    border: none;
    background-color: #dedede;
    color: #474747;
    margin-right: 10px;
    font-size: 12px;
}

.el-radio-button__inner {
    background: #fff;
    /* border: 1px solid #dcdfe6; */
    font-weight: 500;
    /* border-left: 0; */
    /* color: #606266; */
    -webkit-appearance: none;
    text-align: center;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    cursor: pointer;
    /* -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1); */
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    padding: 12px 20px;
    /* font-size: 14px; */
    /* border-radius: 0; */
}

.el-radio-button__inner, .el-radio-group {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
}

.el-radio-button__inner, .el-submenu__title {
    /* -webkit-box-sizing: border-box; */
    position: relative;
    white-space: nowrap;
}

.el-radio-button {
    position: relative;
    display: inline-block;
    outline: 0;
}

label {
    cursor: default;
}

.el-radio-button__orig-radio {
    opacity: 0;
    outline: 0;
    position: absolute;
    z-index: -1;
}

button, input, select, textarea {
    font-size: 100%;
}


</style>