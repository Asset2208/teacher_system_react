import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Blog() {
    return (
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>Material Design for Bootstrap</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
</head>
<body>
    <Header />
    <div class="container p-5">
      <section class="text-center text-md-start">
        <h4 class="mb-5"><strong>Latest posts</strong></h4>

        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" class="img-fluid" />
              <a href="#!">
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
              </a>
            </div>
          </div>

          <div class="col-md-8 mb-4">
            <h5>Very long post title</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione
              necessitatibus itaque error alias repellendus nemo reiciendis aperiam quisquam minus
              ipsam reprehenderit commodi ducimus, in dicta aliquam eveniet dignissimos magni.
            </p>

            <button type="button" class="btn btn-primary">Read</button>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/standard/nature/002.jpg" class="img-fluid" />
              <a href="#!">
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
              </a>
            </div>
          </div>

          <div class="col-md-8 mb-4">
            <h5>Very long post title</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione
              necessitatibus itaque error alias repellendus nemo reiciendis aperiam quisquam minus
              ipsam reprehenderit commodi ducimus, in dicta aliquam eveniet dignissimos magni.
            </p>

            <button type="button" class="btn btn-primary">Read</button>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" class="img-fluid" />
              <a href="#!">
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
              </a>
            </div>
          </div>

          <div class="col-md-8 mb-4">
            <h5>Very long post title</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione
              necessitatibus itaque error alias repellendus nemo reiciendis aperiam quisquam minus
              ipsam reprehenderit commodi ducimus, in dicta aliquam eveniet dignissimos magni.
            </p>

            <button type="button" class="btn btn-primary">Read</button>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" class="img-fluid" />
              <a href="#!">
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
              </a>
            </div>
          </div>

          <div class="col-md-8 mb-4">
            <h5>Very long post title</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione
              necessitatibus itaque error alias repellendus nemo reiciendis aperiam quisquam minus
              ipsam reprehenderit commodi ducimus, in dicta aliquam eveniet dignissimos magni.
            </p>

            <button type="button" class="btn btn-primary">Read</button>
          </div>
        </div>
      </section>

      <nav class="my-4" aria-label="...">
        <ul class="pagination pagination-circle justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active" aria-current="page">
            <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  <Footer />

</body>
</html>
    )
}

export default Blog;
