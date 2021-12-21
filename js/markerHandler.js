AFRAME.registerComponent("markerhandler", {
    init: async function(){
        this.el.addEventListner("markerFound", ()=>{
            this.handleMarkerFound()
            console.log("found")
        })
        this.el.addEventListner("markerLost", ()=>{
            this.handleMarkerLost()
            console.log("lost")
        })
    },
    handleMarkerLost: function(){
        //changing button div visibility
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none"
    },
    handleMarkerFound: function(){
        //changing button div visibility
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex"
        var ratingButton = document.getElementById("rating-button");
        var orderButton = document.getElementById("order-button");
        //Handling click events
        ratingButton.addEventListener("click", function(){
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"Rate Dish",
                text: "Work in Progress",
            })
        })
        orderButton.addEventListener("click", function(){
            swal({
                icon:"warning",
                title:"Thanks for ordering",
                text: "Your order will be served soon.",
            })
        })
    },

})