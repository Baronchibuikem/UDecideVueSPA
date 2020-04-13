<template>
<div>

<aside class="left-sidebar">
            
            <div class="scroll-sidebar">
                
                <nav class="sidebar-nav" >
                    <ul id="sidebarnav">
                        
                        <li>
                            <router-link :to="{name: 'dashboard'}" active-class="active" class="waves-effect waves-dark"
                            aria-expanded="false">
                                <i class="icon-Car-Wheel"></i>
                            <span class="hide-menu">Dashboard</span>
                            </router-link>
                        </li>

                        <li>
                            <router-link :to="{name: 'survey-landing'}" active-class="active" class="waves-effect waves-dark"
                            aria-expanded="false">
                                <i class="icon-Double-Circle"></i>
                            <span class="hide-menu">Survey</span>
                            </router-link>
                        </li>

                        
                        <li> 
                            <router-link :to="{name: 'feeds'}" active-class="active" class="waves-effect waves-dark" aria-expanded="false">
                              <i class="icon-Box-Full"></i>
                                <span class="hide-menu">Live Polls</span>
                            </router-link>
                        </li>

                       
                        
                        <li> 
                            <a class="has-arrow waves-effect waves-dark" aria-expanded="false"><i class="icon-Receipt-4"></i><span class="hide-menu">Reporting Tools</span></a>
                        </li>
                        
                        
                        <li> <a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i class="icon-Pie-Chart"></i><span class="hide-menu">Charts</span></a>
                            <ul aria-expanded="false" class="collapse">
                                <li><a href="chart-morris.html">Morris Chart</a></li>
                                <li><a href="chart-chartist.html">Chartis Chart</a></li>
                                <li><a href="chart-echart.html">Echarts</a></li>
                                <li><a href="chart-flot.html">Flot Chart</a></li>
                                <li><a href="chart-knob.html">Knob Chart</a></li>
                                <li><a href="chart-chart-js.html">Chartjs</a></li>
                                <li><a href="chart-sparkline.html">Sparkline Chart</a></li>
                                <li><a href="chart-extra-chart.html">Extra chart</a></li>
                                <li><a href="chart-peity.html">Peity Charts</a></li>
                            </ul>
                        </li>
                        <li> <a class="has-arrow waves-effect waves-dark" aria-expanded="false"><i class="icon-Prater"></i><span class="hide-menu">Settings</span></a>
                            <ul aria-expanded="false" class="collapse">
                                <li><a>Profile</a></li>
                                <li><a>Notifications</a></li>
                                <li><a>Messages</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </li>
                        
                        
                    </ul>
                </nav>
                
            </div>
            
        </aside>

</div>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>