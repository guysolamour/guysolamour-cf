// (function() {
//     var scrollY = function() {
//         var supportPageOffset = window.pageXOffset !== undefined;
//         var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
//         // var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
//         return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
//     }

//     var elements = document.querySelectorAll('[data-sticky]');
//     for (var i = 0; i < elements.length; i++) {
//         (function(element) {
//             var rect = element.getBoundingClientRect();
//             console.log(rect);
//             var offset = parseInt(element.getAttribute('data-offset') || 0, 10);
//             var top = rect.top + scrollY();
//             var fake = document.createElement('div');
//             fake.style.width = rect.width + 'px';
//             fake.style.height = rect.height + 'px';
//             //Functions
//             var onScroll = function() {
//                 var hasScroll = element.classList.contains('fixed');
//                 if (scrollY() > top - offset && !hasScroll) {
//                     element.classList.add('fixed');
//                     element.style.top = offset + 'px';
//                     element.style.width = rect.width + 'px';
//                     element.parentNode.insertBefore(fake, element);
//                 } else if (scrollY() < top - offset && hasScroll) {
//                     element.classList.remove('fixed');
//                     element.parentNode.removeChild(fake);
//                 }
//             }
//             var onResize = function() {
//                     element.style.width = 'auto';
//                     element.classList.remove('fixed');
//                     fake.style.display = 'none';
//                     rect = element.getBoundingClientRect();
//                     top = rect.top + scrollY();
//                     fake.style.width = rect.width + 'px';
//                     fake.style.height = rect.height + 'px';
//                     fake.style.display = 'block';
//                     onScroll();
//                 }
//                 // Listeners
//             window.addEventListener('scroll', onScroll);
//             window.addEventListener('resize', onResize);

//         })(elements[i]);
//     }
// })();
"use strict";