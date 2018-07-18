const jso = [
  //   painting
  {
    thumbnail: "art1.jpg",
    file: "art1.jpg",
    photography: "Sabina Diamond",
    link: "http://www.sabina-diamond.com",
    category: "painting"
  },
  {
    thumbnail: "art2.jpg",
    file: "art2.jpg",
    photography: "Sabina Diamond",
    link: "http://www.sabina-diamond.com",
    category: "painting"
  },
  {
    thumbnail: "art3.jpg",
    file: "art3.jpg",
    photography: "Sabina Diamond",
    link: "http://www.sabina-diamond.com",
    category: "painting"
  },
  {
    thumbnail: "art4.jpg",
    file: "art4.jpg",
    photography: "Sabina Diamond",
    link: "http://www.sabina-diamond.com",
    category: "painting"
  },
  {
    thumbnail: "art5.jpg",
    file: "art5.jpg",
    photography: "Sabina Diamond",
    link: "http://www.sabina-diamond.com",
    category: "painting"
  },
  //   Styling
  {
    thumbnail: "styling1.jpg",
    file: "styling1.jpg",
    photography: "Pope-Art",
    link: "http://www.pope-art.tumblr.com",
    category: "styling"
  },
  {
    thumbnail: "styling2.jpg",
    file: "styling2.jpg",
    photography: "Pope-Art",
    link: "http://www.pope-art.tumblr.com",
    category: "styling"
  },
  {
    thumbnail: "styling3.jpg",
    file: "styling3.jpg",
    photography: "Pope-Art",
    link: "http://www.pope-art.tumblr.com",
    category: "styling"
  },
  {
    thumbnail: "styling4.jpg",
    file: "styling4.jpg",
    photography: "Pope-Art",
    link: "http://www.pope-art.tumblr.com",
    category: "styling"
  },
  {
    thumbnail: "styling5.jpg",
    file: "styling5.jpg",
    photography: "Pope-Art",
    link: "http://www.pope-art.tumblr.com",
    category: "styling"
  },
  {
    thumbnail: "styling6.jpg",
    file: "styling6.jpg",
    photography: "Pope-Art",
    link: "http://www.pope-art.tumblr.com",
    category: "styling"
  },
  {
    thumbnail: "styling7.jpg",
    file: "styling7.jpg",
    photography: "Pope-Art",
    link: "http://www.pope-art.tumblr.com",
    category: "styling"
  },
  {
    thumbnail: "styling8.jpg",
    file: "styling8.jpg",
    photography: "Pope-Art",
    link: "http://www.pope-art.tumblr.com",
    category: "styling"
  },
  {
    thumbnail: "styling9.jpg",
    file: "styling9.jpg",
    photography: "Pope-Art",
    link: "http://www.pope-art.tumblr.com",
    category: "styling"
  },
  {
    thumbnail: "styling10.jpg",
    file: "styling10.jpg",
    photography: "Pope-Art",
    link: "http://www.pope-art.tumblr.com",
    category: "styling"
  },
  {
    thumbnail: "styling11.jpg",
    file: "styling11.jpg",
    photography: "Pope-Art",
    link: "http://www.pope-art.tumblr.com",
    category: "styling"
  },
  {
    thumbnail: "styling12.jpg",
    file: "styling12.jpg",
    photography: "Pope-Art",
    link: "http://www.pope-art.tumblr.com",
    category: "styling"
  },
  // Costumes
  {
    thumbnail: "costumes1.jpg",
    file: "costumes1.jpg",
    photography: "Pope-Art",
    link: "http://www.pope-art.tumblr.com",
    category: "costumes"
  },
  {
    thumbnail: "costumes2.jpg",
    file: "costumes2.jpg",
    photography: "Pope-Art",
    link: "http://www.pope-art.tumblr.com",
    category: "costumes"
  },{
    thumbnail: "costumes3.jpg",
    file: "costumes3.jpg",
    photography: "Pope-Art",
    link: "http://www.pope-art.tumblr.com",
    category: "costumes"
  },{
    thumbnail: "costumes4.jpg",
    file: "costumes4.jpg",
    photography: "Pope-Art",
    link: "http://www.pope-art.tumblr.com",
    category: "costumes"
  },{
    thumbnail: "costumes5.jpg",
    file: "costumes5.jpg",
    photography: "Pope-Art",
    link: "http://www.pope-art.tumblr.com",
    category: "costumes"
  },{
    thumbnail: "costumes6.jpg",
    file: "costumes6.jpg",
    photography: "Pope-Art",
    link: "http://www.pope-art.tumblr.com",
    category: "costumes"
  },{
    thumbnail: "costumes7.jpg",
    file: "costumes7.jpg",
    photography: "Pope-Art",
    link: "http://www.pope-art.tumblr.com",
    category: "costumes"
  },
];

for (let index = 0; index < jso.length; index++) {
  $(".gallery").append(`
    <div class="item ${jso[index].category}">
        <!-- Modal Trigger -->
       
        <img src="assets/images/portfolio/thumbnails/${
          jso[index].thumbnail
        }" alt="" class="col s6 m3 modal-trigger thumbnail" href="#modal${index}">
        <!-- Modal Structure -->
        <div id="modal${index}" class="modal">
            <br>
            <a href="#!" class="modal-close waves-effect waves-green btn-flat right">X</a>
            <img src="assets/images/portfolio/full/${
              jso[index].file
            }" alt="" class="fullSize materialboxed">
            <p class="imageInfo">Photo by: <a href="${jso[index].link}">${jso[index].photography}</a></p>
            
        </div>
    </div>
    `);
}

$(".btn-all").on("click", function() {
  $(".painting").show();
  $(".styling").show();
  $(".costumes").show();
});

$(".btn-painting").on("click", function() {
  $(".painting").show();
  $(".styling").hide();
  $(".costumes").hide();
});

$(".btn-styling").on("click", function() {
  $(".painting").hide();
  $(".styling").show();
  $(".costumes").hide();
});

$(".btn-costumes").on("click", function() {
  $(".painting").hide();
  $(".styling").hide();
  $(".costumes").show();
});
