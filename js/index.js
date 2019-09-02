const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

//EXERCISE

//Getting the nodelist for the nav elements
let anchorTags = document.querySelectorAll("nav a");

//Updating each a element to the correct value
anchorTags[0].textContent = siteContent["nav"]["nav-item-1"];
anchorTags[1].textContent = siteContent["nav"]["nav-item-2"];
anchorTags[2].textContent = siteContent["nav"]["nav-item-3"];
anchorTags[3].textContent = siteContent["nav"]["nav-item-4"];
anchorTags[4].textContent = siteContent["nav"]["nav-item-5"];
anchorTags[5].textContent = siteContent["nav"]["nav-item-6"];

//Alternatively, performing a .forEach method on the nodelist
// const anchorTexts = Object.values(siteContent.nav)
// anchorTags[0].textContent = anchorTexts[0]

// anchorTags.forEach((anchorTag, index) => {
//   anchorTag.textContent = anchorTexts[index];
// })

//Updating Logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Updating CTA Headline
let ctaHeadline = document.querySelector(".cta-text h1");
ctaHeadline.textContent = siteContent["cta"]["h1"];

//Updating CTA button Text
let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

//Updating CTA Image
let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute("src", siteContent["cta"]["img-src"]);

//Updating Top Content Headline for both Features and About
let topContentH4 = document.querySelectorAll(".top-content h4");
topContentH4[0].textContent = siteContent["main-content"]["features-h4"];
topContentH4[1].textContent = siteContent["main-content"]["about-h4"];

//Updating Top Content Paragraph text for both Features and About
let topContentP = document.querySelectorAll("p");
topContentP[0].textContent = siteContent["main-content"]["features-content"];
topContentP[1].textContent = siteContent["main-content"]["about-content"];

//Updating Middle Image
let middleImage = document.getElementById("middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//Updating Bottom Content Headline
let bottomContentH4 = document.querySelectorAll(".bottom-content h4");
bottomContentH4[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentH4[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentH4[2].textContent = siteContent["main-content"]["vision-h4"];

//Updating Bottom Content Paragraph
let bottomContentP = document.querySelectorAll(".bottom-content p");
bottomContentP[0].textContent = siteContent["main-content"]["services-content"];
bottomContentP[1].textContent = siteContent["main-content"]["product-content"];
bottomContentP[2].textContent = siteContent["main-content"]["vision-content"];

//Updating Contact Headline
let contactHeadline = document.querySelector(".contact h4");
contactHeadline.textContent = siteContent["contact"]["contact-h4"];

//Updating Contact Details
let contactDetails = document.querySelectorAll(".contact p");
contactDetails[0].textContent = siteContent["contact"]["address"];
contactDetails[1].textContent = siteContent["contact"]["phone"];
contactDetails[2].textContent = siteContent["contact"]["email"];

//Updating Footer
let footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];

//Changing the Navigation Bar to Green
anchorTags.forEach(anchorTags => {
  anchorTags.style.color = "green";
  anchorTags.style.textDecoration = "none";
});

//Adding the 2 new Items
let blogTag = document.createElement("a");
blogTag.textContent = "Blog";

let homeTag = document.createElement("a");
homeTag.textContent = "Home";

//Prepending and appending the two items to nav
let nav = document.querySelector("nav");
nav.appendChild(blogTag);
nav.prepend(homeTag);

//Changing the color of the 2 new items
blogTag.style.color = "green";
homeTag.style.color = "green";
