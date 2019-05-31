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
                //console.log("event ID", value.start,value.end)
                var start= value.start;
                var end = value.end;

                for ( i = 0; i < data.length; i++) {
                    var start= value.start;
                    var end = value.end;
                    $('data'+start[i]).append('<tr><td>' + start +'</td></tr>');
                    $('data'+end[i]).append('<tr><td>' + end + '</td></tr>');
                    
                    }


        
                
            })
        } 

    });

}