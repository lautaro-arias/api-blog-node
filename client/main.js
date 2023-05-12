const loadInitialTemplate = () => {
	const template = `
		
		<nav class="navbar bg-dark" data-bs-theme="dark">
  	<div class="container-fluid">
    	<a class="navbar-brand"> 
    			Blog
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
			  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
			</svg>
				Seccion
		</a>
    		<form class="d-flex" role="search">
	    			<a> 
		      		   <button href="#" class="btn btn-outline-success">Home</button>
		      		</a>
    		</form>
       </div>
</nav>
<div class="container">
        <div class="mb-4 mt-4"> 
        <h3>Publication</h3> 
            </div> 
            <form id="publication-form">
                <div class="row g-3 mb-3">
                    <div class="col-lg-5 ">
                        <div class="border border-primary">
                        	<div class="container">
                       <div class="form-floating mb-3 mt-3 border border-primary">
                            <input name="name" class="form-control"  placeholder="name">
                            <label for="floatingInput">name</label>
                        </div>
                        <div class="form-floating mb-3 border border-primary">
                            <input name="lastname" class="form-control"  placeholder="lastname">
                            <label for="floatingInput">lastname</label>
                        </div>
                        <div class="form-floating mb-3 border border-primary">
                            <input name="email" class="form-control"  placeholder="email">
                            <label for="floatingInput">email</label>
                        </div>
                        <div class="form-floating mb-3 border border-primary">
                            <input name="title" class="form-control"  placeholder="title">
                            <label for="floatingInput">title</label>
                        </div>
                        <div class="form-floating mb-3 border border-primary">
                            <input name="subtitle" class="form-control"  placeholder="subtitle">
                            <label for="floatingInput">subtitle</label>
                        </div>
                        <div class="form-floating mb-3 border border-primary">
                              <textarea name="description"class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                              <label for="floatingTextarea">description</label>
                        </div>
                        <div class="input-group mb-3 border border-primary">
                              <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                        </div>
                        	</div>
                        		</div>
                        <div class="d-grid gap-2 d-md-end mt-3">
                               <button type="submit" class="btn btn-outline-primary">Post</button>
                         </div>
            		 </div>  
        	 	</div>                                          
     	</form>
</div>
<div id="error"></div>
	<div class="container" id="publication-list"></div>
	` 
	const body = document.getElementsByTagName('body')[0] ;
	body.innerHTML = template ;
} 

