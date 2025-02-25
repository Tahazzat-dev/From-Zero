jQuery(function($) {


    // lenis initialization
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
        


    class HambergerMenu{
            constructor() {
              this.init();
            }
        
            // initialize
            init(){
                this.bindEvents();
            }
        
            // events
            bindEvents(){
              $('.FZ_menu-toggler').on('click touch', this.toggleSidepanel.bind(this));
              $('.FZ_nav-links li a').on('click touch', this.uncheckedCheckbox.bind(this));
            }
        
            // methods

            uncheckedCheckbox(){
                $('.FZ_hamberger-toggler-input').prop('checked', false);
                this.toggleSidepanel();
            }
            toggleSidepanel(){
                $('.FZ_nav-links-wrap').toggleClass('open');
                
            }
            
          }

          const hambergerMenu = new HambergerMenu()

  });
  