$(document).ready(function () {

    console.log("Surekshya Sharma");


    getSalesforceDates();
}); 

function getSalesforceDates() {

    console.log("(ajax-call)Starting.........");

    $.ajax({
        type: "GET",

        url: "https://staging-stthomas.cs42.force.com/applicantportal/services/apexrest/usteventfeed?eventId=a3s56000000Mf6n&feedType=eventList&viewStart=2019-6-3+00:00:00&viewEnd=2019-9-3+24:59:59",

        dataType: "jsonP",

        error: function(error){
            alert("Error Occurred");
            console.log("Failed ajax call" , error);
        },
        
        success: function(data){
            console.log("DATA:", data);
            
            $.each(data, function(key, value){
                //console.log("Date", value.start,value.end)
                //console.log("Event", value.eventUrl)
                //console.log("Event", value.eventUrl)
                var start= new Date(value.start);
                var end= new Date(value.end);
                var url =value.eventUrl;
          
            $('.show').append( 

            '<div class="data">'+

            '<div class="left">'+ 
            start+' to '+
            end +
            '</div>'+
  
            '<div class="right">'+    
            
            '<button id="button" onclick="window.open(\''+url+'\',\'_blank\')">Register</button>'+
            // '<a id="button" href="https://staging-stthomas.cs42.force.com/applicantportal/USTEventRegister?instanceID=a3456000000HNn1AAG" target="_blank">Register</a>'+
            // '</div>'+
           
            
            '</div>'
            )
                
            })
        } 

    });

}