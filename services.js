document.addEventListener("DOMContentLoaded", function () {
  var services = [
    {
      title: "Bespoke Nutrition Consulting",
      description:
        "Personalized advice and guidance to help clients improve their dietary habits and optimize nutritional intake for better performance and health.",
      image: "./images/nutrition.jpg",
    },
    {
      title: "Sports Massage Therapy",
      description:
        "Therapeutic massage to help athletes and fitness enthusiasts recover faster, prevent injuries, and improve physical performance.",
      image: "./images/massage.jpg",
    },
    {
      title: "Nutrition Plan Design",
      description:
        "Creating custom-made nutrition plans that cater to individual's lifestyle, training regime, and dietary preferences.",
      image: "./images/nutrition_plan.jpg",
    },
    {
      title: "Online Consultations",
      description:
        "Providing health and nutrition advice remotely so that clients can access from anywhere.",
      image: "./images/online_consultation.png",
    },
    {
      title: "Sports Nutrition Coaching",
      description:
        "Expert guidance specific to sports nutrition to help athletes fuel their bodies for optimal performance and recovery.",
      image: "./images/sports_nutrition.jpg",
    },
    {
      title: "Injury Recovery Nutrition Planning",
      description:
        "Dietary interventions designed to aid healing and recovery process after an injury.",
      image: "./images/injury_recovery.jpg",
    },
    //     {
    //       title: "Body Composition Analysis",
    //       description:
    //         "Comprehensive evaluations to assess muscle mass, fat mass, and other key parameters related to health and fitness.",
    //       image: "body_composition.jpg",
    //     },
    //     {
    //       title: "Regular Follow-ups",
    //       description:
    //         "Frequent follow-ups to assess progress, address challenges, and make necessary adjustments to the plan.",
    //       image: "follow_ups.jpg",
    //     },
    //     {
    //       title: "Performance Tracking and Reporting",
    //       description:
    //         "Monitoring and analyzing the impact of the nutritional intervention on the clients' performance.",
    //       image: "performance_tracking.jpg",
    //     },
    //     {
    //       title: "Special Sessions for Corporates and Sports Teams",
    //       description:
    //         "Group sessions focused on nutrition education, planning, and strategy for enhancing team's overall fitness and performance.",
    //       image: "special_sessions.jpg",
    //     },
  ];

  var servicesList = document.querySelector(".services-list");

  services.forEach(function (service) {
    var listItem = document.createElement("div");
    listItem.classList.add("service-card");

    var heading = document.createElement("h2");
    heading.textContent = service.title;

    var image = document.createElement("img");
    image.src = service.image;

    var paragraph = document.createElement("p");
    paragraph.textContent = service.description;

    var button = document.createElement("button");
    button.textContent = "Learn More";
    button.addEventListener("click", function () {
      window.location.href = "index.html#about-section";
    });
    listItem.appendChild(image);
    listItem.appendChild(heading);
    listItem.appendChild(paragraph);
    listItem.appendChild(button);

    servicesList.appendChild(listItem);
  });
});