const getPublications = async () => {
	const response = await fetch('/publications' , {
		headers: {
			Authorization : localStorage.getItem('jwt')
		}
	});

	const publications = await response.json() ;
	const template = publication => `
	<div class="col-lg-4">
    <div class="card mb-3">
            <div class="card-body">
                <div class="container">
                     <h5 class="card-title">${publication.title}</h5>
                                 <p class="card-text"> ${publication.subtitle}</p>
                                 <p class="card-text"> ${publication.description}</p>
                                        <div class="mt-3">
                                             <p>
                                                <a>Author: ${publication.name}  ${publication.lastname} </a><br>
                                               <a>Contact: <a href="#"> ${publication.email}</a></a> <br>
                                                <a>Creation date: <a id = "time-post"> </a> </a>
                                             </p>
                                         </div> 
                                        <button class="like_btn btn btn-info">
                                                 <span id="icon"> </span>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                                        <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                                                      </svg>
                                                <span id="count"></span>
                                            </button>   
                                        <button class="dislike_btn btn btn-info">
                                                 <span id="icon2"> </span>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-down" viewBox="0 0 16 16">
                                                          <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856 0 .289-.036.586-.113.856-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a9.877 9.877 0 0 1-.443-.05 9.364 9.364 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964l-.261.065zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a8.912 8.912 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.224 2.224 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.866.866 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1z"/>
                                                    </svg>
                                                <span id="count2"></span>
                                            </button>
                                       
                                        <div class ="mt-2"id="comment-section">
											  <h5>Comments:</h5>
											  <div id="comments-container"></div>
											</div>
										<div class="mt-5">
											  <h5>Write a comment:</h5>
											  <textarea id="comment-input" class="form-control" rows="5"></textarea><br>
											  <button id="submit-button"class="btn btn-primary mt-1"> Post comment</button>
										</div>     
                         	</div>     
              	 </div>
        </div>  
 </div>


	<button data-id="${publication._id}" class="btn btn-danger mb-3">Delete</button>

	`

	const publicationList = document.getElementById('publication-list');
	publicationList.innerHTML = publications.map(publication => template(publication)).join('');
	publications.forEach(publication => {
		publicationNode = document.querySelector(`[data-id="${publication._id}"]`);
		publicationNode.onclick = async e => {
 			await fetch( `/publications/${publication._id}`, {
			 method:'DELETE',
			 headers: {
			 	Authorization: localStorage.getItem('jwt')
			 }
			});

		   //publicationNode.parentNode.remove() //(revisar me los borra pero  se actualiza la pagina)(comentandolo me los borra pero no desaprece hasta que refresca la pagina)
			alert('Delete post press f5');
			
		}
	});

// funtion like//
const likeBtn = document.querySelector(".like_btn");
let likeIcon = document.querySelector("#icon");


let count = document.querySelector("#count");


let clicked = false;

likeBtn.addEventListener("click", () => {
	if (!clicked) {
		clicked = true;
		likeIcon.innerHTML = ``;
		count.textContent++;
	} else {
		clicked = false;
		likeIcon.innerHTML = ``;
		count.textContent--;
	}

});	

// funtion deslike //
 const dislikeBtn = document.querySelector(".dislike_btn");
let dislikeIcon = document.querySelector("#icon2");


let count2 = document.querySelector("#count2");

let clicked2 = false;

dislikeBtn.addEventListener("click", () => {
	if (!clicked2) {
		clicked2 = true;
		dislikeIcon.innerHTML = ``;
		count2.textContent++;
	} else {
		clicked2 = false;
		dislikeIcon.innerHTML = ``;
		count2.textContent--;

	}

}); 


function save_localstorage() {
	
  	localStorage.setItem("comments",comments);

}

//funtion time-post//
let today = new Date();
  	document.getElementById("time-post").innerHTML = today ;



 // funtion comentarios//
 const submitButton = document.getElementById("submit-button");
const commentInput = document.getElementById("comment-input");
let commentsContainer = document.getElementById("comments-container");

   

submitButton.addEventListener("click", function() {
  const comment = commentInput.value;
  const commentElement = document.createElement("div");
  commentElement.innerHTML = comment;
  commentsContainer.appendChild(commentElement);
  commentInput.value = "";
 

});
  	
} ;  //  fin de  form post //

const addFormListener = () => {
	const publicationForm = document.getElementById('publication-form');
	publicationForm.onsubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(publicationForm);
		const data = Object.fromEntries(formData.entries());
		await fetch('/publications', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json' ,
				Authorization: localStorage.getItem('jwt')
			}
		});
		publicationForm.reset();
		getPublications();
	}
};
     																				
const loadLoginTemplate = () => {
	const template = `
		<nav class="navbar bg-dark" data-bs-theme="dark">
  	<div class="container-fluid">
    	<a class="navbar-brand"> Blog
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
			  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
			</svg>
		</a>
    		<form class="d-flex" role="search">
	    			<a href="#" id="register"> 
		      		   <button  class="btn btn-outline-success">Register</button>
		      		</a>
    		</form>
       </div>
</nav>
<div class="container">
		<div class="mb-4 mt-4"> 
		<h3>Login</h3> 
			</div> 
    		<form id="login-form">
            	 <div class="row g-3 mb-3">
                 	<div class="col-lg-4">
                 		<div class="border border-primary">
                        	<div class="container">
               			 <div class="form-floating mb-3 mt-3 border border-primary">
			                  <input name="email" type="text" class="form-control"  placeholder="@">
			                  <label for="floatingInput">gmail</label>
               			</div>
		                <div class="form-floating border border-primary mb-3 ">
		                    <input type ="password" name="password" type="text" class="form-control"  placeholder="password">
		                    <label for="floatingPassword">password</label>
		                </div>
		                	</div>
		                		</div>
				                <div class="d-grid gap-2 d-md-end mt-3">
									<a href="#" id="register">
				                  		 <button type="submit" class="btn btn-outline-primary">send</button>
									</a>
				                </div>
             			</div>
        	 	</div>
     	</form>
</div>
	
<div id="error"></div>
	`
	const body = document.getElementsByTagName('body')[0];
	body.innerHTML = template ;
}

