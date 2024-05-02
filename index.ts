window.addEventListener("load", function(){
    console.log("Loaded")
    const addNavOption = document.getElementById("add-nav-option");
    addNavOption.addEventListener("click", function(){
        console.log("clickd")
        document.location.href = "./addExpenses.html"
    })

    const viewNavOption = document.getElementById("view-nav-option");
    viewNavOption.addEventListener("click", function(){
        document.location.href = "./index.html"
    })

})



