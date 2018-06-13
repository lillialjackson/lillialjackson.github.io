// toggle project content class

// let projectTitle = document.getElementsByClassName('project-list-item');
// console.log([...projectTitle]);
//
//  function toggleProjectContentClass () {
//   var projectContent = document.getElementsByClassName("project-content");
//   console.log(projectContent);
//   var contentArray = [...projectContent]
//   console.log("content", contentArray);
//    contentArray.forEach( i => {
//      var projectTitle = document.getElementsByClassName("project-list-item");
//      var titleArray = [...projectTitle];
//      console.log("titles", titleArray);
//      titleArray.forEach(j => {
//        if ([i] == [j]) {
//          i.classList.toggle("project-content-toggle-view").firstChild;
//        } else{
//          return;
//        }
//      })
//
//    });
//   console.log("toggle run");
//
// }

// projectTitle.addEventListener('click', toggleProjectContentClass);



// Run code when window is ready
window.addEventListener('load', function(event) {
    initListItemClickToggle();
});

function initListItemClickToggle() {
    // Loop over .project-list-item's and add click event listener
    document.querySelectorAll('.project-list-item').forEach(item => {
        item.addEventListener('click', function() {
            console.log('toggle run');
            console.log(item);
            var projectContent = document.getElementsByClassName('project-content');
            var contentArray = [...projectContent];
            console.log(projectContent);
            console.log(contentArray);
            // Toggle class
            item.querySelector('p').classList.toggle('project-content-toggle-view');
            // var p = document.item.querySelector('.project-content');
            // console.log(p);
            // item.getElementByClassName('project-content')
            // contentArray.forEach( j => {
            //   j.classList.toggle('project-content-toggle-view');
            // })
        });
    });
}
