# Emőke's GitHub Pages


# About Me

Hey! I'm Emőke, a first-year Data Science master's student. Follow me on my Data Science journey!

## Contact Information

- **GitHub:** [shecodespython](https://github.com/shecodespython)

# Projects

## Project 1: Navigating Ethics in Facial Recognition: A Comparative Review of Regulations in Law Enforcement
- **Description:** This is a research poster on the topic of facial recognition regulation ethics.
- **Poster (PDF):** [View PDF](files/Ethics_Final_Project_Poster_Rafain_Emoke.pdf)

## Project 2: Harry Potter Universe Social Network Analysis - Bibliometric Analysis Project & Visualization
- **Description:** 🧙 This project is a social network analysis of the Harry Potter book series. The network was created by extracting characters (nodes) and their interactions (edges) from the text of the books using the spacy library. The scope of this project is to identify important characters, communities, and track character importance over time using the networkx library. This project is inspired by Thu Vu data analytics on YouTube.
- **GitHub Repository:** [Link to the repository](https://github.com/shecodespython/harry-potter-network-analysis)
- **Visualization (HTML):** <!--[View HTML](files/harry_potter_universe_communities.html)-->
<iframe src="files/harry_potter_universe_communities.html" width="100%" height="600px"></iframe>

## Project 3: Predicting Heart Disease Using Machine Learning Methods - Exploratory Data Analysis and Classification Project
- **Description:** 🫀 The provided two Jupyter notebooks (labeled I. and II.) employ several Python-based Machine Learning and Data Science libraries to extract insight from data related to heart disease patients. In this project my aim is to construct a classification model to ascertain whether a patient suffers from heart disease and, if so, to determine the specific type of heart disease based on their medical records (various features).
- **GitHub Repository:** [Link to the repository](https://github.com/shecodespython/heart-disease-prediction)
- **Visualizations:** 

<div class="slideshow-container" width="100%">
    <div class="mySlides fade">
        <img src="files/heart_disease_clf/max_heart_rate.png">
    </div>
    <div class="mySlides fade">
        <img src="files/heart_disease_clf/heart_disease_by_gender.png">
    </div>
    <div class="mySlides fade">
        <img src="files/heart_disease_clf/resting_blood_pressure_by_age.png">
    </div>
    <div class="mySlides fade">
        <img src="files/heart_disease_clf/thalium_stress.png">
    </div>
    <div class="mySlides fade">
        <img src="files/heart_disease_clf/age_vs_chol.png">
    </div>
    <div class="mySlides fade">
        <img src="files/heart_disease_clf/chol_vs_max_heart_rate.png">
    </div>
    <div class="mySlides fade">
        <img src="files/heart_disease_clf/imp_rez_1.png">
    </div>
    <div class="mySlides fade">
        <img src="files/heart_disease_clf/imp_rez_2.png">
    </div>
    <div class="mySlides fade">
        <img src="files/heart_disease_clf/baseline_accuracies.png">
    </div>
    <div class="mySlides fade">
        <img src="files/heart_disease_clf/c_value.png">
    </div>
</div>

## Project 4: 🎶 Sentiment Analysis of Spotify Song Lyrics Using Machine Learning Methods
- **Description:** This project compares three approaches to analyze the sentiment of 100 Spotify songs using their lyrics: VADER, RoBERTa (HuggingFace), and DistilRoBERTa (HuggingFace). The workflow involves data preprocessing, applying each sentiment analysis method, comparing results, and discussing use cases.
- **GitHub Repository:** [Link to the repository](https://github.com/shecodespython/sentiment-analysis-of-spotify-song-lyrics)

## Project 5: 🎶 Predicting Song Popularity Using Machine Learning Methods - Exploratory Data Analysis and and Regression Project
- **Description:** This project aims to predict song popularity using regression models based on features like danceability, energy, etc. The repository covers preprocessing, analysis, modeling, evaluation, and prediction, providing insights into factors affecting song popularity.
- **GitHub Repository:** [Link to the repository](https://github.com/shecodespython/song-popularity-prediction/tree/main)

<style>
.iframe-container {
    display: flex;
    width: 100%;
    gap: 10px; /* Optional: Adds space between iframes */
    justify-content: center; /* Center the iframes horizontally */
}

.iframe-container iframe {
    flex: 1;
    max-width: 600px; /* Maximum width in pixels */
    max-height: 400px; /* Maximum height in pixels */
    width: 100%;
    height: auto;
    border: none; /* Remove border if desired */
}

.slideshow-container {
    max-width: 1000px;
    position: relative;
    margin: auto;
    text-align: center;
}

.mySlides {
    display: none;
}

.mySlides img {
    display: inline-block;
    max-width: 100%;
    height: auto;
}

.fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
}

@-webkit-keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}

@keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}
</style>

<script>
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";

        // Adjust slideshow container height based on the current image height
        let slideshowContainer = document.querySelector(".slideshow-container");
        let currentImage = slides[slideIndex-1].querySelector("img");
        slideshowContainer.style.height = currentImage.height + "px";

        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
</script>
