{
    function hafta(n) {
        // 1-misol
        switch (n) {
            case 1:
                return "Dushanba";
            case 2:
                return "Seshanba";
            case 3:
                return "Chorshanba";
            case 4:
                return "Payshanba";
            case 5:
                return "Juma";
            case 6:
                return "Shanba";
            case 7:
                return "Yakshanba";
            default:
                return `Bunday kun yuq`;
        }
    }
    // console.log(hafta(2));
}

{
    function ball(k) {
        // 2-misol
        switch (k) {
            case 1:
                return "Yomon";
            case 2:
                return "Qoniqarsiz";
            case 3:
                return "Qoniqarli";
            case 4:
                return "Yaxshi";
            case 5:
                return "A'lo";
            default:
                return `Xato`;
        }
    }

    // console.log(ball(3));
}

{
    function month(n) {
        // 3-misol
        switch (n) {
            case 1:
                return "Qish";
            case 2:
                return "Qish";
            case 3:
                return "Bahor";
            case 4:
                return "Bahor";
            case 5:
                return "Bahor";
            case 6:
                return "Yoz";
            case 7:
                return "Yoz";
            case 8:
                return "Yoz";
            case 9:
                return "Kuz";
            case 10:
                return "Kuz";
            case 11:
                return "Kuz";
            case 12:
                return "Qish";
            default:
                return `Bunday oy yuq`;
        }
    }
    // console.log(month(12));
}

{
    function oy(n) {
        // 4-misol
        switch (n) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return "31 kun bor";
            case 2:
                return "Fevral oyi 28 kun, 4 yilda bir 29 kun";
            case 4:
            case 6:
            case 9:
            case 11:
                return "30 kun bor";
            default:
                return `Bunday oy yuq`;
        }
    }
    // console.log(oy(11));
}

{
    function amallar(a, b, c) {
        // 5-misol

        switch (c) {
            case 1:
                return `${a + b}`;
            case 2:
                return `${a - b}`;
            case 3:
                return `${a / b}`;
            case 4:
                return `${a * b}`;
            default:
                return `Bunday amal yuq`;
        }
    }
    // console.log(amallar(2, 3, 1));
}

{
    function ulchov(a, b) {
        // 6-misol
        // a - > santimetrda kiritiladi

        switch (b) {
            case 1:
                return `${a / 10} detsimetr`;
            case 2:
                return `${a / 1000} kilometr`;
            case 3:
                return `${a / 100} metr`;
            case 4:
                return `${a * 10} millimetr`;
            case 5:
                return `${a} santimetr`;
            default:
                return `Bunday ulchov yuq`;
        }
    }
    // console.log(ulchov(2, 4));
}

{
    function ogrlik(a, b) {
        // 7-misol
        // a - > kg da kiritiladi

        switch (b) {
            case 1:
                return `${a} kilogramm`;
            case 2:
                return `${a * 1000000} milligramm`;
            case 3:
                return `${a * 1000} gramm`;
            case 4:
                return `${a / 1000} tonna`;
            case 5:
                return `${a / 100} sentner`;
            default:
                return `Bunday ulchov yuq`;
        }
    }
    // console.log(ogrlik(2, 4));
}

{
    function yil(d, m) {
        // 8-misol

        switch (m) {
            case 1:
                if (d <= 31) {
                    return `${d}.${m}.2024`;
                }
            case 2:
                if (d <= 28) {
                    return `${d}.${m}.2024`;
                } else {
                    return `Fevralda bunday kun yuq`;
                }
            case 3:
                if (d <= 31) {
                    return `${d}.${m}.2024`;
                } else {
                    return `bunday kun yuq`;
                }
            case 4:
                if (d <= 30) {
                    return `${d}.${m}.2024`;
                } else {
                    return `bunday kun yuq`;
                }
            case 5:
                if (d <= 31) {
                    return `${d}.${m}.2024`;
                } else {
                    return `bunday kun yuq`;
                }
            case 6:
                if (d <= 30) {
                    return `${d}.${m}.2024`;
                } else {
                    return `bunday kun yuq`;
                }
            case 7:
                if (d <= 31) {
                    return `${d}.${m}.2024`;
                } else {
                    return `bunday kun yuq`;
                }
            case 8:
                if (d <= 31) {
                    return `${d}.${m}.2024`;
                } else {
                    return `bunday kun yuq`;
                }
            case 9:
                if (d <= 30) {
                    return `${d}.${m}.2024`;
                } else {
                    return `bunday kun yuq`;
                }
            case 10:
                if (d <= 31) {
                    return `${d}.${m}.2024`;
                } else {
                    return `bunday kun yuq`;
                }
            case 11:
                if (d <= 30) {
                    return `${d}.${m}.2024`;
                } else {
                    return `bunday kun yuq`;
                }
            case 12:
                if (d <= 31) {
                    return `${d}.${m}.2024`;
                } else {
                    return `bunday kun yuq`;
                }
            default:
                return `Bunday kun yuq`;
        }
    }
    // console.log(yil(31, 4));
}

