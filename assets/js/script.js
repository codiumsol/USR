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


     
        // $('.openRigthBar-btn').on('click', function () {
        //     $('.leftsidebar').addClass('active');
        //     $('.content').addClass('content-right-margin');
        // });


        $('.closeRigthBar-btn').on('click', function () {
            $('.leftsidebar').removeClass('active');
            $('.content').removeClass('content-right-margin');

        })
        $('.toggleRigthBar-btn').on('click', function () {
            // Toggle the sidebar visibility
            $('.leftsidebar').toggleClass('active');
            
            // Toggle the margin of the content
            $('.content').toggleClass('content-right-margin');
            
            // Toggle the button's appearance (open/close icons and text)
            $('.open-text, .close-text').toggle(); // This will switch between "open" and "close" text/icons
        });
        