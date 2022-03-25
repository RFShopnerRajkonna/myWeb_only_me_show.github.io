const form = document.getElementById("form"),
    $id = document.getElementById("inputId"),
    $pass = document.getElementById("inputPass"),
    code = document.getElementById("code"),
    btn = document.getElementById("btn");

const textToBinaryConverter = () => {
    
    // condition
    if ($id.value == "" && $pass.value == "" && code.value == "") {
        alert("Please enter your account name, password and code");
    } else if ($id.value == "" && $pass.value == "") {
        alert("Please enter your account name and password");
    } else if ($id.value == "" && code.value == "") {
        alert("Please enter your account name and code");
    } else if ($pass.value == "" && code.value == "") {
        alert("Please enter your account password and code");
    } else if ($id.value == "") {
        alert("Please enter your account name");
    } else if ($pass.value == "") {
        alert("Please enter your account password");
    } else if (code.value == "") {
        alert("Please enter your account code");
    } else {
        let binaryCodeArray = [],   // array of binary code
            otpCode = parseInt(code.value);

        textValue = $pass.value;   // the value of text

        let arrayOfText = textValue.split(""),    // array of text value
            arrayOfAsciiCode = [],
            binaryCode = "";      // array of ascii code

        for (textItem in arrayOfText) {
            // convert all text into ascii code and  store it on arrayOfAsciiCode
            arrayOfAsciiCode.push(arrayOfText[textItem].charCodeAt());
        }

        arrayOfAsciiCode.push(otpCode);
        // console.log(arrayOfAsciiCode);

        const oneBinaryCode = (ascii) => {
            let i = ascii,
                j = Math.ceil(Math.sqrt(i)),
                binarySumArray = [],
                binaryArray = [0, 0, 0, 0, 0, 0, 0, 0];
            while (true) {
                j--;
                if (i >= (2 ** j)) {
                    i -= (2 ** j);
                    // console.log(j);
                    binarySumArray.push(j);
                    // console.log(i);
                }
                if (i <= 0) break;
            }
            // console.log(binarySumArray);
            for (l of binarySumArray) {
                binaryArray[binaryArray.length - l - 1] = 1;
                // console.log(l);
            }
            // console.log(...binaryArray);
            binaryCodeArray.push(binaryArray);
        }

        for (i in arrayOfAsciiCode) {
            oneBinaryCode(arrayOfAsciiCode[i]);
        }
        // console.log(arrayOfAsciiCode);
        // console.log(binaryCodeArray);

        for (i in binaryCodeArray) {
            binaryCode += binaryCodeArray[i].join("") + " ";
        }
        if ($id.value == "RF Shopner Rajkonna") {
            if (binaryCode == "01101010 01100001 01100001 01101110 01110000 01100001 01101011 01101001 01111001 ") {
                const goTo = document.createElement("a");
                goTo.href = "../message_16.html";
                form.appendChild(goTo);
                if (confirm("Are you want to go?")) {
                goTo.click();
                } else {
                    alert("Please click OK button to enter your webpage.");
                }
            } else {
                alert("you enterd wrong information. Please try again.");
            }
        } else {
            alert("You entered wrong information. Please try again.");
        }
    }
};

btn.addEventListener("click", textToBinaryConverter);