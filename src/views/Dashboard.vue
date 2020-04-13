<template>
    <div>
        <my-header/>
        <sidebar/>
        <div class="page-wrapper">
          <div class="container-fluid">
            <div id="content_area">
                <div class="dashboard">
                  <!-- ============================================================== -->
                              <!-- Bread crumb and right sidebar toggle -->
                              <!-- ============================================================== -->
                              <div class="row page-titles">
                                  <div class="col-md-5 align-self-center">
                                      <h3 class="text-themecolor">YouDecide</h3>
                                      <ol class="breadcrumb">
                                          <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                          <li class="breadcrumb-item active">Dashboard</li>
                                      </ol>
                                  </div>
                                  <div class="col-md-7 align-self-center text-right d-none d-md-block">
                                      <button type="button" class="btn btn-info"><i class="fa fa-plus-circle"></i> Create New</button>
                                  </div>
                                 
                              </div>
                              <!-- ============================================================== -->
                              <!-- End Bread crumb and right sidebar toggle -->
                              <!-- ============================================================== -->
                              <!-- ============================================================== -->
                              <!-- Info box -->
                              <!-- ============================================================== -->
                              <div class="row">
                                  <!-- Column -->
                                  <div class="col-lg-3 col-md-6">
                                      <div class="card">
                                          <div class="card-body">
                                              <div class="d-flex p-10 no-block">
                                                  <div class="align-slef-center">
                                                      <h2 class="m-b-0">234</h2>
                                                      <h6 class="text-muted m-b-0">New Clients</h6>
                                                  </div>
                                                  <div class="align-self-center display-6 ml-auto"><i class="text-success icon-Target-Market"></i></div>
                                              </div>
                                          </div>
                                          <div class="progress">
                                              <div class="progress-bar bg-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:70%; height:3px;"> <span class="sr-only">50% Complete</span></div>
                                          </div>
                                      </div>
                                  </div>
                                  <!-- Column -->
                                  <!-- Column -->
                                  <div class="col-lg-3 col-md-6">
                                      <div class="card">
                                          <div class="card-body">
                                              <div class="d-flex p-10 no-block">
                                                  <div class="align-slef-center">
                                                      <h2 class="m-b-0">$6,759</h2>
                                                      <h6 class="text-muted m-b-0">This Week</h6>
                                                  </div>
                                                  <div class="align-self-center display-6 ml-auto"><i class="text-info icon-Dollar-Sign"></i></div>
                                              </div>
                                          </div>
                                          <div class="progress">
                                              <div class="progress-bar bg-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:70%; height:3px;"> <span class="sr-only">50% Complete</span></div>
                                          </div>
                                      </div>
                                  </div>
                                  <!-- Column -->
                                  <!-- Column -->
                                  <div class="col-lg-3 col-md-6">
                                      <div class="card">
                                          <div class="card-body">
                                              <div class="d-flex p-10 no-block">
                                                  <div class="align-slef-center">
                                                      <h2 class="m-b-0">2,356</h2>
                                                      <h6 class="text-muted m-b-0">Emails Sent</h6>
                                                  </div>
                                                  <div class="align-self-center display-6 ml-auto"><i class="text-primary icon-Inbox-Forward"></i></div>
                                              </div>
                                          </div>
                                          <div class="progress">
                                              <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:70%; height:3px;"> <span class="sr-only">50% Complete</span></div>
                                          </div>
                                      </div>
                                  </div>
                                  <!-- Column -->
                                  <!-- Column -->
                                  <div class="col-lg-3 col-md-6">
                                      <div class="card">
                                          <div class="card-body">
                                              <div class="d-flex p-10 no-block">
                                                  <div class="align-slef-center">
                                                      <h2 class="m-b-0">38</h2>
                                                      <h6 class="text-muted m-b-0">Deals in Pipeline</h6>
                                                  </div>
                                                  <div class="align-self-center display-6 ml-auto"><i class="text-danger icon-Contrast"></i></div>
                                              </div>
                                          </div>
                                          <div class="progress">
                                              <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:70%; height:3px;"> <span class="sr-only">50% Complete</span></div>
                                          </div>
                                      </div>
                                  </div>
                                  <!-- Column -->
                                  <!-- Column -->
                              </div>
                              <!-- ============================================================== -->
                              <!-- End Info box -->
                              <!-- ============================================================== -->
                              
                              <!-- ============================================================== -->
                              <!-- Sales Chart and browser state-->
                              <!-- ============================================================== -->
                              <div class="row">
                                  <!-- Column -->
                                  <div class="col-lg-8">
                                      <div class="card">
                                          <div class="card-body">
                                              <div class="d-flex no-block">
                                                  <div>
                                                      <h5 class="card-title m-b-0">Sales Chart</h5>
                                                  </div>
                                                  <div class="ml-auto">
                                                      <ul class="list-inline text-center font-12">
                                                          <li><i class="fa fa-circle text-success"></i> SITE A</li>
                                                          <li><i class="fa fa-circle text-info"></i> SITE B</li>
                                                          <li><i class="fa fa-circle text-primary"></i> SITE C</li>
                                                      </ul>
                                                  </div>
                                              </div>
                                              <div class="" id="sales-chart" style="height: 355px; position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><svg height="355" version="1.1" width="659.531" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="overflow: hidden; position: relative;"><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.2.0</desc><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs><text x="32.515625" y="316" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;" font-weight="normal"><tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">0</tspan></text><path fill="none" stroke="#e0e0e0" d="M45.015625,316H634.531" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="32.515625" y="243.25" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;" font-weight="normal"><tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">75</tspan></text><path fill="none" stroke="#e0e0e0" d="M45.015625,243.25H634.531" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="32.515625" y="170.5" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;" font-weight="normal"><tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">150</tspan></text><path fill="none" stroke="#e0e0e0" d="M45.015625,170.5H634.531" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="32.515625" y="97.75" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;" font-weight="normal"><tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">225</tspan></text><path fill="none" stroke="#e0e0e0" d="M45.015625,97.75H634.531" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="32.515625" y="25" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;" font-weight="normal"><tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">300</tspan></text><path fill="none" stroke="#e0e0e0" d="M45.015625,25H634.531" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="634.531" y="328.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;" font-weight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2017</tspan></text><text x="536.0991445027372" y="328.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;" font-weight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2016</tspan></text><text x="437.9362285013686" y="328.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;" font-weight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2015</tspan></text><text x="339.7733125" y="328.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;" font-weight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2014</tspan></text><text x="241.61039649863136" y="328.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;" font-weight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2013</tspan></text><text x="143.17854100136861" y="328.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;" font-weight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2012</tspan></text><text x="45.015625" y="328.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;" font-weight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2011</tspan></text><path fill="#56bbe1" stroke="none" d="M45.015625,267.5C69.55635400034215,248.1,118.63781200102646,193.5325239398085,143.17854100136861,189.9C167.7865048756843,186.2575239398085,217.00243262431567,231.11504787961698,241.61039649863136,238.4C266.1511254989735,245.66504787961696,315.23258349965784,260.225,339.7733125,248.10000000000002C364.3140415003421,235.97500000000002,413.39549950102645,145.64375,437.9362285013686,141.4C462.47695750171073,137.15625,511.55841550239506,222.62588919288646,536.0991445027372,214.15C560.7071083770529,205.65088919288647,609.9230361256842,108.6625,634.531,73.5L634.531,316L45.015625,316Z" fill-opacity="0" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 0;"></path><path fill="none" stroke="#20aee3" d="M45.015625,267.5C69.55635400034215,248.1,118.63781200102646,193.5325239398085,143.17854100136861,189.9C167.7865048756843,186.2575239398085,217.00243262431567,231.11504787961698,241.61039649863136,238.4C266.1511254989735,245.66504787961696,315.23258349965784,260.225,339.7733125,248.10000000000002C364.3140415003421,235.97500000000002,413.39549950102645,145.64375,437.9362285013686,141.4C462.47695750171073,137.15625,511.55841550239506,222.62588919288646,536.0991445027372,214.15C560.7071083770529,205.65088919288647,609.9230361256842,108.6625,634.531,73.5" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><circle cx="45.015625" cy="267.5" r="0" fill="#20aee3" stroke="#20aee3" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="143.17854100136861" cy="189.9" r="0" fill="#20aee3" stroke="#20aee3" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="241.61039649863136" cy="238.4" r="0" fill="#20aee3" stroke="#20aee3" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="339.7733125" cy="248.10000000000002" r="0" fill="#20aee3" stroke="#20aee3" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="437.9362285013686" cy="141.4" r="0" fill="#20aee3" stroke="#20aee3" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="536.0991445027372" cy="214.15" r="0" fill="#20aee3" stroke="#20aee3" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="634.531" cy="73.5" r="0" fill="#20aee3" stroke="#20aee3" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><path fill="#4fd8c1" stroke="none" d="M45.015625,238.4C69.55635400034215,233.55,118.63781200102646,216.578317373461,143.17854100136861,219C167.7865048756843,221.428317373461,217.00243262431567,269.9415868673051,241.61039649863136,257.8C266.1511254989735,245.69158686730506,315.23258349965784,132.9125,339.7733125,122C364.3140415003421,111.0875,413.39549950102645,158.375,437.9362285013686,170.5C462.47695750171073,182.625,511.55841550239506,219,536.0991445027372,219C560.7071083770529,219,609.9230361256842,182.625,634.531,170.5L634.531,316L45.015625,316Z" fill-opacity="0" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 0;"></path><path fill="none" stroke="#24d2b5" d="M45.015625,238.4C69.55635400034215,233.55,118.63781200102646,216.578317373461,143.17854100136861,219C167.7865048756843,221.428317373461,217.00243262431567,269.9415868673051,241.61039649863136,257.8C266.1511254989735,245.69158686730506,315.23258349965784,132.9125,339.7733125,122C364.3140415003421,111.0875,413.39549950102645,158.375,437.9362285013686,170.5C462.47695750171073,182.625,511.55841550239506,219,536.0991445027372,219C560.7071083770529,219,609.9230361256842,182.625,634.531,170.5" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><circle cx="45.015625" cy="238.4" r="0" fill="#24d2b5" stroke="#24d2b5" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="143.17854100136861" cy="219" r="0" fill="#24d2b5" stroke="#24d2b5" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="241.61039649863136" cy="257.8" r="0" fill="#24d2b5" stroke="#24d2b5" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="339.7733125" cy="122" r="0" fill="#24d2b5" stroke="#24d2b5" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="437.9362285013686" cy="170.5" r="0" fill="#24d2b5" stroke="#24d2b5" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="536.0991445027372" cy="219" r="0" fill="#24d2b5" stroke="#24d2b5" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="634.531" cy="170.5" r="0" fill="#24d2b5" stroke="#24d2b5" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><path fill="#a4aaeb" stroke="none" d="M45.015625,296.6C69.55635400034215,282.05,118.63781200102646,244.45420656634747,143.17854100136861,238.4C167.7865048756843,232.32920656634747,217.00243262431567,255.38495212038305,241.61039649863136,248.10000000000002C266.1511254989735,240.83495212038306,315.23258349965784,188.68750000000003,339.7733125,180.20000000000002C364.3140415003421,171.7125,413.39549950102645,172.925,437.9362285013686,180.20000000000002C462.47695750171073,187.47500000000002,511.55841550239506,245.66504787961696,536.0991445027372,238.4C560.7071083770529,231.11504787961698,609.9230361256842,151.1,634.531,122L634.531,316L45.015625,316Z" fill-opacity="0" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 0;"></path><path fill="none" stroke="#6772e5" d="M45.015625,296.6C69.55635400034215,282.05,118.63781200102646,244.45420656634747,143.17854100136861,238.4C167.7865048756843,232.32920656634747,217.00243262431567,255.38495212038305,241.61039649863136,248.10000000000002C266.1511254989735,240.83495212038306,315.23258349965784,188.68750000000003,339.7733125,180.20000000000002C364.3140415003421,171.7125,413.39549950102645,172.925,437.9362285013686,180.20000000000002C462.47695750171073,187.47500000000002,511.55841550239506,245.66504787961696,536.0991445027372,238.4C560.7071083770529,231.11504787961698,609.9230361256842,151.1,634.531,122" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><circle cx="45.015625" cy="296.6" r="0" fill="#6772e5" stroke="#6772e5" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="143.17854100136861" cy="238.4" r="0" fill="#6772e5" stroke="#6772e5" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="241.61039649863136" cy="248.10000000000002" r="0" fill="#6772e5" stroke="#6772e5" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="339.7733125" cy="180.20000000000002" r="0" fill="#6772e5" stroke="#6772e5" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="437.9362285013686" cy="180.20000000000002" r="0" fill="#6772e5" stroke="#6772e5" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="536.0991445027372" cy="238.4" r="0" fill="#6772e5" stroke="#6772e5" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="634.531" cy="122" r="0" fill="#6772e5" stroke="#6772e5" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle></svg><div class="morris-hover morris-default-style" style="display: none;"></div></div>
                                          </div>
                                      </div>
                                  </div>
                                  <!-- Column -->
                                  <div class="col-lg-4">
                                      <div class="card">
                                          <div class="card-body">
                                              <h5 class="card-title">Browser Stats</h5>
                                              <table class="table browser m-t-30 no-border">
                                                  <tbody>
                                                      <tr>
                                                          <td style="width:40px"><img src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/browser/chrome-logo.png" alt="logo"></td>
                                                          <td>Google Chrome</td>
                                                          <td class="text-right">23%</td>
                                                      </tr>
                                                      <tr>
                                                          <td><img src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/browser/firefox-logo.png" alt="logo"></td>
                                                          <td>Mozila Firefox</td>
                                                          <td class="text-right">15%</td>
                                                      </tr>
                                                      <tr>
                                                          <td><img src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/browser/safari-logo.png" alt="logo"></td>
                                                          <td>Apple Safari</td>
                                                          <td class="text-right">07%</td>
                                                      </tr>
                                                      <tr>
                                                          <td><img src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/browser/internet-logo.png" alt="logo"></td>
                                                          <td>Internet Explorer</td>
                                                          <td class="text-right">09%</td>
                                                      </tr>
                                                      <tr>
                                                          <td><img src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/browser/opera-logo.png" alt="logo"></td>
                                                          <td>Opera mini</td>
                                                          <td class="text-right">23%</td>
                                                      </tr>
                                                      <tr>
                                                          <td><img src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/browser/netscape-logo.png" alt="logo"></td>
                                                          <td>Netscape Navigator</td>
                                                          <td class="text-right">04%</td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <!-- ============================================================== -->
                              <!-- End Sales Chart -->
                              <!-- ============================================================== -->
                              <!-- ============================================================== -->
                              <!-- Projects of the Month -->
                              <!-- ============================================================== -->
                              <div class="row">
                                  <!-- Column -->
                                  <div class="col-lg-8">
                                      <div class="card">
                                          <div class="card-body">
                                              <div class="d-flex">
                                                  <div>
                                                      <h5 class="card-title">Projects of the Month</h5>
                                                  </div>
                                                  <div class="ml-auto">
                                                      <select class="custom-select b-0">
                                                          <option selected="">January</option>
                                                          <option value="1">February</option>
                                                          <option value="2">March</option>
                                                          <option value="3">April</option>
                                                      </select>
                                                  </div>
                                              </div>
                                              <div class="table-responsive m-t-20 no-wrap">
                                                  <table class="table vm no-th-brd pro-of-month">
                                                      <thead>
                                                          <tr>
                                                              <th colspan="2">Assigned</th>
                                                              <th>Name</th>
                                                              <th>Priority</th>
                                                              <th>Budget</th>
                                                          </tr>
                                                      </thead>
                                                      <tbody>
                                                          <tr>
                                                              <td style="width:50px;"><span class="round">S</span></td>
                                                              <td>
                                                                  <h6>Sunil Joshi</h6><small class="text-muted">Web Designer</small></td>
                                                              <td>Elite Admin</td>
                                                              <td><span class="label label-success label-rounded">Low</span></td>
                                                              <td>$3.9K</td>
                                                          </tr>
                                                          <tr class="active">
                                                              <td><span class="round"><img src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/users/2.jpg" alt="user" width="50"></span></td>
                                                              <td>
                                                                  <h6>Andrew</h6><small class="text-muted">Project Manager</small></td>
                                                              <td>Real Homes</td>
                                                              <td><span class="label label-info label-rounded">Medium</span></td>
                                                              <td>$23.9K</td>
                                                          </tr>
                                                          <tr>
                                                              <td><span class="round round-success">B</span></td>
                                                              <td>
                                                                  <h6>Bhavesh patel</h6><small class="text-muted">Developer</small></td>
                                                              <td>MedicalPro Theme</td>
                                                              <td><span class="label label-primary label-rounded">High</span></td>
                                                              <td>$12.9K</td>
                                                          </tr>
                                                          <tr>
                                                              <td><span class="round round-primary">N</span></td>
                                                              <td>
                                                                  <h6>Nirav Joshi</h6><small class="text-muted">Frontend Eng</small></td>
                                                              <td>Elite Admin</td>
                                                              <td><span class="label label-danger label-rounded">Low</span></td>
                                                              <td>$10.9K</td>
                                                          </tr>
                                                          <tr>
                                                              <td><span class="round round-warning">M</span></td>
                                                              <td>
                                                                  <h6>Micheal Doe</h6><small class="text-muted">Content Writer</small></td>
                                                              <td>Helping Hands</td>
                                                              <td><span class="label label-success label-rounded">High</span></td>
                                                              <td>$12.9K</td>
                                                          </tr>
                                                          <tr>
                                                              <td><span class="round round-danger">N</span></td>
                                                              <td>
                                                                  <h6>Johnathan</h6><small class="text-muted">Graphic</small></td>
                                                              <td>Digital Agency</td>
                                                              <td><span class="label label-info label-rounded">High</span></td>
                                                              <td>$2.6K</td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <!-- Column -->
                                  <div class="col-lg-4">
                                      <div class="card">
                                          <div class="card-body">
                                              <div class="d-flex no-block">
                                                  <div>
                                                      <h5 class="card-title m-b-0">Weather</h5>
                                                  </div>
                                                  <div class="ml-auto">
                                                      <select class="custom-select b-0">
                                                          <option selected="">January</option>
                                                          <option value="1">February</option>
                                                          <option value="2">March</option>
                                                          <option value="3">April</option>
                                                      </select>
                                                  </div>
                                              </div>
                                              <div class="d-flex align-items-center flex-row m-t-30">
                                                  <div class="p-2 display-5 text-info"><i class="wi wi-day-showers"></i> <span>73<sup>°</sup></span></div>
                                                  <div class="p-2">
                                                      <h3 class="m-b-0">Saturday</h3><small>Ahmedabad, India</small></div>
                                              </div>
                                              <table class="table no-border">
                                                  <tbody>
                                                      <tr>
                                                          <td>Wind</td>
                                                          <td class="font-medium">ESE 17 mph</td>
                                                      </tr>
                                                      <tr>
                                                          <td>Humidity</td>
                                                          <td class="font-medium">83%</td>
                                                      </tr>
                                                      <tr>
                                                          <td>Pressure</td>
                                                          <td class="font-medium">28.56 in</td>
                                                      </tr>
                                                      <tr>
                                                          <td>Cloud Cover</td>
                                                          <td class="font-medium">78%</td>
                                                      </tr>
                                                      <tr>
                                                          <td>Ceiling</td>
                                                          <td class="font-medium">25760 ft</td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </div>
                                          <div class="card-body b-t">
                                              <ul class="list-unstyled row text-center city-weather-days">
                                                  <li class="col"><i class="wi wi-day-sunny"></i><span>09:30</span>
                                                      <h3>70<sup>°</sup></h3></li>
                                                  <li class="col"><i class="wi wi-day-cloudy"></i><span>11:30</span>
                                                      <h3>72<sup>°</sup></h3></li>
                                                  <li class="col"><i class="wi wi-day-hail"></i><span>13:30</span>
                                                      <h3>75<sup>°</sup></h3></li>
                                                  <li class="col"><i class="wi wi-day-sprinkle"></i><span>15:30</span>
                                                      <h3>76<sup>°</sup></h3></li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <!-- ============================================================== -->
                              <!-- End Projects of the Month -->
                              <!-- ============================================================== -->
                              <!-- ============================================================== -->
                              <!-- Comment - chats -->
                              <!-- ============================================================== -->
                              <div class="row">
                                  <div class="col-lg-6">
                                      <div class="card">
                                          <div class="card-body">
                                              <h5 class="card-title">Recent Comments</h5>
                                          </div>
                                          <!-- ============================================================== -->
                                          <!-- Comment widgets -->
                                          <!-- ============================================================== -->
                                          <div class="comment-widgets">
                                              <!-- Comment Row -->
                                              <div class="d-flex flex-row comment-row">
                                                  <div class="p-2"><span class="round"><img src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/users/1.jpg" alt="user" width="50"></span></div>
                                                  <div class="comment-text w-100">
                                                      <h5>James Anderson</h5>
                                                      <p class="m-b-5">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                                                      <div class="comment-footer">
                                                          <span class="text-muted pull-right">April 14, 2016</span> <span class="label label-rounded label-info">Pending</span> <span class="action-icons">
                                                                  <a href="javascript:void(0)"><i class="ti-pencil-alt"></i></a>
                                                                  <a href="javascript:void(0)"><i class="ti-check"></i></a>
                                                                  <a href="javascript:void(0)"><i class="ti-heart"></i></a>    
                                                              </span> </div>
                                                  </div>
                                              </div>
                                              <!-- Comment Row -->
                                              <div class="d-flex flex-row comment-row">
                                                  <div class="p-2"><span class="round"><img src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/users/2.jpg" alt="user" width="50"></span></div>
                                                  <div class="comment-text active w-100">
                                                      <h5>Michael Jorden</h5>
                                                      <p class="m-b-5">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry..</p>
                                                      <div class="comment-footer ">
                                                          <span class="text-muted pull-right">April 14, 2016</span>
                                                          <span class="label label-success label-rounded">Approved</span>
                                                          <span class="action-icons active">
                                                                  <a href="javascript:void(0)"><i class="ti-pencil-alt"></i></a>
                                                                  <a href="javascript:void(0)"><i class="icon-close"></i></a>
                                                                  <a href="javascript:void(0)"><i class="ti-heart text-danger"></i></a>    
                                                              </span>
                                                      </div>
                                                  </div>
                                              </div>
                                              <!-- Comment Row -->
                                              <div class="d-flex flex-row comment-row">
                                                  <div class="p-2"><span class="round"><img src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/users/3.jpg" alt="user" width="50"></span></div>
                                                  <div class="comment-text w-100">
                                                      <h5>Johnathan Doeting</h5>
                                                      <p class="m-b-5">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                                                      <div class="comment-footer">
                                                          <span class="text-muted pull-right">April 14, 2016</span>
                                                          <span class="label label-rounded label-danger">Rejected</span>
                                                          <span class="action-icons">
                                                                  <a href="javascript:void(0)"><i class="ti-pencil-alt"></i></a>
                                                                  <a href="javascript:void(0)"><i class="ti-check"></i></a>
                                                                  <a href="javascript:void(0)"><i class="ti-heart"></i></a>    
                                                              </span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-lg-6">
                                      <div class="card">
                                          <div class="card-body">
                                              <h5 class="card-title">Recent Chats</h5>
                                              <div class="chat-box">
                                                  <!--chat Row -->
                                                  <ul class="chat-list">
                                                      <!--chat Row -->
                                                      <li>
                                                          <div class="chat-img"><img src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/users/1.jpg" alt="user"></div>
                                                          <div class="chat-content">
                                                              <h5>James Anderson</h5>
                                                              <div class="box bg-light-info">Lorem Ipsum is simply dummy text of the printing &amp; type setting industry.</div>
                                                          </div>
                                                          <div class="chat-time">10:56 am</div>
                                                      </li>
                                                      <!--chat Row -->
                                                      <li>
                                                          <div class="chat-img"><img src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/users/2.jpg" alt="user"></div>
                                                          <div class="chat-content">
                                                              <h5>Bianca Doe</h5>
                                                              <div class="box bg-light-info">It’s Great opportunity to work.</div>
                                                          </div>
                                                          <div class="chat-time">10:57 am</div>
                                                      </li>
                                                      <!--chat Row -->
                                                      <li class="odd">
                                                          <div class="chat-content">
                                                              <div class="box bg-light-inverse">I would love to join the team.</div>
                                                              <br>
                                                          </div>
                                                          <div class="chat-time">10:58 am</div>
                                                      </li>
                                                      <!--chat Row -->
                                                      <li class="odd">
                                                          <div class="chat-content">
                                                              <div class="box bg-light-inverse">Whats budget of the new project.</div>
                                                              <br>
                                                          </div>
                                                          <div class="chat-time">10:59 am</div>
                                                      </li>
                                                      <!--chat Row -->
                                                      <li>
                                                          <div class="chat-img"><img src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/users/3.jpg" alt="user"></div>
                                                          <div class="chat-content">
                                                              <h5>Angelina Rhodes</h5>
                                                              <div class="box bg-light-info">Well we have good budget for the project</div>
                                                          </div>
                                                          <div class="chat-time">11:00 am</div>
                                                      </li>
                                                      <!--chat Row -->
                                                  </ul>
                                              </div>
                                          </div>
                                          <div class="card-body b-t">
                                              <div class="row">
                                                  <div class="col-8">
                                                      <textarea placeholder="Type your message here" class="form-control b-0"></textarea>
                                                  </div>
                                                  <div class="col-4 text-right">
                                                      <button type="button" class="btn btn-info btn-circle btn-lg"><i class="fa fa-paper-plane-o"></i> </button>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <!-- ============================================================== -->
                              <!-- End Comment - chats -->
                              <!-- ============================================================== -->
                              <!-- ============================================================== -->
                              <!-- End Page Content -->
                              <!-- ============================================================== -->
                              
                          </div>
            </div>
            <rightNav/>
            <my-footer/>
          </div>
        </div>
    </div>
  
</template>

<script>
import $ from 'jquery'
//import 'bootstrap'
//import 'popper.js'

    export default 
    {
    name:'surveylanding',
    methods :{
        showmodal()
        {
            $('#modal01').modal('show');
        }
    }
    }
</script>