{
    function kunlar(d, m) {
        // 9-misol

        switch (m) {
            case 1:
                if (d <= 30) {
                    return `${d + 1}.${m}.2024`;
                }
            case 2:
                if (d <= 28) {
                    return `${d + 1}.${m}.2024`;
                } else {
                    return `Fevralda bunday kun yuq`;
                }
            case 3:
                if (d <= 30) {
                    return `${d + 1}.${m}.2024`;
                } else {
                    return `bunday kun yuq`;
                }
            case 4:
                if (d <= 29) {
                    return `${d + 1}.${m}.2024`;
                } else {
                    return `bunday kun yuq`;
                }
            case 5:
                if (d <= 30) {
                    return `${d + 1}.${m}.2024`;
                } else {
                    return `bunday kun yuq`;
                }
            case 6:
                if (d <= 29) {
                    return `${d + 1}.${m}.2024`;
                } else {
                    return `bunday kun yuq`;
                }
            case 7:
                if (d <= 30) {
                    return `${d + 1}.${m}.2024`;
                } else {
                    return `bunday kun yuq`;
                }
            case 8:
                if (d <= 30) {
                    return `${d + 1}.${m}.2024`;
                } else {
                    return `bunday kun yuq`;
                }
            case 9:
                if (d <= 29) {
                    return `${d + 1}.${m}.2024`;
                } else {
                    return `bunday kun yuq`;
                }
            case 10:
                if (d <= 30) {
                    return `${d + 1}.${m}.2024`;
                } else {
                    return `bunday kun yuq`;
                }
            case 11:
                if (d <= 29) {
                    return `${d + 1}.${m}.2024`;
                } else {
                    return `bunday kun yuq`;
                }
            case 12:
                if (d <= 30) {
                    return `${d + 1}.${m}.2024`;
                } else {
                    return `bunday kun yuq`;
                }
            default:
                return `Bunday kun yuq`;
        }
    }
    // console.log(kunlar(12, 4));
}

// For

{
    // 1-misol
    function bor(k, n) {
        for (let i = 1; i <= n; i++) {
            console.log(k);
        }
    }
    // console.log(bor(2, 3));
}

{
    // 2-misol
    function sana(a, b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
        return " ";
    }
    // console.log(sana(2, 19));
}

{
    // 3-misol
    function sana(a, b) {
        for (let i = b - 1; i > a; i--) {
            console.log(i);
        }
        return " ";
    }
    // console.log(sana(2, 19));
}

{
    // 4-misol
    function narx(a) {
        // 1 kg -> 10 ming sum
        for (let i = a; i <= 10; i++) {
            console.log(`${i} kg ${i * 10} ming sum`);
        }
        return " ";
    }
    // console.log(narx(1));
}

{
    // 5-misol
    function narx(b) {
        // 1 kg -> 10 ming sum
        for (let i = 1; i <= 10; i++) {
            console.log(`${i / 10} kg ${i * 10} ming sum`);
        }
        return " ";
    }
    // console.log(narx());
}

{
    // 6-misol
    function narx(b) {
        // 1 kg -> 10 ming sum
        for (let i = 12; i <= 20; i++) {
            console.log(`${i / 10} kg ${i * 10} ming sum`);
        }
        return " ";
    }
    // console.log(narx());
}

{
    // 7-misol

    function sum(a, b) {
        let sum = 0;
        for (let i = a + 1; i < b; i++) {
            sum = sum + i;
        }
        console.log(`sum = ${sum}`);
        return "";
    }
    // console.log(sum(2, 6));
}

{
    // 8-misol
    function sum(a, b) {
        let sum = 1;
        for (let i = a + 1; i < b; i++) {
            sum = sum * i;
        }
        console.log(`Ko'patma = ${sum}`);
        return "";
    }
    // console.log(sum(2, 6));
}

{
    // 9-misol
    function kupaytma(a, b) {
        let sum = 0;
        for (let i = a + 1; i < b; i++) {
            sum = sum + Math.pow(i, 2);
        }
        console.log(`Ko'patma = ${sum}`);
        return "";
    }
    // console.log(kupaytma(2, 6));
}

{
    // 10-misol
    function kupaytma(n) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum = sum + 1 / i;
        }
        console.log(`Sum = ${sum}`);
        return "";
    }
    // console.log(kupaytma(10));
}
