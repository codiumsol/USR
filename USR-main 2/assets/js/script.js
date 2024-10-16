$(".sidebar ul li").on('click', function () {
    $(".sidebar ul li.active").removeClass('active');
    $(this).addClass('active');
});

$('.open-btn').on('click', function () {
    $('.sidebar').addClass('active');

});


$('.close-btn').on('click', function () {
    $('.sidebar').removeClass('active');

})

// ////////////////////////...............


// $('.closeRigthBar-btn').on('click', function () {
//     $('.leftsidebar').removeClass('active');
//     $('.content').removeClass('content-right-margin');

// })
// $('.toggleRigthBar-btn').on('click', function () {
//     // Toggle the sidebar visibility
//     $('.leftsidebar').toggleClass('active');

//     // Toggle the margin of the content
//     $('.content').toggleClass('content-right-margin');

//     // Toggle the button's appearance (open/close icons and text)
//     $('.open-text, .close-text').toggle(); // This will switch between "open" and "close" text/icons
// });




// data table JS

$(document).ready(function () {
    // Initialize DataTable
    var table = $('#example').DataTable({
        "paging": false,
        "searching": true,
        "ordering": true,
        "info": false,
        "lengthChange": false, // Disable length menu
        "columnDefs": [
            { "orderable": false, "targets": 0 } // Disable sorting on checkbox column
        ],
        dom: 'lrtip', // Remove the default search input
    });

    // Create a custom search bar with an icon
    var customSearch = `
              <div class="input-group">
              <input type="text" class="form-control" placeholder="Search users">
              <span class=""><i class="fas fa-search"></i></span>
              </div>
          `;

    // Insert the custom search bar
    $('#datatable_search').html(customSearch);

    // Search functionality
    $('#datatable_search input').on('keyup', function () {
        table.search(this.value).draw();
    });
});



// for data tabel checkbox to check all 

document.getElementById('check-all').addEventListener('click', function() {
    var checkboxes = document.querySelectorAll('.checked');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = this.checked; // Set each checkbox to the same state as 'Select All'
    }, this);
});