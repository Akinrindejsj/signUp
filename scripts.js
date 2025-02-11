document.addEventListener("DOMContentLoaded", function () {
    const step1 = document.getElementById("former");
    const step2 = document.getElementById("former2");
    const step1Inputs = step1.querySelectorAll("input, select");
    const step2Inputs = step2.querySelectorAll("input");
    const termsCheckbox = document.getElementById("termsCheckbox");
    const nextBtn = step1.querySelector("#submitBtn");
    const submitBtn = step2.querySelector("#submitBtn");
    const backBtn = step2.querySelector("button");
    
    step2.style.display = "none";

    function validateStep1() {
        let isValid = true;
        step1Inputs.forEach(input => {
            if (input.type === "checkbox") {
                if (!input.checked) isValid = false;
            } else {
                if (!input.value.trim() || input.value === "Select") isValid = false;
            }
        });
        nextBtn.disabled = !isValid;
    }

    function validateStep2() {
        let isValid = true;
        step2Inputs.forEach(input => {
            if (!input.value.trim()) isValid = false;
        });
        submitBtn.disabled = !isValid;
    }

    step1Inputs.forEach(input => input.addEventListener("input", validateStep1));
    termsCheckbox.addEventListener("change", validateStep1);
    step2Inputs.forEach(input => input.addEventListener("input", validateStep2));

    nextBtn.addEventListener("click", function (e) {
        e.preventDefault();
        step1.style.display = "none";
        step2.style.display = "block";
    });

    backBtn.addEventListener("click", function (e) {
        e.preventDefault();
        step1.style.display = "block";
        step2.style.display = "none";
    });
});