const loginForm = document.querySelector(".login-form");

const validateInput = (inputObj) => {
    let validationPassed = true;

    for (const key in inputObj) {
        const value = inputObj[key].trim();
        const inputElement = document.getElementById(key);

        if (!inputElement) {
            console.error(`ไม่พบ element ที่มี id: ${key}`);
            continue;
        }
        if (value === "") {
            alert(`กรุณากรอกข้อมูลใน ${key}`);
            inputElement.style.borderColor = 'red';
            validationPassed = false;
        } else {
            inputElement.style.borderColor = '';
        }
        if (key === 'username' && (value.length <= 3 || /^\d/.test(value) || /\s/.test(value))) {
            alert('Username ต้องมีความยาวมากกว่า 3 ตัวอักษร และไม่นำหน้าด้วยตัวเลขหรือมีช่องว่าง');
            inputElement.style.borderColor = 'red';
            validationPassed = false;
        }
        if (key === 'password' && (value.length <= 4 || !/\d/.test(value) || !/[a-zA-Z]/.test(value))) {
            alert('Password ต้องมีความยาวมากกว่า 4 ตัวอักษร และต้องประกอบด้วยทั้งตัวเลขและตัวอักษร');
            inputElement.style.borderColor = 'red';
            validationPassed = false;
        }
    }

    return validationPassed;
};

const hdlLogin = (e) => {
    e.preventDefault();
    let allInput = loginForm.elements;
    let inputObj = {};

    for (let el of loginForm.elements) {
        inputObj[el.id] = el.value;
    }

    if (!validateInput(inputObj)) {
        return;
    }

    window.location.href = "https://www.example.com";
};
loginForm.addEventListener("submit", hdlLogin);


