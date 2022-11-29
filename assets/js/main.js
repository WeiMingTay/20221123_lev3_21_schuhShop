// Variabeln
let newArrivals = document.getElementById("newArrivalsGrid");

// Cookies
let cookiesContainer = document.querySelector(".cookiesModal");
let acceptCookies = document.querySelector("#cookiesAccept");
let rejectCookies = document.querySelector("#cookiesReject");

/* window.onload = () => {
	cookiesContainer.showModal();
}; */
acceptCookies.addEventListener("click", () => {
	cookiesContainer.remove();
});
rejectCookies.addEventListener("click", () => {
	window.location.reload();
});

// new Arrivals / Artikel anzeigen
data.forEach((e) => {
	let container = document.createElement("div");

	let container0 = document.createElement("div");
	let container1 = document.createElement("div");
	let container2 = document.createElement("div");

	let containerInfo = container.appendChild(container0);
	let containerDiv1 = container.appendChild(container1);
	let containerDiv2 = container.appendChild(container2);

	let img = document.createElement("img");
	let productName = document.createElement("h5");
	let preis = document.createElement("p");
	let plus = document.createElement("p");
	let pfeil = document.createElement("img");

	img.src = e.img;
	containerInfo.id = "containerInfo";

	productName.textContent = /* e.brand + " " + */ e.name;
	preis.textContent = e.price;
	plus.textContent = "+";
	plus.id = "addWarenkorb";
	pfeil.src = "assets/img/arrow.svg";
	pfeil.id = "accordion";

	container.appendChild(img);
	container.appendChild(container0);
	containerInfo.appendChild(container1);
	containerInfo.appendChild(container2);
	containerDiv1.appendChild(productName);
	containerDiv1.appendChild(preis);
	containerDiv2.appendChild(plus);
	containerDiv2.appendChild(pfeil);

	// new Arrivals / Akkordion
	let accordionPfeil = document.querySelectorAll("#accordion");

	let accordionMenue = document.createElement("div");
	accordionMenue.id = "accordionMenue";
	let brandName = document.createElement("p");
	brandName.textContent = e.brand;
	let containerGroessen = document.createElement("div");
	let groesse = document.createElement("p");
	containerGroessen.innerHTML = "<p>" + e.sizes.join("</p> <p>") + "</p>";

	container.appendChild(accordionMenue);
	accordionMenue.appendChild(brandName);
	accordionMenue.appendChild(containerGroessen);
	/* 	containerGroessen.appendChild(groesse) */

	pfeil.addEventListener("click", () => {
		if (accordionMenue.style.display === "block") {
			accordionMenue.style.display = "none";
			pfeil.style.transform = "rotate(0deg)";
			pfeil.style.filter = "blur(0px)";
		} else {
			accordionMenue.style.display = "block";
			pfeil.style.transform = "rotate(180deg)";
			pfeil.style.filter = "blur(1px)";
		}
	});

	// WARENKORB
	// Warenkorb Counter
	let warenkorb = document.querySelector("#warenkorb");
	let warenkorbCounter = document.querySelector("#warenkorbCounter");

	let plusToAdd = document.querySelectorAll("#addWarenkorb");
	let counter = 0;

	plusToAdd.forEach((w) => {
		w.addEventListener("click", () => {
			counter++;
			warenkorbCounter.innerHTML = counter;

			if (counter === 0) {
				warenkorbInhalt.innerHTML = "Cart is empty!!";
			} else if (counter > 0) {
				warenkorbInhalt.innerHTML = counter + " shoes in cart.";
			}
		});
	});

	newArrivals.appendChild(container);
});

/* let footer = document.querySelector("footer");

footer.addEventListener("mouseover", () => {
	warenkorb.style.bottom = "1rem";
	
});
document.querySelector("main").addEventListener("mouseover", () => {
	warenkorb.style.bottom = "3rem";
}); */

// Warenkorb Modal
let warenkorbModal = document.querySelector(".warenkorbModal");
let openModal = document.querySelector("#warenkorb");
let closeModal = document.querySelector("#closeModal");

let warenkorbInhalt = document.querySelector("#warenkorbInhalt");
openModal.addEventListener("click", () => {
	warenkorbModal.showModal();
});
closeModal.addEventListener("click", () => {
	warenkorbModal.close();
});

// Newsletter
let newsletterContainer = document.querySelector("#newsletter");
let newsletterInput = document.querySelector("#newsletterMail");
let newsletterButton = document.querySelector("#newsletterSubmit");

newsletterButton.addEventListener("click", () => {
	// read Email
	console.log(newsletterInput.value);

	// Change innerHTML
	newsletterContainer.innerHTML = "";
	let thankYou = document.createElement("h4");
	let response = document.createElement("p");

	thankYou.textContent = "THANK YOU!";
	response.textContent =
		newsletterInput.value + " is registered. " + "You will get our response.";
	newsletterInput = "";
	newsletterContainer.appendChild(thankYou);
	newsletterContainer.appendChild(response);
});