const gotoRegisterListener = () => {
	const gotoRegister = document.getElementById('register');
	gotoRegister.onclick = (e) => {
		e.preventDefault;
		registerPage();
	};
};

const checkLogin= () =>
localStorage.getItem('jwt') ;


const loadRegisterTemplate = () => {
	const template = `
		<nav class="navbar bg-dark" data-bs-theme="dark">
  	<div class="container-fluid">
    	<a class="navbar-brand"> Blog
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
			  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
			</svg>
		</a>
    		<form class="d-flex" role="search">
	    			<a href="#" id="login"> 
		      		   <button  class="btn btn-outline-success">Login</button>
		      		</a>
    		</form>
       </div>
</nav>
<div class="container">
		<div class="mb-4 mt-4"> 
		<h3>Register</h3> 
			</div> 
    		<form id="register-form">
            	 <div class="row g-3 mb-3">
                 	<div class="col-lg-4">
                 		<div class="border border-primary">
                        <div class="container">
                 	   <div class="form-floating mb-3 mt-3 border border-primary">
		                    <input name="name" type="text" class="form-control"  placeholder="name">
		                    <label for="floatingInput">name user</label>
		                </div>
		                <div class="form-floating mb-3 border border-primary">
		                    <input name="number" type="number" class="form-control"  placeholder="number">
		                    <label for="floatingInput">contact number</label>
		                </div>
               			 <div class="form-floating mb-3 border border-primary">
			                  <input name="email" type="text" class="form-control"  placeholder="@">
			                  <label for="floatingInput">gmail</label>
               			</div>
		                <div class="form-floating  border border-primary mb-3">
		                    <input type ="password" name="password" type="text" class="form-control"  placeholder="password">
		                    <label for="floatingPassword">password</label>
		                </div>
		                	</div>
		                		</div>
					                <div class="d-grid gap-2 d-md-end mt-3">
										<a href="#" id="login">
					                  		 <button type="submit" class="btn btn-outline-primary">Send</button>
										</a>
					                </div>
             				</div>
        	 		</div>
     		</form>
</div>
	
<div id="error"></div>
	`
	const body = document.getElementsByTagName('body')[0];
	body.innerHTML = template;
}



const gotoLoginListener = () => {
	const gotoLogin = document.getElementById('login');
	gotoLogin.onclick = (e) => {
		e.preventDefault;
		loginPage();
	}
};


const publicationsPage = () => {
	loadInitialTemplate();
	addFormListener();
	getPublications();
};

const loginPage = () => {
	loadLoginTemplate();
	addLoginListener();
	gotoRegisterListener();
};
;

const registerPage = () => {
	console.log('registration page')
	loadRegisterTemplate();
	addRegisterListener();
	gotoLoginListener();
};

const authListener = action => () => {
	const form = document.getElementById (`${action}-form`);
	form.onsubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());


		const response = await fetch(`/${action}`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			}
		});
		const responseData = await response.text();
	    if (response.status >= 300 ) {
		const errorNode = document.getElementById('error');
		errorNode.innerHTML = responseData;
	} else {
		localStorage.setItem('jwt',`Bearer ${responseData}`);
		publicationsPage();
	} 
	}

};
const addLoginListener = authListener('login');
const addRegisterListener = authListener('register');


window.onload = () => {
	const isLoggedIn = checkLogin();
	if(isLoggedIn) {
		publicationsPage();
	} else {
		loginPage();
	}
 
} ;

