/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Sidebar */
    $(document).on("click", ".uib_w_2", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_1"));  
    });
    
        /* button  Menu */
    $(document).on("click", ".uib_w_7", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sidebar-home"));  
    });
    
        /* button  My Courses */
    
    
        /* button  My Courses */
    $(document).on("click", ".uib_w_3", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_77_88"); 
    });
    
        /* button  Back */
    
    
        /* button  Back */
    $(document).on("click", ".uib_w_16", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_page_1"); 
    });
    
        /* button  Your Courses */
    $(document).on("click", ".uib_w_18", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_77_88"); 
    });
    
        /* button  Browse Coures */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_52_14"); 
    });
    
        /* button  Course Library */
    $(document).on("click", ".uib_w_19", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_52_14"); 
    });
    
        /* button  #search-button */
    $(document).on("click", "#search-button", function(evt)
    {
        /* your code goes here */ 
        //hold
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
