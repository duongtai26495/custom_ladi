document.addEventListener('DOMContentLoaded', function() {
const currentThisYear = new Date().getFullYear();
const footerElement = document.querySelector('.ladi-element.copyright_footer h3');

if (footerElement) {
    footerElement.innerHTML = `©2017-${currentThisYear} - Hệ thống website này trực thuộc <a href="https://binhthuanford.com.vn/" target="_blank" class="footer-link">Bình Thuận Ford</a>`;
}
    
    const style = document.createElement('style');
    style.innerHTML = `
        .footer-link { text-decoration: none !important; font-weight: bold; }';
        .ladi-section.add_readmore {
            transition: height .5s ease;
        }
        .readmore-button {
            position: absolute;
            bottom: 0;
            width: 100%;
            background-color: #00095b;
            color: white;
            text-align: center;
            padding: 15px;
            cursor: pointer;
            font-size: 16px;
            z-index: 10;
        }
        .readmore-hidden {
            display: none;
        }
        #scrollToTopBtn {
            position: fixed;
            bottom: 130px;
            right: 10%;
            background-color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            display: none;
            z-index: 1000;
            border-radius: 50%;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }
        #scrollToTopBtn svg {
            width: 24px;
            height: 24px;
            fill: #00095b;
        }
        @media (max-width:767px)
        {
        #scrollToTopBtn {
            bottom: 50px;
            right: 44%;
        }
        }
    `;
    document.head.appendChild(style);

    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.id = 'scrollToTopBtn';
    scrollToTopBtn.title = 'Go to top';
    scrollToTopBtn.innerHTML = '<svg data-name="1-Arrow Up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"/></svg>';
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    const sections = document.querySelectorAll('.ladi-section.add_readmore');

    sections.forEach(section => {
        const container = section.querySelector('.ladi-container');
        const containerHeight = section.scrollHeight;
        let defaultHeight = 300;

        if (container) {
            const id = section.id;

            if (id) {
                const match = id.match(/_(\d+)$/);
                if (match) {
                    defaultHeight = parseInt(match[1], 10);
                }
            }

            section.style.height = `${defaultHeight}px`;
            section.style.overflow = 'hidden';
            section.style.position = 'relative';
            section.style.paddingBottom = '50px';
            const readmore_txt = 'Xem thêm';
            const readless_txt = 'Thu gọn';
            let button = section.querySelector('.readmore-button');
            if (!button) {
                button = document.createElement('button');
                button.className = 'readmore-button';
                button.textContent = readmore_txt;
                section.appendChild(button);
            }

            button.addEventListener('click', function() {
                if (section.style.height === `${defaultHeight}px`) {
                    section.style.height = 'revert-layer';
                    section.style.overflow = 'visible';
                    button.textContent = readless_txt;
                } else {
                    section.style.height = `${defaultHeight}px`;
                    section.style.overflow = 'hidden';
                    button.textContent = readmore_txt;
                }
            });
        }
    });
});
