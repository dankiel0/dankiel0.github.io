function onClick(tabName) {
    for(var i = 0; i < document.getElementsByClassName("tab").length; i++)
        document.getElementsByClassName("tab")[i].style.backgroundColor = "#FFFEF5";
    
    for(var i = 0; i < document.getElementsByClassName("content").length; i++)
        document.getElementsByClassName("content")[i].style.display = "none";
    
    document.getElementById(tabName + "-tab").style.backgroundColor = "#FFFBD4";
    document.getElementById(tabName + "-content").style.display = "inherit";

    var url = new URL(window.location.href + "?z=" + tabName);
    url.searchParams.set('z', tabName);
    history.pushState({}, null, url);
}

function onLoad() {
    var url = new URL(window.location.href);
    var tabName = url.searchParams.get('z');
    
    if(tabName === null)
        tabName = "projects";
    
    document.getElementById(tabName + "-tab").style.backgroundColor = "#FFFBD4";
    document.getElementById(tabName + "-content").style.display = "inherit";
}
