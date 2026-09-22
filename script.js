const appointmentButton = document.querySelector(".appointment-button");
const appointmentWidget = document.querySelector("#appointment-widget");

appointmentButton.addEventListener("click", () => {
	appointmentWidget.scrollIntoView({ behavior: "smooth", block: "start" });
});
