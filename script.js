        // Fade in loading text
        const text = document.querySelector(".loading-text");
        text.innerHTML = text.textContent
          .split("")
          .map((letter) => `<span class="letter">${letter}</span>`)
          .join("");

        // Animate each letter appearing
        gsap.fromTo(
          ".letter",
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            delay: 0.5,
            duration: 1,
            ease: "power3.out",
            stagger: 0.05,
          }
        );

        // Fade out loading text
        gsap.to(".loading-text", {
          delay: 2.5,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        });

        // Animate bars to reveal content
        gsap.to(".bar", {
          delay: 3.5,
          height: 0,
          stagger: {
            amount: 0.5,
          },
          ease: "power2.inOut",
        });

        // Hide preloader container after animation
        gsap.to(".pre-loader-container", {
          delay: 3.5,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            document.querySelector(".pre-loader-container").style.display = "none";
            
            // START HOMEPAGE ANIMATIONS AFTER LOADING IS COMPLETE
            startHomepageAnimations();
          },
        });

        // Homepage animations function
        function startHomepageAnimations() {
          // Animate hero text lines first
          gsap.to(".hero-text", {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
            onComplete: () => {
              // After hero text, animate navbar
              animateNavbar();
            }
          });

          // Add subtle floating animation to background
          gsap.to(".bg-container", {
            rotation: 5,
            duration: 20,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }

        // Navbar animation function
        function animateNavbar() {
          // Animate logo
          gsap.to(".logo", {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          });

          // Animate navigation content
          gsap.to(".nav-content", {
            opacity: 1,
            duration: 0.8,
            delay: 0.2,
            ease: "power2.out",
          });
        }

        // CTA Button Click Handler
        document.querySelector(".cta-btn").addEventListener("click", function () {
          alert("Let's start a conversation!");
        });