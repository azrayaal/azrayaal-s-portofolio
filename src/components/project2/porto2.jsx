// import React from 'react';
// import './porto2.css';

// import thumbnail1 from '../../img/thumbnails/1.jpg';
// // import thumbnail2 from '../../img/thumbnails/2.jpg';
// import thumbnail3 from '../../img/thumbnails/3.jpg';
// import thumbnail4 from '../../img/thumbnails/q1.png';
// import thumbnail5 from '../../img/thumbnails/q2.png';

// export default function Porto2() {
//   return (
//     <div id="portfolio">
//       <h1 className="text-center p-2" id="Projects" style={{ backgroundColor: '#ffd300' }}>
//         PROJECTS
//       </h1>
//       <div class="container-fluid p-0">
//         <div class="row g-0">
//           {/* THUMBNAIL UKURAN 650X350 */}
//           <div class="col-lg-4 col-sm-6">
//             <a class="portfolio-box" href="assets/img/portfolio/fullsize/1.jpg" title="Project Name">
//               <img class="img-fluid" src={thumbnail1} alt="..." />
//               <div class="portfolio-box-caption">
//                 <div class="project-category text-black-50">Category</div>
//                 <div class="project-name">Project Name</div>
//               </div>
//             </a>
//           </div>
//           <div class="col-lg-4 col-sm-6">
//             <a class="portfolio-box" href="assets/img/portfolio/fullsize/2.jpg" title="Project Name">
//               <img class="img-fluid" src={thumbnail5} alt="..." />
//               <div class="portfolio-box-caption">
//                 <div class="project-category text-black-50">Category</div>
//                 <div class="project-name">Project Name</div>
//               </div>
//             </a>
//           </div>
//           <div class="col-lg-4 col-sm-6">
//             <a class="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg" title="Project Name">
//               <img class="img-fluid" src={thumbnail3} alt="..." />
//               <div class="portfolio-box-caption">
//                 <div class="project-category text-black-50">Category</div>
//                 <div class="project-name">Project Name</div>
//               </div>
//             </a>
//           </div>
//           <div class="col-lg-4 col-sm-6">
//             <a class="portfolio-box" href="assets/img/portfolio/fullsize/1.jpg" title="Project Name">
//               <img class="img-fluid" src={thumbnail1} alt="..." />
//               <div class="portfolio-box-caption">
//                 <div class="project-category text-white-50">Category</div>
//                 <div class="project-name">Project Name</div>
//               </div>
//             </a>
//           </div>
//           <div class="col-lg-4 col-sm-6">
//             <a class="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg" title="Project Name">
//               <img class="img-fluid" src={thumbnail3} alt="..." />
//               <div class="portfolio-box-caption">
//                 <div class="project-category text-white-50">Category</div>
//                 <div class="project-name">Project Name</div>
//               </div>
//             </a>
//           </div>
//           <div class="col-lg-4 col-sm-6">
//             <a class="portfolio-box" href="assets/img/portfolio/fullsize/2.jpg" title="Project Name">
//               <img class="img-fluid" src={thumbnail4} alt="..." />
//               <div class="portfolio-box-caption">
//                 <div class="project-category text-white-50">Category</div>
//                 <div class="project-name">Project Name</div>
//               </div>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import './porto2.css';

import thumbnail1 from '../../img/thumbnails/1.jpg';
import thumbnail2 from '../../img/thumbnails/2.jpg';
import thumbnail3 from '../../img/thumbnails/q2.png';
import thumbnail4 from '../../img/thumbnails/q1.png';

export default function Porto2() {
  return (
    <div id="portfolio">
      <h1 className="text-center p-2" id="Projects" style={{ backgroundColor: '#ffd300' }}>
        PROJECTS
      </h1>
      <div class="container-fluid content-porto p-0">
        <div class="row g-0">
          {/* THUMBNAIL UKURAN 650X350 */}
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="assets/img/portfolio/fullsize/1.jpg" title="Project Name">
              <img class="img-fluid image" src={thumbnail1} alt="..." />
              <div class="portfolio-box-caption overlay">
                <div class="project-category text-black-50 text">Category</div>
                <div class="project-name text">Project Name</div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="assets/img/portfolio/fullsize/2.jpg" title="Project Name">
              <img class="img-fluid" src={thumbnail2} alt="..." />
              <div class="portfolio-box-caption">
                <div class="project-category text-black-50">Category</div>
                <div class="project-name">Project Name</div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg" title="Project Name">
              <img class="img-fluid" src={thumbnail3} alt="..." />
              <div class="portfolio-box-caption">
                <div class="project-category text-black-50">Category</div>
                <div class="project-name">Project Name</div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="assets/img/portfolio/fullsize/1.jpg" title="Project Name">
              <img class="img-fluid" src={thumbnail1} alt="..." />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Project Name</div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg" title="Project Name">
              <img class="img-fluid" src={thumbnail3} alt="..." />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Project Name</div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="assets/img/portfolio/fullsize/2.jpg" title="Project Name">
              <img class="img-fluid" src={thumbnail4} alt="..." />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Project Name</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="image">
        <img class="image__img" src="" alt="Bricks" />
        <div class="image__overlay image__overlay--primary">
          <div class="image__title">Bricks</div>
          <p class="image__description">Here we have a brick wall.</p>
        </div>
      </div>
    </div>
  );
}

//  Hi have a good day... I hope these snacks can up your moods coz im afraid its your first day of period if its not just keep it then

// Hi hopefully this snack can make your mood better, because I'm afraid it's first day of your period, I just dont want you to feel sore and make you in bad mood, have a good day☺
