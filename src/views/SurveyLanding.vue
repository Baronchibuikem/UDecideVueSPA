<template>
<div>
    <my-header/>
    <sidebar/>
    <div class="page-wrapper">
      <div class="container-fluid">
        <div id="content_area">
            
                <div class="col-md-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Survey</h4>
                                            
                                            
                                            <ul class="nav nav-tabs" role="tablist">
                                                <li class="nav-item"> 
                                                    <a class="nav-link active show" data-toggle="tab" href="#home" role="tab" aria-selected="true">
                                                    <span class="hidden-sm-up">
                                                        <i class="ti-home"></i>
                                                    </span> 
                                                    <span class="hidden-xs-down">Active Surveys</span>
                                                </a> 
                                               </li>
                                                <li class="nav-item"> 
                                                    <a class="nav-link" data-toggle="tab" href="#profile" role="tab" aria-selected="false">
                                                        <span class="hidden-sm-up"><i class="ti-user"></i></span> 
                                                        <span class="hidden-xs-down">Achived Surveys</span>
                                                    </a> 
                                                </li>
                                                
                                            </ul>

                                            
                                            <div class="tab-content tabcontent-border">
                                                <div class="tab-pane active show" id="home" role="tabpanel">
                                                <div class="card">

                                        <div class="card-body">
                                            
                                            <button type="button" class="btn btn-primary pull-left" 
                                            onclick="return showmodal();">
                                                <i class="fa fa-plus-circle"></i> Create New (via modal)
                                            </button>

                                            <button type="button" class="btn btn-info pull-right" 
                                            @click="goToPollForm('pollform')">
                                                <i class="fa fa-plus-circle"></i> Create a poll
                                            </button>

                                            <div class="table-responsive m-t-40">
                                                <div class="col-md-3">
                                   
                                </div>
                                                <table id="example23" class="display nowrap table table-hover table-striped table-bordered" cellspacing="0" width="100%">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Created At</th>
                                                            <th>Updated On</th>
                                                        </tr>
                                                    </thead>
                                                    <tfoot>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Created At</th>
                                                            <th>Updated On</th>
                                                        </tr>
                                                    </tfoot>
                                                    <tbody>
                                                        
                                                        <tr>
                                                            <td>Serge Baldwin</td>
                                                            <td>Data Coordinator</td>
                                                            <td>Singapore</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Zenaida Frank</td>
                                                            <td>Software Engineer</td>
                                                            <td>New York</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Zorita Serrano</td>
                                                            <td>Software Engineer</td>
                                                            <td>San Francisco</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Jennifer Acosta</td>
                                                            <td>Junior Javascript Developer</td>
                                                            <td>Edinburgh</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Cara Stevens</td>
                                                            <td>Sales Assistant</td>
                                                            <td>New York</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Hermione Butler</td>
                                                            <td>Regional Director</td>
                                                            <td>London</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Lael Greer</td>
                                                            <td>Systems Administrator</td>
                                                            <td>London</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Jonas Alexander</td>
                                                            <td>Developer</td>
                                                            <td>San Francisco</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                                </div>

                                                <div class="tab-pane p-40" id="profile" role="tabpanel">
                                                    <div class="p-40">
                                                        <div class="card">
                                        <div class="card-body">
                                            
                                            <div class="table-responsive m-t-40">
                                                <table id="example24" class="display nowrap table table-hover table-striped table-bordered" cellspacing="0" width="100%">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Created At</th>
                                                            <th>Updated On</th>
                                                        </tr>
                                                    </thead>
                                                    <tfoot>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Created At</th>
                                                            <th>Updated On</th>
                                                        </tr>
                                                    </tfoot>
                                                    <tbody>
                                                        <tr>
                                                            <td>Tiger Nixon</td>
                                                            <td>System Architect</td>
                                                            <td>Edinburgh</td>
                                                        </tr>
                                                        
                                                        <tr>
                                                            <td>Shad Decker</td>
                                                            <td>Regional Director</td>
                                                            <td>Edinburgh</td>
                                                        </tr>
                                                        
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                                    </div>
                                                
                                   
                                       
                                    
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>


            <!-- sample modal content -->
            <div class="modal fade bs-example-modal-lg" id="modal01" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myLargeModalLabel">Survey type selection</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div class="modal-body">
                        <h4>Overflowing text to show scroll behavior</h4>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-danger waves-effect text-left" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
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
//import Bootstrap from './../assets/js/bootstrap'
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/css/vue-popper.css';



	export default 
	{
	name:'surveylanding',
     components: {
       'popper': Popper
       // 'bootstrap': Bootstrap
     },
	
       mounted() {
        
            this.datatable_function();

            

             
        
        },

        methods:{
            goToPollForm(page) {
              this.$navigate.to(page);
            },
            datatable_function(){
                $('#myTable').DataTable();
                let table = $('#example').DataTable({
                "columnDefs": [{"visible": false,"targets": 2}],
                "order": [[2, 'asc']],
                "displayLength": 25,
                "drawCallback": function() {
                    let api = this.api();
                    let rows = api.rows({page: 'current'}).nodes();
                    let last = null;
                    api.column(2, {page: 'current'}).data().each(function(group, i) {
                        if (last !== group) {
                            $(rows).eq(i).before('<tr class="group"><td colspan="5">' + group + '</td></tr>');
                            last = group;
                        }
                    });
                }
            });

                $('#example tbody').on('click', 'tr.group', function() {
                let currentOrder = table.order()[0];
                if (currentOrder[0] === 2 && currentOrder[1] === 'asc') {
                    table.order([2, 'desc']).draw();
                }else {
                    table.order([2, 'asc']).draw();
                    }
                });

                 $('#example23').DataTable({
                    dom: 'Bfrtip',
                    buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
                });

                 $('#example24').DataTable({
                    dom: 'Bfrtip',
                    buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
                });
            }

        }
 



	}

</script>